import { courses } from './data/courses.js';
import { icons, googleIcon, panda } from './icons.js';

const PANDA_LINES = {
  html: `Hi, I'm Ximie. Let's give the web a skeleton.`,
  css: `CSS is just dressing up boxes. Very fancy boxes.`,
  js: `JavaScript: the only language where 0.1 + 0.2 is a personality test.`,
};
const GOOD_LINES = [
  `Bamboo-tiful work!`,
  `Correct! I'd high-five you, but paws.`,
  `Yes! I did a tiny roll. Don't tell anyone.`,
  `You code like you've eaten 40 dumplings. Powerful.`,
  `Nailed it. Even my small panda brain is impressed.`,
  `Smooth, like sliding down a bamboo shoot.`,
];
const BAD_LINES = [
  `Almost! Wrong is just practise in disguise.`,
  `Nope - but I fell over laughing. Try again.`,
  `That one bit me. Read it once more?`,
  `Not quite. Deep breath, tiny bamboo break.`,
  `Wrong answer, right attitude. The hint is below.`,
  `My cousin panda got that wrong too. He's a panda, though.`,
];
const DONE_LINES = [
  `Lesson complete! I'm doing cartwheels. Badly.`,
  `You did it! I ate a whole bamboo to celebrate.`,
  `Another one down. You're becoming dangerous.`,
  `That's a wrap. My paws are tired just watching.`,
];
const LEAGUE_USERS = [
  { name: 'Mira', xp: 1840, color: '#ffd7e6', initials: 'M' },
  { name: 'Kenji', xp: 1320, color: '#d8ecff', initials: 'K' },
  { name: 'Ada', xp: 960, color: '#ffe8bf', initials: 'A' },
  { name: 'Leo', xp: 540, color: '#e4ddff', initials: 'L' },
  { name: 'Sana', xp: 310, color: '#d5f3de', initials: 'S' },
];
const ACHIEVEMENTS = [
  ['First step', 'book'], ['Quick learner', 'zap'], ['On a roll', 'rocket'], ['Sharpshooter', 'target'],
  ['HTML explorer', 'bookOpen'], ['CSS painter', 'sparkles'], ['JS tinkerer', 'clock'], ['Century', 'flame'],
  ['Perfect lesson', 'check'], ['Daily habit', 'medal'], ['Globe trotter', 'globe'], ['Night owl', 'clock'],
  ['Half way', 'target'], ['Course crusher', 'trophy'], ['Panda friend', 'heart'],
];

const STORAGE_KEY = 'ximie.state.v1';
const BASE = location.hostname.endsWith('github.io') ? '/Ximie' : '';
const app = document.getElementById('app');

const defaults = () => ({
  completedLessons: [],
  xpToday: 0,
  totalXp: 0,
  gems: 0,
  streak: 0,
  hearts: 5,
  dailyGoal: 20,
  sound: true,
  signedIn: false,
  profileName: 'Guest learner',
  lastActiveDate: '',
});

let state = loadState();

function loadState() {
  try {
    const raw = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
    const merged = { ...defaults(), ...(raw || {}) };
    const today = new Date().toISOString().slice(0, 10);
    const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
    if (merged.lastActiveDate && merged.lastActiveDate !== today && merged.lastActiveDate !== yesterday) {
      merged.streak = 0;
    }
    if (merged.lastActiveDate !== today) {
      merged.xpToday = 0;
      if (merged.hearts < 5) merged.hearts = 5;
    }
    return merged;
  } catch {
    return defaults();
  }
}
function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}
function today() {
  return new Date().toISOString().slice(0, 10);
}
function esc(value = '') {
  return String(value).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
}
function pick(list) {
  return list[Math.floor(Math.random() * list.length)];
}
function findLesson(id) {
  for (const course of courses) {
    for (const unit of course.units) {
      const lesson = unit.lessons.find((l) => l.id === id);
      if (lesson) return { course, unit, lesson };
    }
  }
  return null;
}
function allLessons(course) {
  return course.units.flatMap((unit) => unit.lessons);
}
function icon(name, cls = 'h-4') {
  return (icons[name] || '').replace('class="lucide ', `class="lucide ${cls} `);
}

let toastTimer;
function toast(message) {
  document.querySelector('.toast')?.remove();
  const node = document.createElement('div');
  node.className = 'toast';
  node.textContent = message;
  document.body.appendChild(node);
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => node.remove(), 2200);
}

