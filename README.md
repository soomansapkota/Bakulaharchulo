# Saffron & Ember — restaurant website

A small, light, front-end-only website for a modern South Asian restaurant in
Sydney. Five pages plus a dish details page, ten dishes, and nothing else.

There is no backend, no database and no API. No accounts, cart, ordering,
checkout, payment, bookings or contact form — by design.

## Running it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check and build to dist/
npm run preview
```

Requires Node 20 or newer.

## Stack

React 19 · Vite · TypeScript · Tailwind CSS · React Router · Lucide icons.

## Pages

| Route | Contents |
| --- | --- |
| `/` | Hero, introduction, featured dishes, about preview, gallery preview, location |
| `/menu` | Heading, category filter, all ten dishes |
| `/menu/:dishId` | Large image, price, description, ingredients, dietary, spice level, related dishes |
| `/about` | Story, Tradition / Fire / Modern, kitchen |
| `/gallery` | Photo grid with lightbox |
| `/contact` | Address, phone, email, opening hours |

## Structure

```
src/
  components/  Navbar, Footer, DishCard, CategoryFilter, GalleryGrid,
               LocationSection, Photo, Reveal, SectionHeading, SpiceMark
  pages/       One file per route
  data/        dishes.ts (the ten dishes), site.ts, gallery.ts
  lib/         small helpers
```

## Design

White is the dominant colour: paper `#FFFFFF`, shell `#FBF9F5`, beige `#F3EDE3`,
hairline borders `#E6DFD3`, charcoal text `#17150F`, saffron accent `#B07C24`.
Display type is Cormorant Garamond, body and navigation are Jost, both loaded in
`index.html`. Colours and type live in `tailwind.config.js`.

## The map

`LocationSection.tsx` embeds OpenStreetMap, which needs no API key and no
backend, centred on 123 George Street with a marker. To swap it for a Google
Maps embed, replace the iframe `src` with a Google Maps embed URL — the rest of
the section is unchanged.

## Photography

All image URLs are built by the `photo()` helper in `src/data/dishes.ts` and
used there and in `src/data/gallery.ts`. They point at Unsplash; replace them
with the restaurant's own photography in those two files. Every image renders
through `Photo`, which fades in on load and falls back to a warm beige panel if
a file is unavailable, so a missing photo never breaks a layout.

## Deploying

`dist/` is a static single-page app. Client-side routing needs a rewrite so deep
links like `/menu/saffron-momo` serve `index.html`:

- Netlify: `public/_redirects` is included.
- Vercel: rewrite `/(.*)` to `/index.html`.
- Nginx: `try_files $uri /index.html;`
