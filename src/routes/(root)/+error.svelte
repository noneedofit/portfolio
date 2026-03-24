<script lang="ts">
  import { page } from '$app/stores';
  import { fly } from 'svelte/transition';
  const status = $page.status;
  const error = $page.error?.message;

  const messages = [
    'looks like u are lost kid . . .',
    "but don't worry, u will have a not-so-good time with me",
    "let's start with a simple question, why do u exist?",
    'why is there something instead of nothing?',
    'what is the meaning of life?',
    "don't get too nervous . . . since AI is going to take your job anyways",
    "there's really no point for you to exist",
    'close your device, and keep contemplating your life decisions'
  ];
</script>

{#if status === 404 && error}
  <div class="absolute flex h-full w-full items-center justify-center" />
{/if}
