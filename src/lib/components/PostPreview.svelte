<script lang="ts">
  import Card from './Card.svelte';
  import ArrowRightIcon from './ArrowRightIcon.svelte';

  export let post: App.BlogPost;
</script>

<Card href={`/post/${post.slug}`}>
  <slot slot="eyebrow" name="eyebrow" />
  <slot slot="title">
    <h2 class="text-lg text-rosePine-text">
      {post.title}
    </h2>
  </slot>
  <div slot="description" class="prose text-base">
    {@html post.preview.html}
  </div>
  <div slot="actions">
    <div class="flex items-center">
      <span class="text-rosePine-foam">Read</span>
      <ArrowRightIcon class="ml-1 h-4 w-4" />
    </div>
  </div>
</Card>

<style>
  .prose > :global(p) {
    margin-top: 0;
    margin-bottom: 0;
  }
</style>
