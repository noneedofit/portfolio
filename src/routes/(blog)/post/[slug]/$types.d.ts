import type * as Kit from '@sveltejs/kit';

export type Data = {
  post: App.BlogPost;
};

export type PageLoad = Kit.Load<{ post: App.BlogPost }>;

export type PageServerLoad = Kit.ServerLoad<{
  slug: string;
}>;
