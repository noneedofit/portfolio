<script lang="ts">
  import { browser } from '$app/environment';
  import { onMount } from 'svelte';
  import Card from './Card.svelte';

  export let post: App.BlogPost;

  let elements: (HTMLElement | null)[] = [];
  let headings: App.BlogPostHeading[] = post.headings;

  onMount(() => {
    updateHeadings();
    setActiveHeading();
  });

  let activeHeading: App.BlogPostHeading = headings[0];
  let scrollY: number;

  function updateHeadings() {
    headings = post.headings;

    if (browser) {
      elements = headings.map((heading) => {
        return document.getElementById(heading.id);
      });
    }
  }
  function setActiveHeading() {
    scrollY = window.scrollY;

    const visibleIndex =
      elements.findIndex((element) => {
        if (element) return element.offsetTop - 100 + element.clientHeight > scrollY;
      }) - 1;

    activeHeading = headings[visibleIndex];

    const pageHeight = document.body.scrollHeight;
    const scrollProgress = (scrollY + window.innerHeight) / pageHeight;

    if (!activeHeading) {
      if (scrollProgress > 0.5) {
        activeHeading = headings[headings.length - 1];
      } else {
        activeHeading = headings[0];
      }
    }
  }
</script>

<svelte:window on:scroll={setActiveHeading} />

<Card>
  <slot slot="description">
    <ul class="flex flex-col gap-2 text-base">
      {#each headings as heading}
        <li
          class="heading border-rosePine-pine pl-2 text-rosePine-subtle transition-colors hover:text-rosePine-text"
          class:active={activeHeading === heading}
          style={`--depth: ${
            // consider h1 and h2 at the same depth, as h1 will only be used for page title
            Math.max(0, heading.depth - 1)
          }`}
        >
          <a href={`#${heading.id}`}>{heading.value}</a>
        </li>
      {/each}
    </ul>
  </slot>
</Card>

<style lang="postcss">
  .heading {
    padding-left: calc(var(--depth, 0) * 0.35rem);
  }

  .active {
    @apply -ml-[2px] border-l-2 font-medium text-rosePine-text;
  }
</style>
