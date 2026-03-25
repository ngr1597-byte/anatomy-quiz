# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an anatomy MCQ dataset project containing questions from Indian medical PG entrance exams (AIIMS, NEET, INI-CET), sourced from the Marrow Anatomy Question Bank. There is no application code yet — just a structured dataset and associated images.

## Dataset Structure

- **`anatomy_dataset.json`** — Primary dataset (schema version 1.0). Contains a `metadata` object and a `questions` array.
- **`anatomy_dataset.xlsx`** — Same data in spreadsheet format.
- **`images/`** — Question images referenced by filename in the JSON. Naming convention: `{EXAM}_{YEAR}_Q{NUMBER}.png` (e.g., `AIIMS_2017_Q01.png`).

### Question Schema

Each question object has: `id`, `exam`, `question_number`, `topic`, `question_text`, `has_image`, `image_file`, `image_description`, `options` (object with keys a–d), `correct_answer` (letter), and `explanation`.

### Current Coverage

- 45 questions across 2 exams (AIIMS 2017, AIIMS 2018); 15 total exams planned.
- 22 of 45 questions have associated images.
- 11 topic categories: Embryology, Neuroanatomy, Head & Neck, Thorax, Abdomen & Pelvis, Upper Limb, Lower Limb, Histology, General Anatomy, Osteology, Back & Vertebral Column.

## Working with the Data

Both Python (3.14) and Node.js are available on this system for data processing tasks.
