import { getPosts } from '$lib/posts';
import type * as Kit from '@sveltejs/kit';

export const load = (async ({}) => {
  const posts = await getPosts();

  return { posts: posts || [] };
}) satisfies Kit.ServerLoad<{}>;
