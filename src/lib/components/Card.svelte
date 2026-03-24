<script land="ts">
  export let as = 'div';
  export let href = undefined;
  let _class = undefined;
  export { _class as class };
</script>

<svelte:element
  this={as}
  data-sveltekit-preload-data="hover"
  class={['group flex flex-col items-start', _class].join(' ')}
  class:postcard={$$slots.title}
>
  <slot name="eyebrow" />
  {#if $$slots.title}
    <div class="text-base font-semibold">
      {#if href}
        <a {href} data-sveltekit-preload-data="hover">
          <span class="absolute inset-x-0 inset-y-0 z-20" />
          <span class="relative z-10">
            <slot name="title" />
          </span>
        </a>
      {:else}
        <slot name="title" />
      {/if}
    </div>
  {/if}

  {#if $$slots.description}
    <div class="relative z-10 flex-1 text-sm" class:mt-2={!!$$slots.title}>
      <slot name="description" />
    </div>
  {/if}

  {#if $$slots.actions}
    <div aria-hidden="true" class="relative z-10 mt-4 flex items-center">
      <slot name="actions" />
    </div>
  {/if}
</svelte:element>

<style lang="postcss">
  .postcard {
    @apply relative m-0 -translate-y-2 rounded-xl border-b-[1px] border-r-[1px] border-solid border-black/30 bg-rosePine-overlay p-8;
  }
  .postcard:after {
    content: '';
    height: 100px;
    width: 1px;
    right: -1px;
    top: 65%;
    @apply absolute bg-gradient-to-b from-transparent via-rosePine-love to-transparent opacity-0 transition-[top,opacity] duration-700 ease-in-out;
  }
  .postcard:after {
    top: 65%;
    opacity: 0;
  }

  .postcard:hover:after {
    top: 25%;
    opacity: 1;
  }
</style>