let audioCtx;
function beep(freq = 660, duration = 0.12, type = 'sine') {
  if (!state.sound) return;
  try {
    audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
    osc.connect(gain).connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch {
    /* audio is optional */
  }
}

function navigate(path) {
  const target = BASE + path;
  if (location.pathname !== target) history.pushState({}, '', target);
  render();
  window.scrollTo(0, 0);
}

const ui = { courseId: 'html' };
const SESSION_KEY = 'ximie.session.v1';

function saveSession() {
  try {
    if (session && !session.finished && !session.outOfHearts) {
      localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    } else {
      localStorage.removeItem(SESSION_KEY);
    }
  } catch {
    /* storage may be unavailable; the lesson still works in memory */
  }
}

function loadSession() {
  try {
    const saved = JSON.parse(localStorage.getItem(SESSION_KEY) || 'null');
    if (saved && Array.isArray(saved.exercises) && Number.isInteger(saved.index) && !saved.finished && !saved.outOfHearts) {
      return saved;
    }
  } catch {
    /* ignore a corrupt saved session */
  }
  return null;
}

let session = loadSession();

/* ------------------------------ chrome ------------------------------ */

function siteHeader() {
  const links = [
    ['/', 'Learn', 'book', '/'],
    ['/recall', 'Recall', 'brain', '/recall'],
    ['/leaderboard', 'League', 'trophy', '/leaderboard'],
    ['/profile', 'Profile', 'user', '/profile'],
  ];
  const path = location.pathname;
  return `<header class="site-header"><div class="header-inner">
    <a href="/" class="brand-link" aria-label="Ximie home">
      <span class="brand-mark">${panda('happy', 32)}</span>
      <span class="brand-name">Ximie</span>
    </a>
    <nav class="desktop-nav">${links
      .map(([href, label, ico, match]) => `<a href="${href}" class="nav-link ${path === match ? 'active' : ''}">${icon(ico)} ${label}</a>`)
      .join('')}</nav>
    <div class="header-stats">
      <span class="stat-pill" title="Streak">${icon('flame')} ${state.streak}</span>
      <span class="stat-pill" title="Gems">${icon('gem')} ${state.gems}</span>
      <span class="stat-pill" title="Hearts">${icon('heart')} ${state.hearts}</span>
      <button type="button" class="icon-btn" id="sound-toggle" aria-label="${state.sound ? 'Turn sound effects off' : 'Turn sound effects on'}">${icon(state.sound ? 'volume' : 'volumeOff')}</button>
      ${state.signedIn ? `<a href="/profile" class="signin-link">${esc(state.profileName.split(' ')[0])}</a>` : `<a href="/login" class="signin-link">Sign in</a>`}
    </div>
  </div></header>`;
}

function bottomNav() {
  const links = [
    ['/', 'Learn', 'bookOpen'],
    ['/recall', 'Recall', 'brain'],
    ['/leaderboard', 'League', 'trophy'],
    ['/profile', 'Profile', 'user'],
  ];
  const path = location.pathname;
  return `<nav class="bottom-nav"><div class="bottom-nav-inner">${links
    .map(([href, label, ico]) => `<a href="${href}" class="bottom-link ${path === href ? 'active' : ''}">${icon(ico, 'h-5')}${label}</a>`)
    .join('')}</div></nav>`;
}

function goalRing(value, goal, size = 78) {
  const ratio = goal > 0 ? Math.min(1, value / goal) : 0;
  const r = (size - 11) / 2;
  const circumference = 2 * Math.PI * r;
  return `<div class="goal-ring" style="width:${size}px">
    <svg width="${size}" height="${size}" aria-hidden="true">
      <circle cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" stroke="hsl(var(--border))" stroke-width="7" />
      <circle cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" stroke="hsl(var(--brand))" stroke-width="7" stroke-linecap="round"
        stroke-dasharray="${circumference}" stroke-dashoffset="${circumference * (1 - ratio)}" style="transition:stroke-dashoffset .7s" />
    </svg>
    <div class="goal-center">
      <div class="font-display" style="font-size:18px;font-weight:800;line-height:1">${Math.round(ratio * 100)}%</div>
      <div class="goal-caption">Goal</div>
    </div>
  </div>`;
}

/* -------------------------------- home ------------------------------- */

function homePage() {
  const course = courses.find((c) => c.id === ui.courseId) || courses[0];
  const lessons = allLessons(course);
  const completed = new Set(state.completedLessons);
  const done = lessons.filter((l) => completed.has(l.id)).length;
  const current = lessons.find((l) => !completed.has(l.id));
  const pct = lessons.length ? Math.round((done / lessons.length) * 100) : 0;
  const tone = course.id;
  const tabs = courses
    .map((c) => `<button type="button" class="course-tab ${c.id === course.id ? 'active' : ''}" data-tone="${c.id}" data-course="${c.id}">${esc(c.title)}</button>`)
    .join('');

  const units = course.units
    .map((unit, unitIndex) => {
      const offsets = [0, -52, -84, -52, 0, 52, 84, 52];
      const nodes = unit.lessons
        .map((lesson, i) => {
          const status = completed.has(lesson.id) ? 'done' : current && lesson.id === current.id ? 'current' : 'locked';
          const label = status === 'done' ? 'done' : status === 'current' ? 'current' : 'locked';
          return `<div class="path-node" style="transform:translateX(${offsets[i % offsets.length]}px)">
            ${status === 'current' ? '<span class="start-tip">Start</span>' : ''}
            <button type="button" class="node-btn ${status}" data-tone="${tone}" data-lesson="${lesson.id}" aria-label="${esc(lesson.title)} — ${label}">
              ${status === 'done' ? icon('check', 'h-8') : status === 'locked' ? icon('lock', 'h-5') : icon('star', 'h-8')}
            </button>
            <span class="node-label ${status === 'locked' ? 'locked' : ''}">${esc(lesson.title)}</span>
          </div>`;
        })
        .join('');
      return `<section class="unit">
        <div class="unit-head" data-tone="${tone}">
          <div class="eyebrow">Unit ${unitIndex + 1}</div>
          <div class="unit-title-row">
            <h2>${esc(unit.subtitle)}</h2>
            <span class="unit-count">${unit.lessons.filter((l) => completed.has(l.id)).length}/${unit.lessons.length}</span>
          </div>
        </div>
        <div class="path">${nodes}</div>
      </section>`;
    })
    .join('');

  const buttonLabel = !current ? 'Practise again' : done === 0 ? 'Start learning' : 'Continue';
  const target = current || lessons[lessons.length - 1];

  return `<main>
    <div class="medium">
      <div class="course-tabs">${tabs}</div>
      <section class="card course-card">
        <div class="course-head">
          <div>
            <span class="badge">${icon('sparkles', 'h-4')} ${done === lessons.length ? 'Course complete' : `${pct}% complete`}</span>
            <h1 class="course-title">${esc(course.title)}</h1>
            <p class="course-tagline">${esc(course.tagline)}</p>
          </div>
          ${goalRing(state.xpToday, state.dailyGoal)}
        </div>
        <p class="course-desc">${esc(course.description)}</p>
        <div class="panda-line">${panda(done === lessons.length ? 'cheer' : 'happy', 46)}<p>${esc(PANDA_LINES[course.id])}</p></div>
        <div class="course-actions">
          <div class="course-actions-row">
            <button type="button" class="btn btn-lg btn-${tone} w-full" data-start="${target.id}">${buttonLabel} ${icon('arrow')}</button>
            <p class="text-muted-foreground" style="font-size:12px;font-weight:700">${done} of ${lessons.length} lessons done</p>
          </div>
        </div>
      </section>
      ${state.signedIn ? '' : `<div class="guest-note">
        <span>Playing as a guest — progress is saved on this device.</span>
        <span style="font-family:var(--font-display);font-size:13px;font-weight:800;text-transform:uppercase;color:hsl(var(--muted-foreground))">Sign-in coming soon</span>
      </div>`}
      ${units}
      <p class="end-note">More units are on the way. Keep your streak alive!</p>
    </div>
  </main>`;
}

/* ------------------------------- lesson ------------------------------ */

function prepareSession(id, practice = false) {
  if (!practice && !findLesson(id)) return false;
  const lesson = practice ? null : findLesson(id).lesson;
  const exercises = practice
    ? practiceQuestions()
    : lesson.exercises;
  if (!exercises.length) {
    toast('Finish a lesson first to unlock recall.');
    return false;
  }
  session = {
    id,
    practice,
    lesson,
    exercises,
    index: 0,
    selected: null,
    tokens: [],
    code: '',
    status: 'idle',
    message: '',
    earned: 0,
    finished: false,
    outOfHearts: false,
  };
  const first = exercises[0];
  session.code = first.type === 'code' ? first.starter || '' : '';
  return true;
}

function startLesson(id, practice = false) {
  if (!prepareSession(id, practice)) {
    navigate('/');
    return;
  }
  const path = practice ? '/recall' : `/lesson/${id}`;
  if (location.pathname !== BASE + path) history.pushState({}, '', BASE + path);
  render();
  window.scrollTo(0, 0);
}

function practiceQuestions() {
  const done = new Set(state.completedLessons);
  const pool = [];
  for (const course of courses) {
    for (const unit of course.units) {
      for (const lesson of unit.lessons) {
        if (!done.has(lesson.id)) continue;
        for (const ex of lesson.exercises) {
          if (ex.type === 'choice' || ex.type === 'fill') pool.push({ ...ex, _source: lesson.title });
        }
      }
    }
  }
  // Prefer choice questions and take a small, shuffled sample.
  const shuffled = pool.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 5);
}

