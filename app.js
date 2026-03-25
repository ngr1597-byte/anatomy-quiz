// === CONSTANTS ===
const MASTERY_THRESHOLD = 3;
const CACHE_NAME = 'anatomy-quiz-v6';
const STORAGE_KEY = 'anatomy-quiz-progress';

// === STATE ===
let state = {
  currentScreen: 'home',
  filterMode: 'all',
  filterValue: null,
  sessionQuestions: [],
  currentIndex: 0,
  answered: false,
  selectedOption: null,
  sessionResults: [],
  isFullRound: false,
};

// === LOCALSTORAGE ===
function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { version: 1, questions: {}, settings: { theme: 'light' } };
    return JSON.parse(raw);
  } catch {
    return { version: 1, questions: {}, settings: { theme: 'light' } };
  }
}

function saveProgressData(progress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

function getQuestionProgress(questionId) {
  const progress = loadProgress();
  return progress.questions[questionId] || { seen: 0, correct: 0, streak: 0, mastered: false, flagged: false };
}

function recordAnswer(questionId, wasCorrect) {
  const progress = loadProgress();
  if (!progress.questions[questionId]) {
    progress.questions[questionId] = { seen: 0, correct: 0, streak: 0, mastered: false, flagged: false };
  }
  const q = progress.questions[questionId];
  q.seen += 1;
  if (wasCorrect) {
    q.correct += 1;
    q.streak += 1;
    if (q.streak >= MASTERY_THRESHOLD) q.mastered = true;
  } else {
    q.streak = 0;
  }
  saveProgressData(progress);
}

function toggleFlag(questionId) {
  const progress = loadProgress();
  if (!progress.questions[questionId]) {
    progress.questions[questionId] = { seen: 0, correct: 0, streak: 0, mastered: false, flagged: false };
  }
  progress.questions[questionId].flagged = !progress.questions[questionId].flagged;
  saveProgressData(progress);
  return progress.questions[questionId].flagged;
}

function resetAllProgress() {
  const progress = loadProgress();
  progress.questions = {};
  saveProgressData(progress);
}

// === THEME ===
function loadTheme() {
  const progress = loadProgress();
  const theme = progress.settings?.theme || 'light';
  applyTheme(theme);
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme === 'dark' ? 'dark' : '');
  const icon = document.getElementById('theme-icon');
  if (icon) icon.textContent = theme === 'dark' ? '🌙' : '☀️';
}

function toggleTheme() {
  const progress = loadProgress();
  const current = progress.settings?.theme || 'light';
  const next = current === 'dark' ? 'light' : 'dark';
  if (!progress.settings) progress.settings = {};
  progress.settings.theme = next;
  saveProgressData(progress);
  applyTheme(next);
}

// === ROUNDS TRACKING ===
function getRoundKey() {
  if (state.filterMode === 'all') return 'all';
  if (state.filterMode === 'weak') return 'weak';
  if (state.filterMode === 'flagged') return 'flagged';
  if (state.filterValue) return state.filterMode + ':' + state.filterValue;
  return 'all';
}

function getCurrentRound(key) {
  const progress = loadProgress();
  if (!progress.rounds) return 0;
  return progress.rounds[key] || 0;
}

function incrementRound(key) {
  const progress = loadProgress();
  if (!progress.rounds) progress.rounds = {};
  progress.rounds[key] = (progress.rounds[key] || 0) + 1;
  saveProgressData(progress);
  return progress.rounds[key];
}

// === SCREEN MANAGEMENT ===
function showScreen(name) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const screen = document.getElementById('screen-' + name);
  if (screen) screen.classList.add('active');
  state.currentScreen = name;
}


