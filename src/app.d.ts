// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare App {
  // interface Error {}
  // interface Locals {}
  // interface PageData {}
  interface MdsvexFile {
    default: import('svelte/internal').SvelteComponent;
    metadata: Record<string, string>
  }

  type MdsvexResolver = () => Promise<MdsvexFile>;

  interface BlogPostHeading { depth: number; value: string; id: string }

  interface PostData {
    slug: string;
    title: string;
    preview: { html: string; text: string };
    readingTime: string;
    headings: BlogPostHeading[];
    date: string;
    metaDate: string;
    isIndex: boolean;
    published: boolean;
    tags: string[]
  }

  interface BlogPost extends PostData { next: PostData; previous: PostData }
  interface APIResponse { posts: BlogPost[] }
}

declare global {
  namespace App {
    interface Platform {
      env: Env;
      ctx: ExecutionContext;
      caches: CacheStorage;
      cf?: IncomingRequestCfProperties
    }
  }
}

// for information about these interfaces
// and what to do when importing types
// interface Error {}
// interface Locals {}
// interface PageData {}