function lessonHeader() {
  const total = session?.exercises.length || 1;
  const progress = session ? Math.min(100, Math.round((session.index / total) * 100)) : 0;
  return `<header class="lesson-header"><div class="lesson-header-inner">
    <a href="/" class="icon-btn" aria-label="Quit lesson">${icon('x')}</a>
    <div class="progress-track"><div class="progress-fill" style="width:${progress}%"></div></div>
    <button type="button" class="icon-btn" id="sound-toggle" aria-label="Toggle sound">${icon(state.sound ? 'volume' : 'volumeOff')}</button>
    <span class="stat-pill">${icon('heart')} ${state.hearts}</span>
  </div></header>`;
}

function previewWrapper(doc) {
  return `<style>
    body { font-family: Nunito, system-ui, sans-serif; padding: 12px; color: #2f2f38; }
    img { max-width: 100%; height: auto; border-radius: 10px; }
    table { border-collapse: collapse; }
    th, td { border: 1px solid #cbd5d0; padding: 6px 10px; }
  </style>
  <scr` + `ipt>
    document.addEventListener('error', function (e) {
      var el = e.target;
      if (el && el.tagName === 'IMG' && !el.dataset.previewFallback) {
        el.dataset.previewFallback = '1';
        el.src = 'assets/image-placeholder.svg';
        el.alt = el.alt || 'Image preview';
      }
    }, true);
  </scr` + `ipt>` + doc;
}