// === HOME SCREEN ===
function renderHome() {
  const progress = loadProgress();

  // Overall stats
  let totalSeen = 0, totalCorrect = 0, masteredCount = 0, fivePlusReps = 0;
  for (const qid in progress.questions) {
    const q = progress.questions[qid];
    if (q.seen > 0) totalSeen++;
    if (q.seen >= 5) fivePlusReps++;
    totalCorrect += q.correct;
    if (q.mastered) masteredCount++;
  }
  const neverSeen = QUESTIONS.length - totalSeen;
  const totalAttempts = Object.values(progress.questions).reduce((s, q) => s + q.seen, 0);
  const accuracy = totalAttempts > 0 ? Math.round((totalCorrect / totalAttempts) * 100) : 0;

  document.getElementById('stat-total').textContent = QUESTIONS.length;
  document.getElementById('stat-attempted').textContent = totalSeen;
  document.getElementById('stat-mastered').textContent = masteredCount;
  document.getElementById('stat-never-seen').textContent = neverSeen;
  document.getElementById('stat-five-reps').textContent = fivePlusReps;
  document.getElementById('stat-accuracy').textContent = accuracy + '%';

  // Topic mastery bars
  renderTopicBars(progress);

  // Restore collapsed/expanded state
  const content = document.getElementById('topic-bars');
  const arrow = document.querySelector('.toggle-arrow');
  const expanded = progress.settings?.topicsExpanded || false;
  if (expanded) {
    content.classList.remove('collapsed');
    arrow.style.transform = 'rotate(180deg)';
  } else {
    content.classList.add('collapsed');
    arrow.style.transform = 'rotate(0deg)';
  }

  // Update filter info
  updateFilterInfo();
}

function renderTopicBars(progress) {
  const container = document.getElementById('topic-bars');
  const topics = {};

  for (const q of QUESTIONS) {
    if (!topics[q.topic]) topics[q.topic] = { total: 0, mastered: 0 };
    topics[q.topic].total++;
    const qp = progress.questions[q.id];
    if (qp && qp.mastered) topics[q.topic].mastered++;
  }

  container.innerHTML = Object.entries(topics)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([name, data]) => {
      const pct = data.total > 0 ? Math.round((data.mastered / data.total) * 100) : 0;
      return `
        <div class="topic-bar-item">
          <div class="topic-bar-header">
            <span class="topic-bar-name">${name}</span>
            <span class="topic-bar-count">${data.mastered}/${data.total}</span>
          </div>
          <div class="topic-bar-track">
            <div class="topic-bar-value" style="width: ${pct}%"></div>
          </div>
        </div>`;
    }).join('');
}

function getFilteredQuestions() {
  const progress = loadProgress();

  switch (state.filterMode) {
    case 'all':
      return QUESTIONS;

    case 'topic':
      return state.filterValue
        ? QUESTIONS.filter(q => q.topic === state.filterValue)
        : QUESTIONS;

    case 'exam':
      return state.filterValue
        ? QUESTIONS.filter(q => q.exam === state.filterValue)
        : QUESTIONS;

    case 'weak': {
      return QUESTIONS.filter(q => {
        const qp = progress.questions[q.id];
        if (!qp || qp.seen === 0) return true; // never attempted = weak
        if (qp.mastered) return false;
        return qp.correct / qp.seen < 0.5 || (qp.seen >= 3 && !qp.mastered);
      });
    }

    case 'flagged': {
      return QUESTIONS.filter(q => {
        const qp = progress.questions[q.id];
        return qp && qp.flagged;
      });
    }

    default:
      return QUESTIONS;
  }
}

function updateFilterInfo() {
  const filtered = getFilteredQuestions();
  const info = document.getElementById('filter-info');
  const roundKey = getRoundKey();
  const round = getCurrentRound(roundKey);
  const roundText = round > 0 ? ` · Round ${round + 1}` : '';
  info.textContent = `${filtered.length} question${filtered.length !== 1 ? 's' : ''} available${roundText}`;

  document.querySelectorAll('.btn-quick').forEach(btn => {
    btn.disabled = filtered.length === 0;
  });
}

