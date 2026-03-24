import type { Data } from './$types';

export const load = async ({ data }: { data: Data }) => {
  const component: App.MdsvexFile = data.post.isIndex
    ? // vite requires relative paths and explicit file extensions for dynamic imports
      // see https://github.com/rollup/plugins/tree/master/packages/dynamic-import-vars#limitations
      await import(`../../../../../posts/${data.post.slug}/index.md`)
    : await import(`../../../../../posts/${data.post.slug}.md`);

  return {
    post: data.post,
    component: component.default,
    layout: {
      fullWidth: true
    }
  };
};