function previewDoc(ex, code) {
  const preview = ex.preview;
  if (!preview) return '';
  const html = preview.html || '';
  const empty = `<div style="font:600 13px Nunito,sans-serif;color:#94a3b8">Your preview appears here as you type</div>`;
  if (!code || !code.trim()) {
    return previewWrapper(preview.mode === 'html' ? empty : `<style>${code || ''}</style>${html || empty}`);
  }
  if (preview.mode === 'html') return previewWrapper(code);
  if (preview.mode === 'css') return previewWrapper(`<style>${code}</style>${html}`);
  if (preview.mode === 'js') return previewWrapper(`${html}<scr` + `ipt>${code}</scr` + `ipt>`);
  return '';
}

function exerciseHtml(ex) {
  const kicker = `<div class="exercise-kicker">${panda('happy', 24)} Exercise ${session.index + 1} of ${session.exercises.length}</div>`;
  const prompt = `<h1 class="exercise-prompt">${esc(ex.prompt)}</h1>`;
  const codeBlock = ex.code ? `<pre class="prompt-code">${esc(ex.code)}</pre>` : '';
  const demoImage = ex.demoImage
    ? `<div class="image-demo"><img src="${esc(ex.demoImage.src)}" alt="${esc(ex.demoImage.alt)}"
        onerror="this.onerror=null;this.src='/assets/image-placeholder.svg'" />
        <span class="image-demo-caption">${esc(ex.demoImage.alt)}</span></div>`
    : '';
  let body = '';

  if (ex.type === 'choice') {
    body = `<div class="option-list">${ex.options
      .map((option, i) => {
        let cls = 'option';
        if (session.status === 'correct' && i === ex.answer) cls += ' correct';
        else if (session.status === 'wrong' && i === session.selected) cls += ' wrong';
        else if (session.status === 'wrong' && i === ex.answer) cls += ' correct';
        else if (session.selected === i) cls += ' selected';
        return `<button type="button" class="${cls}" data-option="${i}"><span class="option-letter">${'ABC'[i] || i + 1}</span><span>${esc(option)}</span></button>`;
      })
      .join('')}</div>`;
  } else if (ex.type === 'fill') {
    const used = new Set(session.tokens.map((t) => t.i));
    body = `<div class="word-bank">${ex.bank
      .map((word, i) => `<button type="button" class="word-chip ${used.has(i) ? 'used' : ''}" data-bank="${i}" ${used.has(i) ? 'disabled' : ''}>${esc(word)}</button>`)
      .join('')}</div>
      <div class="answer-slots">${session.tokens.length
        ? session.tokens
            .map((t, i) => `<button type="button" class="slot" data-slot="${i}">${esc(t.text)}</button>`)
            .join('')
        : '<span style="font-size:13px;font-weight:700;color:hsl(var(--muted-foreground))">Tap the words below to build the answer</span>'}</div>`;
  } else if (ex.type === 'code') {
    body = `<textarea class="code-editor" id="code-editor" spellcheck="false" aria-label="Code editor">${esc(session.code)}</textarea>`;
    if (ex.preview) {
      body += `<div class="preview-box"><iframe title="Preview" sandbox="allow-scripts" srcdoc="${esc(previewDoc(ex, session.code))}"></iframe></div>`;
    }
  }

  let feedback = '';
  if (session.status === 'correct') {
    feedback = `<div class="feedback good">${icon('check')} <span>${esc(session.message)} ${ex.explain ? esc(ex.explain) : ''}</span></div>`;
  } else if (session.status === 'wrong') {
    feedback = `<div class="feedback bad">${icon('x')} <span>${esc(session.message)} ${ex.explain ? esc(ex.explain) : ''}</span>
      <button type="button" class="show-answer" data-show-answer>Show answer</button></div>`;
  }

  const checkLabel =
    session.outOfHearts ? 'SEE RESULT' :
    session.status === 'correct' ? 'CONTINUE' :
    session.status === 'wrong' ? 'TRY AGAIN' : 'CHECK';
  const btnState = session.status === 'correct' ? 'ready' : session.status === 'wrong' ? 'wrong-muted' : '';
  const hasAnswer =
    ex.type === 'choice' ? session.selected !== null :
    ex.type === 'fill' ? session.tokens.length > 0 :
    Boolean(session.code && session.code.trim());
  const disabled = session.status === 'idle' && !hasAnswer ? 'disabled' : '';

  return { content: `${kicker}${prompt}${codeBlock}${demoImage}${body}${feedback}`, checkLabel, btnState, disabled };
}

