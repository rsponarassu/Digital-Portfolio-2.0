<div align="center">

  # ⚡ RSP. — Digital Portfolio 2.0

  <p align="center">
    <strong>A high-performance, dark-aesthetic personal portfolio built with React 19, Vite, TypeScript, and Tailwind CSS v4.</strong>
  </p>

  <p align="center">
    <a href="https://react.dev/"><img src="https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React 19" /></a>
    <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript_5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" /></a>
    <a href="https://vite.dev/"><img src="https://img.shields.io/badge/Vite_8-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" /></a>
    <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind_CSS_v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" /></a>
    <a href="https://render.com/"><img src="https://img.shields.io/badge/Render-Deployed-46E3B7?style=for-the-badge&logo=render&logoColor=white" alt="Render" /></a>
  </p>

  <p align="center">
    <a href="#-features">Features</a> •
    <a href="#-tech-stack">Tech Stack</a> •
    <a href="#-featured-projects">Featured Projects</a> •
    <a href="#-getting-started">Getting Started</a> •
    <a href="#-deployment">Deployment</a> •
    <a href="#-contact">Contact</a>
  </p>

</div>

---

## 🌟 Overview

**Digital Portfolio 2.0** is an interactive, creative developer portfolio designed for **Ponarassu RS**. It combines bold editorial typography (`DM Serif Display` + `Manrope`), sleek micro-interactions, custom cursor tracking, and a brutalist dark aesthetic with fiery crimson accents.

---

## ✨ Features

- 🎯 **Interactive Custom Cursor** — Dynamic pointer physics with hover magnification and click compression.
- ⚡ **Lightning Fast Performance** — Powered by Vite 8 and React 19 for instant load times and 60fps animations.
- 🎨 **Tailwind CSS v4 Engine** — Modern CSS styling using the latest `@tailwindcss/vite` compiler.
- 📜 **Interactive Certificate Modal** — Built-in modal viewer for verified credentials with keyboard navigation (`Esc` to close).
- 🔄 **Infinite Marquee Banner** — Smooth CSS-driven continuous marquee ticker.
- 📱 **Fully Responsive Layout** — Optimized for desktops, tablets, and mobile screens.
- 🚀 **Render 1-Click Deploy Ready** — Includes `render.yaml` blueprint configuration.

---

## 🛠 Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **[React 19](https://react.dev/)** | Frontend UI Framework |
| **[TypeScript](https://www.typescriptlang.org/)** | Type Safety & Developer Experience |
| **[Vite 8](https://vite.dev/)** | Build Tool & Fast Refresh Dev Server |
| **[Tailwind CSS v4](https://tailwindcss.com/)** | Utility-first Modern Styling Engine |
| **[Google Fonts](https://fonts.google.com/)** | *DM Serif Display* & *Manrope* Typography |
| **[Render](https://render.com/)** | Cloud Hosting & Static Site CDN |

---

## 🚀 Featured Projects

| # | Project | Category | Description |
| :-: | :--- | :--- | :--- |
| **01** | **[PROTO-1](https://rsponarassu.github.io/rsponarassu.github-io/)** | Portfolio · Foundation | The genesis project where the creative developer journey started. |
| **02** | **[Vaultline](https://vaultline-da7g.onrender.com)** | Security · Analyzer | Password strength analyzer, entropy calculator, and strong password generator. |
| **03** | **Meeting-Mute** | Browser Extension | Noise suppression and visual warning indicator for active mic meetings. |

---

## 📂 Project Structure

```text
├── public/
│   ├── certificates/     # Verified certification graphics
│   ├── images/           # High-resolution media assets
│   └── favicon.svg       # Custom brand favicon
├── src/
│   ├── App.tsx           # Main portfolio component & sections
│   ├── index.css         # Design system tokens, cursor & animations
│   ├── main.tsx          # Application entry point
│   └── vite-env.d.ts     # Vite environment types
├── index.html            # SEO meta tags & HTML entry
├── package.json          # Dependencies & build scripts
├── render.yaml           # Render blueprint deployment spec
├── tsconfig.json         # TypeScript compiler configuration
└── vite.config.ts        # Vite build & alias configuration
```

---

## 💻 Getting Started

### Prerequisites

- **Node.js**: `v20.0.0` or higher
- **npm** or **pnpm**

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/digital-portfolio.git
   cd digital-portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```

---

## ☁️ Deployment

### Deploy to Render (Static Site)

1. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "feat: setup portfolio with render blueprint"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```

2. In your [Render Dashboard](https://dashboard.render.com/):
   - Click **New +** → **Static Site**
   - Connect your GitHub repository
   - Set **Build Command**: `npm run build`
   - Set **Publish Directory**: `dist`
   - Click **Create Static Site**

*(Alternatively, use **New +** → **Blueprint** to deploy using the included `render.yaml`)*

---

## 📬 Contact & Connect

<div align="left">

- **Developer**: Ponarassu RS
- **Email**: [rspprof6827@gmail.com](mailto:rspprof6827@gmail.com)
- **LinkedIn**: [Ponarassu RS](https://www.linkedin.com/in/ponarassu-rs-21b57536a/)
- **Instagram**: [@ponarassu._.subramanian](https://www.instagram.com/ponarassu._.subramanian/)

</div>

---

<div align="center">
  <sub>© 2026 PONARASSU RS. Crafted with care and passion.</sub>
</div>
