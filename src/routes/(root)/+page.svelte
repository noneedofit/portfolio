<script lang="ts">
  import Typed from 'typed.js';
  import { onMount } from 'svelte';
  import ArrowRightIcon from '$lib/components/ArrowRightIcon.svelte';
  import uptime from '$lib/uptime';
  import { reveal } from '$lib/actions/reveal';
  import {
    name,
    bio,
    firstName,
    lastName,
    dob,
    linkedinURL,
    githubURL,
    email,
  } from '$lib/info';
  const { years, months, days } = uptime(dob);
  const strings = ['create', 'research', 'learn', 'play', 'repeat'];
  onMount(() => {
    const _ = new Typed('#type', {
      strings,
      loop: true,
      typeSpeed: 40,
      backSpeed: 40,
      backDelay: 1500,
      cursorChar: '█',
      smartBackspace: true
    });
  });

  const projects = [
    {
      title: 'Nombre',
      role: 'Founding Engineer',
      description: 'The first financial exchange for the creator economy. A SocialFi platform that pioneers the tokenization of influence, allowing everyday users to invest in creator potential and become active partners in their success.',
      tech: ['Python', 'FastAPI', 'React', 'TypeScript', 'PostgreSQL'],
      link: 'https://trynombre.in',
      github: 'https://github.com/atnombre',
    },
    {
      title: 'Adoris',
      role: 'Personal Intelligence System',
      description: 'AI-driven personal intelligence system that seamlessly integrates with Notion, WhatsApp, email, and LMS to build a comprehensive second brain. Pipelines ingest 100s of daily unstructured inputs across sources, acting as a unified planner and knowledge assistant.',
      tech: ['Python', 'LangChain', 'FastAPI'],
      github: 'https://github.com/adorislabs',
    },
    {
      title: 'Noto',
      role: 'AI Notification System',
      description: 'AI-powered system trained on a self-collected corpus of 47,000+ real Android notifications. Agentic pipeline processes and mitigates digital interruptions based on custom user preferences, optimising digital wellbeing.',
      tech: ['Python', 'PyTorch', 'FastAPI'],
      github: 'https://github.com/notohere',
    },
    {
      title: 'Agentic Medical Coding',
      role: 'Research Study · Prof. Aruna Malapati',
      description: 'Multi-agent validation loops utilizing cross-consensus methods to automate MS-DRG code prediction from messy clinical summaries. Leveraging Gemini 2.5 Flash with Faith-RAG for ICD-10 codes — high accuracy without model fine-tuning.',
      tech: ['Python', 'Gemini', 'LangChain', 'FAISS'],
    },
    {
      title: 'Algorithmic Trading Bot',
      role: 'Quant',
      description: 'Multi-agent trading system integrating NumPy ring buffers for low-latency market data, DeepLOB (CNN-LSTM) prediction, and XGBoost analysis. Custom Graph-Index-Table with adversarial consensus — 1.67 profit factor, <5% drawdown.',
      tech: ['Python', 'NumPy', 'PyTorch', 'XGBoost'],
      github: 'https://github.com/adorislabs',
    },
    {
      title: 'Melody Bot',
      role: 'Open-Source Discord Bot',
      description: 'Early-stage open-source Discord music bot adopted by ~100,000 users, reliably streaming 185K+ tracks with 99.9% server uptime.',
      tech: ['JavaScript', 'Node.js'],
      github: 'https://github.com/noneedofit/Melody',
    },
  ];
</script>

<svelte:head>
  <title>dpg</title>
  <meta name="description" content={bio} />
  <meta property="og:description" content={bio} />
</svelte:head>

<section
  class="flex flex-col items-center justify-center gap-0 px-8 py-24 md:m-auto md:h-screen md:w-[70%] md:p-0"
