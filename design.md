# Handoff: Core Works Landing Page

## Overview
A single-page contact/landing site for Felix Weigl (Core Works), a freelance DevOps engineer / IT infrastructure consultant serving small and mid-size businesses. The page exists purely to let a visitor understand what he does and reach him — one primary CTA (email), plus phone and LinkedIn as secondary contact points. No forms, no multi-page nav.

## About the Design Files
The bundled file (`Core Works Landing.dc.html`) is a **design reference built in a proprietary HTML templating format** — it is a prototype showing intended look, copy, and interaction, **not production code to copy directly**. Your task is to **recreate this design as a real React app** using the plan below, not to embed or transpile the HTML file itself.

## Fidelity
**High-fidelity.** Colors, typography, spacing, copy, and the three layout variants below should be reproduced pixel-close. Exact hex values and font stacks are listed under Design Tokens.

## Recommended stack
- **React 19 with Vite** (single static page, no routing needed — this is one screen).
- **Plain CSS Modules or vanilla-extract / styled-components** — the design uses zero utility-class conventions (inline styles in the reference), so either a CSS Module per component or styled-components works well. Avoid pulling in a full component library (MUI, Chakra, etc.) — this page has ~6 custom elements total and a library would add weight without saving work.
- **Framer Motion** (optional, small) if you want to animate the blinking terminal cursor / theme-swap transitions beyond CSS keyframes — otherwise plain CSS `@keyframes` (already specified below) is sufficient.
- No backend needed. Contact actions are `mailto:` / `tel:` / external LinkedIn links — no form submission, no API.

## Screens / Views
This is a single page with **three interchangeable layout variants** (the prototype lets a viewer switch between them as a "theme" — you can ship one, or keep the switcher as a fun Easter egg / settings toggle). Default/recommended: **Terminal** (this is what the client responded best to).

### Variant A — Terminal (recommended default)
**Purpose:** Playful, on-brand-for-DevOps presentation of the same info as a fake terminal session.
**Layout:**
- Full viewport, `display:flex; align-items:center; justify-content:center`, background `#0a0b0a`.
- Centered "terminal window" card, `max-width: 720px`, width `100%`, background `#0d0f0d`, `border: 1px solid rgba(120,255,150,0.2)`, `border-radius: 8px`, `box-shadow: 0 30px 80px rgba(0,0,0,0.5)`, `overflow: hidden`, font-family IBM Plex Mono.
- **Title bar**: flex row, `padding: 12px 16px`, background `#161816`, bottom border `1px solid rgba(120,255,150,0.15)`. Three 11px circles (`#ff5f56` red, `#ffbd2e` amber, `#27c93f` green) then label `felix@core-works: ~` in `rgba(228,237,228,0.5)` at 12.5px.
- **Body**: `padding: 28px 30px 34px`, flex column, `gap: 16px`, font-size 14.5px, line-height 1.7, base text color `#a4f0b8` (terminal green).
- Content is a sequence of fake shell commands, each a prompt line followed by its "output" line:
  1. `$ whoami` → output "Felix Weigl" (22px, weight 600, color `#e4ede4`)
  2. `$ cat role.txt` → "DevOps Engineer · Fachinformatiker · Core Works" (color = accent)
  3. `$ cat about.txt` → tagline paragraph, `rgba(228,237,228,0.75)`, max-width 560px
  4. `$ ls ./stack` → tech list rendered inline, `gap: 0 22px`, color `#e4ede4`
  5. `$ cat contact.txt` → three lines: `email  info@core-works.io`, `phone  +49 174 3203893`, `linked  in/felix-weigl` — each an `<a>`, `color: inherit`, no underline
  6. Final line: prompt + a clickable command `mail --send "Kontakt per E-Mail"` (underlined, this IS the email link) + a blinking cursor block (8×16px, background `#a4f0b8`, `animation: blink 1.1s step-end infinite`)
- Prompt prefix on every command line: `felix@core-works` in `#5fe884`, then `:~$` in `rgba(228,237,228,0.5)`.
