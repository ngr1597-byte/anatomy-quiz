# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A PWA (Progressive Web App) for drilling anatomy MCQs from Indian medical PG entrance exams (AIIMS, NEET, INI-CET), using the Woodpecker method (repeat questions until mastered). Built for personal use on Android, hosted on GitHub Pages at `https://ngr1597-byte.github.io/anatomy-quiz/`.

The user (Nipun) is a medical student preparing for PG entrance exams. The app is designed around enforcing repetition — every design decision should support the habit of opening the app daily and drilling questions multiple times.

## Architecture

Vanilla single-page PWA — no frameworks, no build step, no server. All files at project root.

```
anatomy-quiz/
├── index.html          # Single page with 3 screen divs (home, quiz, results)
├── style.css           # Mobile-first CSS with light/dark theme via CSS custom properties
├── app.js              # All quiz logic, rendering, localStorage, service worker registration (~600 lines)
├── questions.js        # Dataset exported as JS constants (METADATA + QUESTIONS), generated from JSON
├── sw.js               # Service worker — pre-caches app shell, auto-caches images on fetch
├── manifest.json       # PWA manifest (standalone, portrait, teal theme)
├── icon-192.png        # App icon (teal square with white "A")
├── icon-512.png        # Splash icon
├── anatomy_dataset.json  # Primary dataset (source of truth)
├── anatomy_dataset.xlsx  # Spreadsheet version (NOT used by the app)
└── images/               # Question images (PNG), named {EXAM}_{YEAR}_Q{NUMBER}.png
```

## Dataset

- **160 questions** across 8 exams: AIIMS 2017-2020, NEET 2018-2020, INI-CET 2021
- **85 questions have images**, 75 are text-only
- **11 topic categories**: Embryology, Neuroanatomy, Head & Neck, Thorax, Abdomen & Pelvis, Upper Limb, Lower Limb, Histology, General Anatomy, Osteology, Back & Vertebral Column
- 15 total exams planned — user regularly adds more questions

### Question Schema (in anatomy_dataset.json)

Each question: `id`, `exam`, `question_number`, `topic`, `question_text`, `has_image`, `image_file`, `image_description`, `options` (object with keys a–d), `correct_answer` (letter), `explanation`.

### Adding New Questions

1. Add entries to `anatomy_dataset.json`, drop new images in `images/`
2. Regenerate `questions.js`: `python -c "import json; ..."`  (see commit history for the one-liner)
3. Bump `CACHE_NAME` in both `sw.js` and `app.js` (must match!)
4. Commit and push — GitHub Pages auto-deploys
5. User clears site data on phone to pick up new service worker

## App Features

### Screens
- **Home**: stats card (6 metrics in 2x3 grid), collapsible topic mastery bars, filter tabs, quick-start buttons, footer message
- **Quiz**: question + image (pinch-to-zoom), 4 option buttons, exam + topic badges, bookmark, per-question stats, explanation card, auto-scroll to Next button
- **Results**: score + topic breakdown, aggressive "Drill Mistakes" prompt, round completion message

### Mastery System (Woodpecker core)
- Tracks **consecutive correct streak** per question
- **3 correct in a row = Mastered** (configurable via `MASTERY_THRESHOLD`)
- Wrong answer resets streak to 0
- Home screen shows mastery count per topic

### Quick Sessions
- 4 buttons: **5 Qs**, **10 Qs**, **15 Qs**, **All**
- All respect the active filter (topic, exam, weak, flagged)
- Only "All" counts as a complete round for the rounds counter

### Filters
- **All** | **Topic** (dropdown) | **Exam** (dropdown) | **Weak** | **Flagged**
- Weak = accuracy < 50%, or never correct, or seen 3+ times but not mastered
- Flagged = user-bookmarked questions

### Repetition Enforcement
- **Rounds counter**: tracks complete cycles per filter, shown on home screen ("Round 4")
- **Aggressive mistake drilling**: after a session with errors, "Drill Mistakes" is the primary action, "Back to Home" is demoted to text link
- **Stats**: Never Seen count, 5+ Reps count — visible on home screen
- **Footer message**: personal motivational reminder

### Dark/Light Theme
- Toggle on home screen, persisted in localStorage
- CSS custom properties in `:root` (light) and `[data-theme="dark"]` (dark)

### Offline Support
- Service worker pre-caches app shell (~50 KB) on install
- Images cached automatically as viewed (cache-first strategy)
- After one full session, everything works offline

## localStorage Schema

Single key `anatomy-quiz-progress`:
```json
{
  "version": 1,
  "questions": {
    "AIIMS_2017_Q01": {
      "seen": 4,
      "correct": 2,
      "streak": 2,
      "mastered": false,
      "flagged": false
    }
  },
  "settings": {
    "theme": "light",
    "topicsExpanded": false
  },
  "rounds": {
    "all": 3,
    "topic:Neuroanatomy": 1
  }
}
```

## Service Worker Versioning

`CACHE_NAME` must be identical in both `sw.js` and `app.js`. Currently `anatomy-quiz-v7`. Bump this on every deploy to force cache refresh. The user needs to clear site data on their phone after updates (old SW serves stale files).

## Deployment

- Hosted on **GitHub Pages** from `main` branch, root folder
- Repo: `https://github.com/ngr1597-byte/anatomy-quiz`
- Live URL: `https://ngr1597-byte.github.io/anatomy-quiz/`
- Push to `main` triggers auto-deploy (~1 min)

## Development

- Both **Python 3.14** and **Node.js** are available on this system
- Local testing: `python -m http.server 8080` → `http://localhost:8080`
- `anatomy_dataset.xlsx` is NOT used by the app — kept as personal reference only
- `gh` CLI is not installed; use git directly for pushes
