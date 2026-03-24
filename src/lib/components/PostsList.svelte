<script lang="ts">
  import PostPreview from '$lib/components/PostPreview.svelte';
  import PostDate from '$lib/components/PostDate.svelte';

  export let posts: App.BlogPost[];

  // const publishedPosts = posts.filter((post) => post.published);
  const publishedPosts = posts
</script>

<div class="flex flex-col gap-4 md:border-l md:border-zinc-100/40 md:pl-6">
  {#each publishedPosts as post}
    <article class="grid grid-cols-4 items-start gap-8">
      <PostDate class="hidden flex-col md:flex" {post} decorate />

      <div class="col-span-4 md:col-span-3">
        <PostPreview {post}>
          <slot slot="eyebrow">
            <PostDate class="md:hidden" {post} collapsed decorate />
          </slot>
        </PostPreview>
      </div>
    </article>
  {/each}
</div>
