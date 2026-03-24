<script lang="ts">
  import { format, parseISO } from 'date-fns';

  export let decorate: any;
  export let post: App.BlogPost;
  export let collapsed = false;

  let _class: string;
  export { _class as class };
</script>

<div
  class={['relative z-10 mb-3 flex text-lg text-rosePine-iris', _class].join(' ')}
  class:pb-2={decorate}
>
  {#if decorate}
    <span class="absolute inset-x-0 bottom-0 flex items-center" aria-hidden="true">
      <span class="h-[0.05rem] w-full rounded-full bg-rosePine-text/40 md:w-3/4" />
    </span>
  {/if}
  <div class="flex" class:flex-col={!collapsed}>
    <time class="text-base font-bold" datetime={post.date}>
      {format(new Date(parseISO(post.date)), 'MMMM d, yyyy').toLowerCase()}
    </time>
    {#if collapsed}
      <span class="mx-1">•</span>
    {/if}
    <span class="text-rosePine-subtle">{post.readingTime} read</span>
  </div>
</div>
