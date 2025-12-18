# QCut AI Models Showcase

A modern, interactive showcase website highlighting QCut's powerful AI capabilities for video editing. Built with vanilla HTML, CSS, and JavaScript.

[![Live Demo](https://img.shields.io/badge/demo-live-success)](https://donghaozhang.github.io/model-showcase)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## 🎬 Overview

This website showcases QCut's comprehensive suite of AI-powered video editing tools, including:

- **Text-to-Video** - 15 models from providers like Kling, Sora 2, Veo 3.1, and more
- **Image-to-Video** - 19 models for animating static images
- **Text-to-Image** - 14 models for generating visuals from text
- **AI Transcription** - Automatic speech-to-text with multi-language support
- **FFmpeg Engine** - Professional video processing via WebAssembly
- **Sound Library** - Integrated licensed audio resources

## ✨ Features

- 🎨 Modern, responsive design with smooth animations
- 🔍 Interactive model cards with hover overlays
- 📊 Detailed AI model specifications loaded dynamically
- 🌙 Animated background effects and parallax particles
- 📱 Mobile-friendly responsive layout
- ⚡ Fast, lightweight static site

## 🚀 Quick Start

### View Locally

Since the site uses `fetch()` to load markdown files, you'll need a local web server:

**Using Python:**
```bash
python -m http.server 8000
```

**Using Node.js:**
```bash
npx http-server -p 8000
```

**Using PHP:**
```bash
php -S localhost:8000
```

Then open [http://localhost:8000](http://localhost:8000) in your browser.

## 📁 Project Structure

```
model-showcase/
├── index.html              # Main landing page
├── css/
│   └── styles.css         # Styles and animations
├── js/
│   └── app.js             # Interactive features
└── docs/
    └── technical/
        └── ai-models/     # AI model documentation
            ├── text-to-video/
            ├── image-to-video/
            ├── text-to-image/
            ├── transcription/
            ├── image-upscale/
            ├── adjustment-panel/
            ├── avatar/
            └── segmentation/
```

## 🛠️ Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Grid, Flexbox, animations
- **Vanilla JavaScript** - Intersection Observer, Fetch API
- **Markdown** - Model documentation storage

## 📝 AI Model Documentation

Each AI model category has detailed documentation in `docs/technical/ai-models/` including:

- Supported models and providers
- Pricing and resolution information
- Feature comparisons
- Technical parameters
- Implementation references

The website dynamically loads the top 5 models from each category to display in the interactive model cards.

## 🎨 Customization

### Adding New Models

1. Edit the relevant markdown file in `docs/technical/ai-models/{category}/supported-models.md`
2. Follow the format: `### N. ModelName` for model headers
3. The site will automatically display the first 5 models

### Modifying Styles

All styles are in `css/styles.css` with CSS custom properties for easy theming:

```css
:root {
    --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --accent-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    /* ... more variables */
}
```

## 🔗 Related Projects

- [QCut](https://github.com/donghaozhang/qcut) - The main QCut video editor application
- QCut is an open-source, privacy-first video editor with built-in AI capabilities

## 👤 Author

**Donghao Zhang**
- GitHub: [@donghaozhang](https://github.com/donghaozhang)
- Project: [QCut](https://github.com/donghaozhang/qcut)

## 📄 License

This project is open source under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/donghaozhang/model-showcase/issues).

## ⭐ Show Your Support

If you find this project useful, please consider giving it a star on GitHub!

---

Built with ❤️ for the QCut community
