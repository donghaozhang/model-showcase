# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This repository contains a showcase website for QCut's AI model capabilities. The site is a static HTML/CSS/JavaScript application that presents QCut's AI features including text-to-video, image-to-video, text-to-image generation, AI transcription, FFmpeg processing, and sound library features.

## Repository Structure

```
model-showcase/
├── index.html          # Main landing page
├── css/
│   └── styles.css     # All styling and animations
├── js/
│   └── app.js         # Interactive features and dynamic content loading
└── docs/
    └── technical/
        └── ai-models/  # Markdown documentation for AI models
            ├── text-to-video/
            ├── image-to-video/
            ├── text-to-image/
            ├── transcription/
            ├── image-upscale/
            ├── adjustment-panel/
            ├── avatar/
            └── segmentation/
```

## Architecture

### Static Site with Dynamic Content Loading

The site is a single-page application that:
- Uses vanilla JavaScript (no frameworks)
- Loads model information dynamically from markdown files in `docs/technical/ai-models/`
- Implements scroll-based animations using Intersection Observer API
- Features interactive model cards with hover overlays

### Key Components

**index.html**
- Single-page layout with sections: hero, models, features, CTA, footer
- Each AI model is represented by a `.model-card` with:
  - Static UI structure (icon, title, description, tags, features)
  - Hover overlay (`.model-overlay`) containing `.supported-models` list
- Model cards are statically defined but supported models are dynamically loaded

**js/app.js**
- `loadModelsFromMarkdown()`: Fetches markdown files and populates model lists
- `extractModels()`: Parses markdown to extract model names from `### N. ModelName` format
- Returns top 5 models per category
- Maps categories to specific model card selectors:
  - text-to-video → 1st card
  - image-to-video → 2nd card
  - text-to-image → 3rd card
  - transcription → 4th card

**css/styles.css**
- CSS custom properties for theming (colors, gradients, spacing)
- Responsive design with mobile breakpoints
- Animation system using `.animate-on-scroll` class and `.visible` state
- Model card interactions with CSS custom properties (`--mouse-x`, `--mouse-y`)

## AI Model Documentation Structure

Each model category has a markdown file at `docs/technical/ai-models/{category}/supported-models.md` with:

- Structured format: `### N. ModelName` for each model entry
- Metadata: Provider, Price, Resolution, Max Duration
- Parameters and features
- Comparison tables
- Technical implementation notes with file paths to the main QCut repository

The markdown files reference the main QCut codebase located at paths like:
- `qcut/apps/web/src/lib/ai-video/generators/`
- `qcut/apps/web/src/components/editor/media-panel/views/ai/`

## Development

### Viewing the Site Locally

Since this is a static site that loads markdown files via `fetch()`, you need a local web server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (http-server)
npx http-server -p 8000

# Then visit http://localhost:8000
```

### Making Changes

**Adding/Updating AI Models:**
1. Edit the relevant markdown file in `docs/technical/ai-models/{category}/supported-models.md`
2. Follow the existing format: `### N. ModelName` for model headers
3. The JavaScript will automatically extract and display the first 5 models

**Modifying the UI:**
- index.html: Update structure, content, or add new sections
- css/styles.css: Modify styling, animations, or responsive behavior
- js/app.js: Change interactive features or data loading logic

**Adding New Model Categories:**
1. Add new `.model-card` in index.html
2. Create corresponding markdown file in `docs/technical/ai-models/{category}/`
3. Update `modelCategories` object in `js/app.js` with correct selector

## Important Patterns

### Model Card Selector Mapping
The `loadModelsFromMarkdown()` function uses nth-child selectors to map categories to cards. If you rearrange model cards in HTML, update the selectors in `modelCategories` object.

### Markdown Parsing
The `extractModels()` function expects headers in format `### N. ModelName`. Any deviation from this format will break model extraction.

### Animation System
Elements with `.animate-on-scroll` class are observed. When they enter viewport, `.visible` class is added, triggering CSS animations. This pattern is used throughout for scroll-based reveals.

### CSS Custom Properties for Interactivity
Model cards use `--mouse-x` and `--mouse-y` custom properties set via JavaScript to create cursor-following glow effects. This approach keeps logic in CSS while JS only tracks cursor position.

## Git Workflow

The repository tracks:
- index.html, css/, js/ - the website itself
- docs/ - AI model documentation
- .claude/ - Claude Code settings

When committing changes related to AI models, ensure both the markdown documentation and any corresponding UI updates are included in the same commit.
