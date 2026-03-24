import { error } from '@sveltejs/kit';
import { getPosts } from '$lib/posts';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
  const { slug } = params;
  const posts = await getPosts(true, false);
  const post = posts.find((post) => slug === post.slug);
  if (!post) {
    throw error(404, 'Post not found');
  }
  return {
    post
  };
}) satisfies PageServerLoad;
