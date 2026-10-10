<div align="center">

# MCX Solutions

**Smart Solutions. Simple Business.**

A modern, responsive marketing website for MCX Solutions — built with Next.js, TypeScript and Tailwind CSS.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fmhadeshwaranmcxsolutions-dev%2Fmcxsolutionwebsite)

</div>

## ✨ Features

- **Hero section** with animated dashboard mockup and floating motion
- **Solutions** — MCX Order, MCX HR, MCX Stock, MCX POS product cards
- **Why Choose Us** — Reliable, Easy to Use, Business Growth, Dedicated Support
- **Stats band** — key metrics on a navy gradient
- **Services** — 6 service offerings
- **Testimonials** — customer reviews with ratings
- **Contact** — glassmorphism form with contact details
- **Custom MCX logo** — blue/orange gradient SVG with glossy streaks
- Fully **responsive** with a mobile hamburger menu
- **Static export** ready — deploy to GitHub Pages, Vercel, Netlify, or any static host

## 🛠 Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Inter** font

## 🚀 Getting Started

```bash
# install dependencies
npm install

# start dev server
npm run dev
# → http://localhost:3000

# production build (static export to /out)
npm run build
```

## 📂 Project Structure

```
src/
├── app/
│   ├── globals.css      # Tailwind + custom theme utilities
│   ├── layout.tsx       # Root layout, fonts, metadata
│   └── page.tsx         # Home page composition
└── components/
    ├── Navbar.tsx
    ├── Hero.tsx
    ├── DashboardMockup.tsx
    ├── Solutions.tsx
    ├── WhyChooseUs.tsx
    ├── Stats.tsx
    ├── Services.tsx
    ├── Testimonials.tsx
    ├── Contact.tsx
    ├── Footer.tsx
    └── Logo.tsx
```

## 🎨 Theme

- **Orange:** `#FF7A00`
- **Navy:** `#0B1F3A`
- Configured in `tailwind.config.ts` under `brand.*`

## 📦 Deployment

This project uses `output: "export"`, so `npm run build` produces a static `out/` folder.

### Vercel (recommended)
Click the **Deploy with Vercel** button above, or push to a Git repo and import it at [vercel.com](https://vercel.com).

### GitHub Pages
A workflow is included at `.github/workflows/deploy.yml`. Push to `main` and the site deploys automatically. Enable Pages in repo settings → **Pages** → **Source: GitHub Actions**.

## 📝 License

Private — © MCX Solutions. All rights reserved.
