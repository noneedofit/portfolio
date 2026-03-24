import type * as Kit from '@sveltejs/kit';

type PageData = {
  next: App.PostData;
  previous: App.PostData;
  slug: string;
  title: string;
  preview: {
    html: string;
    text: string;
  };
  date: string;
  isIndex: boolean;
  published: boolean;
  tags: string[];
}[];
