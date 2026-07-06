# SPEC — Sardar Patel Education Campus (Demo Website)

A modern, luxury-styled **campus website demo** built for Sardar Patel Education Campus,
Bakrol, Anand (Gujarat) — managed by Tirupati Foundation Trust, est. 2007.
Frontend-only, demo data, no backend. Dark + gold theme, built with Tailwind (CDN),
Playfair Display + DM Sans, and Material Symbols.

Real campus facts (name, address, contacts, institutes, stats, notices) are taken from
[spec.edu.in](https://www.spec.edu.in); portal screens use sample data.

## Live demo
Hosted on GitHub Pages → see the repository's **Pages** URL.

## Pages
| Page | File | What it is |
|------|------|------------|
| Home | `index.html` | Marketing homepage — hero, trustee's message, 7 institutes, news, CTA |
| Student Corner | `notices.html` | Notice board — announcements, exam schedules, holiday list |
| Admin Dashboard | `dashboard.html` | Admin console — KPIs, attendance, fees, student table |
| Result Portal | `results.html` | Student result lookup + printable GTU-style marksheet |

All pages share one navigation and the gold/dark design system, and cross-link to each other.

## Demo behaviour
- Real navigation (Home, Notice Board, Admin, Results, Portals, Logout) works between pages.
- Buttons for features that aren't built yet show a styled **"Coming soon"** popup (`demo.js`) instead of a dead click.
- `View Result` scrolls to the marksheet; `Print` opens the print dialog.

## Run locally
Just open `index.html` in a browser, or serve the folder:
```bash
python -m http.server 4173
```
Then visit http://localhost:4173

> Needs an internet connection — Tailwind, fonts, and images load from CDNs.

---
_This is a design/demo build. Replace the placeholder content, contact details, and images with the real school's information before going to production._
