# Tibszi Légvár Sopron – Bouncy Castle Rental Website

A modern, mobile-first, SEO-optimised website for **Tibszi Légvár**, a bouncy castle (ugrálóvár / légvár) rental business based in Sopron, Hungary.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [TanStack Start](https://tanstack.com/start) |
| Routing | TanStack Router v1 (file-based) |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 + custom CSS |
| Language | TypeScript 5.7 (strict) |
| Deployment | Netlify |

## Features

- **One-page layout** with smooth-scroll navigation (Hero, Services, Gallery, Pricing, FAQ, Contact/Booking)
- **Hungarian language** throughout, optimised for local Sopron market
- **SEO & AI optimised** with structured headings, meta tags, long-tail FAQ answers, and semantic HTML
- **Photo gallery** with lightbox – 15 real product photos
- **Pricing section** with two tiers (30 000 Ft / 45 000 Ft)
- **Interactive FAQ** covering long-tail AI search queries
- **Contact & booking form** with phone, email, and Facebook links
- **Mobile-first responsive** design with hamburger navigation
- **Scroll-reveal animations** and floating bubble hero decorations
- **Blue + Orange** brand palette (confidence + playfulness)

## Running Locally

```bash
npm install
npm run dev
```

The dev server starts at `http://localhost:3000` (or via Netlify CLI at `http://localhost:8888`).

## Building for Production

```bash
npm run build
```

Output goes to `dist/client` (configured in `netlify.toml`).

## Contact Info (embedded in site)

- Phone: +36 20 522 7000 / +36 20 330 0632
- Email: pethotibor01@gmail.com
- Facebook: [Tibszi Légvár Sopron](https://www.facebook.com/profile.php?id=61559879000566)