>
  <!-- svelte-ignore a11y-mouse-events-have-key-events -->
  <div class="flex w-full flex-col items-center justify-center md:flex-row gap-12">
    <div class="w-full text-7xl font-[800] leading-tight text-rosePine-text">
      <h1>
        {firstName}
      </h1>
      <h1>
        {lastName}
      </h1>
      <p class="mt-4 text-2xl font-medium text-rosePine-subtle leading-normal">{bio}</p>
      <div class="mt-2"></div>
      <p class="text-xl font-light text-rosePine-iris"><i>» sui generis.</i></p>
    </div>
    <div class="terminal">
      <pre>
<strong>~</strong> dpg --status

<strong>dpg@mac</strong>
uptime    {years}y, {months}m, {days}d
locale    en_IN
pkgs      <a href={githubURL}>gh</a>, <a href={linkedinURL}>li</a>, <a href="mailto:{email}">mail</a>

<strong>~</strong> <span id="type" />

</pre>
    </div>
  </div>
</section>
<div class="m-6 flex flex-grow flex-col gap-8 pb-16 sm:m-auto sm:w-3/5">
  <section class="w-full">
    <div use:reveal={{ delay: 100 }} class="mx-0 mb-8 flex items-center justify-between gap-8 p-0">
      <span class="text-xl text-rosePine-iris">featured projects</span>
      <a href="/projects" class="flex items-center gap-1 text-xl text-rosePine-foam"
        >view all <ArrowRightIcon class="h-4 w-4" /></a
      >
    </div>
    <div class="flex flex-col gap-6">
      {#each projects.slice(0, 3) as project, i}
        <div use:reveal={{ delay: 200 + i * 150 }} class="project-card">
          <div class="flex items-baseline justify-between gap-4">
            <h3 class="text-lg font-semibold text-rosePine-text">{project.title}</h3>
            <span class="whitespace-nowrap text-sm text-rosePine-subtle">{project.role}</span>
          </div>
          <p class="mt-2 text-sm leading-relaxed text-rosePine-subtle">{project.description}</p>
          <div class="mt-3 flex flex-wrap items-center gap-2">
            {#each project.tech as tag}
              <span class="rounded-full bg-rosePine-highlightMed px-2 py-0.5 text-xs text-rosePine-foam">{tag}</span>
            {/each}
            {#if project.github}
              <a href={project.github} class="ml-auto text-sm text-rosePine-rose hover:text-rosePine-love transition-colors">github ↗</a>
            {/if}
            {#if project.link}
              <a href={project.link} class="text-sm text-rosePine-rose hover:text-rosePine-love transition-colors">live ↗</a>
            {/if}
          </div>
        </div>
      {/each}
    </div>
  </section>
</div>

<style lang="postcss">
  .terminal {
    @apply relative m-6 w-full rounded-lg border-b-[1px] border-r-[1px] border-solid border-black/30 bg-rosePine-overlay px-8 py-4 text-lg font-bold leading-6 sm:m-auto;
  }
  .terminal pre {
    @apply px-0 py-4;
  }
  .terminal a {
    @apply text-rosePine-rose;
  }
  .terminal:after {
    content: '';
    height: 100px;
    width: 1px;
    right: -1px;
    top: 65%;
    @apply absolute bg-gradient-to-b from-transparent via-rosePine-love to-transparent opacity-0 transition-[top,opacity] duration-700 ease-in-out;
  }
  .terminal:after {
    top: 65%;
    opacity: 0;
  }

  .terminal:hover:after {
    top: 25%;
    opacity: 1;
  }
  strong {
    @apply text-rosePine-love;
  }
  .project-card {
    @apply relative rounded-xl border-b-[1px] border-r-[1px] border-solid border-black/30 bg-rosePine-overlay p-6;
  }
  .project-card:after {
    content: '';
    height: 100px;
    width: 1px;
    right: -1px;
    top: 65%;
    @apply absolute bg-gradient-to-b from-transparent via-rosePine-love to-transparent opacity-0 transition-[top,opacity] duration-700 ease-in-out;
  }
  .project-card:hover:after {
    top: 25%;
    opacity: 1;
  }
</style>
