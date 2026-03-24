<script lang="ts">
  import { website, name } from '$lib/info';
  import ToC from '$lib/components/ToC.svelte';
  import ArrowLeftIcon from '$lib/components/ArrowLeftIcon.svelte';
  import { afterNavigate } from '$app/navigation';
  import PostDate from '$lib/components/PostDate.svelte';
  import type { ComponentType, SvelteComponent } from 'svelte';
  import SocialLinks from '$lib/components/SocialLinks.svelte';
  // @ts-ignore
  import Sign from '$lib/assets/sign.svelte';

  type Data = {
    post: App.BlogPost;
    component: ComponentType<SvelteComponent>;
    layout: {
      fullWidth: boolean;
    };
  };

  export let data: Data;

  // generated open-graph image for sharing on social media.
  // see https://og-image.vercel.app/ for more options.
  const ogImage = `https://og-image.vercel.app/**${encodeURIComponent(
    data.post.title
  )}**?theme=dark&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fhyper-color-logo.svg`;

  const url = `${website}/${data.post.slug}`;

  // if we came from /posts, we will use history to go back to preserve
  // posts pagination
  let canGoBack = false;
  afterNavigate(({ from }) => {
    if (from && from.url.pathname.startsWith('/posts')) {
      canGoBack = true;
    }
  });

  function goBack() {
    if (canGoBack) {
      history.back();
    }
  }
</script>

<svelte:head>
  <title>{data.post.title} - {name}</title>
  <meta name="description" content={data.post.preview.text} />
  <meta name="author" content={name} />

  <!-- Facebook Meta Tags -->
  <meta property="og:url" content={url} />
  <meta property="og:type" content="website" />
  <meta property="og:title" content={data.post.title} />
  <meta property="og:description" content={data.post.preview.text} />
  <meta property="og:image" content={ogImage} />

  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta property="twitter:domain" content={website} />
  <meta property="twitter:url" content={url} />
  <meta name="twitter:title" content={data.post.title} />
  <meta name="twitter:description" content={data.post.preview.text} />
  <meta name="twitter:image" content={ogImage} />
</svelte:head>

<div class="root mx-auto max-w-2xl lg:max-w-none">
  <div class="hidden pt-8 lg:block">
    <div class="sticky top-0 flex w-full justify-end pr-8 pt-11">
      <svelte:element
        this={canGoBack ? 'button' : 'a'}
        class="group -left-16 -top-1 mb-8 hidden h-10 w-10 items-center justify-center rounded-full border border-rosePine-surface/50 shadow-md shadow-rosePine-base/5 ring-1 ring-white/10 transition hover:border-rosePine-surface hover:ring-white/20 focus-visible:ring-2 lg:flex"
        href={canGoBack ? undefined : '/posts'}
        aria-label="Go back to posts"
        role="button"
        tabindex="0"
        on:click={goBack}
        on:keydown={goBack}
      >
        <ArrowLeftIcon
          class="h-4 w-4 stroke-rosePine-muted transition group-hover:stroke-rosePine-text"
        />
      </svelte:element>
    </div>
  </div>

  <div class="mx-auto w-full overflow-x-hidden">
    <article class="prose">
      <header class="flex flex-col">
        <h1 class="mb-6 mt-6 font-bold">
          {data.post.title}
        </h1>
        <PostDate class="text-sm sm:text-base" post={data.post} decorate collapsed />
      </header>

      <!-- render the post -->
      <div>
        <svelte:component this={data.component} />
      </div>
    </article>

    <hr />
    <footer class="py-4">
      <div class="grid">
        <div class="col-span-2 flex justify-center">
          <Sign />
        </div>
        <div class="col-span-2 flex justify-center gap-6">
          <SocialLinks />
        </div>
      </div>
    </footer>
  </div>

  <!-- table of contents -->
  <div class="hidden pt-10 xl:block">
    <aside class="sticky top-8 ml-8 hidden w-48 xl:block" aria-label="Table of Contents">
      <ToC post={data.post} />
    </aside>
  </div>
</div>

<style lang="postcss">
  .root {
    display: grid;
    grid-template-columns: 1fr;
  }
  @media screen(lg) {
    .root {
      /* 42rem matches max-w-2xl */
      grid-template-columns: 1fr 42rem 1fr;
    }
  }
</style>
