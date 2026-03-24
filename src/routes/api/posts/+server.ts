import type { PageServerLoad } from './$types';
import { getPosts } from '$lib/posts';
import { json } from '@sveltejs/kit';
export const prerender = false;

export const GET = (async ({ url }) => {
  const page = url.searchParams.get('page') || '1';
  const all = url.searchParams.get('all') === 'true' ? true : false;
  const after = url.searchParams.get('after') || '';
  const before = url.searchParams.get('before') || '';
  const during = url.searchParams.get('during') || '';
  const tags = url.searchParams.get('tags')?.split(',') || [];
  const posts = await getPosts(all,true, parseInt(page), before, after, during, tags);
  return json({ posts: posts });
}) satisfies PageServerLoad;
