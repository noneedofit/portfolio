<script lang="ts">
  import PostPreview from '$lib/components/PostPreview.svelte';
  import PostDate from '$lib/components/PostDate.svelte';
  import InfiniteScroll from 'svelte-infinite-scroll';
  import { onMount } from 'svelte';

  type Data = {
    posts: App.BlogPost[];
  };

  let page = 1;
  let posts: Data['posts'] = [];
  let newBatch: Data['posts'] = [];

  async function fetchData() {
    const response = (await fetch(`/api/posts?page=${page}`).then((res) =>
      res.json()
    )) as App.APIResponse;
    newBatch = response.posts.filter((post) => post.published);
  }

  onMount(() => {
    fetchData();
  });

  $: posts = [...posts, ...newBatch];
</script>

<div class="flex h-screen w-full flex-grow flex-col gap-8 sm:m-auto">
  <section class="h-full w-full">
    <div class="posts flex max-h-full flex-col overflow-x-hidden p-6 pt-16">
      {#each posts as post}
        <article
          class="m-auto grid grid-cols-4 items-start gap-8 py-2 md:w-3/5 md:border-l md:border-rosePine-text/40 md:pl-4"
        >
          <PostDate class="hidden flex-col text-sm md:flex" {post} decorate />
          <div class="col-span-4 md:col-span-3">
            <PostPreview {post}>
              <slot slot="eyebrow">
                <PostDate class="md:hidden" {post} collapsed decorate />
              </slot>
            </PostPreview>
          </div>
        </article>
      {/each}
      <InfiniteScroll
        hasMore={newBatch.length ? true : false}
        threshold={100}
        on:loadMore={() => {
          page++;
          console.log('loading');
          fetchData();
        }}
      />
    </div>
  </section>
</div>

<style lang="postcss">
  .posts {
    overflow-y: overlay;
  }
  /* change scrollbar */
  .posts::-webkit-scrollbar {
    @apply w-2;
  }
  .posts::-webkit-scrollbar-thumb {
    @apply rounded-[0.15rem] bg-rosePine-pine;
  }
</style>
