'use strict';

/* =========================================================
 * ✏️  CUSTOMIZE HERE — everything personal lives in CONFIG.
 * ========================================================= */
const CONFIG = {
  // Her name or nickname. Shown on the sky, card title and browser tab.
  // Full name is Moto Kuroki; the card reads warmer with just her first name.
  name: 'Moto',
  eyebrow: 'For my baby',
  // `{name}` is replaced with CONFIG.name.
  cardTitle: 'Happy Birthday, {name}!',
  // Shown under the card title ("Happy Birthday" in Japanese). Leave empty to hide.
  cardSubtitle: 'お誕生日おめでとう！',
  // Leave empty to show today's date (in the viewer's locale).
  dateLine: 'October 3, 2026',
  message: [
    "Sorry I can't be there in person to celebrate with you but I hope you have a wonderful " +
    'Mototastic birthday!!! Love you always!!!',
  ],
  closing: 'Love always,',
  signature: 'Michael',
  emoji: '❤️🎂🥂🎆💗',
  wishMessage: 'Your wish is on its way ✨',
  // Photo slideshow on the card. Drop images into the repo (e.g. images/hb/1.jpg) or use
  // https:// URLs. Portrait photos fit best (frame is 4:5; others are center-cropped).
  // `caption` is optional. Leave the list empty to hide the slideshow entirely.
  photos: [
    // From the shared Google Photos album (https://photos.app.goo.gl/rLksFdSaU4fXwBRU9).
    // `=w1200` at the end of each link requests a 1200px-wide copy for fast loading.
    { src: 'https://lh3.googleusercontent.com/pw/AP1GczOZRddmlTwwTlUb6UUu-LmaUg6t0RyFwlIJlI470jrUGDrWAWOWeYM-Oji6UHerOptOGXeoRndFzMQ88uuTM9N4K7k9EBRqxzt7FLZUSF9MVDbuq57H=w1200', caption: '' },
    { src: 'https://lh3.googleusercontent.com/pw/AP1GczNCgGyeuejh2b2vNCNw9IwCwzD9iVDNa_xLN8xCh6uV0DoolWRgHGG-O7pUeg-55n8JdKjEjlde90n_Dw89GsMRBMuC7vf1S0BROivNOB8VGOP0--af=w1200', caption: '' },
    { src: 'https://lh3.googleusercontent.com/pw/AP1GczMbUIpd8lphmpKa8LrWvztqUY-0sbogZx3M0KaT-Sj1jP7Pn3ncPEoUXQri16lkUEKxt9_Ym3T7lXo6EHYyABk55gR5xX6Hr-haJI6PYlwittiyHX86=w1200', caption: '' },
    { src: 'https://lh3.googleusercontent.com/pw/AP1GczOLxTxufv9iviYmAKIeRQimhENiq05T2KTBNMREcBzsUAvDghxyccPDM1cqq4LcJJRHEXMfUT3J9JwBZDxf9IagGAjw64sLz6K_TQkihBUl-MMtQoOT=w1200', caption: '' },
    { src: 'https://lh3.googleusercontent.com/pw/AP1GczO31rXjDV5ZQNjxtAnsbAiqVQgTAaG9qBAQR9KPYMT56xyRfUwQ_q884UJC41g-VLDXJVcXM98DB5xaBFbbZy7ujdmxpKfUj-VJeBHlT41CnzOIG8Wi=w1200', caption: '' },
    { src: 'https://lh3.googleusercontent.com/pw/AP1GczNnINA8nylbwG1SzQUunRU_cTXd4RwKAinn3jX3WXNUf6bNaisaQOKUs9PgeSZDcbm3TCqNpfvh6dHawURu_tpQ0PDYcvIj_C4CG9SKkQ1JHh6cWM9x=w1200', caption: '' },
    { src: 'https://lh3.googleusercontent.com/pw/AP1GczNAIw3NMudZPFZqcKI5mEdMzLFCD9QWBs08iRl3OyciKq11A-7J_w6c3tfjw8zhqDoIFnTfWyTfphpsCdc8IbY3-t692GQk8gvhIoyIg_O4GHQoH0oL=w1200', caption: '' },
    { src: 'https://lh3.googleusercontent.com/pw/AP1GczOx1GzuitlsjU2bCnvv0VjfYQd9BEk9BpnwBbhd7yzGs4hFDjwn3nA2qi7HZb2NThrdlU_uYo0REMLIg0OVspDg2LDJpvdu2kkUX5SNRFKJu3i0nXY7=w1200', caption: '' },
    { src: 'https://lh3.googleusercontent.com/pw/AP1GczMClrF1GwFRIcCFXyl--wCti53jAamT-eKvGEgtEofkemB3CLPp3U7C8RXQzrjBC5m-rfleL_OEPea34RPb4HxPwgvfMG7orkpzmu1f_Lampph2vkGw=w1200', caption: '' },
    { src: 'https://lh3.googleusercontent.com/pw/AP1GczOCV5nDuYX3RvOAWBsLHhk46pFWX_s5t3PAqotx8tRUqmF-h2A3ogzZwlBryyfMDqcy1N-PJl4QBFH-S0yzDWcT5jG4Ou5qJbDxZnEChQdtarjQSKxA=w1200', caption: '' },
    { src: 'https://lh3.googleusercontent.com/pw/AP1GczOZOmGTbSCnhKHbNc8hPIQ6KEPAEySAe1u-3MApSiHn-mHp8QXlXEZTfQPbzamS3SNbieePneMfQFw8S5NMqhyBfE4WrjYQNFUjcME8sE9B9IGRMPLC=w1200', caption: '' },
    { src: 'https://lh3.googleusercontent.com/pw/AP1GczNLKtex1sM_D7DIfjg3DI2kcDVHIj90qcUIYXsRSYTJTqR7aB5UuePiuNvsbewbNqaIrw3e9I7l6W8d95PAzPQxuNcb-qmiqMm6OZW2s8FWAtQWgu2X=w1200', caption: '' },
    { src: 'https://lh3.googleusercontent.com/pw/AP1GczOZ7toEINhi83m6WMrXgPCmXiTSuJoG-TyoxYjywc6D3FTpWkm0moIsu3kUCEOOOoJuQA0iKaybJH09rO9m4r5Qux_SDT8Oxk2Mz7i8CxNqQ7WACW4w=w1200', caption: '' },
    { src: 'https://lh3.googleusercontent.com/pw/AP1GczPeILt6NkVA_UL4OoiVxx6vs-OChOkNmCmDImx2bB-Gktyp0_5gTkfP4_CfAk4pvO4AHVjj0oG4KhV8sP0iyejw2GwICB57_5AaIjaSAo7e5YA98vsp=w1200', caption: '' },
    { src: 'https://lh3.googleusercontent.com/pw/AP1GczOxctH0BWEYOWv1X84UbCmgyxSowjRtYFGRzxkfcHRJmwfbX7fp6wYTPdwtfudTFGbVlFrYU0b-Hjulj_QhRuWPQ9W50MfPBR4eRDgSxRB1yI1Sbx74=w1200', caption: '' },
    { src: 'https://lh3.googleusercontent.com/pw/AP1GczPMfgMnCdfM78MDcaulFd2mr_GUjQcODjHvdCxvglFkiHile4UBWAQy-iyCPJ20HS-s30e4mh40W18U3_1E2lTN7FUduZmjDnB4W8yrMBVmQTDJ0AWb=w1200', caption: '' },
    { src: 'https://lh3.googleusercontent.com/pw/AP1GczOHJwGkcIqYK1gPC4V0GyRibqLpQxHfPJGxmhH184qLthmrhOxf6D1FkYuTKsTFHPZtyKAwTVfcaAzu2Cq-guCNXyzG26Mt6d97-KsVSPNVGeDqGmj2=w1200', caption: '' },
    { src: 'https://lh3.googleusercontent.com/pw/AP1GczOQKbZBxX-H2tcK4jeCNnzBTu32Bmx2wGlLR13QAG7JKxloSsspbNc9LkhY-r1dHb0Y98uzpXn7eV5RBrN8BA2Gm3fO5AVf4xdTrCXSXtR5-NMvmWst=w1200', caption: '' },
  ],
  photoIntervalMs: 4500, // time per photo
};

