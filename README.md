# AURORA — Luxury Birthday Wishes Experience

> A bespoke, romantic digital experience crafted for someone truly special. Designed with vintage luxury editorial aesthetics, warm ivory paper textures, deep burgundy stationery, gold filigree ornaments, polaroid memory scrapbooks, and an interactive 3D wax-sealed letter reveal.

---

## ✨ Mobile-First Editorial Architecture

- **Mobile-First Luxury Layout**: Specifically composed for mobile viewports (320px, 360px, 375px, 390px, 430px) as well as tablet and desktop monitors. Zero horizontal scroll and zero cramped grids.
- **Section A — Cinematic Hero**: Full-width photographic composition with a prominent fine-art portrait, expressive editorial serif typography ("Happy Birthday, My Beautiful Girl"), her name in shimmering gold foil, and the primary "Open My Letter" call-to-action.
- **Section B — Personal Letter**: Clean ivory digital stationery sheet with 16–17px readable serif typography (`leading-[1.75]`), generous whitespace, mobile "Read Full Letter" toggle, and an embossed wax seal.
- **Section C — Beautiful Memories**: Mobile photo story featuring a deliberate sequence of large fine-art photographs (1 per row on mobile, spacious 2–3 columns on desktop), editorial chapter stamps, concise captions, and fullscreen Lightbox preview.
- **Section D — What Makes You Special**: Refined editorial list with Roman numerals (`I`, `II`, `III`...) and delicate hairline dividers—completely replacing bulky SaaS-like card grids.
- **Section E — A Birthday Wish**: Dramatic deep-burgundy velvet panel with clean ivory typography and minimal gold accents, styled like a page in a luxury printed book.
- **Section F — The Secret Surprise**: Interactive 3D burgundy card with an authentic wax seal, celebration confetti, and an unfolded letter reveal with the heading *"You Deserve All the Beautiful Things in Life."*
- **Section G — Final Moment**: Cinematic dark wine conclusion (`#200308` / `#30050D`), laurel crest, heartfelt closing blessing, *"Made with love, just for you"*, and smooth return-to-top control.
- **Ambient Romantic Melody**: Non-intrusive mobile floating player supporting local audio (`public/audio/birthday-ambient.mp3`) with a procedural Web Audio API music-box chime synthesizer fallback.
- **Graceful Image Fallback**: Missing photos gracefully render as fine-art framed placeholders with delicate gold watermarks—the layout never breaks.

---

## 📁 Project Structure

```
brithday/
├── public/
│   ├── images/
│   │   ├── birthday-hero.jpg          # Main hero framed photo
│   │   ├── birthday-memory-01.jpg     # Memory 1 (Polaroid)
│   │   ├── birthday-memory-02.jpg     # Memory 2 (Polaroid)
│   │   ├── birthday-memory-03.jpg     # Memory 3 (Polaroid)
│   │   ├── birthday-memory-04.jpg     # Memory 4 (Polaroid)
│   │   ├── birthday-memory-05.jpg     # Memory 5 (Polaroid)
│   │   ├── birthday-portrait.jpg      # Memory 6 (Polaroid)
│   │   └── decorations/               # Additional optional ornaments
│   └── audio/
│       └── birthday-ambient.mp3       # Optional romantic audio track
├── src/
│   ├── app/
│   │   └── App.tsx                    # Main experience page
│   ├── components/
│   │   ├── decorations/               # GoldOrnaments, FloatingPetals, RomanticImage
│   │   ├── gallery/                   # PolaroidCard, LightboxModal
│   │   ├── interactions/              # SurpriseEnvelope (3D wax seal & letter)
│   │   ├── layout/                    # Navbar, AudioPlayer
│   │   └── sections/                  # Hero, Letter, Memories, Reasons, Wish, Surprise, Final
│   ├── config/
│   │   └── birthdayContent.ts         # ⭐ SINGLE FILE TO PERSONALIZE EVERYTHING
│   ├── styles/
│   │   └── globals.css                # Gold foil shimmer, textures, shadows
│   ├── types/
│   │   └── birthday.ts                # TypeScript content interfaces
│   └── main.tsx
├── index.html
├── vite.config.ts
├── tailwind.config.js
└── package.json
```

---

## 🎨 How to Personalize the Website

You can personalize the entire website in minutes without touching complex component code!

### 1. Edit Messages & Content
Open [`src/config/birthdayContent.ts`](file:///c:/D/prosnol%20projects/brithday/src/config/birthdayContent.ts) and customize:
- `recipient.name`: Change `"Kriti"` to her real name or nickname.
- `hero`: Title, subtitle, and intro message.
- `letter`: The heartfelt paragraphs in the main letter.
- `memories`: Photo captions and dates.
- `reasons`: The 6 reasons that make her special.
- `wish`: Birthday blessings and wishes.
- `surprise`: Secret message revealed inside the interactive envelope.

### 2. Replace Photos
Simply drop your photos into `public/images/` using these filenames:
- `public/images/birthday-hero.jpg` (Hero portrait)
- `public/images/birthday-memory-01.jpg`
- `public/images/birthday-memory-02.jpg`
- `public/images/birthday-memory-03.jpg`
- `public/images/birthday-memory-04.jpg`
- `public/images/birthday-memory-05.jpg`
- `public/images/birthday-portrait.jpg`

*Tip: If you haven't uploaded a photo yet, the website automatically displays an exquisite fine-art editorial illustration placeholder—nothing ever looks broken!*

### 3. Add Background Music (Optional)
Drop an MP3 file into:
`public/audio/birthday-ambient.mp3`
*(If no file is provided, the website automatically synthesizes a gentle, romantic music-box lullaby using the Web Audio API when she taps the play button!)*

---

## 🚀 Running Locally

```bash
# 1. Install dependencies (already installed)
npm install

# 2. Start the local development server
npm run dev
```

Open your browser to: `http://localhost:5173`

---

## 📦 Building & Deploying as a Static Site

This project is a 100% static React site (zero backend, zero database, zero external API keys needed).

```bash
npm run build
```

The production-ready static files will be generated in the `dist/` directory.

### Deploying to Vercel
1. Run `npx vercel` or push this folder to a GitHub repository and import it into [Vercel](https://vercel.com).
2. Framework Preset: **Vite**
3. Build Command: `npm run build`
4. Output Directory: `dist`

### Deploying to Netlify
1. Drag and drop the `dist/` folder directly onto [Netlify Drop](https://app.netlify.com/drop).
2. Or connect your Git repository with build command `npm run build` and publish directory `dist`.

### Deploying to GitHub Pages
The Vite configuration uses `base: './'` which allows the site to work seamlessly under any GitHub Pages subpath (e.g. `https://username.github.io/repository-name/`).
