import type * as Kit from '@sveltejs/kit';

type RouteParams = {
  page: number;
};

export type PageServerLoad = Kit.ServerLoad<RouteParams>;
export type PageLoad = Kit.Load<RouteParams>;
