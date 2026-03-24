<script lang="ts">
  import { name, email, linkedinURL, githubURL } from '$lib/info';
  import SocialLinks from '$lib/components/SocialLinks.svelte';
  import { reveal } from '$lib/actions/reveal';
</script>

<svelte:head>
  <title>about · dpg</title>
  <meta name="description" content="About {name} — CS & Bio Sciences at BITS Pilani." />
</svelte:head>

<div class="mx-auto flex w-full max-w-3xl flex-col gap-12 px-6 py-24">
  <!-- Intro -->
  <section use:reveal={{ delay: 100 }}>
    <h1 class="text-4xl font-[800] text-rosePine-text">About</h1>
    <div class="mt-6 space-y-4 text-lg leading-relaxed text-rosePine-subtle">
      <p>
        i am dhruv, a dual-degree student at <span class="text-rosePine-text">BITS Pilani</span> studying
        Computer Science & Biological Sciences. most of my time goes into thinking about stuff that i can make and
        a fraction in bringing them to life. nowadays mostly onboard AI hype train
        <br><br>
        im interested in all tech/finance
      </p>
      <p>
        when im not writing code, im probably playing football, or<br>
        trying to convince myself that im making the next big thing 
        <br><br>
        i think i am... but am i just thinking that i think i am?
      </p>
    </div>
  </section>

  <!-- Experience -->
  <section use:reveal={{ delay: 100 }}>
    <h2 class="section-heading">Experience</h2>
    <div class="mt-6 flex flex-col gap-6">
      <div class="entry">
        <div class="entry-header">
          <div>
            <h3 class="text-lg font-semibold text-rosePine-text">Founding Engineer</h3>
            <p class="text-sm text-rosePine-iris">Nombre · <a href="https://trynombre.in" class="underline decoration-rosePine-foam/30 hover:decoration-rosePine-foam">trynombre.in</a></p>
          </div>
          <span class="text-sm text-rosePine-muted">Jan. 2025 – Present</span>
        </div>
        <p class="mt-2 text-sm leading-relaxed text-rosePine-subtle">
          The first financial exchange for the creator economy. A SocialFi platform that pioneers the tokenization of influence, allowing everyday users to invest in creator potential and become active partners in their success.
        </p>
      </div>

      <div class="entry">
        <div class="entry-header">
          <div>
            <h3 class="text-lg font-semibold text-rosePine-text">Summer Intern</h3>
            <p class="text-sm text-rosePine-iris">Reliance Industries Limited · Jamnagar, Gujarat</p>
          </div>
          <span class="text-sm text-rosePine-muted">May – Jun. 2025</span>
        </div>
        <p class="mt-2 text-sm leading-relaxed text-rosePine-subtle">
          Developed a device telemetry platform with an endpoint agent, REST API, and database to monitor 20,000+ devices. Built a UI component wrapper around the shadcn library.
        </p>
      </div>
    </div>
  </section>

  <!-- Research -->
  <section use:reveal={{ delay: 100 }}>
    <h2 class="section-heading">Research</h2>
    <div class="mt-6">
      <div class="entry">
        <div class="entry-header">
          <div>
            <h3 class="text-lg font-semibold text-rosePine-text">Agentic Medical Coding</h3>
            <p class="text-sm text-rosePine-iris">Advisor: Prof. Aruna Malapati</p>
          </div>
          <span class="text-sm text-rosePine-muted">Jan. 2026 – Present</span>
        </div>
        <p class="mt-2 text-sm leading-relaxed text-rosePine-subtle">
          Orchestrating multi-agent validation loops to automate MS-DRG code prediction from clinical summaries.
          Using Gemini 2.5 Flash with Faith-RAG for ICD-10 code prediction — high accuracy without fine-tuning.
        </p>
      </div>
    </div>
  </section>

  <!-- Education -->
  <section use:reveal={{ delay: 100 }}>
    <h2 class="section-heading">Education</h2>
    <div class="mt-6">
      <div class="entry">
        <div class="entry-header">
          <div>
            <h3 class="text-lg font-semibold text-rosePine-text">BITS Pilani</h3>
            <p class="text-sm text-rosePine-iris">B.E. Computer Science & M.Sc. Biological Sciences</p>
          </div>
          <span class="text-sm text-rosePine-muted">Aug. 2024 – Present</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Skills -->
  <section use:reveal={{ delay: 100 }}>
    <h2 class="section-heading">Skills</h2>
    <div class="mt-6 space-y-3">
      <div class="skill-row">
        <span class="skill-label">Languages</span>
        <span class="skill-value">Python, TypeScript, JavaScript, C/C++, SQL</span>
      </div>
      <div class="skill-row">
        <span class="skill-label">Frameworks</span>
        <span class="skill-value">PyTorch, FastAPI, React, LangChain, FAISS, OpenCV, NumPy, Pandas, XGBoost, NLTK</span>
      </div>
      <div class="skill-row">
        <span class="skill-label">Tools</span>
        <span class="skill-value">Git, Docker, PostgreSQL, Hugging Face</span>
      </div>
    </div>
  </section>

  <!-- Contact -->
  <section use:reveal={{ delay: 100 }} class="border-t border-rosePine-highlightMed pt-8">
    <p class="text-sm text-rosePine-subtle">
      Reach me at <a href="mailto:{email}" class="text-rosePine-foam underline decoration-rosePine-foam/30 hover:decoration-rosePine-foam">{email}</a>
      or find me on <a href={linkedinURL} class="text-rosePine-foam underline decoration-rosePine-foam/30 hover:decoration-rosePine-foam">LinkedIn</a>
      and <a href={githubURL} class="text-rosePine-foam underline decoration-rosePine-foam/30 hover:decoration-rosePine-foam">GitHub</a>.
    </p>
    <SocialLinks />
  </section>
</div>

<style lang="postcss">
  .section-heading {
    @apply text-2xl font-semibold text-rosePine-text;
    font-family: 'Merriweather', Georgia, 'Times New Roman', Times, serif;
  }
  .entry {
    @apply rounded-xl border-b-[1px] border-r-[1px] border-solid border-black/30 bg-rosePine-overlay p-6;
  }
  .entry-header {
    @apply flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4;
  }
  .skill-row {
    @apply flex flex-col gap-1 sm:flex-row sm:gap-4;
  }
  .skill-label {
    @apply min-w-[120px] text-sm font-medium text-rosePine-iris;
  }
  .skill-value {
    @apply text-sm text-rosePine-subtle;
  }
</style>
