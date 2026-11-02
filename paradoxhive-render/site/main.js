(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const clamp = (v, a = 0, b = 1) => Math.max(a, Math.min(b, v));
  const DOTMAP = '6Onr6+zt7+/x7+/u6+Tj6Ons7Obj5OPi3+Lj5N/f3t7i5+7u8PHy9PT8lUNIq8e5oZSHhIN9cnBwcGtmYl5ZUkxHREVJTU5OTlBSU1FOTk9PSklPT1NOSkZKT1BOUlNUU1JTVFVUU1FQUFBRTUtMTk1OT1BUXF9jWjdKOEBvZ3OAgnh1enhOpPr7/PP0/Pf///rj5P/T6err6+zt7e3r5efo5+bh3trc3t3g5unp5+Tl39zd3+Lq7/Pz8/X19fT6eREFwu7s6cHGxLGdh3RqYVhQS0lHQ0BBPz5CREVISUpLS0xMTExNT0xKTUxMSktNTk1NTkxMSkpNT1NTVFZbX2Vrb292foaNlZ2qusXSf1yBVmiTh4eOinpzfX1Yr/r1/vX2/vv/56WShuG56+zs7Orr7Ovl3+Xs6+Xl49rW19ne4eHj4t/i4OHj5e3z7/Hw7vL18u70fiISx+/y43PO+O7v8PHw6ubh2tTRyL64rqahl5iWl5GFfnp3dXR0dHJzdXV3e4GHjZCTnaKlrbS7w8rQ1tvi6O30+Pr7////////////j3SDYXCBg5mhrau0wLJmu//8/vz9////7ZVPT5W06Ofl4N3a3uTe2+Hh29fX2dfV19nb3N3d3uDk5u/07Ozt6uno5ujt6unxgCYWzfjtgRhixuvo6Ojo6evt7e7w8/b19ff28/T3+/38+vj49/j49vb3+vv7/f/////////////////////////////////////9/v/9hmh9YYrFrMC8xcSqnItkwP////////bu4MddLDxL39zY1dTV09bY2NbU1dbW1tfY2tra29ve39/g4uXp5+jn5+fr7Onp5ujyfiUTzdrBfxc1ytvk5ubn5+jp7O/y8/Lw7uzt7vL19vb29fb4+/v6+Pn6/f39/v7+/v7+/v//3vP////////h0f///qHC///c6/+Ujvv+hGV4XJjy7Pno9ufRzq5breje08e4rJqPjYJIMSwb4uTd2tza19nY1tXW1tbY2NrZ2tvb3Nzd3d7e4ODh5OXo7fP29ezm5ufyfSkPy58sTxpAgWbn5eTm5ufn6u3w7+rp6urs8fT19vPy8/T3+Pn6+/z9/v/+/v7+/////v/le533/////9h/ffb81jxJ6PKTjZY0Tb2+hG6AXZjWwbidlomCf3tzf4aGio2Ni4aFhHRCKSci0NHR0tPW19jX1tfY2tvc3Nvb3Nzc3d7f3t7f4ODi4+Xr8/j08e/q6efteyENxuxOGB0wQqry5+Pj4+Lj5OXn6Ojp6+zt7/Ly9PT29vb39/r8/f39/f7/////////+ceKQFnR////0FYhY+eTPyRjWH5sJSIkMS57eWpzZGltbW9ydXd8gIB8e3x+goWFh4SBgHhOHiVA2NfX1tXV19fX19fY293e4N7e3t7e3+Dh4eHi4OHj5OXp6+rp6efo6OjvehwHSsqkmDlgs6XEdszk4uPl5ufn5+rs8PX29PP09/n7+/v6+vv8/v7+/v7+///////9/7lmXnrj7bLbs0QfJ2lGLCEmIT1GQ1FaYmtyfIB/fn16fHp5enl8fXt5en19f35/f356fHlrQ0NK6OTh393b29vb3Nzd3d7d3d3d3t/g4eLj4+bm5OHk5+rq6eTm5+zv7e31ex4RHx0lQjY4PSAiMNfp6enq6+zu7u7y9/n7/Pn6/Pv7+vn4+Pv+//////////7W0fv/zLZfOGyXSWduPywkJCQnIRoWU3Bsf4WHh4WBf317e3t7fHp6fHx7enl3eHt9fn1/f3lhY2pmTkhc6uro5+jp6eXj4+Hg4N/g3dzd3+Hj4+Tl5eXl5ebn6Ort6+ns8fT29/j7eigkiykYGxsdFy5fw/n19Pb08/P09vf5+fb1+Pz+//7+/v3+/v///////////9GAWtHmo0ZlNCojMS4hJCIbHBwKDhMUPURHTmuBgYGAfn18fHx9fXx9f39+fHl3dHJsZWFdYWpMNUNVPDgo4+Xm5+fm5+Xm5uPh4uLk5ufn5+bn6Orq6urr7O/w7+3t7/H2+/z69/j5eysm1syoXx1tmpzi///t9+D4+Pj4+Pr5+fr8/f7///7//////////////////88/faNlLh8hIxwiHyIXHRQKFxEFHB0QLTA8RWV8fYCBgIB/f3qAe3RtZl5WSz8+OT8+PUJHYmg6IUdTJhgO4OHk5eXm6Orr6ujm5ubq7vHy8vHy8fHx8fHw7+7u7Ozv9Pj6+/v49rx7aiwmZpZLLxQ0ajFfjXFiXan8+fn6+fr6+/z9/fz9/f7+////////////////9YIvQ29hGRwWGxcYDgwOEg8GCgsJHysQPExIYHR5d3Rxal9OPjQvLCQoKS82PUFJWl9fYWFgYU8mDSc+MjUX6enq6+zr6uvq6urq6urq6+3u8fLx8vHx8vP19vb29vb29vn6+vn3+ZglMCsnIRIbakZBSxwWGhQwOuX++vv7+/v8/f7//////////////////////eHY+X8qHCMlHhoTFBAQBQMBBQgRExsMCRsSVFxORDszLi0vPCcoIzc/LixQV1hZW1paY2BkZWVhYl03GA0hOSoe5+fn5ujo6uvs7Ozt7e7u7/Dx8/P19fX19fb29vf3+Pj4+Pj5+vn5+/Z8KyIiGg9IeUtJdFVGIBFl3/37+/z8/P3+/////////////////////////IqHyIY1IiEcHxoTDw0NCAABBxMKCgkKEBcVUDk7LikrY2NvW01FN05ONTxXWFhXVlVWY2RpaWZgYmpcPhoOKz4p6erq6+zs7vDw8O/w8vLy9PT19vb29vf39vj4+Pj4+fr5+vr6+/v7+//QTCIfJTAjHh0aJ2FNXFvE/vn6+/v8/f///f7+////////////////////4VJPT2pXJhkTFDIbDw4RDQcMCDknEwodQVM5XE9xUW5sa2xzX1FINktLNDpYVlVWV1VWbnBrbWZfZ1xJRioMOUo96Onp6uvr7O3u7+/v8fHy9PX19fX19fb29vf4+Pj4+Pj4+vr7+/v7+/r4diQtxLlPKx0XV6uf8vT7+fn6+/z9//PT/v39/v7/////////////////10cpM4lxFxQeISoxJCg6NUEpKWRbNR0UFhkTVkhEPFJiaWZsXk5JOlBPOUBaVlZTUlZabmZcX1Fxd14+RTg3V2Rk4Nvf5efn6Orr7O7v8PDx8vP09PT09PX19fX29/f39/f39/j6/f/99ej7eCU17YQ4Lh4cfKFLZcf6+fj6/Pz8/49H6P/7+/v8/P39/f79/f39/v//8307JiEjEhU2U0FAMztFTVtFSmFMQyslEQEGSzskMzdCREloWUZFOlZWOzxYVllZW2NocGNdY1hVTkA0LSgcHChl3N3g5OXl5ubp6+zs7O3t7/Dx8vPz9PT09PT09PT09fT09fb604zesVfIciMsiz8NGRIJFVUtGS21xfD99vn5u0QdwfD59vb3+Pn6+/v6+/z8/f///7JVIxwbGC0yNUhPUFlnXUNQZFtLSSQaEw4QMSUhKSw+TDpMX1FZUmZiUlRiU0NAQDYnHRsiIyUtNTxIV2RjPD1B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';

  $('#yr').textContent = new Date().getFullYear();

  /* nav */
  const nav = $('#nav'), hero = $('.hero'), cta = $('.cta');
  const menu = $('#menu'), nl = $('#nl');
  menu.addEventListener('click', () => { const o = nl.classList.toggle('open'); menu.setAttribute('aria-expanded', o); });
  $$('#nl a').forEach(a => a.addEventListener('click', () => { nl.classList.remove('open'); menu.setAttribute('aria-expanded', false); }));
  const spy = $$('#nl a').map(a => [a, document.querySelector(a.getAttribute('href'))]);
  function navState() {
    const y = scrollY, heroEnd = hero.offsetHeight - 70, ctaTop = cta.offsetTop - 70;
    nav.classList.toggle('s', y > 20);
    nav.classList.toggle('light', y > heroEnd && y < ctaTop);
    let cur = null;
    spy.forEach(([a, el]) => { if (el && el.getBoundingClientRect().top < innerHeight * .4) cur = a; });
    spy.forEach(([a]) => a.classList.toggle('act', a === cur));
  }

  /* reveal */
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .1, rootMargin: '0px 0px -30px 0px' });
  $$('.rv').forEach(el => io.observe(el));

  /* card glow */
  $$('.card').forEach(c => c.addEventListener('pointermove', e => {
    const r = c.getBoundingClientRect();
    c.style.setProperty('--mx', (e.clientX - r.left) + 'px'); c.style.setProperty('--my', (e.clientY - r.top) + 'px');
  }));

  /* hero quote card */
  const qb = $$('.qtabs button'), thumb = $('#thumb'), topic = $('#topic'), qnote = $('#qnote'), qgo = $('#qgo');
  const aud = [
    { hint: 'Course or program name', btn: 'Preview', note: 'For schools, universities and training teams.' },
    { hint: 'Topic or syllabus link', btn: 'Try it', note: 'For students and self-learners. First class free.' }
  ];
  qb.forEach((b, i) => b.addEventListener('click', () => {
    qb.forEach((x, j) => x.setAttribute('aria-pressed', i === j));
    thumb.style.transform = `translateX(${i * 100}%)`;
    topic.placeholder = aud[i].hint; qgo.textContent = aud[i].btn; qnote.textContent = aud[i].note;
  }));
  $('#quote').addEventListener('submit', e => {
    e.preventDefault();
    const v = topic.value.trim();
    if (v) tutorSay(`Let's start with ${v}. I'll build the first class from your syllabus and watch how you follow along.`);
    $('#demo').scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
  });

  /* intro tabs */
  const segData = [
    'ParadoxHive turns a syllabus into a live 3D class. A lifelike AI teacher explains each topic, answers by voice and watches for confusion, then re-teaches a different way until the idea lands.',
    "AetherCore Engine (ACE) is our real-time 3D engine. It plans the lesson from the syllabus, builds each scene, runs the avatar and the experiments live, senses the learner's expression on their device, and rewrites the next step.",
    'Institutions license it for their classes (B2B). Individual learners subscribe and bring their own syllabus (B2C). Families buy finished ParadoxHive courses directly (D2C).'
  ];
  const seg = $$('#seg button'), segtxt = $('#segtxt');
  segtxt.textContent = segData[0];
  seg.forEach((b, i) => b.addEventListener('click', () => {
    seg.forEach((x, j) => x.setAttribute('aria-pressed', i === j));
    segtxt.classList.add('sw');
    setTimeout(() => { segtxt.textContent = segData[i]; segtxt.classList.remove('sw'); }, 220);
  }));

  /* demo */
  const data = [
    { label: 'Focused', level: 70, read: 'Following along', method: 'Advance with a deeper question', line: 'Good pace. One level deeper: what happens to the push down the slope when the angle doubles?', mouth: 'M54 59 Q64 66 74 59', eye: 2 },
    { label: 'Confused', level: 32, read: 'Low: confusion detected', method: 'Re-explain with an analogy and a 3D demonstration', line: 'Let me slow down. Think of the ramp as a slide: the steeper it is, the bigger the push. Watch it in the room.', mouth: 'M54 62 Q59 58 64 62 T74 62', eye: 2.7 },
    { label: 'Drifting', level: 20, read: 'Attention dropping', method: 'Switch to a hands-on challenge', line: "Let's change approach. You set the angle and launch the ball; we'll see where it lands.", mouth: 'M54 61 L74 61', eye: 1 },
    { label: 'Got it', level: 92, read: 'High: concept landed', method: 'Quick check, then move on', line: 'That clicked. Two quick questions to confirm, then we move on to friction.', mouth: 'M52 57 Q64 72 76 57', eye: 2 }
  ];
  const emo = $('#emo'), bar = $('#bar'), readEl = $('#read'), methodEl = $('#method'), lineEl = $('#line');
  const mouth = $('#mouth'), eyeL = $('#eyeL'), eyeR = $('#eyeR');
  let typing, auto, touched = false, cur = 1;
  emo.innerHTML = data.map((d, i) => `<button data-i="${i}" aria-pressed="false">${d.label}</button>`).join('');
  const eb = $$('button', emo);
  function tutorSay(text) {
    clearInterval(typing);
    if (reduce) { lineEl.textContent = text; return; }
    let i = 0; lineEl.textContent = '';
    typing = setInterval(() => { lineEl.textContent = text.slice(0, ++i); if (i >= text.length) clearInterval(typing); }, 16);
  }
  function pick(i) {
    cur = i; const d = data[i];
    eb.forEach((b, j) => b.setAttribute('aria-pressed', j === i));
    bar.style.width = d.level + '%'; readEl.textContent = d.read; methodEl.textContent = d.method;
    mouth.setAttribute('d', d.mouth); eyeL.setAttribute('r', d.eye); eyeR.setAttribute('r', d.eye);
    tutorSay(d.line);
  }
  eb.forEach((b, i) => b.addEventListener('click', () => { touched = true; clearInterval(auto); pick(i); }));
  pick(1);
  new IntersectionObserver(es => es.forEach(e => {
    clearInterval(auto);
    if (e.isIntersecting && !touched && !reduce) auto = setInterval(() => pick((cur + 1) % data.length), 6500);
  }), { threshold: .4 }).observe($('.win'));

  /* pinned horizontal story */
  const hs = $('#story'), track = $('#track'), cards = $$('.hc', track), hsd = $$('#hsd i');
  function story() {
    if (innerWidth <= 1000) { track.style.transform = ''; cards.forEach(c => c.classList.add('on')); return; }
    const r = hs.getBoundingClientRect();
    const p = clamp(-r.top / (hs.offsetHeight - innerHeight));
    const max = Math.max(0, track.scrollWidth - innerWidth + 24);
    track.style.transform = `translate3d(${-p * max}px,0,0)`;
    const idx = Math.min(cards.length - 1, Math.floor(p * cards.length * .999));
    cards.forEach((c, i) => c.classList.toggle('on', i <= idx));
    hsd.forEach((d, i) => d.classList.toggle('on', i === idx));
  }

  /* parallax bento */
  const px = $$('.px');
  function parallax() {
    if (innerWidth < 800 || reduce) return;
    px.forEach(el => {
      const r = el.getBoundingClientRect(), mid = r.top + r.height / 2 - innerHeight / 2;
      el.style.transform = `translate3d(0,${-mid * parseFloat(el.dataset.s || 0)}px,0)`;
    });
  }

  /* pipeline */
  const pipe = $('#pipe'), pfill = $('#pfill'), sts = $$('.st', pipe);
  function pipeFill() {
    const r = pipe.getBoundingClientRect();
    const p = clamp((innerHeight * .8 - r.top) / (r.height * .9 + innerHeight * .2));
    pfill.style.width = (p * 100) + '%';
    sts.forEach((s, i) => s.classList.toggle('on', p >= i / sts.length + .05));
  }

  let tick = false;
  const onScroll = () => { if (tick) return; tick = true; requestAnimationFrame(() => { tick = false; navState(); story(); parallax(); pipeFill(); }); };
  addEventListener('scroll', onScroll, { passive: true });
  addEventListener('resize', onScroll);

  /* dotted canvases */
  function dotField(cv, draw, fps = 30, color = 'rgba(255,255,255,.86)') {
    const ctx = cv.getContext('2d');
    let W, H, running = true, last = 0, mx = -999, my = -999;
    const size = () => { W = cv.clientWidth; H = cv.clientHeight; cv.width = W; cv.height = H; };
    size(); addEventListener('resize', () => { size(); if (reduce) render(0); });
    cv.parentElement.addEventListener('pointermove', e => { const r = cv.getBoundingClientRect(); mx = e.clientX - r.left; my = e.clientY - r.top; });
    cv.parentElement.addEventListener('pointerleave', () => { mx = my = -999; });
    function render(t) { ctx.clearRect(0, 0, W, H); ctx.fillStyle = color; draw(ctx, W, H, t / 1000, mx, my); }
    function loop(t) { if (!running) return; if (t - last > 1000 / fps) { last = t; render(t); } requestAnimationFrame(loop); }
    new IntersectionObserver(es => { const v = es[0].isIntersecting; if (v && !running) { running = true; requestAnimationFrame(loop); } running = v; }).observe(cv.parentElement);
    render(0); if (!reduce) requestAnimationFrame(loop);
  }

  const bin = atob(DOTMAP), MW = 150, MH = 100, map = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) map[i] = bin.charCodeAt(i);
  const GAP = 7;
  dotField($('#dots'), (ctx, W, H, t, mx, my) => {
    const aw = Math.max(W * .72, 520), ax = W - aw;
    const sc = Math.max(aw / MW, H / MH), iw = MW * sc, ih = MH * sc, ox = W - iw, oy = (H - ih) / 2;
    for (let y = GAP / 2; y < H; y += GAP) {
      for (let x = GAP / 2; x < W; x += GAP) {
        const u = (x - ox) / iw, v = (y - oy) / ih;
        let s = 0;
        if (u >= 0 && u < 1 && v >= 0 && v < 1) {
          const b = map[(v * MH | 0) * MW + (u * MW | 0)] / 255;
          s = Math.pow(b, .9) * 3.4;
        } else s = .6;
        s *= .78 + .22 * Math.sin(x * .014 + y * .011 + t * 1.4);
        const dx = x - mx, dy = y - my, d2 = dx * dx + dy * dy;
        if (d2 < 16900) { const k = 1 - Math.sqrt(d2) / 130; s *= 1 + k * 1.3; }
        if (s > .45) ctx.fillRect(x - s / 2, y - s / 2, s, s);
      }
    }
  }, 30, 'rgba(170,195,255,.55)');
  const d2 = $('#dots2');
  if (d2) dotField(d2, (ctx, W, H, t, mx, my) => {
    for (let y = GAP / 2; y < H; y += GAP) {
      for (let x = GAP / 2; x < W; x += GAP) {
        const fx = x / W, fy = y / H;
        let s = (.5 + .5 * Math.sin(fx * 9 + t * .9) * Math.cos(fy * 7 - t * .7)) * (.35 + fx * 1.1) * 3;
        const dx = x - mx, dy = y - my, dd = dx * dx + dy * dy;
        if (dd < 16900) s *= 1 + (1 - Math.sqrt(dd) / 130) * 1.2;
        if (s > .45) ctx.fillRect(x - s / 2, y - s / 2, s, s);
      }
    }
  }, 24);


  /* copy emails */
  $$('.cp').forEach(b => b.addEventListener('click', () => {
    const t = b.dataset.c, done = () => { b.textContent = 'Copied'; setTimeout(() => b.textContent = 'Copy', 1600); };
    const fb = () => { const r = document.createRange(); r.selectNodeContents(b.previousElementSibling); const sel = getSelection(); sel.removeAllRanges(); sel.addRange(r); };
    if (navigator.clipboard) navigator.clipboard.writeText(t).then(done, fb); else fb();
  }));

  /* scorecard bars */
  const sc = $('#sc');
  if (sc) new IntersectionObserver((es, o) => es.forEach(e => { if (e.isIntersecting) { $$('.sb i', sc).forEach((i, k) => setTimeout(() => i.style.width = i.dataset.v + '%', reduce ? 0 : k * 120)); o.disconnect(); } }), { threshold: .4 }).observe(sc);

  /* self-healing roadmap */
  const rdays = $('#rdays'), rnote = $('#rnote');
  if (rdays) {
    const D = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const st = [
      { t: ['Forces', 'Energy', 'Waves', 'Optics', 'Heat', 'Revise', 'Test'], c: ['', '', '', '', '', '', ''], n: 'Plan on track: seven days, seven topics.' },
      { t: ['Forces', 'Leave', 'Leave', 'Optics', 'Heat', 'Revise', 'Test'], c: ['', 'miss', 'miss', '', '', '', ''], n: 'Two days missed for a leave. Energy and Waves are now a backlog.' },
      { t: ['Forces', 'Leave', 'Leave', 'Energy', 'Waves', 'Optics + Heat', 'Test'], c: ['', 'miss', 'miss', 'fix', 'fix', 'fix', ''], n: 'Roadmap updated: backlog covered by Sunday, test date unchanged.' }
    ];
    let k = 0;
    const draw = () => { const s = st[k]; rdays.innerHTML = D.map((d, i) => `<div class="rd ${s.c[i]}"><small>${d}</small>${s.t[i]}</div>`).join(''); rnote.textContent = s.n; };
    draw();
    if (!reduce) setInterval(() => { k = (k + 1) % st.length; draw(); }, 3600);
  }

  navState(); story(); parallax(); pipeFill();
})();
