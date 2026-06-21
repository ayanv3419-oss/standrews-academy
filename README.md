# St. Andrews Academy — Demo Website

A modern, luxury-styled **school website demo** (frontend-only, fake data, no backend).
Dark + gold theme, built with Tailwind (CDN), Playfair Display + DM Sans, and Material Symbols.

## Live demo
Hosted on GitHub Pages → see the repository's **Pages** URL.

## Pages
| Page | File | What it is |
|------|------|------------|
| Home | `index.html` | Marketing homepage — hero, principal's message, news, CTA |
| Parent Notice Board | `notices.html` | Parent portal — announcements, exam schedules, holiday list |
| Admin Dashboard | `dashboard.html` | Admin console — KPIs, attendance, fees, student table |
| Result Portal | `results.html` | Student result lookup + printable marksheet |

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
