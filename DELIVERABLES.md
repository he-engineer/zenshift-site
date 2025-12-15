# ZenShift Marketing Site Deliverables (Issue #919)

## 1) Product reality summary (evidence-based)
- **AI coach & recommendations**: Conversational flow on Bedrock Nova Micro with LangGraph, library matcher, safety chains. Evidence: `backend/resources/functions/ai-coach/ai-coach-handler.ts`, `backend/resources/functions/ai-coach/library-matcher.ts`, `backend/resources/functions/ai-coach/safety-chains.ts`, `docs/PRODUCT_OVERVIEW.md`.
- **Custom session generation**: Start/status APIs enqueue SQS job; worker generates script → TTS (OpenAI) → mixes ambient music → returns signed URLs. Evidence: `backend/resources/functions/session-generation/handler.ts`, `backend/resources/functions/generation-worker/handler.ts`, `backend/resources/functions/generation-worker/tts-synthesis.ts`, `docs/PRODUCT_OVERVIEW.md`.
- **Curated catalog & playback**: 20 guided sessions across 10 categories with dual-track audio, resume, and quick-play cards. Evidence: `mobile/assets/sessionSources.ts`, `mobile/assets/AssetMappings.ts`, `mobile/services/CatalogService.ts`, `mobile/screens/NeedBasedHomeScreen.tsx`, `mobile/screens/PlayerScreen.tsx`.
- **History, streaks, favorites, offline sync**: Cloud/offline hybrid storage for history, favorites with notes, streaks, and relief ratings. Evidence: `mobile/services/HybridStorageService.ts`, `mobile/screens/SessionHistoryScreen.tsx`, `mobile/screens/SessionAnalyticsScreen.tsx`, `mobile/components/ReliefTrackingModal.tsx`.
- **Monetization**: Google Play Billing live for Standard ($1/mo, $10/yr). Premium defined ($5/mo, $50/yr) but gating not enforced; quota check bypassed. Product ID mismatch risk between client and backend. Evidence: `mobile/services/PurchaseService.ts`, `backend/config/subscriptions.config.ts`, `backend/resources/functions/session-generation/handler.ts:454-478`, `docs/GOOGLE_PLAY_SUBSCRIPTIONS.md`, `docs/PRODUCT_OVERVIEW.md`.
- **Platform status**: Android live; iOS billing not implemented. Evidence: `mobile/services/PurchaseService.ts`, `docs/PRODUCT_OVERVIEW.md`.
- **Analytics**: Client-side event tracking only; no server-side attribution/cohorts. Evidence: `mobile/services/AnalyticsService.ts`, `docs/PRODUCT_OVERVIEW.md`.

## 2) IA + wireframe outline (original style preserved)
- **Home**: Hero with app icon, Android-live proof, CTAs to Google Play and iOS updates.
- **Product features**: AI coach, custom generation pipeline, curated library (20 sessions), progress/favorites/offline sync.
- **How it works**: Need capture → match → play/generate → sync/learn.
- **App preview**: Screens for home, AI recommendations, player, analytics.
- **Company/About**: Mission plus AWS serverless stack + Bedrock details; contact info.
- **Download & access**: Google Play badge, pricing/status notes (Standard live; Premium defined, not enforced; iOS billing not implemented).

## 3) Design system (in `assets/css/main.css`)
- **Fonts**: Inter for headings/body via Google Fonts (original site style).
- **Colors**: Brand navy/teal palette from original tokens (`--color-deep-navy`, `--color-zen-teal`, etc.) with light surfaces and subtle shadows.
- **Spacing & layout**: Container max 1200px, section spacing per original CSS; rounded cards and gradients in hero.
- **Components**: Navbar, hero, feature cards, process steps, screenshot cards, stat cards, download badges retained from original styling.
- **Logo usage**: App icon from `assets/images/app-icon.png` used in header/footer; shares hash with `mobile/assets/app-icon.png`.

## 4) Implementation plan (executed)
1) Restore original visual style; update copy to match current product truth (AI coach, catalog size, generation pipeline, pricing, platform status).  
2) Keep brand alignment via app icon in header/footer; preserve layout and components.  
3) Keep legal/delete pages untouched; refresh documentation here.  

## 5) Code changes (PR-ready)
- `index.html`: Original layout retained; copy updated to reflect real product (20 sessions, AI coach on Bedrock, custom generation pipeline, Android billing live, iOS billing not implemented, pricing notes) and app icon branding.
- `assets/css/main.css`: Restored original stylesheet to preserve prior visual style.
- `accessibility.html`: Header/footer logo uses app icon for brand consistency.
- No changes to `delete-account.html`, `privacy-policy.html`, or `terms.html`.

## 6) Run instructions
- Static site; open `index.html` locally or serve the folder (e.g., `cd zenshift-site && python3 -m http.server 8000` then visit `http://localhost:8000`).  
- Deployed via GitHub Pages; no environment variables required.  
- Assets already bundled under `assets/`; app icon is shared with the mobile app for brand alignment.
