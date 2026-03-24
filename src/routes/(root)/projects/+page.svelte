<script lang="ts">
  import { name } from '$lib/info';
  import { reveal } from '$lib/actions/reveal';

  const projects = [
    {
      title: 'Nombre',
      role: 'Founding Engineer',
      description:
        'The first financial exchange for the creator economy. A SocialFi platform that pioneers the tokenization of influence, allowing everyday users to invest in creator potential and become active partners in their success.',
      tech: ['Python', 'FastAPI', 'React', 'TypeScript', 'PostgreSQL'],
      link: 'https://trynombre.in',
      github: 'https://github.com/atnombre',
      featured: true
    },
    {
      title: 'Adoris',
      role: 'Personal Intelligence System',
      description:
        'AI-driven personal intelligence system seamlessly integrating with Notion, WhatsApp, email, and LMS to build a comprehensive second brain. Built pipelines to ingest 100s of daily unstructured inputs across sources, empowering the system to act as a unified planner and knowledge assistant via actionable trees.',
      tech: ['Python', 'LangChain', 'FastAPI', 'Hugging Face'],
      github: 'https://github.com/adorislabs',
      featured: true
    },
    {
      title: 'Noto',
      role: 'AI Notification System',
      description:
        'AI-powered system trained on a self-collected corpus of 47,000+ real Android notifications. Deployed an agentic pipeline to process and mitigate digital interruptions based on custom user preferences, optimising digital wellbeing and user focus.',
      tech: ['Python', 'PyTorch', 'FastAPI'],
      github: 'https://github.com/notohere',
      featured: true
    },
    {
      title: 'Agentic Medical Coding',
      role: 'Research Study · Prof. Aruna Malapati',
      description:
        'Orchestrating multi-agent validation loops utilizing cross-consensus methods to automate MS-DRG code prediction from messy clinical summaries. Leveraging Gemini 2.5 Flash with Faith-RAG to predict ICD-10 codes, achieving high accuracy without model fine-tuning.',
      tech: ['Python', 'Gemini', 'LangChain', 'FAISS'],
      featured: true
    },
    {
      title: 'Algorithmic Trading Bot',
      role: 'Quant',
      description:
        'Multi-agent trading system integrating NumPy ring buffers for low-latency market data, DeepLOB (CNN-LSTM) prediction, and XGBoost analysis. Engineered an adversarial consensus protocol leveraging a custom Graph-Index-Table to scale position conviction — 1.67 profit factor (<5% drawdown).',
      tech: ['Python', 'NumPy', 'PyTorch', 'XGBoost'],
      github: 'https://github.com/adorislabs'
    },
    {
      title: 'Melody Bot',
      role: 'Open-Source Discord Bot',
      description:
        'Co-developed an early-stage open-source Discord music bot adopted by ~100,000 users, reliably streaming 185K+ tracks with 99.9% server uptime.',
      tech: ['JavaScript', 'Node.js'],
      github: 'https://github.com/noneedofit/Melody'
    }
  ];
</script>

<svelte:head>
  <title>projects · dpg</title>
  <meta name="description" content="Projects by {name}" />
</svelte:head>

<div class="mx-auto flex w-full max-w-3xl flex-col gap-8 px-6 py-24">
  <div class="mb-4">
    <h1 class="text-4xl font-[800] text-rosePine-text">Projects</h1>
    <p class="mt-2 text-lg text-rosePine-subtle">i try</p>
  </div>

  <div class="flex flex-col gap-6">
    {#each projects as project, i}
      <div use:reveal={{ delay: i * 100 }} class="project-card" class:featured={project.featured}>
        <div class="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
          <h2 class="text-xl font-semibold text-rosePine-text">{project.title}</h2>
          <div class="flex items-center gap-3">
            <span class="text-sm text-rosePine-iris">{project.role}</span>
          </div>
        </div>
        <p class="mt-3 text-sm leading-relaxed text-rosePine-subtle">{project.description}</p>
        <div class="mt-4 flex flex-wrap items-center gap-2">
          {#each project.tech as tag}
            <span
              class="rounded-full bg-rosePine-highlightMed px-2.5 py-0.5 text-xs text-rosePine-foam"
              >{tag}</span
            >
          {/each}
          <div class="ml-auto flex gap-3">
            {#if project.github}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                class="text-sm text-rosePine-rose hover:text-rosePine-love transition-colors"
                >github ↗</a
              >
            {/if}
            {#if project.link}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                class="text-sm text-rosePine-rose hover:text-rosePine-love transition-colors"
                >live ↗</a
              >
            {/if}
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>

<style lang="postcss">
  .project-card {
    @apply relative rounded-xl border-b-[1px] border-r-[1px] border-solid border-black/30 bg-rosePine-overlay p-6 transition-all duration-300;
  }
  .project-card.featured {
    @apply border-l-2 border-l-rosePine-iris/30;
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
