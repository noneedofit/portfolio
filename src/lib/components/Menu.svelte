<script lang="ts">
  import { fly } from 'svelte/transition';
  let open = false;
  let activeIndex: number;
  const toggle = () => {
    open = !open;
  };
  const close = (e: Event) => {
    open = false;
  };
</script>

<nav data-open={open} class:close={open}>
  <button id="toggle" aria-label="toggle menu" on:click={toggle}>
    <svg
      class="hamburger"
      width="3rem"
      height="3rem"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect class="top" x="20" y="29" width="60" height="7.85106" fill="#fff" />
      <rect class="middle" x="20" y="45.5745" width="45" height="7.85106" fill="#fff" />
      <rect class="bottom" x="20" y="62.1489" width="30" height="7.85106" fill="#fff" />
    </svg>
  </button>
</nav>
{#if open}
  <div id="menu" data-active-index={activeIndex} transition:fly>
    <!-- svelte-ignore a11y-mouse-events-have-key-events -->
    <div id="menu-items">
      <a
        href="/"
        on:click={close}
        on:keypress={close}
        on:mouseover={() => {
          activeIndex = 0;
        }}
        class="menu-item"
      >
        home
      </a>
      <a
        on:click={close}
        href="/posts"
        on:keypress={close}
        on:mouseover={() => {
          activeIndex = 1;
        }}
        class="menu-item"
      >
        posts
      </a>
      <a
        href="/about"
        on:click={close}
        on:keypress={close}
        on:mouseover={() => {
          activeIndex = 2;
        }}
        class="menu-item"
      >
        about
      </a>
      <a
        href="/projects"
        on:click={close}
        on:keypress={close}
        on:mouseover={() => {
          activeIndex = 3;
        }}
        class="menu-item"
      >
        projects
      </a>
    </div>
    <div id="menu-background-pattern" />
  </div>
{/if}

<style lang="postcss">
  #menu {
    @apply bg-rosePine-base;
    align-items: center;
    display: flex;
    height: 100vh;
    width: 100vw;
    z-index: 99;
    position: fixed;
  }

  #menu-items {
    margin-left: clamp(4rem, 20vw, 48rem);
    position: relative;
    z-index: 2;
  }

  a {
    font-family: 'Cinzel Decorative', Georgia, 'Times New Roman', Times, serif;
    font-weight: 700;
  }

  #menu[data-active-index='0'] > #menu-background-pattern {
    background-position: 0% -25%;
  }

  #menu[data-active-index='1'] > #menu-background-pattern {
    background-position: 0% -50%;
  }

  #menu[data-active-index='2'] > #menu-background-pattern {
    background-position: 0% -75%;
  }

  #menu[data-active-index='3'] > #menu-background-pattern {
    background-position: 0% -100%;
  }

  #menu-background-pattern {
    background-image: radial-gradient(rgba(235, 111, 146, 0.1) 9%, transparent 9%);
    background-position: 0% 0%;
    background-size: 12vmin 12vmin;
    height: 100vh;
    left: 0px;
    position: absolute;
    top: 0px;
    transition: opacity 800ms ease, background-size 800ms ease, background-position 800ms ease;
    width: 100vw;
    z-index: 1;
  }

  #menu-items:hover ~ #menu-background-pattern {
    background-size: 11vmin 11vmin;
    opacity: 0.5;
  }

  #menu-items:hover > .menu-item {
    opacity: 0.3;
  }

  #menu-items:hover > .menu-item:hover {
    opacity: 1;
  }

  .menu-item {
    cursor: pointer;
    display: block;
    font-family: 'Cinzel Decorative', Georgia, 'Times New Roman', Times, serif;
    font-size: clamp(3rem, 8vw, 8rem);
    padding: clamp(0.25rem, 0.5vw, 1rem) 0rem;
    text-decoration: none;
    transition: opacity 400ms ease;
    @apply text-rosePine-foam;
  }
  nav[data-open='true'] {
    position: fixed;
  }

  nav {
    z-index: 100;
    position: absolute;
  }
  button {
    background: none;
    border: none;
    outline: none;
    position: absolute;
    top: 0;
    left: 0;
    padding: 1rem;
    display: flex;
    z-index: 99;
  }
  svg {
    cursor: pointer;
  }
  svg rect {
    transition: all 0.3s ease-in-out;
  }
  .close .middle {
    x: 0;
    opacity: 0;
  }
  .close .top {
    transform: rotate(45deg);
    transform-origin: center top;
    x: 50px;
    y: 35px;
  }
  .close .bottom {
    transform: rotate(-45deg);
    transform-origin: center top;
    width: 60px;
    x: -20px;
    y: 25px;
  }
</style>
