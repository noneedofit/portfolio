import { browser } from '$app/environment';
import { format } from 'date-fns';
import { parse } from 'node-html-parser';
import readTime from '$lib/readTime';

if (browser) {
  throw new Error(`posts can only be imported server-side`);
}

export async function getPosts(
  all: boolean = false,
  published: boolean = true,
  page: number = 1,
  before: string = '',
  after: string = '',
  during: string = '',
  tags: string[] = [], 
): Promise<App.BlogPost[]> {
  const modules = import.meta.glob('/posts/**/*.{md,svx,svelte.md}');
  const entries = Object.entries(modules) as [string, () => Promise<App.MdsvexFile>][];
  const awaitingPosts = entries.map(async ([path, resolver]) => {
    const post = await resolver();
    const htmlString = (post as any).default.render().html;
    const html = parse(htmlString);
    const preview = post.metadata.preview ? parse(post.metadata.preview) : html.querySelector('p');
    const { humanizedDuration } = readTime(htmlString, ['img', 'figure']);
    return {
      slug: path
        .replace(/(\/index)?\.md/, '')
        .split('/')
        .pop(),
      isIndex: path.endsWith('/index.md'),
      date: post.metadata.date
        ? format(addTimezoneOffset(new Date(post.metadata.date)), 'yyyy-MM-dd')
        : undefined,
      metaDate: post.metadata.date,
      preview: {
        html: preview?.toString(),
        text: preview?.structuredText ?? preview?.toString()
      },
      readingTime: humanizedDuration,

      ...(post as App.MdsvexFile).metadata
    } as App.PostData;
  });

  const posts = (await Promise.all(awaitingPosts))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map((post, index, allPosts) => ({
      ...post,
      next: allPosts[index - 1],
      previous: allPosts[index + 1]
    }));

  if (before !== '') {
    return paginate(
      posts.filter((post) => new Date(post.date).getTime() < new Date(before).getTime()),
      page
    );
  }

  if (all) {
    return posts;
  }

  if (after !== '') {
    return paginate(
      posts.filter((post) => new Date(post.date).getTime() > new Date(after).getTime()),
      page
    );
  }

  if (during !== '') {
    return paginate(
      posts.filter(
        (post) =>
          post.metaDate === during ||
          (new Date(post.date).getTime() >= new Date(during).getTime() &&
            new Date(post.date).getTime() <= new Date(during).getTime() + 1000 * 60 * 60 * 24)
      ),
      page
    );
  }

  if (tags && tags.length > 0) {
    return paginate(
      posts.filter((post) => post.tags?.some((tag) => tags.includes(tag))),
      page
    );
  }

  return paginate(posts, page);
}

function addTimezoneOffset(date: Date) {
  const offsetInMilliseconds = new Date().getTimezoneOffset() * 60 * 1000;
  return new Date(new Date(date).getTime() + offsetInMilliseconds);
}

function paginate(posts: App.BlogPost[], page: number) {
  return posts.slice((page - 1) * 10, page * 10 - 1);
}