(function main() {
  const $ = (id) => document.getElementById(id);
  const rand = (min, max) => min + Math.random() * (max - min);
  const pick = (list) => list[Math.floor(Math.random() * list.length)];
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const PALETTE = [
    { h: 42, s: 95, l: 66 },  // gold
    { h: 350, s: 85, l: 68 }, // rose
    { h: 14, s: 95, l: 64 },  // coral
    { h: 330, s: 90, l: 76 }, // blush
    { h: 188, s: 80, l: 70 }, // aqua
    { h: 48, s: 100, l: 86 }, // champagne
  ];
  const HEART_COLORS = [PALETTE[1], PALETTE[3]];
  const SPARK = { h: 48, s: 100, l: 88 };

  let currentScene = 'hero';

  /* ================= Canvas setup ================= */

  const skyCanvas = $('sky');
  const fwCanvas = $('fireworks');
  const sky = skyCanvas.getContext('2d');
  const fx = fwCanvas.getContext('2d');
  let W = 0;
  let H = 0;
  let sizeScale = 1;
  let stars = [];
  let shootingStar = null;

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = window.innerWidth;
    H = window.innerHeight;
    sizeScale = Math.min(1.25, Math.max(0.7, Math.min(W, H) / 800));
    for (const canvas of [skyCanvas, fwCanvas]) {
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
    }
    sky.setTransform(dpr, 0, 0, dpr, 0, 0);
    fx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const count = Math.min(320, Math.round((W * H) / 5500));
    stars = Array.from({ length: count }, () => ({
      x: Math.random() * W,
      y: Math.random() * H * 0.9,
      r: Math.random() * 1.1 + 0.25,
      phase: Math.random() * Math.PI * 2,
      speed: rand(0.0006, 0.002),
    }));
  }

  function drawSky(now, dt) {
    sky.clearRect(0, 0, W, H);
    sky.fillStyle = '#fff6e6';
    for (const star of stars) {
      const twinkle = 0.5 + 0.5 * Math.sin(now * star.speed + star.phase);
      sky.globalAlpha = (0.2 + twinkle * 0.8) * (1 - star.y / (H * 1.15));
      sky.beginPath();
      sky.arc(star.x, star.y, star.r, 0, Math.PI * 2);
      sky.fill();
    }
    sky.globalAlpha = 1;

    if (!shootingStar && !reduceMotion && Math.random() < 0.002 * dt) {
      const dir = Math.random() < 0.5 ? -1 : 1;
      shootingStar = {
        x: rand(W * 0.15, W * 0.85),
        y: rand(0, H * 0.3),
        vx: rand(6, 9) * dir,
        vy: rand(2.5, 4),
        life: 1,
      };
    }
    if (shootingStar) {
      const s = shootingStar;
      const tailX = s.x - s.vx * 10;
      const tailY = s.y - s.vy * 10;
      const grad = sky.createLinearGradient(s.x, s.y, tailX, tailY);
      grad.addColorStop(0, `rgba(255, 246, 230, ${s.life})`);
      grad.addColorStop(1, 'rgba(255, 246, 230, 0)');
      sky.strokeStyle = grad;
      sky.lineWidth = 1.6;
      sky.beginPath();
      sky.moveTo(s.x, s.y);
      sky.lineTo(tailX, tailY);
      sky.stroke();
      s.x += s.vx * dt;
      s.y += s.vy * dt;
      s.life -= 0.018 * dt;
      if (s.life <= 0) shootingStar = null;
    }
  }

  /* ================= Fireworks engine ================= */

  const rockets = [];
  const particles = [];
  const flashes = [];
  const MAX_PARTICLES = 2400;
  const MAX_ROCKETS = 14;
  const ROCKET_GRAVITY = 0.12;

  function pickType() {
    const r = Math.random();
    if (r < 0.26) return 'heart';
    if (r < 0.42) return 'ring';
    if (r < 0.58) return 'willow';
    return 'peony';
  }

  /** Launches a rocket that peaks (and bursts) at roughly (targetX, targetY). */
  function launch(targetX, targetY, type) {
    if (document.hidden || rockets.length >= MAX_ROCKETS || W === 0) return;
    const tx = targetX ?? rand(W * 0.12, W * 0.88);
    const ty = targetY ?? rand(H * 0.1, H * 0.42);
    const x = Math.min(W - 10, Math.max(10, tx + rand(-W * 0.06, W * 0.06)));
    const y = H + 8;
    // Initial velocity chosen so the apex of the arc lands on the target.
    const vy = -Math.sqrt(2 * ROCKET_GRAVITY * Math.max(60, y - ty));
    const frames = -vy / ROCKET_GRAVITY;
    rockets.push({
      x, y, vy,
      vx: (tx - x) / frames,
      trail: [],
      type: type || pickType(),
      color: pick(PALETTE),
    });
  }

  function addParticle(x, y, vx, vy, color, opts = {}) {
    if (particles.length >= MAX_PARTICLES) return;
    particles.push({
      x, y, px: x, py: y, vx, vy,
      h: color.h,
      s: color.s,
      l: color.l,
      alpha: 1,
      decay: opts.decay ?? rand(0.011, 0.018),
      friction: opts.friction ?? 0.968,
      gravity: opts.gravity ?? 0.035,
      size: opts.size ?? rand(1.4, 2.4),
      sparkle: opts.sparkle ?? Math.random() < 0.35,
    });
  }

  function explode(x, y, type, color) {
    flashes.push({ x, y, r: rand(60, 110) * sizeScale, alpha: 0.5, h: color.h });
    const k = sizeScale;

    switch (type) {
      case 'heart': {
        const n = 84;
        const scale = rand(0.2, 0.25) * k;
        const heartColor = pick(HEART_COLORS);
        for (let i = 0; i < n; i++) {
          const t = (i / n) * Math.PI * 2;
          const hx = 16 * Math.sin(t) ** 3;
          const hy = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
          addParticle(x, y, hx * scale, hy * scale, i % 4 === 0 ? SPARK : heartColor, {
            friction: 0.955, gravity: 0.012, decay: rand(0.009, 0.013), size: 2.2, sparkle: false,
          });
        }
        for (let i = 0; i < 24; i++) {
          const a = rand(0, Math.PI * 2);
          const sp = rand(0.3, 1.6) * k;
          addParticle(x, y, Math.cos(a) * sp, Math.sin(a) * sp, SPARK, {
            decay: rand(0.02, 0.03), size: 1.2, sparkle: true,
          });
        }
        break;
      }
      case 'ring': {
        const n = 64;
        const speed = rand(3.6, 4.6) * k;
        const tilt = rand(0.4, 1);
        const rot = rand(0, Math.PI);
        const accent = pick(PALETTE);
        for (let i = 0; i < n; i++) {
          const a = (i / n) * Math.PI * 2;
          const vx = Math.cos(a) * speed;
          const vy = Math.sin(a) * speed * tilt;
          addParticle(x, y,
            vx * Math.cos(rot) - vy * Math.sin(rot),
            vx * Math.sin(rot) + vy * Math.cos(rot),
            color, { decay: rand(0.012, 0.016), size: 2, sparkle: false });
        }
        for (let i = 0; i < 30; i++) {
          const a = rand(0, Math.PI * 2);
          const sp = rand(0.5, 2) * k;
          addParticle(x, y, Math.cos(a) * sp, Math.sin(a) * sp, accent);
        }
        break;
      }
      case 'willow': {
        const gold = { h: 40, s: 90, l: 62 };
        for (let i = 0; i < 110; i++) {
          const a = rand(0, Math.PI * 2);
          const sp = Math.sqrt(Math.random()) * 3.6 * k;
          addParticle(x, y, Math.cos(a) * sp, Math.sin(a) * sp, gold, {
            decay: rand(0.0055, 0.0085), friction: 0.978, gravity: 0.045, size: rand(1.2, 1.9), sparkle: true,
          });
        }
        break;
      }
      default: { // peony: a two-tone sphere
        const accent = pick(PALETTE);
        for (let i = 0; i < 130; i++) {
          const a = rand(0, Math.PI * 2);
          const sp = (Math.random() < 0.8 ? rand(3, 5) : rand(0.5, 3)) * k;
          addParticle(x, y, Math.cos(a) * sp, Math.sin(a) * sp, i % 3 === 0 ? accent : color);
        }
      }
    }
  }

  function updateFlashes(dt) {
    for (let i = flashes.length - 1; i >= 0; i--) {
      const f = flashes[i];
      f.alpha -= 0.045 * dt;
      if (f.alpha <= 0) {
        flashes.splice(i, 1);
        continue;
      }
      const g = fx.createRadialGradient(f.x, f.y, 0, f.x, f.y, f.r);
      g.addColorStop(0, `hsla(${f.h}, 100%, 85%, ${f.alpha})`);
      g.addColorStop(1, `hsla(${f.h}, 100%, 60%, 0)`);
      fx.fillStyle = g;
      fx.beginPath();
      fx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
      fx.fill();
    }
  }

  function updateRockets(dt) {
    for (let i = rockets.length - 1; i >= 0; i--) {
      const r = rockets[i];
      r.trail.push({ x: r.x, y: r.y });
      if (r.trail.length > 10) r.trail.shift();
      r.x += r.vx * dt;
      r.y += r.vy * dt;
      r.vy += ROCKET_GRAVITY * dt;

      if (Math.random() < 0.5) {
        addParticle(r.x, r.y, rand(-0.4, 0.4), rand(0.5, 1.5), { h: 38, s: 90, l: 70 }, {
          decay: rand(0.04, 0.06), size: 1, gravity: 0.02, sparkle: true,
        });
      }

      fx.strokeStyle = 'hsla(40, 100%, 80%, 0.55)';
      fx.lineWidth = 1.6;
      fx.beginPath();
      fx.moveTo(r.trail[0].x, r.trail[0].y);
      for (const pt of r.trail) fx.lineTo(pt.x, pt.y);
      fx.lineTo(r.x, r.y);
      fx.stroke();
      fx.fillStyle = 'hsla(45, 100%, 92%, 1)';
      fx.beginPath();
      fx.arc(r.x, r.y, 1.8, 0, Math.PI * 2);
      fx.fill();

      if (r.vy >= -0.4) {
        explode(r.x, r.y, r.type, r.color);
        rockets.splice(i, 1);
      }
    }
  }

  function updateParticles(dt) {
    fx.lineCap = 'round';
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.px = p.x;
      p.py = p.y;
      const f = p.friction ** dt;
      p.vx *= f;
      p.vy = p.vy * f + p.gravity * dt;
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.alpha -= p.decay * dt;
      if (p.alpha <= 0) {
        // O(1) swap-remove; the swapped-in element was already processed.
        particles[i] = particles[particles.length - 1];
        particles.pop();
        continue;
      }
      if (p.sparkle && Math.random() < 0.25) continue;
      fx.strokeStyle = `hsla(${p.h}, ${p.s}%, ${p.l}%, ${p.alpha})`;
      fx.lineWidth = p.size * (0.4 + p.alpha * 0.6);
      fx.beginPath();
      fx.moveTo(p.px, p.py);
      fx.lineTo(p.x + 0.01, p.y + 0.01);
      fx.stroke();
    }
  }

  let last = 0;
  let idleFrames = 0;
  function frame(now) {
    const dt = last ? Math.min((now - last) / 16.667, 3) : 1;
    last = now;
    drawSky(now, dt);

    // Fade the previous frame to leave soft trails, keeping the canvas transparent.
    fx.globalCompositeOperation = 'destination-out';
    fx.fillStyle = 'rgba(0, 0, 0, 0.22)';
    fx.fillRect(0, 0, W, H);
    fx.globalCompositeOperation = 'lighter';

    updateFlashes(dt);
    updateRockets(dt);
    updateParticles(dt);

    if (rockets.length || particles.length || flashes.length) {
      idleFrames = 0;
    } else if (++idleFrames === 45) {
      fx.clearRect(0, 0, W, H); // wipe 8-bit alpha residue left by the fade
    }
    requestAnimationFrame(frame);
  }

  let ambientTimer = 0;
  function scheduleAmbient() {
    clearTimeout(ambientTimer);
    let range = [650, 1500];
    if (reduceMotion) range = [4500, 7000];
    else if (currentScene === 'card') range = [2600, 4800];
    ambientTimer = setTimeout(() => {
      launch();
      if (!reduceMotion && currentScene !== 'card' && Math.random() < 0.3) {
        setTimeout(() => launch(), 220);
      }
      scheduleAmbient();
    }, rand(range[0], range[1]));
  }

  function finale(count, heartsOnly = false) {
    const n = reduceMotion ? Math.ceil(count / 4) : count;
    for (let i = 0; i < n; i++) {
      const type = heartsOnly || i % 3 === 0 ? 'heart' : undefined;
      setTimeout(() => launch(undefined, undefined, type), i * 170 + rand(0, 120));
    }
  }

  /* ================= Content ================= */

  function renderContent() {
    const name = CONFIG.name.trim();
    document.title = name ? `Happy Birthday, ${name} 🎆` : 'Happy Birthday 🎆';
    $('hero-eyebrow').textContent = CONFIG.eyebrow;
    $('hero-name').textContent = name;
    $('card-date').textContent = CONFIG.dateLine ||
      new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
    $('card-title').textContent = CONFIG.cardTitle.replace('{name}', name).replace(/,\s*!/, '!');
    $('card-subtitle').textContent = CONFIG.cardSubtitle || '';

    $('card-message').replaceChildren(...CONFIG.message.map((text) => {
      const p = document.createElement('p');
      p.textContent = text;
      return p;
    }));
    $('card-closing').textContent = CONFIG.closing;
    $('card-signature').textContent = CONFIG.signature;
    $('card-emoji').textContent = CONFIG.emoji;

    // Stagger the card's entrance animation, one child at a time.
    Array.from(document.querySelector('.card').children).forEach((el, i) => {
      el.style.setProperty('--i', String(i));
    });
  }

  /** Allows only same-origin or https image URLs. */
  function safeImageUrl(src) {
    try {
      const url = new URL(src, window.location.href);
      if (url.protocol === 'https:' || url.origin === window.location.origin) return url.href;
    } catch (err) {
      // Malformed URL: fall through and drop it.
    }
    return null;
  }

  function setupSlideshow() {
    const photos = CONFIG.photos
      .map((p) => ({ caption: p.caption || '', src: safeImageUrl(p.src) }))
      .filter((p) => p.src);
    if (!photos.length) return;

    const root = $('slideshow');
    const frame = $('slideshow-frame');
    const caption = $('slideshow-caption');
    const dotsBox = $('slideshow-dots');
    const interval = Math.max(2000, CONFIG.photoIntervalMs);
    root.hidden = false;
    root.style.setProperty('--slide-ms', `${interval + 1200}ms`);
    root.classList.toggle('slideshow--single', photos.length < 2);

    const slides = photos.map((p, i) => {
      const img = document.createElement('img');
      img.className = 'slide';
      img.src = p.src;
      img.alt = p.caption || `Photo ${i + 1} of ${photos.length}`;
      img.decoding = 'async';
      img.draggable = false;
      if (i > 1) img.loading = 'lazy';
      frame.insertBefore(img, $('slide-prev'));
      return img;
    });

    const dots = photos.map((_, i) => {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'slideshow__dot';
      dot.setAttribute('aria-label', `Show photo ${i + 1}`);
      dot.addEventListener('click', () => go(i, true));
      dotsBox.appendChild(dot);
      return dot;
    });

    let index = 0;
    let timer = 0;

    function go(next, manual = false) {
      slides[index].classList.remove('is-active');
      index = (next + photos.length) % photos.length;
      const slide = slides[index];
      slide.loading = 'eager';
      // Restart the Ken Burns animation even when revisiting a slide.
      slide.style.animation = 'none';
      void slide.offsetWidth;
      slide.style.animation = '';
      slide.classList.add('is-active');
      caption.textContent = photos[index].caption;
      dots.forEach((d, i) => d.setAttribute('aria-current', String(i === index)));
      if (manual) schedule();
    }

    function schedule() {
      clearTimeout(timer);
      if (photos.length < 2) return;
      timer = setTimeout(() => {
        if (!document.hidden && currentScene === 'card') go(index + 1);
        schedule();
      }, interval);
    }

    $('slide-prev').addEventListener('click', () => go(index - 1, true));
    $('slide-next').addEventListener('click', () => go(index + 1, true));
    root.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') go(index - 1, true);
      if (e.key === 'ArrowRight') go(index + 1, true);
    });

    // Swipe left/right on touch screens.
    let startX = null;
    frame.addEventListener('pointerdown', (e) => { startX = e.clientX; });
    frame.addEventListener('pointerup', (e) => {
      if (startX === null || e.target.closest('button')) return;
      const dx = e.clientX - startX;
      startX = null;
      if (Math.abs(dx) > 40) go(index + (dx < 0 ? 1 : -1), true);
    });

    go(0);
    schedule();
  }

  /* ================= Scenes & interactions ================= */

  const scenes = { hero: $('hero'), envelope: $('envelope-scene'), card: $('card-scene') };
  const envelope = $('envelope');
  const cake = $('cake');
  const wishBtn = $('wish-btn');
  const wishMsg = $('wish-msg');
  const WISH_LABEL = wishBtn.textContent;

  function showScene(name, focusTarget) {
    currentScene = name;
    for (const [key, el] of Object.entries(scenes)) {
      const active = key === name;
      el.classList.toggle('is-active', active);
      el.inert = !active;
    }
    if (name === 'card') scenes.card.scrollTop = 0;
    scheduleAmbient();
    if (focusTarget) setTimeout(() => focusTarget.focus({ preventScroll: true }), 450);
  }

  $('open-card-btn').addEventListener('click', () => {
    showScene('envelope', envelope);
    finale(4);
  });

  envelope.addEventListener('click', () => {
    if (envelope.classList.contains('is-open')) return;
    envelope.classList.add('is-open');
    setTimeout(() => finale(10), 350);
    setTimeout(() => showScene('card', $('card-title')), 1500);
  });

  wishBtn.addEventListener('click', () => {
    const blownOut = cake.classList.toggle('is-out');
    wishMsg.textContent = blownOut ? CONFIG.wishMessage : '';
    wishBtn.textContent = blownOut ? 'Light the candles again' : WISH_LABEL;
    if (blownOut) finale(18, true);
  });

  $('close-card-btn').addEventListener('click', () => {
    showScene('hero', $('open-card-btn'));
    setTimeout(() => envelope.classList.remove('is-open'), 900);
  });

  // Tap/click empty sky to launch a firework at that spot.
  window.addEventListener('pointerdown', (e) => {
    if (e.target instanceof Element && e.target.closest('button, a, .card')) return;
    launch(e.clientX, Math.min(e.clientY, H * 0.85));
  });

  /* ================= Boot ================= */

  renderContent();
  setupSlideshow();
  resize();
  window.addEventListener('resize', resize);
  requestAnimationFrame(frame);
  scheduleAmbient();
  setTimeout(() => finale(3), 600);
}());
