<script lang="ts">
  import '../../app.postcss';
  import '../../prism.css';
  import { page } from '$app/stores';
  import Menu from '$lib/components/Menu.svelte';
</script>

<Menu />

<div class="flex min-h-screen flex-col">
  <div class="flex w-full flex-grow flex-col px-4 py-16 md:py-2">
    <main
      class="mx-auto flex w-full flex-grow flex-col"
      class:max-w-2xl={!$page.data.layout?.fullWidth}
    >
      <slot />
    </main>
  </div>
</div>