function lessonPage() {
  if (!session) return `<main><div class="medium">${homePage()}</div></main>`;

  if (session.outOfHearts) {
    return `${lessonHeader()}<main><div class="completion">
      ${panda('think', 120)}
      <h1>Out of hearts</h1>
      <p style="margin-top:8px;color:hsl(var(--muted-foreground));font-weight:600">${esc(pick(['No hearts left! Bamboo nap time?', 'Out of hearts. Even pandas need a rest.']))}</p>
      <div style="margin-top:24px;display:flex;justify-content:center;gap:12px">
        <button type="button" class="btn btn-brand" data-refill>Refill hearts</button>
        <a href="/" class="btn btn-neutral">Back to the path</a>
      </div>
    </div></main>`;
  }

  if (session.finished) {
    return `${lessonHeader()}<main><div class="completion">
      ${panda('cheer', 140)}
      <h1 style="margin-top:16px">${esc(pick(DONE_LINES))}</h1>
      <p style="margin-top:8px;color:hsl(var(--muted-foreground));font-weight:600">${session.practice ? 'Recall complete' : esc(session.lesson?.title || '')}</p>
      <div class="rewards">
        <div class="reward-box"><strong>+${session.earned}</strong><span class="section-label">XP</span></div>
        <div class="reward-box"><strong>+5</strong><span class="section-label">Gems</span></div>
      </div>
      <p style="margin-top:16px;font-size:12px;font-weight:800;color:hsl(var(--muted-foreground))">Progress saved on this device.</p>
      <a href="/" class="btn btn-lg btn-brand" style="margin-top:20px">Continue ${icon('arrow')}</a>
    </div></main>`;
  }

  const ex = session.exercises[session.index];
  const { content, checkLabel, btnState, disabled } = exerciseHtml(ex);
  return `${lessonHeader()}
    <main><div class="lesson-content">${content}</div></main>
    <div class="lesson-footer"><div class="lesson-footer-inner">
      <button type="button" class="btn btn-check ${btnState} w-full" id="check-btn" ${disabled}>${checkLabel}</button>
      ${session.status === 'wrong' && state.hearts > 0 ? '<span class="hint">Tap an answer to try again</span>' : ''}
    </div></div>`;
}

function normalizeCode(code) {
  return String(code || '')
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201C\u201D]/g, '"')
    .replace(/'/g, '"')
    .replace(/\r/g, '');
}

