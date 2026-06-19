# WEDFLIX — It's a JustChaz Wedding 💍

A Netflix-style wedding invitation website for **Justin & Chastidy**, recreating
the "WEDFLIX" formal invitation video as an interactive, fully responsive web
experience (desktop **and** mobile friendly).

🗓️ **September 12, 2026 · 4:00 PM** · The Birchwood Manor, Whippany, NJ
\#ItsAJustChazWedding

## The experience

1. **WEDFLIX intro** — the Netflix-style logo reveal animation.
2. **Who's watching?** — pick a profile to "enter" the celebration.
3. **Home / Hero** — *"it's finally Happening"* banner with Play & More Info.
4. **Story (detail page)** — the couple's logline and synopsis.
5. **Episodes** — Seasons 1–3 tell the story so far; **Season 4** holds the real
   wedding logistics (Date & Time, Location, RSVP).
6. **More Like This (4 Links)** — Website, FAQ, Registry, and an RSVP form.
7. **Ending** — *"IT'S A JUSTCHAZ WEDDING — HOPE TO SEE YOU SOON!"*

## Tech

- Plain **HTML + CSS + JavaScript** — no build step, no dependencies.
- Responsive layout with dedicated mobile breakpoints.
- RSVP submissions are stored in `localStorage` (swap in a form backend such as
  Formspree/Google Forms to collect responses for real).

## Run it

Just open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Structure

```
index.html
assets/
  css/style.css
  js/main.js
  img/            # photos extracted from the invitation video
```

Photos were lifted from the original invitation video.
