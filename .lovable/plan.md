# Nexus Agency — Design System & Architecture Plan

A complete, production-grade blueprint for your dark-mode, glassmorphic AI-startup agency website. No code yet — pure architecture, design tokens, and roadmap.

---

## 1. Design Philosophy

**Aesthetic direction:** Futuristic AI-startup meets premium SaaS. Think Linear's precision, Vercel's restraint, Stripe's polish, Framer's motion, with a richer blue→violet glow signature. Minimal chrome, maximum atmosphere. Every surface earns its weight through light, blur, and micro-motion — never decoration for decoration's sake.

**Pillars:** Trust · Speed · Intelligence · Craft.

---

## 2. Color System (exact tokens)

All colors in `oklch` (modern, perceptually uniform). Dark mode is the default.

### Surfaces
| Token | Value | Use |
|---|---|---|
| `--background` | `oklch(0.14 0.02 265)` | App background (#0a0b14-ish) |
| `--background-elevated` | `oklch(0.17 0.025 265)` | Section bands |
| `--card` | `oklch(0.19 0.03 265)` | Card base |
| `--card-glass` | `oklch(0.22 0.04 265 / 0.55)` | Glassmorphism card |
| `--popover` | `oklch(0.20 0.03 265)` | Menus, dropdowns |
| `--border` | `oklch(1 0 0 / 0.08)` | Hairline borders |
| `--border-glow` | `oklch(0.72 0.18 270 / 0.35)` | Accent borders |
| `--input` | `oklch(1 0 0 / 0.06)` | Form fields |

### Brand
| Token | Value | Use |
|---|---|---|
| `--primary` | `oklch(0.65 0.22 265)` | Electric blue (#4C6FFF) |
| `--primary-glow` | `oklch(0.78 0.20 265)` | Hover/glow halo |
| `--secondary` | `oklch(0.62 0.25 295)` | Violet (#8B5CF6) |
| `--accent` | `oklch(0.78 0.18 200)` | Cyan highlight (#3DD9EB) |
| `--success` | `oklch(0.72 0.18 155)` | Emerald |
| `--destructive` | `oklch(0.65 0.24 25)` | Coral red |

### Text
| Token | Value |
|---|---|
| `--foreground` | `oklch(0.98 0.005 265)` |
| `--foreground-muted` | `oklch(0.72 0.02 265)` |
| `--foreground-subtle` | `oklch(0.55 0.02 265)` |

### Gradient presets
- `--gradient-primary`: `linear-gradient(135deg, oklch(0.65 0.22 265), oklch(0.62 0.25 295))`
- `--gradient-aurora`: `radial-gradient(ellipse at top, oklch(0.62 0.25 295 / 0.4), transparent 60%), radial-gradient(ellipse at bottom, oklch(0.65 0.22 265 / 0.35), transparent 60%)`
- `--gradient-hero-text`: `linear-gradient(180deg, #FFFFFF 0%, oklch(0.72 0.05 265) 100%)`
- `--gradient-border`: `linear-gradient(135deg, oklch(0.72 0.18 270 / 0.5), oklch(0.62 0.25 295 / 0.1))`
- `--gradient-card`: `linear-gradient(180deg, oklch(1 0 0 / 0.06), oklch(1 0 0 / 0.02))`

### Shadows & glow
- `--shadow-sm`: `0 1px 2px oklch(0 0 0 / 0.4)`
- `--shadow-md`: `0 8px 24px oklch(0 0 0 / 0.5)`
- `--shadow-elevated`: `0 24px 64px -12px oklch(0 0 0 / 0.6)`
- `--glow-primary`: `0 0 40px oklch(0.65 0.22 265 / 0.45)`
- `--glow-violet`: `0 0 60px oklch(0.62 0.25 295 / 0.4)`
- `--glow-soft`: `0 0 120px oklch(0.65 0.22 265 / 0.25)`

---

## 3. Typography

**Fonts:** `Space Grotesk` (display/headings) + `Inter` (body) + `JetBrains Mono` (code/eyebrow labels). Loaded via `next/font` for zero-CLS.

**Scale (clamp-based fluid):**
| Token | Clamp |
|---|---|
| `display-2xl` | `clamp(3.5rem, 7vw, 6rem)` / 1.0 / -0.04em |
| `display-xl` | `clamp(2.75rem, 5vw, 4.5rem)` / 1.05 / -0.035em |
| `h1` | `clamp(2.25rem, 4vw, 3.5rem)` / 1.1 / -0.03em |
| `h2` | `clamp(1.75rem, 3vw, 2.5rem)` / 1.15 / -0.02em |
| `h3` | `1.5rem` / 1.3 / -0.01em |
| `body-lg` | `1.125rem` / 1.65 |
| `body` | `1rem` / 1.7 |
| `caption` | `0.8125rem` / 1.5 / +0.02em uppercase |

**Weights used:** 400, 500, 600, 700. Headings 600 by default.

---

## 4. Spacing, Radius, Layout

- **Spacing scale:** 4-px base — 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 160.
- **Section vertical rhythm:** mobile `py-20`, desktop `py-32`.
- **Container widths:** `max-w-7xl` (1280px) default; `max-w-5xl` for prose; `max-w-3xl` for narrative.
- **Radius:** `sm 6px`, `md 10px`, `lg 16px`, `xl 24px`, `2xl 32px`, `full 9999px`. Cards default `xl`.
- **Breakpoints:** `sm 640 · md 768 · lg 1024 · xl 1280 · 2xl 1536`. Mobile-first.
- **Grid:** 12-col desktop, 6-col tablet, 4-col mobile, gap `24px`.

---

## 5. Glassmorphism Rules

```
background: oklch(1 0 0 / 0.04);
backdrop-filter: blur(20px) saturate(180%);
border: 1px solid oklch(1 0 0 / 0.08);
box-shadow: inset 0 1px 0 oklch(1 0 0 / 0.06), 0 24px 64px -12px oklch(0 0 0 / 0.5);
```
Tiered blur: `blur-sm 8px` (nav), `blur-md 16px` (cards), `blur-lg 24px` (modals), `blur-xl 40px` (hero overlay).

---

## 6. Components (visual rules)

- **Buttons** — `hero` variant: gradient bg, glow shadow, 14px height padding `px-7 py-3.5`, radius `lg`, hover lifts `translateY(-1px)` + intensifies glow. `ghost` variant: glass with hairline border.
- **Cards** — glass base, gradient hairline border via `mask`, hover: border brightens, soft glow appears under card.
- **Inputs** — glass field, 1px border, focus ring uses `--primary-glow` with 4px outer halo.
- **Nav** — sticky, top-blur, shrinks on scroll (height 80 → 64), border-bottom appears past 24px scroll.
- **Pricing cards** — 3 tiers, middle one elevated with gradient border + "Most Popular" badge in violet, glow halo behind it.
- **Hero** — aurora radial gradient bg, animated grid pattern (subtle 40px lines, 4% opacity), 2 floating blurred orbs (blue & violet, `blur-3xl`), gradient text on H1, single primary CTA + ghost secondary, trust strip below.
- **Service cards** — icon in gradient square (40×40, radius `md`), title, 2-line description, hover reveals arrow.
- **Process** — vertical stepper desktop / horizontal scroll mobile, numbered nodes with glow.
- **Testimonials** — 3-up grid, glass cards, avatar + role + logo strip below.
- **FAQ** — accordion, hairline divider, chevron rotates, content fades + slides 8px.
- **Stats** — 4-up numeric counters with gradient text, animate count on viewport enter.
- **Modal** — backdrop `oklch(0 0 0 / 0.6) blur(8px)`, panel glass with gradient border.

---

## 7. Motion System (Framer Motion)

- **Easings:** standard `[0.22, 1, 0.36, 1]` (premium ease-out), spring `{ stiffness: 200, damping: 30 }`.
- **Durations:** micro 150ms, ui 250ms, page 400ms, hero 700ms.
- **Patterns:**
  - Section reveal: opacity 0→1, y 24→0, stagger children 60ms, trigger at 15% viewport.
  - Hero: orchestrated stagger — eyebrow → headline → sub → CTAs (120ms apart).
  - Hover: scale 1.02 + glow brighten on cards; buttons translateY −1px.
  - Background orbs: 20s infinite drift via `animate` keyframes.
  - Page transitions: fade + 8px slide.
- Reduced-motion: respect `prefers-reduced-motion`, disable transforms, keep opacity.

---

## 8. Site Architecture

### Pages
1. `/` — Landing (Hero, Services, Process, Portfolio teaser, Pricing, Testimonials, FAQ, CTA, Footer)
2. `/services` + `/services/[slug]` (web, mobile, telegram-bot, n8n, ai-automation, dashboards, api)
3. `/portfolio` + `/portfolio/[slug]`
4. `/pricing`
5. `/about`
6. `/contact`
7. `/blog` + `/blog/[slug]` (SEO play)
8. `/legal/privacy`, `/legal/terms`
9. Auth: `/login`, `/signup`, `/dashboard` (client portal — Phase 2)

### Folder structure (frontend)
```
src/
  routes/                 # TanStack Start file-based routes
    index.tsx
    services.tsx · services.$slug.tsx
    portfolio.tsx · portfolio.$slug.tsx
    pricing.tsx · about.tsx · contact.tsx
    blog.tsx · blog.$slug.tsx
    api/public/contact.ts  # form webhook → n8n
    api/public/lead.ts
  components/
    ui/                   # shadcn primitives
    layout/               # Nav, Footer, Section
    sections/             # Hero, Services, Pricing, FAQ, CTA, Stats…
    cards/                # ServiceCard, PricingCard, ProjectCard, TestimonialCard
    motion/               # FadeIn, Stagger, Marquee, CountUp
    effects/              # AuroraBg, GridPattern, GlowOrb, NoiseOverlay
  lib/                    # serverFns, utils, validators (zod)
  hooks/ · assets/ · styles.css · content/ (MDX)
```

### Data model (Postgres / Supabase)
- `services(id, slug, title, summary, icon, price_from, features[], order)`
- `projects(id, slug, title, client, category, cover_url, gallery[], stack[], summary, body, results, year, featured)`
- `pricing_plans(id, tier, price, billing, features[], cta, highlighted)`
- `testimonials(id, name, role, company, avatar_url, quote, rating, project_id)`
- `faqs(id, question, answer, category, order)`
- `leads(id, name, email, phone, service_interest, budget, message, source, status, created_at)`
- `posts(id, slug, title, excerpt, cover_url, body_mdx, tags[], published_at, author_id)`
- `users / profiles / user_roles(role: admin|client)` — roles in separate table.

### API surface
- **Server functions (TanStack Start)** for app reads/writes — typed RPC.
- **Public routes** under `/api/public/*` for: contact form, lead capture, n8n webhooks, newsletter.
- All inputs validated with Zod; HMAC signature on inbound webhooks.

### Auth
- Lovable Cloud (Supabase) — email/password + Google OAuth. RLS on every table. `has_role()` SECURITY DEFINER function. Client portal gated under `_authenticated` layout.

### Deployment
- Frontend: Lovable (Cloudflare Workers edge).
- DB + Auth + Storage: Lovable Cloud (Supabase under the hood).
- Automation: n8n self-hosted (Railway/Render) — receives webhooks for new leads → Telegram + email + CRM.
- DNS/CDN: Cloudflare. Stable preview & prod URLs already provisioned.

---

## 9. Conversion Strategy

- **Above-the-fold contract:** crisp value prop in ≤9 words, sub in ≤18, single primary CTA ("Book a free strategy call"), trust strip (logos / "20+ projects shipped" / rating).
- **CTA cadence:** after Hero, after Services, after Portfolio, sticky on mobile after 40% scroll.
- **Pricing transparency:** show starting prices + "What's included", offer "Custom quote" tier.
- **Social proof:** testimonials with real avatars + company logos + outcome numbers ("3.2× conversion lift").
- **Friction reduction:** contact form = 4 fields max + WhatsApp/Telegram quick-chat buttons.
- **Lead routing:** form → server fn → DB insert → n8n webhook → Telegram notification within 5s.

---

## 10. SEO & Performance

- Per-route `head()` with unique title (<60) + meta (<160) + og:image (derive from project cover on detail pages).
- Single H1 per page, semantic landmarks, JSON-LD: `Organization`, `Service`, `FAQPage`, `BreadcrumbList`, `Article` for blog.
- `sitemap.xml` + `robots.txt` generated from route list and DB rows.
- Images: AVIF/WebP, `loading="lazy"`, explicit width/height, blur placeholders.
- Fonts via `next/font` (or local woff2) subset Latin, `display=swap`.
- Animations gated by `prefers-reduced-motion`; orbs use CSS transforms only (GPU).
- Lighthouse targets: Perf ≥ 92, A11y ≥ 95, SEO 100.

---

## 11. Accessibility

- Body text contrast ≥ 7:1 against `--background`; muted text ≥ 4.5:1.
- Focus rings: 2px solid `--primary-glow` + 2px offset, never removed.
- All interactive elements ≥ 44×44 touch target on mobile.
- Keyboard: full nav, Escape closes modals, focus trap in dialogs, skip-to-content link.
- ARIA on accordions, tabs, dialogs; semantic `<nav> <main> <section> <article>`.

---

## 12. Third-party Integrations

- **n8n** — lead routing, follow-up sequences, content publishing.
- **Resend** (or Postmark) — transactional email.
- **Telegram Bot API** — instant lead notifications + client comms.
- **Plausible** — privacy-friendly analytics.
- **Sentry** — error monitoring.
- **Cal.com embed** — strategy-call booking.
- **Stripe** (Phase 2) — deposits & subscription retainers.

---

## 13. Development Roadmap

**Phase 0 — Foundation (Day 1)**
Design tokens in `styles.css`, fonts, base layout shell, nav + footer, motion primitives, glass + button + card variants.

**Phase 1 — Marketing site (Days 2–4)**
Hero, Services overview + 7 detail pages, Pricing, Portfolio grid + case-study template, Process, Testimonials, FAQ, Contact + form → n8n, CTA banner, legal pages. SEO heads + sitemap.

**Phase 2 — Content & polish (Day 5)**
Real copy, generated/curated imagery, motion pass, mobile QA, Lighthouse pass, OG images.

**Phase 3 — Backend & CMS (Week 2)**
Enable Lovable Cloud, schema + RLS, admin dashboard to manage projects/testimonials/leads, role-based auth, blog with MDX.

**Phase 4 — Automation (Week 2–3)**
n8n flows: lead → Telegram/email → CRM tag → drip sequence; weekly portfolio sync; content publish pipeline.

**Phase 5 — Client portal (Week 3+)**
Authenticated dashboard: project status, deliverables, invoices, Stripe deposits, file storage.

**Phase 6 — Growth (ongoing)**
Blog SEO push, programmatic landing pages per service × city, A/B test hero variants, referral program.

---

## 14. Inspirations Mapped

- **Linear** — restraint, hairline borders, gradient text on hero.
- **Vercel** — typographic confidence, deep blacks, sharp grid.
- **Stripe** — animated gradient mesh, generous whitespace, narrative scroll.
- **Framer** — playful motion, layered depth.
- **Supabase** — developer trust signals, code-flavored eyebrows, emerald accents repurposed as our cyan.

---

**Ready to build?** Approve and I'll scaffold the design tokens + landing page first, then iterate section by section.