function populateDropdown(type) {
  const dropdown = document.getElementById('filter-dropdown');
  dropdown.innerHTML = '<option value="">Select...</option>';

  if (type === 'topic') {
    const topics = [...new Set(QUESTIONS.map(q => q.topic))].sort();
    topics.forEach(t => {
      const count = QUESTIONS.filter(q => q.topic === t).length;
      dropdown.innerHTML += `<option value="${t}">${t} (${count})</option>`;
    });
  } else if (type === 'exam') {
    const exams = [...new Set(QUESTIONS.map(q => q.exam))].sort();
    exams.forEach(e => {
      const count = QUESTIONS.filter(q => q.exam === e).length;
      dropdown.innerHTML += `<option value="${e}">${e} (${count})</option>`;
    });
  }
}

// === QUIZ LOGIC ===
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function startQuiz(questions, count) {
  const filtered = questions || getFilteredQuestions();
  if (filtered.length === 0) return;

  let shuffled = shuffleArray(filtered);
  // Track if this is a full round (no count limit, or count >= total)
  state.isFullRound = !count || count >= filtered.length;
  if (count && count < shuffled.length) shuffled = shuffled.slice(0, count);
  state.sessionQuestions = shuffled;
  state.currentIndex = 0;
  state.answered = false;
  state.selectedOption = null;
  state.sessionResults = [];

  showScreen('quiz');
  renderQuestion();
}

function renderQuestion() {
  const q = state.sessionQuestions[state.currentIndex];
  const qp = getQuestionProgress(q.id);

  // Header
  document.getElementById('quiz-progress').textContent =
    `Q ${state.currentIndex + 1} / ${state.sessionQuestions.length}`;
  document.getElementById('quiz-topic').textContent = q.topic;
  document.getElementById('quiz-exam').textContent = q.exam;

  // Stats
  const statsEl = document.getElementById('quiz-stats');
  if (qp.seen === 0) {
    statsEl.innerHTML = 'New question';
  } else if (qp.mastered) {
    statsEl.innerHTML = `Seen ${qp.seen}× | <span class="mastered-badge">Mastered</span>`;
  } else {
    statsEl.innerHTML = `Seen ${qp.seen}× | Streak: ${qp.streak}/${MASTERY_THRESHOLD}`;
  }

  // Bookmark
  const bookmarkBtn = document.getElementById('quiz-bookmark');
  bookmarkBtn.textContent = qp.flagged ? '★' : '☆';
  bookmarkBtn.classList.toggle('active', qp.flagged);

  // Image
  const imgContainer = document.getElementById('quiz-image-container');
  const imgEl = document.getElementById('quiz-image');
  if (q.has_image && q.image_file) {
    imgEl.src = 'images/' + q.image_file;
    imgEl.alt = q.image_description || 'Question image';
    imgContainer.classList.remove('hidden');
  } else {
    imgContainer.classList.add('hidden');
    imgEl.src = '';
  }

  // Question text
  document.getElementById('quiz-question').textContent = q.question_text;

  // Options
  const optionsContainer = document.getElementById('quiz-options');
  const letters = Object.keys(q.options);
  optionsContainer.innerHTML = letters.map(letter => `
    <button class="option-btn" data-option="${letter}">
      <span class="option-letter">${letter.toUpperCase()}</span>
      <span class="option-text">${q.options[letter]}</span>
    </button>
  `).join('');

  // Hide explanation and next button
  document.getElementById('quiz-explanation').classList.add('hidden');
  document.getElementById('quiz-next').classList.add('hidden');

  state.answered = false;
  state.selectedOption = null;
}

