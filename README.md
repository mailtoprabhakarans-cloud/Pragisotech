# 🚀 Pragiso Soft Technologies — Digital Vision Platform

> **Tagline:** INNOVATE • BUILD • GROW  
> A high-end, responsive, and interactive digital portfolio and enterprise services platform built for **PRAGISO SOFT TECHNOLOGIES**.

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Frameworks & Core Architecture](#-frameworks--core-architecture)
- [Libraries & UI Tools](#-libraries--ui-tools)
- [Animation System & Micro-Interactions](#-animation-system--micro-interactions)
  - [Custom Animation Hooks](#1-custom-animation-hooks)
  - [CSS Keyframe Animations](#2-css-keyframe-animations)
  - [Component-Level Animation Features](#3-component-level-animation-features)
- [Design System & Responsive Architecture](#-design-system--responsive-architecture)
- [Error Handling & Loading Fallbacks](#-error-handling--loading-fallbacks)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)

---

## 🌐 Overview

**PRAGISO SOFT TECHNOLOGIES** provides modern web development, mobile application development, digital marketing, and UI/UX design solutions. This website showcases Pragiso's core services, client portfolio, case studies, technology stack, and interactive client inquiry workflow with a state-of-the-art dark navy glassmorphic design.

---

## ⚡ Frameworks & Core Architecture

| Technology                                               | Role                      | Description                                                                        |
| -------------------------------------------------------- | ------------------------- | ---------------------------------------------------------------------------------- |
| **[React 19](https://react.dev/)**                       | Core Library              | UI rendering engine using React 19 concurrent features                             |
| **[TypeScript 5.8](https://www.typescriptlang.org/)**    | Language                  | Type-safe code execution across components, hooks, routes & data models            |
| **[Vite 8](https://vitejs.dev/)**                        | Build Tool & Bundler      | Ultra-fast HMR dev server & production bundler                                     |
| **[TanStack Start](https://tanstack.com/start)**         | Full-Stack Meta-Framework | SSR, static generation, server routes & client hydration                           |
| **[TanStack Router 1.170](https://tanstack.com/router)** | Routing Framework         | Type-safe file-based routing system with loaders, search params & error boundaries |
| **[TanStack Query 5](https://tanstack.com/query)**       | Async Data Management     | Asynchronous server state management, caching & revalidation                       |

---

## 🛠️ Libraries & UI Tools

| Library / Tool                                                                    | Category               | Usage in Website                                                                                               |
| --------------------------------------------------------------------------------- | ---------------------- | -------------------------------------------------------------------------------------------------------------- |
| **[Tailwind CSS v4](https://tailwindcss.com/)**                                   | Styling                | Utility-first CSS engine with OKLCH semantic color tokens and inline theme overrides                           |
| **[Radix UI Primitives](https://www.radix-ui.com/)**                              | Unstyled UI Components | Accessible building blocks (`Select`, `Dialog`, `Popover`, `DropdownMenu`, `Tabs`, etc.)                       |
| **[Lucide React](https://lucide.dev/)**                                           | Icons                  | Crisp vector icons (`Code2`, `Smartphone`, `Palette`, `TrendingUp`, `Zap`, `RefreshCw`, `AlertTriangle`, etc.) |
| **[Embla Carousel](https://www.embla-carousel.com/)**                             | Carousel Engine        | Smooth interactive testimonials carousel slider                                                                |
| **[Sonner](https://sonner.emilkowal.ski/)**                                       | Toast Notifications    | Sleek toast alerts on project inquiry submissions                                                              |
| **[React Hook Form](https://react-hook-form.com/)** & **[Zod](https://zod.dev/)** | Form Validation        | Type-safe form validation & input state management                                                             |
| **[tw-animate-css](https://github.com/jamiebuilds/tw-animate-css)**               | Animation Utility      | CSS animation utilities integrated into Tailwind engine                                                        |

---

## 🎨 Animation System & Micro-Interactions

The animation architecture combines custom React hooks, hardware-accelerated CSS keyframes, glassmorphism spotlight overlays, and scroll-triggered intersection observers.

### 1. Custom Animation Hooks

- **[`useTilt`](file:///c:/Users/prabh/Downloads/pragiso-digital-vision-main/pragiso-digital-vision-main/src/hooks/use-tilt.ts)**:
  - Calculates real-time 3D perspective rotation (`rotateX`, `rotateY`, `scale3d`) based on mouse position inside card containers.
  - Dynamically updates `--spotlight-x` and `--spotlight-y` CSS custom properties to render cursor-tracking radial spotlight glows.
- **[`useInView`](file:///c:/Users/prabh/Downloads/pragiso-digital-vision-main/pragiso-digital-vision-main/src/hooks/use-reveal.ts)**:
  - Uses `IntersectionObserver` to trigger scroll-based section entrance animations (`data-visible="true"`).
- **[`useCountUp`](file:///c:/Users/prabh/Downloads/pragiso-digital-vision-main/pragiso-digital-vision-main/src/hooks/use-reveal.ts)**:
  - Smooth cubic-eased numeric counter animation (`useCountUp`) when statistics cards enter the viewport.

---

### 2. CSS Keyframe Animations

Defined in [`src/styles.css`](file:///c:/Users/prabh/Downloads/pragiso-digital-vision-main/pragiso-digital-vision-main/src/styles.css):

| Keyframe Animation         | Class Utility            | Description / Effect                                                 |
| -------------------------- | ------------------------ | -------------------------------------------------------------------- |
| `@keyframes scan-beam-h`   | `.animate-scan-beam-h`   | Continuous horizontal laser line scanning down the background grid   |
| `@keyframes scan-beam-v`   | `.animate-scan-beam-v`   | Vertical cyan laser light beam scanning across the backdrop          |
| `@keyframes float-slow`    | `.animate-float`         | Smooth 9s vertical floating motion for background particles & badges |
| `@keyframes float-reverse` | `.animate-float-reverse` | Counter-directional floating animation for balance                   |
| `@keyframes shine-sweep`   | `.card-shine`            | 105° light shimmer sweep passing over glass cards on hover           |
| `@keyframes pulse-ring`    | `.animate-pulse-ring`    | Pulsing energy aura ring expanding outward from key element badges   |
| `@keyframes text-shimmer`  | `.text-shimmer-animated` | Continuous glowing gradient shimmer text animation                   |
| `@keyframes icon-morph`    | `.animate-icon-morph`    | Fluid organic morphing border-radius animation for icon containers   |
| `@keyframes orbit`         | Inline style             | 360° circular orbiting particles around central hero graphics        |
| `@keyframes glow-breathe`  | `.glow-breathe`          | Breathing ambient nebula blurs (scaling & blur opacity cycling)      |
| `@keyframes badge-bounce`  | `.animate-badge-bounce`  | Gentle vertical bounce indicator for category badges & error icons   |
| `@keyframes counter-fill`  | Inline style             | Animated progress bar width fill upon container reveal               |

---

### 3. Component-Level Animation Features

- **Hero Section**:
  - **Staggered Landing Entrance**: Words in the heading slide up and fade in with cascading delay timings (`reveal-up`).
  - **3D Showcase Card**: Mouse-tracking 3D tilt card with custom spotlight radial glow & live pulse status badge.
  - **Laser Beams & Particles**: Multi-layer background scan lines, floating tech service badges (`Web Dev`, `iOS/Android`, `UI/UX`, `Cloud Architecture`, `AI`), and pulsing SVG network constellation nodes.
- **Navigation Bar (`Navbar`)**:
  - **Logo Spin**: 360° rotation and cyan glow shadow on hover.
  - **Link Underline**: Expanding gradient underline sweep (`.link-underline`) on hover.
  - **Magnetic CTA Button**: 3D lift & glow shadow on hover (`.btn-magnetic`).
  - **Mobile Menu**: Staggered slide-in animation for link items when hamburger menu is toggled.
- **Services Cards (`Services`)**:
  - 3D mouse-tilt cards with radial spotlight tracking, morphing icon containers, and staggered tag hover fills.
- **About Section (`About`)**:
  - Scroll-triggered numeric stat counters (`useCountUp`), bottom progress fill bars, and pulse-ring bullet indicators.
- **Portfolio Section (`Portfolio`)**:
  - Category filter transitions, card shine sweeps, image scale + brightness boost, and rotating arrow badges.
- **Process Section (`Process`)**:
  - Animated timeline connection line, pulsing node rings, and growing left accent bars on hover.

---

## 🎨 Design System & Responsive Architecture

- **Color Palette (OKLCH Tokens)**:
  - Base Background: Deep Navy (`oklch(0.15 0.05 265)`)
  - Accent Colors: Electric Blue, Cyan, Royal Blue, Teal
  - Glassmorphic Surfaces: Blur backdrop saturations with OKLCH translucent borders
- **Fluid Container Slicing**:
  - Custom `.fluid-container` class ensuring full-bleed responsiveness across all screen sizes.
- **Ultra-Wide Breakpoints**:
  - `3xl` (`120rem` / `1920px`)
  - `4xl` (`160rem` / `2560px`)
  - `5xl` (`200rem` / `3200px`)
  - Scales grids up to 4-6 columns on 2K / 4K / TV displays.

---

## 🚨 Error Handling & Loading Fallbacks

- **`PendingComponent`** ([`src/routes/__root.tsx`](file:///c:/Users/prabh/Downloads/pragiso-digital-vision-main/pragiso-digital-vision-main/src/routes/__root.tsx)):
  - Fullscreen loading page featuring dual counter-rotating gradient rings around Pragiso's brand mark, loading dots, and an animated shimmer progress bar.
- **`ErrorComponent`** ([`src/routes/__root.tsx`](file:///c:/Users/prabh/Downloads/pragiso-digital-vision-main/pragiso-digital-vision-main/src/routes/__root.tsx)):
  - Glassmorphic 500 system alert page with a bouncing warning icon badge, scanning laser line, magnetic "Try Again" button (with spinning loader state), and collapsible technical stack trace details.
- **`NotFoundComponent`** ([`src/routes/__root.tsx`](file:///c:/Users/prabh/Downloads/pragiso-digital-vision-main/pragiso-digital-vision-main/src/routes/__root.tsx)):
  - 404 page featuring gradient numbers, search icon badge, and quick navigation buttons back to Home & Services.
- **`renderErrorPage()`** ([`src/lib/error-page.ts`](file:///c:/Users/prabh/Downloads/pragiso-digital-vision-main/pragiso-digital-vision-main/src/lib/error-page.ts)):
  - Fallback HTML error renderer ensuring even raw browser/server errors display with Pragiso's dark navy glassmorphic layout.

---

## 📁 Project Structure

```text
pragiso-digital-vision/
├── public/
│   ├── favicon.png
│   ├── pragiso-logo.png
│   ├── pragiso-mark.png
│   └── pragiso-services-hero.png   # 3D Digital Services Showcase Asset
├── src/
│   ├── assets/                      # Brand assets & metadata
│   ├── components/
│   │   ├── site/                    # Core website section components
│   │   │   ├── Navbar.tsx           # Glassmorphic header & mobile navigation
│   │   │   ├── Hero.tsx             # Viewport Hero with 3D card & scan lines
│   │   │   ├── About.tsx            # About section & animated stats
│   │   │   ├── Services.tsx         # Interactive 3D service cards
│   │   │   ├── Portfolio.tsx        # Work showcase with category filters
│   │   │   ├── Process.tsx          # Step-by-step interactive timeline
│   │   │   ├── Technology.tsx       # Tech stack pills with hover shine
│   │   │   ├── WhyUs.tsx            # Key advantages grid
│   │   │   ├── Testimonials.tsx     # Client review carousel
│   │   │   ├── CallToAction.tsx     # Hero CTA section
│   │   │   ├── Contact.tsx          # Project inquiry form & map
│   │   │   ├── Footer.tsx           # Footer with quick links & social icons
│   │   │   └── Reveal.tsx           # Scroll reveal wrapper & section headings
│   │   └── ui/                      # Radix UI styled primitives
│   ├── data/
│   │   └── case-studies.ts          # Portfolio project & case study data
│   ├── hooks/
│   │   ├── use-reveal.ts            # IntersectionObserver & count-up hooks
│   │   └── use-tilt.ts              # 3D card tilt & spotlight hook
│   ├── lib/
│   │   ├── error-page.ts            # HTML fallback error renderer
│   │   └── utils.ts                 # Tailwind class merger utility
│   ├── routes/
│   │   ├── __root.tsx               # Root route, 404, loading & error boundaries
│   │   ├── index.tsx                # Homepage layout route
│   │   ├── case-studies.index.tsx   # Case studies directory
│   │   └── case-studies.$slug.tsx   # Individual case study detail view
│   ├── styles.css                   # Tailwind v4 theme, keyframes & utilities
│   └── main.tsx                     # React application entry point
├── package.json
└── README.md
```

---

## 💻 Getting Started

### Prerequisites

- **Node.js**: `v18.0.0` or higher
- **npm**: `v9.0.0` or higher

### Installation & Local Setup

```bash
# 1. Clone the repository
git clone https://github.com/pragiso/pragiso-digital-vision.git

# 2. Navigate to project directory
cd pragiso-digital-vision

# 3. Install dependencies
npm install

# 4. Start local development server
npm run dev
```

The application will launch on `http://localhost:8080`.

### Type Check & Build Commands

```bash
# Run TypeScript compilation check
npx tsc --noEmit

# Build production bundle
npm run build

# Preview production build locally
npm run preview
```

---

© 2026 **Pragiso Soft Technologies**. All Rights Reserved.  
_Innovate • Build • Grow_
