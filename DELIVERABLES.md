# ZenShift Marketing Site Deliverables (Issue #919)

## 1) Product reality summary (evidence-based)
- **AI coach & recommendations**: Conversational flow on Bedrock Nova Micro with LangGraph, library matcher, safety chains. Evidence: `backend/resources/functions/ai-coach/ai-coach-handler.ts`, `backend/resources/functions/ai-coach/library-matcher.ts`, `backend/resources/functions/ai-coach/safety-chains.ts`, `docs/PRODUCT_OVERVIEW.md`.
- **Custom session generation**: Start/status APIs enqueue SQS job; worker generates script → TTS (OpenAI) → mixes ambient music → returns signed URLs. Evidence: `backend/resources/functions/session-generation/handler.ts`, `backend/resources/functions/generation-worker/handler.ts`, `backend/resources/functions/generation-worker/tts-synthesis.ts`, `docs/PRODUCT_OVERVIEW.md`.
- **Curated catalog & playback**: 20 guided sessions across 10 categories with dual-track audio, resume, and quick-play cards. Evidence: `mobile/assets/sessionSources.ts`, `mobile/assets/AssetMappings.ts`, `mobile/services/CatalogService.ts`, `mobile/screens/NeedBasedHomeScreen.tsx`, `mobile/screens/PlayerScreen.tsx`.
- **History, streaks, favorites, offline sync**: Cloud/offline hybrid storage for history, favorites with notes, streaks, and relief ratings. Evidence: `mobile/services/HybridStorageService.ts`, `mobile/screens/SessionHistoryScreen.tsx`, `mobile/screens/SessionAnalyticsScreen.tsx`, `mobile/components/ReliefTrackingModal.tsx`.
- **Monetization**: Google Play Billing live for Standard ($1/mo, $10/yr). Premium defined ($5/mo, $50/yr) but gating not enforced; quota check bypassed. Product ID mismatch risk between client and backend. Evidence: `mobile/services/PurchaseService.ts`, `backend/config/subscriptions.config.ts`, `backend/resources/functions/session-generation/handler.ts:454-478`, `docs/GOOGLE_PLAY_SUBSCRIPTIONS.md`, `docs/PRODUCT_OVERVIEW.md`.
- **Platform status**: Android live; iOS billing not implemented. Evidence: `mobile/services/PurchaseService.ts`, `docs/PRODUCT_OVERVIEW.md`.
- **Analytics**: Client-side event tracking only; no server-side attribution/cohorts. Evidence: `mobile/services/AnalyticsService.ts`, `docs/PRODUCT_OVERVIEW.md`.

## 2) Proposed IA + wireframe outline
- **Home**: Hero (app icon + value), proof of Android live, core CTAs (Google Play, contact/waitlist), quick highlights for AI coach/custom generation/offline sync.
- **Product**: Feature pillars (AI coach, curated library/playback, custom generation, progress/favorites), proof bullets tied to real capabilities, screenshots.
- **How it works**: 3-step flow (capture need → AI match → play/generate) with timing expectations and guardrails.
- **Personalization / AI**: Coach model, safety chains, generation vs preview paths, content system (catalog + ambient tracks), offline sync.
- **Pricing**: Standard (live, Android), Premium (defined, not enforced), Basic (free). Notes on quota bypass and iOS status; waitlist CTA.
- **Architecture/Tech**: AWS AppSync GraphQL, Cognito, DynamoDB, S3/CloudFront, SQS worker, Bedrock + LangChain, CloudWatch/EMF.
- **About**: Who we serve, mission for fast relief; team/company reference.
- **FAQ**: iOS availability, generation quotas (bypassed), AI model, data storage, analytics scope.
- **Contact/CTA**: Direct email + Google Play link.

## 3) Design system (in `assets/css/main.css`)
- **Fonts**: Headings `Sora`, body `Manrope`.
- **Colors**: Ink `#0d1224`, ink-muted `#1c2540`, teal CTA `#1fb6a6`/`#0f9d8b`, accent `#7c8cff`, surfaces `#ffffff` / `#f6f8fb`, line `#e2e8f0`.
- **Spacing & layout**: 4/8-based scale (`--space-2`..`--space-16`), max width `1180px`, radii (`0.5rem`–`1.5rem`), shadows (`soft`/`strong`).
- **Components**: Buttons (`btn-primary`, `btn-ghost`, `btn-text`), badges/chips/pills, cards, grids, hero meta tiles, pricing cards, FAQ accordions, tech tiles, contact card.
- **Logo usage**: App icon from `assets/images/app-icon.png` (hash matches `mobile/assets/app-icon.png`) is the primary mark in header/footer/hero.

## 4) Implementation plan (executed)
1) Define investor-focused IA and copy grounded in product reality; remove speculative claims.  
2) Apply new design system in `assets/css/main.css` with typography, colors, spacing, and components reusable across pages.  
3) Rebuild `index.html` with required sections: Home, Product, How It Works, AI/Personalization, Pricing, Architecture, About, FAQ, Contact. Use app icon for brand.  
4) Keep legal/delete pages untouched; refresh accessibility page logo for consistency.  
5) Document deliverables and run instructions here.

## 5) Code changes (PR-ready)
- `index.html`: Rewritten with new IA, accurate copy tied to current app capabilities, CTAs, pricing notes, and required sections; uses app icon for brand consistency.
- `assets/css/main.css`: New design system (typography, color, spacing tokens) and responsive styles for hero, cards, grids, pricing, FAQ, and contact sections.
- `accessibility.html`: Header/footer logo updated to app icon to match the app brand.
- No changes to `delete-account.html`, `privacy-policy.html`, or `terms.html`.

## 6) Run instructions
- Static site; open `index.html` locally or serve the folder (e.g., `cd zenshift-site && python3 -m http.server 8000` then visit `http://localhost:8000`).  
- Deployed via GitHub Pages; no environment variables required.  
- Assets already bundled under `assets/`; app icon is shared with the mobile app for brand alignment.
