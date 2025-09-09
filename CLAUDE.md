# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Start Development Server
```bash
npm run dev
```
Runs Vite dev server on localhost:8080 with hot reload

### Build Project
```bash
npm run build        # Production build
npm run build:dev    # Development build
```

### Lint Code
```bash
npm run lint
```
Runs ESLint with TypeScript support

### Preview Production Build
```bash
npm run preview
```

## Architecture Overview

This is a modern React portfolio website built with:

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite with SWC plugin for fast compilation
- **Styling**: Tailwind CSS with custom CSS variables design system
- **UI Components**: shadcn/ui component library (based on Radix UI primitives)
- **State Management**: TanStack Query for server state
- **Routing**: React Router DOM with /webs landing page route
- **Deployment**: Optimized for Lovable platform deployment

### Project Structure

```
src/
├── components/          # Main portfolio sections
│   ├── Hero.tsx        # Landing hero section
│   ├── Skills.tsx      # Skills showcase
│   ├── Projects.tsx    # Portfolio projects grid
│   ├── About.tsx       # About section
│   ├── Certifications.tsx
│   ├── Contact.tsx     # Contact form
│   ├── Footer.tsx      # Site footer
│   └── ui/             # shadcn/ui components (50+ components)
├── data/
│   ├── portfolio.ts    # Personal info, projects, skills, certifications
│   └── webs.ts         # Web projects data
├── pages/
│   ├── Index.tsx       # Main portfolio page
│   ├── WebsLanding.tsx # /webs route page
│   └── NotFound.tsx    # 404 page
├── hooks/              # Custom React hooks (toast, mobile detection)
├── lib/
│   └── utils.ts        # Utility functions (cn class merger)
└── assets/             # Project images (jpg format)
```

### Key Technical Details

- **TypeScript Configuration**: Strict mode disabled, path aliases (`@/*` -> `./src/*`)
- **Styling System**: HSL-based design tokens in CSS variables, elegant blue accent system
- **Component Architecture**: Modular sections imported into main Index page
- **Image Handling**: Static imports mapped in components (e.g., projectImages object)
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

### shadcn/ui Integration

- Configuration in `components.json` with default style, slate base color
- Full component library installed (accordion, dialog, form, etc.)
- Custom styling through CSS variables system
- No RSC mode, pure client-side components

### Data Management

- Portfolio content centralized in `src/data/portfolio.ts`
- Structured exports: personalInfo, skills, projects, education, certifications
- Projects include tech stacks, GitHub links, demo URLs, and images
- Content is in Spanish for the target market

### Routing

- Main portfolio: `/`
- Web projects landing: `/webs`
- Catch-all 404: `*`
- BrowserRouter with nested Routes structure

## Important Notes

- This is a Lovable platform project (see README.md for deployment details)
- Images are stored in `src/assets/` and imported statically
- ESLint configured to ignore unused variables (portfolio context)
- No testing framework configured
- Uses Vite's built-in TypeScript compilation
- Component tagger plugin for development mode only