function handleAnswer(option) {
  if (state.answered) return;
  state.answered = true;
  state.selectedOption = option;

  const q = state.sessionQuestions[state.currentIndex];
  const isCorrect = option === q.correct_answer;

  // Record
  recordAnswer(q.id, isCorrect);
  state.sessionResults.push({ id: q.id, correct: isCorrect });

  // Highlight options
  const buttons = document.querySelectorAll('.option-btn');
  buttons.forEach(btn => {
    const opt = btn.dataset.option;
    btn.classList.add('disabled');
    if (opt === q.correct_answer) {
      btn.classList.add('correct');
    } else if (opt === option && !isCorrect) {
      btn.classList.add('incorrect');
    }
  });

  // Show explanation
  const explanationEl = document.getElementById('quiz-explanation');
  const headerEl = document.getElementById('explanation-header');
  const textEl = document.getElementById('explanation-text');

  if (isCorrect) {
    explanationEl.classList.remove('wrong');
    headerEl.textContent = '✓ Correct!';
  } else {
    explanationEl.classList.add('wrong');
    headerEl.textContent = `✗ Incorrect — answer is ${q.correct_answer.toUpperCase()}`;
  }
  textEl.textContent = q.explanation;
  explanationEl.classList.remove('hidden');

  // Update stats display with new data
  const qp = getQuestionProgress(q.id);
  const statsEl = document.getElementById('quiz-stats');
  if (qp.mastered) {
    statsEl.innerHTML = `Seen ${qp.seen}× | <span class="mastered-badge">Mastered</span>`;
  } else {
    statsEl.innerHTML = `Seen ${qp.seen}× | Streak: ${qp.streak}/${MASTERY_THRESHOLD}`;
  }

  // Show next button
  const nextBtn = document.getElementById('quiz-next');
  nextBtn.textContent = state.currentIndex < state.sessionQuestions.length - 1
    ? 'Next Question'
    : 'See Results';
  nextBtn.classList.remove('hidden');

  // Scroll next button into view so user doesn't have to scroll manually
  setTimeout(() => nextBtn.scrollIntoView({ behavior: 'smooth', block: 'end' }), 150);
}

