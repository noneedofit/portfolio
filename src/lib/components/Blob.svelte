<script lang="ts">
  import { spline } from '$lib/spline';
  import { createNoise2D } from 'simplex-noise';
  import { onMount } from 'svelte';

  let path: SVGPathElement | null = null;

  let startColor = '#31748f';
  let stopColor = '#ebbcba';

  function createPoints() {
    const points = [];
    const numPoints = 6;
    const angleStep = (Math.PI * 2) / numPoints;
    const rad = 75;

    for (let i = 1; i <= numPoints; i++) {
      const theta = i * angleStep;

      const x = 100 + Math.cos(theta) * rad;
      const y = 100 + Math.sin(theta) * rad;

      points.push({
        x: x,
        y: y,
        originX: x,
        originY: y,
        noiseOffsetX: Math.random() * 1000,
        noiseOffsetY: Math.random() * 1000
      });
    }

    return points;
  }

  function map(n: number, start1: number, end1: number, start2: number, end2: number) {
    return ((n - start1) / (end1 - start1)) * (end2 - start2) + start2;
  }

  const noise2D = createNoise2D();
  function noise(x: number, y: number) {
    return noise2D(x, y);
  }

  let noiseStep = 0.005;

  const points = createPoints();

  onMount(() => {
    (function animate() {
      path?.setAttribute('d', spline(points, 1, true));

      for (let i = 0; i < points.length; i++) {
        const point = points[i];

        const nX = noise(point.noiseOffsetX, point.noiseOffsetX);
        const nY = noise(point.noiseOffsetY, point.noiseOffsetY);
        const x = map(nX, -1, 1, point.originX - 20, point.originX + 20);
        const y = map(nY, -1, 1, point.originY - 20, point.originY + 20);

        point.x = x;
        point.y = y;

        point.noiseOffsetX += noiseStep;
        point.noiseOffsetY += noiseStep;
      }

      requestAnimationFrame(animate);
    })();
  });
</script>

<div class="backdrop" />
<svg style="--startColor:{startColor};--stopColor:{stopColor}" class="blob" viewBox="0 0 200 200">
  <defs>
    <linearGradient id="gradient" gradientTransform="rotate(90)">
      <stop id="gradientStop1" offset="0%" stop-color="var(--startColor)" />
      <stop id="gradientStop2 " offset="100%" stop-color="var(--stopColor)" />
    </linearGradient>
  </defs>
  <path bind:this={path} d="" fill="url('#gradient')" />
</svg>

<style>
  .backdrop {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 200%;
    backdrop-filter: blur(5vmax);
    z-index: -1;
  }
  .blob {
    position: absolute;
    left: 50%;
    top: 50%;
    translate: -50% -50%;
    border-radius: 50%;
    height: 50vmax;
    aspect-ratio: 1;
    translate: -50% -50%;
    opacity: 0.5;
    z-index: -2;
  }
  /* dont show on mobile screens */
  @media (max-width: 600px) {
    .blob {
      display: none;
    }
  }
</style>
