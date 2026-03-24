import type { PageServerLoad } from './$types';
export const prerender = true;
import { name, website } from '$lib/info';
import { getPosts } from '$lib/posts';

const websiteDescription = `${name}'s blog`;
const postsUrl = `${website}posts`;

export const GET = (async ({ setHeaders }) => {
  const posts = await getPosts(true);

  setHeaders({
    'Cache-Control': `max-age=0, s-max-age=600`,
    'Content-Type': 'application/xml'
  });

  const xml = `<rss xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
      <channel>
        <title>${name}</title>
        <link>${website}</link>
        <description>${websiteDescription}</description>
        <atom:link href="${website}rss.xml" rel="self" type="application/rss+xml" />
        ${posts
          .map(
            (post) =>
              `
              <item>
                <guid>${postsUrl}/${post.slug}</guid>
                <title>${post.title}</title>
                <description>${post.preview.text}</description>
                <link>${postsUrl}/${post.slug}</link>
                <pubDate>${new Date(post.date).toUTCString()}</pubDate>
            </item>
          `
          )
          .join('')}
      </channel>
    </rss>`;

  return new Response(xml);
}) satisfies PageServerLoad;
