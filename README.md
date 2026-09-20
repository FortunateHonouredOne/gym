# Dark Gym City — Premium Fitness Website

A custom-designed, high-conversion web platform built for **Dark Gym City** in Kuriachira, Thrissur, Kerala. Built with Next.js App Router, TypeScript strict mode, and Tailwind CSS.

---

## Quick Start

### 1. Requirements
- Node.js 18.17+ (or Node 20+)
- npm / yarn / pnpm

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Locally (Dev Server)
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
npm run start
```

---

## Deployment to Vercel

1. Push this repository to GitHub (`https://github.com/FortunateHonouredOne/gym`).
2. Log in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import the `gym` repository.
4. Framework Preset will automatically detect **Next.js**.
5. Add any optional Environment Variables (see `.env.example`).
6. Click **Deploy**.

---

## Business Data & Content Customization

All client-facing business details live outside components in `data/`:

| File | Content & Customization |
| :--- | :--- |
| [`data/business.ts`](./data/business.ts) | **Business Name, Phone numbers, WhatsApp, Address, Coordinates, Weekly Schedule, Dedicated Ladies Session hours, Google Maps links, and Founder info.** |
| [`data/facilities.ts`](./data/facilities.ts) | Facility zones, equipment highlights, descriptions, and imagery. |
| [`data/reviews.ts`](./data/reviews.ts) | Verified customer reviews, ratings, excerpts, and reviewer names. |
| [`data/gallery.ts`](./data/gallery.ts) | Photo gallery items, categories, captions, and aspect ratios. |
| [`data/faq.ts`](./data/faq.ts) | Frequently asked questions and answers. |

### How to update specific information:
- **Phone Number / WhatsApp**: Open [`data/business.ts`](./data/business.ts) and edit `phone`, `phoneDisplay`, and `whatsapp`.
- **Opening Hours**: Open [`data/business.ts`](./data/business.ts) and update `schedule[dayIndex]`. The dynamic live status badge automatically recalculates using the `Asia/Kolkata` timezone.
- **Dedicated Ladies Hours**: Open [`data/business.ts`](./data/business.ts) and edit `specialSessions`.
- **Images**: Located in `public/images/dark-gym-city/` (`hero/`, `facility/`, `equipment/`, `gallery/`, `og/`). Replace any image with your file keeping the same name or update the path in `data/`.
- **Lead Webhook (n8n / CRM)**: In `.env.local` or Vercel, set `NEXT_PUBLIC_LEAD_WEBHOOK_URL=https://your-webhook-url`. Form submissions will automatically POST JSON payloads with lead details and UTM tags.
- **Google Analytics / Meta Pixel**: Set `NEXT_PUBLIC_GA_ID` or `NEXT_PUBLIC_META_PIXEL_ID` in `.env.local`.

---

## Tech Stack & Architecture

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS
- **Icons**: `lucide-react`
- **Fonts**: `Sora` (Headings) & `Inter` (Body) via `next/font/google`
- **SEO & Schema**: Rich `HealthClub` Schema.org JSON-LD, OpenGraph, Twitter Cards, `sitemap.xml`, `robots.txt`
- **Architecture**: Server Components by default; interactive client leaves strictly isolated for maximum performance.

---

## License & Attribution

Designed and built for **Dark Gym City**, Thrissur, Kerala.
© All rights reserved.