function checkAnswer() {
  const ex = session.exercises[session.index];
  let correct = false;
  if (ex.type === 'choice') {
    correct = session.selected === ex.answer;
  } else if (ex.type === 'fill') {
    const given = session.tokens.map((t) => String(t.text).trim());
    const expected = ex.solution.map((s) => String(s).trim());
    const exact = given.join(' ') === expected.join(' ');
    // Attribute order does not change the meaning, but tag order does. Keep
    // the opening tag first; keep the closing tag last when one is required.
    const hasClosingTag = expected.some((token) => /^<\//.test(token));
    const loose =
      given.length === expected.length &&
      given[0] === expected[0] &&
      (!hasClosingTag || given[given.length - 1] === expected[expected.length - 1]) &&
      [...given].sort().join('\u0000') === [...expected].sort().join('\u0000');
    correct = exact || loose;
  } else if (ex.type === 'code') {
    const variants = [String(session.code || ''), normalizeCode(session.code)];
    correct = (ex.checks || []).every((pattern) => {
      try {
        const re = new RegExp(pattern, 'i');
        return variants.some((value) => re.test(value));
      } catch {
        return false;
      }
    });
  }
  session.status = correct ? 'correct' : 'wrong';
  session.message = correct ? pick(GOOD_LINES) : pick(BAD_LINES);
  if (correct) {
    beep(760, 0.12);
    session.earned += 2;
  } else {
    beep(180, 0.22, 'triangle');
    state.hearts = Math.max(0, state.hearts - 1);
    saveState();
    if (state.hearts <= 0 && !session.practice) session.outOfHearts = true;
  }
  render();
}

function retryAnswer() {
  if (!session) return;
  const ex = session.exercises[session.index];
  session.selected = null;
  session.tokens = [];
  session.status = 'idle';
  session.message = '';
  render();
}

function showAnswer() {
  if (!session) return;
  const ex = session.exercises[session.index];
  if (ex.type === 'choice') {
    session.selected = ex.answer;
  } else if (ex.type === 'fill') {
    session.tokens = ex.solution
      .map((text) => ({ i: ex.bank.findIndex((b) => String(b).trim() === String(text).trim()), text }))
      .filter((token) => token.i >= 0);
  } else {
    session.code = ex.solution || '';
  }
  session.status = 'idle';
  session.message = '';
  render();
}

function continueLesson() {
  if (session.index + 1 < session.exercises.length) {
    session.index += 1;
    session.selected = null;
    session.tokens = [];
    session.status = 'idle';
    session.message = '';
    const ex = session.exercises[session.index];
    session.code = ex.type === 'code' ? ex.starter || '' : '';
    render();
    return;
  }
  if (!session.practice) {
    const completed = new Set(state.completedLessons);
    if (!completed.has(session.id)) state.completedLessons.push(session.id);
    const todayKey = today();
    const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
    if (state.lastActiveDate !== todayKey) {
      state.streak = state.lastActiveDate === yesterday ? state.streak + 1 : 1;
      state.lastActiveDate = todayKey;
    }
    state.gems += 5;
    state.xpToday += session.earned;
    state.totalXp += session.earned;
  } else {
    state.xpToday += session.earned;
    state.totalXp += session.earned;
  }
  saveState();
  session.finished = true;
  beep(880, 0.18);
  render();
}

/* ------------------------------- recall ------------------------------ */

function recallPage() {
  const done = state.completedLessons.length;
  if (!done) {
    return `<main><div class="narrow"><div class="card-sm empty-card">
      <div class="panda">${panda('think', 110)}</div>
      <h1>Nothing to recall yet</h1>
      <p>Finish a lesson first — then I'll quiz you on the bits you've already learned.</p>
      <a href="/" class="btn btn-brand">Back to the path ${icon('arrow')}</a>
    </div></div></main>`;
  }
  return `<main><div class="narrow">
    <div class="card-sm empty-card">
      <div class="panda">${panda('happy', 110)}</div>
      <h1>Daily recall</h1>
      <p>A quick quiz on ${done} completed lesson${done === 1 ? '' : 's'}. Five questions, no pressure.</p>
      <button type="button" class="btn btn-brand" data-practice>Start recall ${icon('arrow')}</button>
    </div>
  </div></main>`;
}

/* ------------------------------ leaderboard --------------------------- */

function underDevelopmentPage(title, description) {
  return `<main><div class="narrow"><div class="card-sm empty-card">
    <div class="panda">${panda('think', 110)}</div>
    <h1>Under development</h1>
    <p><strong>${esc(title)}</strong><br />${esc(description)}</p>
    <a href="/" class="btn btn-brand">Back to the path ${icon('arrow')}</a>
  </div></div></main>`;
}

function leaguePage() {
  return underDevelopmentPage(
    'The league isn’t ready yet.',
    'Leaderboards are still being built. Your XP and lessons are saved locally on this device.'
  );
}

/* -------------------------------- profile ---------------------------- */

function profilePage() {
  const name = state.signedIn ? state.profileName : 'Guest learner';
  const initials = name.split(/[\s@]+/).map((s) => s[0]).join('').slice(0, 2).toUpperCase() || 'GL';
  const level = Math.floor(state.totalXp / 60) + 1;
  const levelProgress = state.totalXp % 60;
  const completed = new Set(state.completedLessons);

  const goals = [10, 20, 30, 50]
    .map((goal) => `<button type="button" class="goal-chip ${state.dailyGoal === goal ? 'active' : ''}" data-goal="${goal}">${goal} XP</button>`)
    .join('');
  const progressRows = courses
    .map((course) => {
      const lessons = allLessons(course);
      const done = lessons.filter((l) => completed.has(l.id)).length;
      const pct = lessons.length ? Math.round((done / lessons.length) * 100) : 0;
      const color = course.id === 'html' ? 'var(--html)' : course.id === 'css' ? 'var(--css)' : 'var(--brand)';
      return `<div class="course-progress-row">
        <div class="row"><strong>${esc(course.title)}</strong><span class="text-muted-foreground" style="font-size:12px;font-weight:800">${done}/${lessons.length} · ${pct}%</span></div>
        <div class="bar"><div style="width:${pct}%;background:hsl(${color})"></div></div>
      </div>`;
    })
    .join('');
  const unlocked = new Set([
    state.completedLessons.length > 0 ? 0 : -1,
    state.streak >= 2 ? 2 : -1,
    state.totalXp >= 100 ? 7 : -1,
    state.completedLessons.length >= 9 ? 13 : -1,
  ]);
  const achievements = ACHIEVEMENTS.map(([label, ico], i) => `<div class="achievement ${unlocked.has(i) ? 'unlocked' : ''}">
      ${icon(ico, 'h-5')}<span>${esc(label)}</span>
    </div>`).join('');

  return `<main><div class="wide">
    <div class="card profile-card">
      <div class="profile-top">
        <div class="avatar">${esc(initials)}</div>
        <div style="flex:1">
          <h1 class="profile-name">${esc(name)}</h1>
          <p class="profile-sub">${state.signedIn ? 'Progress saved on this device' : 'Progress saved on this device'}</p>
          <span class="level-badge">Level ${level}</span>
          <div class="level-bar"><div style="width:${(levelProgress / 60) * 100}%"></div></div>
          <p class="profile-sub" style="font-size:11px;margin-top:4px">${levelProgress}/60 XP to next</p>
        </div>
      </div>
      <div class="stat-grid">
        <div class="stat-box"><strong>${state.totalXp}</strong><span>XP</span></div>
        <div class="stat-box"><strong>${state.streak}</strong><span>Streak</span></div>
        <div class="stat-box"><strong>${state.completedLessons.length}</strong><span>Lessons</span></div>
        <div class="stat-box"><strong>${state.gems}</strong><span>Gems</span></div>
      </div>
      ${state.signedIn ? '' : `<div class="sync-banner"><span>Sign-in is under development — progress is saved on this device.</span></div>`}
    </div>
    <div class="card settings-card">
      <div class="settings-row">
        <div><div class="section-label">Daily goal</div><p class="text-muted-foreground" style="font-size:12px;font-weight:700;margin-top:4px">${state.xpToday} today</p></div>
        ${icon('target', 'h-5')}
      </div>
      <div class="goal-options">${goals}</div>
    </div>
    <div class="card settings-card">
      <div class="section-label">Course progress</div>
      ${progressRows}
    </div>
    <div class="card settings-card">
      <div class="section-label">Achievements</div>
      <p class="text-muted-foreground" style="font-size:12px;font-weight:700;margin-top:4px">${ACHIEVEMENTS.filter((_, i) => unlocked.has(i)).length} of ${ACHIEVEMENTS.length} unlocked</p>
      <div class="achievements">${achievements}</div>
    </div>
  </div></main>`;
}

/* -------------------------------- login ------------------------------ */

function loginPage() {
  return underDevelopmentPage(
    'Sign-in isn’t ready yet.',
    'Accounts are still being built. Progress is already saved on this device, so you can keep learning.'
  );
}

/* ------------------------------- router ------------------------------ */

function render() {
  saveSession();
  let pathname = location.pathname;
  if (BASE && pathname.startsWith(BASE)) pathname = pathname.slice(BASE.length);
  const path = pathname.replace(/\/+$/, '') || '/';
  const lessonMatch = path.match(/^\/lesson\/([^/]+)$/);
  let content;
  let chrome = true;

  if (lessonMatch) {
    if (!session || session.practice || session.id !== lessonMatch[1]) prepareSession(lessonMatch[1], false);
    content = lessonPage();
    chrome = false;
  } else if (session && session.practice && !session.finished && path === '/recall') {
    content = lessonPage();
    chrome = false;
  } else if (path === '/recall') {
    content = recallPage();
  } else if (path === '/leaderboard') {
    content = leaguePage();
  } else if (path === '/profile') {
    content = profilePage();
  } else if (path === '/login') {
    content = loginPage();
    chrome = false;
  } else {
    content = homePage();
  }

  app.innerHTML = `${chrome ? siteHeader() : ''}${content}${chrome ? bottomNav() : ''}`;
  const titles = { '/': 'Learn', '/recall': 'Recall', '/leaderboard': 'League', '/profile': 'Profile', '/login': 'Sign in' };
  document.title = lessonMatch || (session && session.practice && !session.finished) ? 'Lesson · Ximie' : `${titles[path] || 'Learn'} · Ximie`;
}

document.addEventListener('click', (event) => {
  const target = event.target;

  if (target.closest('#sound-toggle')) {
    state.sound = !state.sound;
    saveState();
    render();
    beep(720, 0.08);
    return;
  }
  const link = target.closest('a[href]');
  if (link && link.getAttribute('href')?.startsWith('/') && !link.hasAttribute('download') && link.target !== '_blank') {
    event.preventDefault();
    const href = link.getAttribute('href');
    if (href === '#' || href.includes('forgot') || href.includes('create')) return;
    navigate(href);
    return;
  }
  const courseTab = target.closest('[data-course]');
  if (courseTab) {
    ui.courseId = courseTab.dataset.course;
    render();
    return;
  }
  const start = target.closest('[data-start]');
  if (start) {
    startLesson(start.dataset.start);
    return;
  }
  const lessonNode = target.closest('[data-lesson]');
  if (lessonNode) {
    const status = lessonNode.className.includes('locked') ? 'locked' : 'open';
    if (status === 'locked') {
      toast('Finish the lesson before this one to unlock it.');
    } else {
      startLesson(lessonNode.dataset.lesson);
    }
    return;
  }
  if (target.closest('[data-go]')) {
    navigate(target.closest('[data-go]').dataset.go);
    return;
  }
  if (target.closest('[data-practice]')) {
    startLesson('recall', true);
    return;
  }
  if (target.closest('[data-refill]')) {
    state.hearts = 5;
    saveState();
    session.outOfHearts = false;
    session.status = 'idle';
    render();
    return;
  }
  if (target.closest('[data-show-answer]')) {
    showAnswer();
    return;
  }
  const option = target.closest('[data-option]');
  if (option && session && session.status !== 'correct') {
    session.selected = Number(option.dataset.option);
    session.status = 'idle';
    render();
    return;
  }
  const bank = target.closest('[data-bank]');
  if (bank && session && session.status !== 'correct') {
    const i = Number(bank.dataset.bank);
    if (!session.tokens.some((t) => t.i === i)) session.tokens.push({ i, text: session.exercises[session.index].bank[i] });
    session.status = 'idle';
    render();
    return;
  }
  const slot = target.closest('[data-slot]');
  if (slot && session && session.status !== 'correct') {
    session.tokens.splice(Number(slot.dataset.slot), 1);
    session.status = 'idle';
    render();
    return;
  }
  const goal = target.closest('[data-goal]');
  if (goal) {
    state.dailyGoal = Number(goal.dataset.goal);
    saveState();
    render();
    return;
  }
  if (target.closest('#google-signin') || target.closest('#forgot') || target.closest('#create-account')) {
    signIn('Panda Fan');
    return;
  }
  if (target.closest('#check-btn')) {
    if (session.status === 'wrong') retryAnswer();
    else if (session.status === 'correct' || session.outOfHearts) continueLesson();
    else checkAnswer();
  }
});

document.addEventListener('input', (event) => {
  if (event.target.id === 'code-editor' && session) {
    session.code = event.target.value;
    const iframe = document.querySelector('.preview-box iframe');
    if (iframe) iframe.srcdoc = previewDoc(session.exercises[session.index], session.code);
    if (session.status === 'wrong') {
      session.status = 'idle';
      session.message = '';
      document.querySelector('.feedback.bad')?.remove();
      const button = document.querySelector('#check-btn');
      if (button) {
        button.textContent = 'CHECK';
        button.className = 'btn btn-check w-full';
      }
    }
    const checkButton = document.querySelector('#check-btn');
    if (checkButton && session.status === 'idle') checkButton.disabled = !session.code.trim();
    saveSession();
  }
});

document.addEventListener('submit', (event) => {
  if (event.target.id !== 'login-form') return;
  event.preventDefault();
  const data = new FormData(event.target);
  const email = String(data.get('email') || '');
  signIn(email.split('@')[0].replace(/[._-]+/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()) || 'Panda Fan');
});

function signIn(name) {
  state.signedIn = true;
  state.profileName = name;
  saveState();
  toast(`Signed in as ${name}`);
  navigate('/profile');
}

window.addEventListener('popstate', render);

// The local dev server redirects deep links to /?route=... so relative asset
// paths resolve from the app root. Restore that route before rendering.
try {
  const routeParam = new URLSearchParams(location.search).get('route');
  if (routeParam) sessionStorage.setItem('ximie-redirect', routeParam);
} catch {
  /* ignore */
}

// GitHub Pages has no server-side SPA fallback; 404.html stores the requested
// path here so a deep link can be restored after it redirects to the app root.
try {
  const redirected = sessionStorage.getItem('ximie-redirect');
  if (redirected) {
    sessionStorage.removeItem('ximie-redirect');
    let clean = redirected;
    if (BASE && clean.startsWith(BASE)) clean = clean.slice(BASE.length);
    if (clean.startsWith('/lesson/') || ['/recall', '/profile', '/leaderboard', '/login'].includes(clean)) {
      history.replaceState({}, '', BASE + clean);
    }
  }
} catch {
  /* sessionStorage may be unavailable */
}

render();
