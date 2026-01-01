# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ZenShift Website is a Next.js-based marketing website for the ZenShift AI-powered meditation app. It's designed as a static site with Material UI for consistent theming with the mobile app.

- **Framework**: Next.js 14 (configured for static export)
- **UI Library**: Material UI v5
- **Styling**: Emotion (MUI's default CSS-in-JS)
- **Deployment**: Static export to GitHub Pages
- **Theme**: Light theme by default, with comprehensive design tokens matching the mobile app

See `design.md` for detailed specifications on design system, page layouts, and feature requirements.

## Development Commands

### Build & Run
```bash
# Install dependencies
npm install

# Start development server (hot reload)
npm run dev

# Build for production (static export)
npm run build

# Start production server (after build)
npm run start

# Export to static HTML
next export  # Alternative static export if needed
```

### Code Quality
```bash
# Run linter (checks but doesn't fix)
npm run lint

# Fix linting issues
npm run lint -- --fix
```

## Project Architecture

### Directory Structure

```
src/
├── app/                    # Next.js App Router - all pages are here
│   ├── layout.tsx         # Root layout, includes Header/Footer
│   ├── page.tsx           # Home page (/)
│   ├── [page]/
│   │   ├── page.tsx       # Page wrapper (minimal)
│   │   └── [Page]Content.tsx  # Actual content component
│   └── ...
├── components/
│   ├── layout/            # Reusable layout components
│   │   ├── Header.tsx     # Navigation, logo, CTA button
│   │   └── Footer.tsx     # Footer with links and social
│   ├── home/              # Home page specific sections
│   │   ├── Hero.tsx       # Hero section
│   │   ├── HowItWorks.tsx # 3-step process section
│   │   ├── Features.tsx   # Feature showcase with images
│   │   ├── Testimonials.tsx # Social proof section
│   │   └── DownloadCTA.tsx  # Final call-to-action
│   └── shared/            # Reused across pages
│       ├── AppStoreButtons.tsx  # iOS/Android download buttons
│       └── SectionHeader.tsx    # Styled section titles
├── theme/
│   ├── zenshift-theme.ts  # Material UI theme config
│   └── ThemeRegistry.tsx  # Theme provider wrapper
└── lib/
    └── constants.ts       # Design tokens (if needed)
```

### Component Patterns

**Page Structure**: Pages use a two-file pattern:
- `app/[page]/page.tsx` - Minimal wrapper
- `app/[page]/[Page]Content.tsx` - Main content component

This separation keeps pages clean and makes content reusable.

**Component Composition**: Use composition over complex props. Pages are built from reusable section components.

**Theme Access**: Import colors and theme utilities from `@/theme/zenshift-theme`:
```typescript
import { colors, gradients } from '@/theme/zenshift-theme';
import zenShiftTheme from '@/theme/zenshift-theme';
```

### Design System

**Color System** (`colors` export from theme):
- **Brand**: `zenTeal`, `zenTealLight`, `zenTealDark`, `meditationPurple`, `softIndigo`
- **Status**: `success` (#10B981), `warning` (#F59E0B), `error` (#EF4444)
- **Text**: `textPrimary`, `textSecondary`, `textTertiary` (light theme defaults)
- **Categories**: `categorySleep`, `categoryFocus`, `categoryStress`, `categoryRelaxation`, `categoryReset`, `categoryTravel`

**Gradients** (`gradients` export):
- `zenTeal`, `calmBlue`, `calmPurple`, `calmTeal`, `darkOverlay`

**Typography**: Configured in MUI theme with Inter/Roboto font stack. Use theme typography variants (h1-h6, body1-body2) for consistency.

**Spacing**: MUI uses 8px base unit (theme.spacing). Use multiples of 8px for consistent spacing.

**Border Radius**: Default is 16px, buttons use 20px (configured in theme).

### Key Build Configuration

- **Static Export**: `output: 'export'` in next.config.js means no server-side rendering
- **Image Optimization Disabled**: `images.unoptimized: true` - images are not optimized (suitable for static export)
- **Trailing Slashes**: `trailingSlash: true` for GitHub Pages compatibility

## Common Development Tasks

### Adding a New Page

1. Create directory: `src/app/[page-name]/`
2. Create two files:
   - `page.tsx` - Exports `[PageName]Content`
   - `[PageName]Content.tsx` - The actual component
3. Add route to navigation in `Header.tsx` if needed
4. Update metadata in root layout if needed for SEO

### Styling Components

- Use Material UI components from `@mui/material`
- Use `sx` prop for one-off styles (MUI's CSS-in-JS)
- For complex components, wrap with `ThemeProvider` (already in layout)
- Import colors/gradients from `@/theme/zenshift-theme`

### Adding Images

1. Place images in `public/images/` directory
2. Import using Next.js Image component: `import Image from 'next/image'`
3. Always specify width and height for Image component
4. For responsive images, use `sizes` prop

### Updating Theme

All theme configuration is in `src/theme/zenshift-theme.ts`:
- Color updates → modify `colors` export
- Gradient updates → modify `gradients` export
- Typography/spacing → modify `createTheme()` call
- Component overrides → modify `components` in theme config

Changes automatically apply everywhere.

## Important Design Decisions

**Light Theme Default**: Unlike the mobile app (dark theme), the website uses a light theme. This is intentional for a marketing website. The design system supports both with appropriate text color variants.

**Static Export**: This is a static site (no backend). Forms use external services (Formspree, Google Forms, etc.). No server-side rendering or API routes.

**Responsive First**: Use MUI's `display: { xs: 'block', md: 'none' }` pattern for responsive behavior, not custom media queries.

**Next.js Link**: Always use Next.js `Link` component for internal navigation, not `<a>` tags, for client-side navigation performance.

## Content & Design References

- **Design Specification**: See `design.md` for complete page layouts, copy, and implementation details
- **Brand Colors & Tokens**: Defined in mobile app's `mobile/utils/constants.ts` - website uses subset of these
- **App Screenshots**: Should be captured from actual app and placed in `public/images/screenshots/`
- **Meditation Imagery**: Available in related mobile repo at `mobile/assets/images/`
- **Download URLs**: Configure in `.env.local` as `NEXT_PUBLIC_APP_STORE_URL` and `NEXT_PUBLIC_PLAY_STORE_URL`

## Deployment

The site is configured for static export and GitHub Pages hosting:

```bash
npm run build   # Generates out/ directory with static files
```

Push the `out/` directory contents to GitHub Pages, or configure GitHub Actions to do this automatically.

## Key External Dependencies & Versions

- **Next.js**: ^14.0.0 (App Router)
- **Material UI**: ^5.15.0
- **React**: ^18.2.0
- **TypeScript**: ^5.0.0

All components are functional components with hooks, no class components.

## Performance Considerations

- Static export means no runtime JS beyond interactivity
- Images unoptimized - ensure images are pre-compressed and reasonably sized
- Third-party scripts (analytics) should be loaded asynchronously
- Use `next/dynamic` for code splitting if adding heavy interactive components

## Testing & Quality

Currently no automated tests configured. Linting is available via `npm run lint` (Next.js default ESLint config).
