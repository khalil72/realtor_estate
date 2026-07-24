# EstateHaus — Real Estate Website

Orange / Black / White themed real estate site built with **Next.js 16 (App Router)**, **Tailwind CSS**, **shadcn/ui**-style components, and **Framer Motion** animations.

## Pages
- `/` — Animated hero, trust marquee, featured properties, visual gallery, CTA
- `/properties` — Full listing of the latest 16 properties with search + filters (city, type, status, sort)

## Setup
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Structure
```
app/
  layout.tsx          Root layout, fonts, navbar/footer
  page.tsx            Home page
  properties/page.tsx Properties listing page
  globals.css         Tailwind layers + custom utilities
components/
  ui/                 shadcn/ui-style primitives (button, badge, card, select)
  hero.tsx            Hero section
  gallery.tsx         Gallery section
  featured.tsx        Featured property grid
  property-card.tsx   Reusable listing card
  properties-explorer.tsx  Client-side filter + search logic
data/properties.ts    Mock property data (16 listings)
```

## Design tokens
- **Colors**: `ink #0B0B0C`, `ember #FF5A1F` (primary accent), `cream #F7F4EF`, `paper #FFFFFF`
- **Type**: Fraunces (display/serif headlines), Inter (body), Space Mono (prices, stats, labels)

## Notes
- Images are pulled from Unsplash via `next/image` remote patterns (configured in `next.config.js`).
- Replace `data/properties.ts` with real listings / API data when ready.
