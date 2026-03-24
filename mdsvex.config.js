import { visit } from 'unist-util-visit';
import autolinkHeadings from 'rehype-autolink-headings';
import slugPlugin from 'rehype-slug';
import relativeImages from 'mdsvex-relative-images';
import remarkHeadings from '@vcarl/remark-headings';
import remarkGithub from 'remark-github';
import emoji from 'remark-emoji';
import { defineMDSveXConfig as defineConfig } from 'mdsvex';

const config = defineConfig({
  extensions: ['.svx', '.md'],
  smartypants: {
    dashes: 'oldschool'
  },
  remarkPlugins: [
    videos,
    images,
    relativeImages,
    headings,
    emoji,
    [
      remarkGithub,
      {
        repository: 'https://github.com/Quat3rnion/me.git'
      }
    ]
  ],
  rehypePlugins: [
    slugPlugin,
    [
      autolinkHeadings,
      {
        behavior: 'wrap'
      }
    ]
  ]
});

export default config;

function videos() {
  const extensions = ['mp4', 'webm'];
  return function transformer(tree) {
    visit(tree, 'image', (node) => {
      if (extensions.some((ext) => node.url.endsWith(ext))) {
        node.type = 'html';
        node.value = `
            <video 
              src="${node.url}"
              autoplay
              muted
              playsinline
              loop
              title="${node.alt}"
            />
          `;
      }
    });
  };
}

function images() {
  const extensions = ['png', 'jpg', 'jpeg', 'gif', 'svg'];
  return function transformer(tree) {
    visit(tree, 'image', (node) => {
      if (extensions.some((ext) => node.url.endsWith(ext))) {
        node.type = 'html';
        node.value = `
            <img 
              src="${node.url}?width=900&webp"
              loading="lazy"
              decoding="async"
              alt="${node.alt}"
            />
          `;
      }
    });
  };
}
function headings() {
  return function transformer(tree, vfile) {
    // run remark-headings plugin
    remarkHeadings()(tree, vfile);

    // include the headings data in mdsvex frontmatter
    vfile.data.fm ??= {};
    vfile.data.fm.headings = vfile.data.headings.map((heading) => ({
      ...heading,
      // slugify heading.value
      id: heading.value
        .toLowerCase()
        .replace(/\s/g, '-')
        .replace(/[^a-z0-9-]/g, '')
    }));
  };
}