function nextQuestion() {
  state.currentIndex++;
  if (state.currentIndex >= state.sessionQuestions.length) {
    showResults();
  } else {
    renderQuestion();
    // Scroll to top of quiz card
    document.querySelector('.quiz-card').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// === RESULTS ===
function showResults() {
  showScreen('results');

  const total = state.sessionResults.length;
  const correct = state.sessionResults.filter(r => r.correct).length;
  const pct = total > 0 ? Math.round((correct / total) * 100) : 0;

  document.getElementById('results-score').textContent = `${correct} / ${total}`;
  document.getElementById('results-percentage').textContent = `${pct}% correct`;

  // Topic breakdown
  const topicScores = {};
  state.sessionResults.forEach(r => {
    const q = QUESTIONS.find(q => q.id === r.id);
    if (!q) return;
    if (!topicScores[q.topic]) topicScores[q.topic] = { correct: 0, total: 0 };
    topicScores[q.topic].total++;
    if (r.correct) topicScores[q.topic].correct++;
  });

  const breakdownEl = document.getElementById('results-breakdown');
  breakdownEl.innerHTML = Object.entries(topicScores)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([topic, data]) => `
      <div class="results-breakdown-item">
        <span>${topic}</span>
        <span class="results-breakdown-score">${data.correct}/${data.total}</span>
      </div>
    `).join('');

  // Round tracking
  const messageEl = document.getElementById('results-message');
  const reviewBtn = document.getElementById('review-mistakes');
  const homeBtn = document.getElementById('results-home');
  const mistakes = state.sessionResults.filter(r => !r.correct);

  // Increment round if full session completed
  let roundMessage = '';
  if (state.isFullRound) {
    const roundKey = getRoundKey();
    const newRound = incrementRound(roundKey);
    roundMessage = `Round ${newRound} Complete!`;
  }

  if (mistakes.length > 0) {
    // Aggressive mistake drilling
    const urgentText = roundMessage
      ? `${roundMessage}\n${mistakes.length} question${mistakes.length !== 1 ? 's' : ''} need drilling. Don't skip.`
      : `${mistakes.length} question${mistakes.length !== 1 ? 's' : ''} need drilling. Don't skip.`;
    messageEl.textContent = urgentText;
    messageEl.className = 'results-message urgent';
    reviewBtn.classList.remove('hidden');
    reviewBtn.textContent = `Drill Mistakes (${mistakes.length})`;
    reviewBtn.className = 'btn-primary';
    homeBtn.className = 'btn-text';
  } else {
    // Perfect session
    const perfectText = roundMessage ? `${roundMessage} Perfect!` : 'Perfect!';
    messageEl.textContent = perfectText;
    messageEl.className = 'results-message perfect';
    reviewBtn.classList.add('hidden');
    homeBtn.className = 'btn-primary';
  }
}

function reviewMistakes() {
  const mistakeIds = state.sessionResults.filter(r => !r.correct).map(r => r.id);
  const mistakeQuestions = QUESTIONS.filter(q => mistakeIds.includes(q.id));
  startQuiz(mistakeQuestions);
}

// === EVENT BINDING ===
function bindEvents() {
  // Theme toggle
  document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

  // Collapsible topic mastery
  document.getElementById('topic-toggle').addEventListener('click', () => {
    const content = document.getElementById('topic-bars');
    const arrow = document.querySelector('.toggle-arrow');
    content.classList.toggle('collapsed');
    arrow.style.transform = content.classList.contains('collapsed') ? 'rotate(0deg)' : 'rotate(180deg)';
    // Save preference
    const progress = loadProgress();
    if (!progress.settings) progress.settings = {};
    progress.settings.topicsExpanded = !content.classList.contains('collapsed');
    saveProgressData(progress);
  });

  // Filter tabs
  document.getElementById('filter-tabs').addEventListener('click', e => {
    const tab = e.target.closest('.filter-tab');
    if (!tab) return;

    document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    state.filterMode = tab.dataset.filter;
    state.filterValue = null;

    const dropdownContainer = document.getElementById('filter-dropdown-container');
    if (state.filterMode === 'topic' || state.filterMode === 'exam') {
      populateDropdown(state.filterMode);
      dropdownContainer.classList.remove('hidden');
    } else {
      dropdownContainer.classList.add('hidden');
    }

    updateFilterInfo();
  });

  // Filter dropdown
  document.getElementById('filter-dropdown').addEventListener('change', e => {
    state.filterValue = e.target.value || null;
    updateFilterInfo();
  });

  // Quick start buttons
  document.querySelector('.quick-start').addEventListener('click', e => {
    const btn = e.target.closest('.btn-quick');
    if (!btn || btn.disabled) return;
    const count = btn.dataset.count === 'all' ? null : parseInt(btn.dataset.count);
    startQuiz(null, count);
  });

  // Reset progress
  document.getElementById('reset-progress').addEventListener('click', () => {
    if (confirm('Reset all progress? This cannot be undone.')) {
      resetAllProgress();
      renderHome();
    }
  });

  // Quiz options (event delegation)
  document.getElementById('quiz-options').addEventListener('click', e => {
    const btn = e.target.closest('.option-btn');
    if (!btn || state.answered) return;
    handleAnswer(btn.dataset.option);
  });

  // Quiz next
  document.getElementById('quiz-next').addEventListener('click', nextQuestion);

  // Quiz back
  document.getElementById('quiz-back').addEventListener('click', () => {
    if (confirm('Leave quiz? Progress for this session will be kept.')) {
      showScreen('home');
      renderHome();
    }
  });

  // Bookmark
  document.getElementById('quiz-bookmark').addEventListener('click', () => {
    const q = state.sessionQuestions[state.currentIndex];
    const isFlagged = toggleFlag(q.id);
    const btn = document.getElementById('quiz-bookmark');
    btn.textContent = isFlagged ? '★' : '☆';
    btn.classList.toggle('active', isFlagged);
  });

  // Results buttons
  document.getElementById('review-mistakes').addEventListener('click', reviewMistakes);
  document.getElementById('results-home').addEventListener('click', () => {
    showScreen('home');
    renderHome();
  });
}

// === SERVICE WORKER ===
async function registerSW() {
  if ('serviceWorker' in navigator) {
    try {
      await navigator.serviceWorker.register('sw.js');
    } catch {
      // SW registration failed — app still works, just no offline for shell
    }
  }
}

// === INIT ===
function init() {
  loadTheme();
  bindEvents();
  registerSW();
  showScreen('home');
  renderHome();
}

init();
