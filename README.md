# WEDFLIX — It's a JustChaz Wedding 💍

A Netflix-style wedding invitation website for **Justin & Chastidy**, rebuilt on
the **Netband** Next.js template as a single-page, fully responsive experience
(desktop **and** mobile friendly).

🗓️ **September 12, 2026 · 4:00 PM** · The Birchwood Manor, Whippany, NJ
\#ItsAJustChazWedding

## Sections

1. **Hero + Countdown** — *"it's finally Happening"* with a live countdown to the big day.
2. **Our Story** — the couple's journey as a Swiper "episodes" slider.
3. **Event Details + Map** — date, time, venue, and a Google map with directions.
4. **Registry** — wish list, honeymoon fund, and the wedding hashtag.
5. **FAQ** — an accordion of common guest questions.
6. **RSVP** — a form (responses saved to `localStorage`; swap in Formspree/Google Forms to collect for real).
7. **Ending** — *"IT'S A JUSTCHAZ WEDDING — HOPE TO SEE YOU SOON!"*

## Tech

- **Next.js 14** (App Router) + Bootstrap + Swiper, built from the Netband template.
- Static export (`output: "export"`) → deployed to **GitHub Pages** via Actions.
- Custom wedding styling in `app/globals.css`; reusable components in `components/wedding/`.

## Develop

```bash
npm install --legacy-peer-deps
npm run dev        # http://localhost:3000
npm run build      # static export to ./out
```

## Project structure

```
app/
  layout.js          # global CSS imports + metadata
  page.js            # the single wedding page
  globals.css        # WEDFLIX wedding styles
components/wedding/   # Header, Countdown, StorySlider, Faq, Rsvp
public/assets/
  img/wedding/       # couple photos (from the invitation video)
  videos/            # drop wedding videos here (served with the site)
  css/ fonts/        # Netband template assets
.github/workflows/   # GitHub Pages build + deploy
```

## Adding videos

Place video files in `public/assets/videos/`. After pushing to `main` they are
deployed and reachable at `https://rhkrys.github.io/wedflix/assets/videos/<file>`.
See `public/assets/videos/README.md` for usage.
