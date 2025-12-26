# ZenShift Website Redesign Plan

**Document Version:** 1.0
**Created:** December 26, 2025
**Purpose:** Comprehensive plan for redesigning the ZenShift marketing website
**Audience:** Website designers, developers, and stakeholders

---

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [Product Reality Summary](#product-reality-summary)
3. [Current Website Analysis](#current-website-analysis)
4. [Design System Specification](#design-system-specification)
5. [Information Architecture](#information-architecture)
6. [Page-by-Page Specifications](#page-by-page-specifications)
7. [Visual Assets](#visual-assets)
8. [Technical Implementation](#technical-implementation)
9. [SEO & Metadata](#seo--metadata)
10. [Implementation Roadmap](#implementation-roadmap)
11. [Success Criteria](#success-criteria)

---

## Executive Summary

### Goal
Redesign the ZenShift marketing website (https://zenshift.onepingfanventure.com/) to accurately reflect the current meditation app product, create a professional investor/customer-grade experience, and drive conversions.

### Key Principles
- **Accuracy First**: All content must match documented product reality (no speculative claims)
- **Professional & Serene**: Workplace-appropriate design with calming visuals
- **Evidence-Based Copy**: Concise, specific claims tied to actual features
- **Mobile-First Responsive**: Optimized for all devices
- **Material UI**: Consistent with the app's design language

### Target Audiences
1. **Busy Professionals** - Primary users seeking quick stress relief
2. **Potential Investors** - Evaluating product viability and differentiation
3. **Cloud Credit Reviewers** - Assessing technical credibility (AWS, AI capabilities)

---

## Product Reality Summary

> **Source of Truth:** This summary is extracted directly from the ZenShift meditation app repository documentation.

### What ZenShift Is

ZenShift is an **AI-powered meditation app** available on iOS and Android that provides personalized meditation experiences through intelligent recommendations and custom session generation.

**Reference:** `docs/PRODUCT_OVERVIEW.md:34-42`

### Core Features (Implemented)

| Feature | Description | Status | Reference |
|---------|-------------|--------|-----------|
| **AI Coach** | Conversational AI that understands mood, stressors, and time constraints to recommend sessions | ✅ Live | `docs/TECHNICAL_OVERVIEW.md:128-147` |
| **Curated Library** | Professionally guided sessions across sleep, stress, focus, anxiety, relaxation, travel | ✅ Live | `docs/PRODUCT_OVERVIEW.md:36` |
| **Custom Session Generation** | AI generates personalized narrated sessions in 2-5 minutes based on specific needs | ✅ Live | `docs/PRODUCT_OVERVIEW.md:38` |
| **Cross-Device Sync** | History, favorites, and progress sync seamlessly across all devices | ✅ Live | `docs/PRODUCT_OVERVIEW.md:39` |
| **Progress Tracking** | Streaks, relief ratings, and habit formation metrics | ✅ Live | `docs/PRODUCT_OVERVIEW.md:40-41` |
| **One-Click Play** | Quick access to recommended sessions with minimal friction | ✅ Live | `docs/PRODUCT_OVERVIEW.md:84` |
| **Relief Tracking** | Post-session mood ratings to improve future recommendations | ✅ Live | `mobile/utils/constants.ts:380-416` |

### Authentication Methods (Implemented)

| Method | Platform | Status | Reference |
|--------|----------|--------|-----------|
| Email/Password | All | ✅ Live | `docs/TECHNICAL_OVERVIEW.md:378` |
| Google OAuth | All | ✅ Live | `docs/TECHNICAL_OVERVIEW.md:378` |
| Apple Sign-In | iOS | ✅ Live | `docs/TECHNICAL_OVERVIEW.md:378` |

### Session Categories

Based on the app's session catalog and image assets:

| Category | Color Code | Example Sessions |
|----------|------------|------------------|
| Sleep | `#6366F1` (Indigo) | Wind-down routines, sleep preparation |
| Focus | `#10B981` (Emerald) | Concentration boosters, deep work prep |
| Stress | `#EF4444` (Red) | Quick stress relief, tension release |
| Relaxation | `#8B5CF6` (Purple) | General calm, peace restoration |
| Reset | `#F59E0B` (Amber) | Mid-day recharge, energy restoration |
| Travel | `#06B6D4` (Cyan) | Commute meditation, travel anxiety |

**Reference:** `mobile/utils/constants.ts:45-52`, `mobile/assets/images/`

### Target User Personas

1. **Stressed Professionals** (Primary)
   - Need: 3-10 minute breaks during work
   - Pain: Not enough time for long sessions

2. **Sleep Seekers**
   - Need: Wind-down routines for better sleep
   - Pain: Generic sleep sessions don't match preferences

3. **Anxiety Relief Seekers**
   - Need: On-demand calmness when anxiety spikes
   - Pain: Anxiety is unpredictable; need flexibility

4. **Meditation Beginners**
   - Need: Simple, accessible entry point
   - Pain: Overwhelmed by choice; intimidated by "advanced" practices

**Reference:** `docs/PRODUCT_OVERVIEW.md:48-69`

### Competitive Differentiation

**vs. Traditional Meditation Apps:**

| Differentiator | ZenShift | Traditional Apps |
|----------------|----------|------------------|
| AI Coach | ✅ Conversational AI that learns your needs | ❌ Generic recommendations |
| Custom Sessions | ✅ Generate personalized sessions on-demand | ❌ Limited to curated library |

**Reference:** `docs/PRODUCT_OVERVIEW.md:98-108`

### The AI Magic: Personalized Sessions

**What makes ZenShift unique:** Our AI doesn't just recommend sessions—it creates them.

1. **Understands Your Mood** - Tell the AI how you're feeling, and it understands the nuance
2. **Generates Personalized Content** - AI creates a custom meditation script tailored to your specific needs
3. **Produces Professional Audio** - The script is transformed into a professionally narrated session with calming background music and a calming background image
4. **Learns Over Time** - Your feedback improves future recommendations

This isn't just matching keywords to a library. ZenShift generates **truly personalized meditation experiences** that don't exist until you need them.

**Reference:** `docs/PRODUCT_OVERVIEW.md:38`, `docs/features/meditation_app_prd.md:101-113`

---

## Current Website Analysis

### Issues to Address

Based on the redesign requirements:

1. **Content Accuracy** - Website must reflect actual implemented features
2. **Professional Grade** - Current design needs investor-grade polish
3. **Mobile Responsiveness** - Must be fully responsive
4. **Brand Consistency** - Should match the app's visual language
5. **Conversion Focus** - Clear CTAs driving to app stores

### Content to Retain

- Privacy Policy URL: `https://zenshift.onepingfanventure.com/privacy-policy.html`
- Terms of Service URL: `https://zenshift.onepingfanventure.com/terms`
- Support URL: `https://zenshift.onepingfanventure.com/support`

**Reference:** `mobile/utils/constants.ts:488-492`

---

## Design System Specification

### Color Palette

The design system is derived from the mobile app's design tokens for consistency.

#### Primary Colors (Dark Theme - Default)

```css
/* Core Brand Colors */
--color-deep-navy: #1A1D2E;        /* Primary background */
--color-midnight-blue: #16213E;    /* Secondary background */
--color-cosmic-blue: #0F3460;      /* Tertiary background */

/* Accent Colors */
--color-zen-teal: #2D6A6C;         /* Primary accent */
--color-zen-teal-light: #4A9B9E;   /* Hover/active states */
--color-soft-indigo: #533483;      /* Secondary accent */
--color-meditation-purple: #7209B7; /* Highlight accent */

/* Gradients */
--gradient-zen-teal: linear-gradient(135deg, #2D6A6C 0%, #4A9B9E 100%);
--gradient-calm-blue: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #6366f1 100%);
--gradient-calm-purple: linear-gradient(135deg, #581c87 0%, #7c3aed 50%, #8b5cf6 100%);
--gradient-calm-teal: linear-gradient(135deg, #134e4a 0%, #0f766e 50%, #14b8a6 100%);
```

#### Functional Colors

```css
/* Status Colors */
--color-success: #10B981;
--color-warning: #F59E0B;
--color-error: #EF4444;
--color-neutral: #6B7280;

/* Text Colors (Dark Theme) */
--color-text-primary: #FFFFFF;
--color-text-secondary: #E2E8F0;
--color-text-tertiary: #CBD5E1;

/* Surface Colors */
--color-surface-elevated: rgba(255, 255, 255, 0.12);
--color-border-subtle: rgba(255, 255, 255, 0.20);
--color-border-medium: rgba(255, 255, 255, 0.35);
```

#### Category Colors

```css
--color-category-sleep: #6366F1;
--color-category-focus: #10B981;
--color-category-reset: #F59E0B;
--color-category-stress: #EF4444;
--color-category-relaxation: #8B5CF6;
--color-category-travel: #06B6D4;
```

**Reference:** `mobile/utils/constants.ts:1-105`

### Typography

#### Font Stack (Material UI Compatible)

```css
--font-family-primary: 'Inter', 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-family-display: 'Inter', 'Roboto', sans-serif;
```

#### Type Scale

| Style | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| Display | 32px | 600 | 38px | Hero headlines |
| H1 | 28px | 600 | 34px | Page titles |
| H2 | 24px | 500 | 29px | Section headers |
| H3 | 20px | 500 | 24px | Subsection headers |
| Body Large | 17px | 400 | 24px | Primary body text |
| Body Medium | 15px | 400 | 21px | Secondary body text |
| Body Small | 13px | 400 | 18px | Captions, labels |
| Caption | 11px | 500 | 13px | Fine print |

**Reference:** `mobile/utils/constants.ts:108-151`

### Spacing Scale

Based on 8px base unit:

```css
--spacing-xxs: 2px;
--spacing-xs: 4px;
--spacing-sm: 8px;
--spacing-md: 16px;
--spacing-lg: 24px;
--spacing-xl: 32px;
--spacing-xxl: 48px;

/* Component Spacing */
--spacing-screen-margin: 20px;
--spacing-component-padding: 16px;
--spacing-section-spacing: 32px;
--spacing-element-spacing: 12px;
```

**Reference:** `mobile/utils/constants.ts:154-168`

### Border Radius

```css
--radius-small: 8px;
--radius-medium: 16px;
--radius-large: 20px;
--radius-xl: 24px;
```

### Animation Timings

For a calming, meditative experience:

```css
--animation-quick: 300ms;
--animation-smooth: 500ms;
--animation-breathing: 4000ms;
--animation-fade: 400ms;
--easing-default: cubic-bezier(0.25, 0.46, 0.45, 0.94);
```

**Reference:** `mobile/utils/constants.ts:192-221`

### Material UI Theme Configuration

```javascript
// Suggested Material UI theme override
const zenShiftTheme = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#2D6A6C',
      light: '#4A9B9E',
      dark: '#1A4A4C',
    },
    secondary: {
      main: '#7209B7',
      light: '#8B5CF6',
      dark: '#533483',
    },
    background: {
      default: '#1A1D2E',
      paper: '#16213E',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#E2E8F0',
    },
    success: { main: '#10B981' },
    warning: { main: '#F59E0B' },
    error: { main: '#EF4444' },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", sans-serif',
    h1: { fontSize: '2rem', fontWeight: 600 },
    h2: { fontSize: '1.5rem', fontWeight: 500 },
    h3: { fontSize: '1.25rem', fontWeight: 500 },
    body1: { fontSize: '1.0625rem', lineHeight: 1.5 },
    body2: { fontSize: '0.9375rem', lineHeight: 1.4 },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          textTransform: 'none',
          fontWeight: 500,
        },
      },
    },
  },
};
```

---

## Information Architecture

### Site Map

```
ZenShift Website
├── Home (/)
│   ├── Hero Section
│   ├── How It Works
│   ├── Key Features
│   ├── Social Proof
│   └── Primary CTA
│
├── Product (/product)
│   ├── Feature Breakdown
│   ├── Session Categories
│   └── Platform Availability
│
├── AI Coach (/ai-personalization)
│   ├── How AI Works
│   ├── Personalization Features
│   └── Privacy Commitment
│
├── About (/about)
│   ├── Mission Statement
│   ├── Team (placeholder)
│   └── Contact Info
│
├── FAQ (/faq)
│   ├── General Questions
│   ├── Subscription Questions
│   ├── Technical Questions
│   └── Privacy Questions
│
├── Contact (/contact)
│   ├── Contact Form
│   ├── Support Links
│   └── Social Links
│
├── Legal Pages
│   ├── Privacy Policy (/privacy-policy)
│   ├── Terms of Service (/terms)
│   └── Delete Account (/delete-account)
│
└── App Store Links (external)
    ├── iOS App Store
    └── Google Play Store
```

### Navigation Structure

#### Primary Navigation (Header)

```
[Logo: ZenShift]  [Home]  [Product]  [AI Coach]  [About]  [FAQ]  [Download CTA Button]
```

#### Footer Navigation

```
Product           Company          Support           Legal
─────────         ─────────        ─────────         ─────────
Features          About Us         FAQ               Privacy Policy
Download          Contact          Help Center       Terms of Service
                  Careers*         Feedback

* Placeholder for future

[Social Icons: Twitter, LinkedIn, Instagram]
[Copyright: © 2025 ZenShift. All rights reserved.]
```

---

## Page-by-Page Specifications

### Page 1: Home (/)

**Purpose:** First impression, communicate value proposition, drive downloads

#### Section 1: Hero

**Layout:** Full-width, dark gradient background, centered content

**Content:**
```
Headline: "Personalized Meditation in Minutes"
Subheadline: "AI-powered sessions designed for busy professionals.
              Open the app, share how you feel, find calm."

[App Store Button]  [Play Store Button]

[Hero Image: Mobile app mockup showing AI Coach conversation]
```

**Design Notes:**
- Background: `--gradient-calm-teal` or subtle animated gradient
- Use actual app screenshot showing the AI Coach interface
- Buttons: Material UI filled buttons with app store icons

#### Section 2: How It Works

**Layout:** 3-column grid on desktop, stacked on mobile

**Content:**
```
"Find Calm in 3 Steps"

[1]                    [2]                     [3]
Open & Express         Get Matched             Feel Relief
───────────────        ───────────────         ───────────────
Tell our AI Coach      AI recommends the       Track your progress
how you're feeling     perfect session from    and build lasting
or what you need.      our library—or creates  mindfulness habits.
                       one just for you.

[Icon: Message]        [Icon: Sparkles]        [Icon: Heart]
```

**Design Notes:**
- Icons: Outlined style, `--color-zen-teal`
- Cards: Elevated surface with subtle shadow
- Animate on scroll (fade-in-up)

#### Section 3: Key Features

**Layout:** Alternating 2-column layout (image + text)

**Content:**
```
Feature 1: AI That Understands You
─────────────────────────────────
Not generic recommendations—ZenShift's AI Coach learns
your mood, stressors, and time constraints to suggest
the perfect session every time.

[Screenshot: AI Coach conversation with recommendation cards]

---

Feature 2: Sessions for Every Need
──────────────────────────────────
Choose from professionally guided sessions across
sleep, stress, focus, anxiety, relaxation, and travel—
or generate a custom session tailored to you.

[Screenshot: Session library or category grid]

---

Feature 3: Quick Relief, Any Time
─────────────────────────────────
From 2-minute stress relief to 30-minute deep sessions.
Syncs across all your devices.

[Screenshot: Session player interface]
```

**Design Notes:**
- Use actual app screenshots (not mockups)
- Alternate image left/right on desktop
- Stack vertically on mobile

#### Section 4: Social Proof

**Layout:** Centered testimonial carousel or static quotes

**Content:**
```
"What Professionals Are Saying"

"Finally, a meditation app that gets it. Quick, effective,
no BS. Perfect for my 5 minutes between meetings."
— Tech Executive

"The AI actually understands what I need. No more scrolling
through endless meditation lists."
— Management Consultant

[App Store Rating: 4.5★ (placeholder)]
```

**Design Notes:**
- If no real testimonials yet, use placeholder format with "(Beta User)"
- Include app store ratings when available

#### Section 5: Final CTA

**Layout:** Full-width banner

**Content:**
```
"Ready to Find Your Calm?"

Download ZenShift free and start meditating in seconds.

[App Store Button]  [Play Store Button]
```

---

### Page 2: Product (/product)

**Purpose:** Detailed feature breakdown, platform info

#### Section 1: Feature Deep Dive

**Content per feature:**

```
AI Coach
────────
Talk to your personal meditation coach. Share what's on
your mind—stress, anxiety, trouble sleeping—and get an
instant recommendation tailored to your needs.

• Conversational interface (text-based)
• Learns your preferences over time
• Suggests from library or generates custom sessions

[Screenshot of AI Coach interface]

---

Custom Session Generation
─────────────────────────
Can't find the right session? Tell the AI what you need,
and it creates a personalized, narrated meditation in
2-5 minutes—completely unique to you.

• Specify your need, duration, and style
• AI-generated narration with calming background music
• Save and replay your custom sessions

[Screenshot of generation flow or completed custom session]

---

Curated Session Library
───────────────────────
Professionally guided sessions across 6 categories:

[Category Cards with icons and colors:]
• Sleep (#6366F1) - Wind down for better rest
• Focus (#10B981) - Sharpen concentration
• Stress (#EF4444) - Quick tension relief
• Relaxation (#8B5CF6) - General calm
• Reset (#F59E0B) - Mid-day recharge
• Travel (#06B6D4) - Commute & travel anxiety

---

Progress Tracking
─────────────────
• Meditation streaks and milestones
• Relief ratings after each session
• History and favorites across all devices
• Insights into your meditation patterns
```

#### Section 2: Platform Availability

```
Available On
────────────
• iOS (iPhone & iPad) - App Store
• Android - Google Play

Your data syncs seamlessly between devices. Start on your phone,
continue on your tablet, track progress anywhere.
```

---

### Page 3: AI Coach & Personalization (/ai-personalization)

**Purpose:** Explain AI features, build trust, address privacy concerns

#### Section 1: How the AI Works

**Content:**
```
"Your Personal Meditation Guide"

ZenShift's AI Coach uses advanced language understanding
to have natural conversations about your wellness needs.

How It Works:
1. You share how you're feeling (stressed, anxious, can't sleep, etc.)
2. AI understands your context, mood, and available time
3. You get personalized recommendations from our library
4. Or request a custom session generated just for you

The AI learns from your feedback—which sessions helped,
which didn't—to make better recommendations over time.
```

**Design Notes:**
- Include a visual flow diagram
- Show example conversation screenshots

#### Section 2: What Personalization Means

**Content:**
```
Personalization You Control
───────────────────────────

We personalize based on:
• Your stated preferences (goals, duration, style)
• Session history (what you've tried, completed, favorited)
• Relief feedback (how you felt after each session)
• Time of day and usage patterns

We never:
• Share your data with third parties for marketing
• Use your conversations for advertising
• Require personal data beyond what's needed for the service
```

#### Section 3: Privacy Commitment

**Content:**
```
Your Privacy Matters
────────────────────

• Data encrypted in transit and at rest (AES-256, TLS 1.2+)
• Conversations stored for 1 year, then automatically deleted
• You can delete your account and all data at any time
• GDPR and CCPA compliant
• No advertising, no data selling, ever

[Read Full Privacy Policy →]
```

---

### Page 4: About (/about)

**Purpose:** Build trust, share mission, provide contact info

#### Section 1: Mission

**Content:**
```
Our Mission
───────────

ZenShift exists to make meditation accessible and valuable
for everyone—especially those who think they don't have time.

We believe:
• One-size-fits-all meditation doesn't work
• AI can make wellness more personal, not less human
• Quick relief is better than no relief
• Building habits should be simple, not complicated
```

#### Section 2: Team (Placeholder)

**Content:**
```
The Team
────────

ZenShift is built by a small team passionate about
wellness technology and thoughtful AI design.

[Team photo placeholder]
[Individual headshots when available]

Interested in joining us?
Email: zenshift-support@onepingfanventure.com
```

#### Section 3: Contact

**Content:**
```
Get in Touch
────────────

Email: zenshift-support@onepingfanventure.com

[Contact Form with: Name, Email, Message, Submit]
```

---

### Page 5: FAQ (/faq)

**Purpose:** Answer common questions, reduce support burden

#### FAQ Categories and Questions

**General**
```
Q: What is ZenShift?
A: ZenShift is an AI-powered meditation app designed for busy professionals.
   It uses intelligent recommendations and custom session generation to help
   you find calm quickly—whether you have 2 minutes or 30.

Q: What platforms is ZenShift available on?
A: iOS (iPhone and iPad) and Android. Your progress syncs across
   all your devices.

Q: Do I need an account to use ZenShift?
A: Yes, an account is required to sync your progress and enable AI
   personalization. You can sign up with email, Google, or Apple.

```

**AI & Privacy**
```
Q: How does the AI Coach work?
A: Our AI Coach uses advanced language understanding to have natural
   conversations about your wellness needs. It recommends sessions from
   our library or can generate completely personalized sessions just for you—
   with custom narration and calming background music.

Q: Is my data private?
A: Yes. Your data is encrypted, never sold, and you can delete your
   account at any time. We're GDPR and CCPA compliant.
   See our Privacy Policy for full details.

Q: Are my conversations stored?
A: AI conversations are stored for up to 1 year to improve recommendations,
   then automatically deleted. You can request deletion at any time.
```

**Technical**
```
Q: What are the system requirements?
A: iOS 15+ (iPhone and iPad) or Android 6.0+ (API 23+).
   The app requires approximately 200MB of storage.

Q: Why can't I use Apple Sign-In on the simulator?
A: Apple Sign-In requires a physical iOS device. Use email/password
   for testing on simulators.
```

---

### Page 6: Contact (/contact)

**Purpose:** Primary contact point and support access

**Content:**
```
Contact Us
──────────

We'd love to hear from you.

[Contact Form]
• Name (required)
• Email (required)
• Subject (dropdown: General, Support, Feedback, Partnership, Press)
• Message (required)
• [Submit Button]

───────────────────────────

Quick Links
───────────

Support & Help
• FAQ: /faq
• Feedback Form: [External link to Google Form]

Email Directly
• zenshift-support@onepingfanventure.com

───────────────────────────

Follow Us
─────────

[Twitter Icon] @ZenShiftApp
[LinkedIn Icon] ZenShift
[Instagram Icon] @ZenShiftMeditation
```

---

### Page 7: Privacy Policy (/privacy-policy)

**Purpose:** Legal compliance, trust building

**Content Source:** Use the existing privacy policy from `docs/legal/privacy-policy.md`

**Key sections to include:**
1. Information We Collect
2. How We Use Your Information
3. How We Store Your Information
4. Data Sharing & Third Parties
5. Your Rights and Choices
6. Data Security
7. Children's Privacy
8. Contact Us

**Reference:** `docs/legal/privacy-policy.md` (full 330+ line document)

---

### Page 8: Terms of Service (/terms)

**Purpose:** Legal terms for using the service

**Content Source:** Create or reference existing Terms of Service

---

### Page 9: Delete Account (/delete-account)

**Purpose:** App Store/Play Store compliance - provide web-accessible account deletion

**URL:** `https://zenshift.onepingfanventure.com/delete-account.html`

**Requirement:** Apple App Store and Google Play require apps with accounts to provide a way to delete user data. This page provides instructions and a direct link to initiate deletion.

#### Section 1: Header

**Content:**
```
Delete Your ZenShift Account
─────────────────────────────

We're sorry to see you go. This page explains how to permanently
delete your ZenShift account and all associated data.
```

#### Section 2: What Gets Deleted

**Content:**
```
What Will Be Permanently Deleted
────────────────────────────────

When you delete your account, the following data is immediately
and irreversibly removed:

• All meditation session history
• All AI conversations and recommendations
• Favorite sessions and preferences
• Active subscriptions (will be cancelled)
• Your user account (you will not be able to log back in)

⚠️ This action cannot be undone. There is no grace period
   or recovery window.
```

**Design Notes:**
- Use warning color (`#FFC107`) for the caution box
- Red bullet points for emphasis on permanent deletion

#### Section 3: How to Delete Your Account

**Content:**
```
How to Delete Your Account
──────────────────────────

Option 1: In the App (Recommended)
1. Open the ZenShift app
2. Go to Profile → Account Settings
3. Tap "Delete Account"
4. Review the warning and tap "I Understand, Continue"
5. Type "DELETE" to confirm
6. Your account will be permanently deleted

Option 2: Contact Support
If you cannot access the app, email us at:
zenshift-support@onepingfanventure.com

Include "Account Deletion Request" in the subject line
and the email address associated with your account.
We will process your request within 30 days.
```

**Design Notes:**
- Numbered steps with clear visual hierarchy
- Email link should be clickable: `mailto:zenshift-support@onepingfanventure.com?subject=Account%20Deletion%20Request`

#### Section 4: Data Retention Notice

**Content:**
```
Data Retention
──────────────

After account deletion:
• Most data is deleted immediately
• Subscription records are retained for 1 year for legal compliance
• Anonymized analytics data may be retained for service improvement
• Backups are purged within 30 days

For full details, see our Privacy Policy.
[Read Privacy Policy →]
```

#### Section 5: Alternative Options

**Content:**
```
Before You Go
─────────────

If you're having issues with the app, we'd love to help:

• Technical problems or feedback? Contact zenshift-support@onepingfanventure.com
• Want to pause instead? You can simply uninstall the app
  and your data will remain if you return later.
```

#### Page Layout

**Design Notes:**
- Simple, clean single-column layout
- Dark theme consistent with app and website
- No navigation distractions (minimal header)
- Clear visual hierarchy with adequate spacing
- Mobile-responsive (many users will access via app store link)

#### SEO Metadata

```html
<title>Delete Account - ZenShift</title>
<meta name="description" content="Learn how to permanently delete your ZenShift meditation app account and all associated data.">
<meta name="robots" content="noindex, follow">
```

**Note:** Use `noindex` as this is a utility page, not marketing content.

---

## Visual Assets

### Required Screenshots

The following screenshots should be captured from the actual app:

| Screenshot | Description | Location for Source |
|------------|-------------|---------------------|
| `hero-ai-coach.png` | AI Coach conversation with recommendation cards | NeedBasedHomeScreen |
| `session-player.png` | Active session player interface | SessionPlayerScreen |
| `session-library.png` | Category grid or session list | Discover tab |
| `custom-generation.png` | Custom session generation flow | AI Coach flow |
| `progress-tracking.png` | Stats dashboard with streaks | Profile tab |
| `relief-tracking.png` | Post-session mood rating | Session completion modal |

### Meditation Imagery

Available in the repository at `mobile/assets/images/`:

| File | Category | Suggested Use |
|------|----------|---------------|
| `sleep-1.jpg`, `sleep-2.jpg` | Sleep | Sleep section, nighttime features |
| `focus-1.jpg`, `focus-2.jpg` | Focus | Focus section, productivity content |
| `stress-1.jpg`, `stress-2.jpg` | Stress | Stress relief features |
| `relaxation-1.jpg`, `relaxation-2.jpg` | Relaxation | General calm imagery |
| `reset-1.jpg`, `reset-2.jpg` | Reset | Energy/recharge content |
| `travel-1.jpg`, `travel-2.jpg` | Travel | Travel features |

### App Icon

Use the ZenShift app icon (teal gradient with lotus/meditation symbol) for branding consistency.

### Device Mockups

- iPhone 14 Pro mockup (for iOS screenshots)
- Pixel 7 mockup (for Android screenshots)

---

## Technical Implementation

### Recommended Stack

Based on the requirement to use Material UI and maintain consistency:

| Layer | Technology | Rationale |
|-------|------------|-----------|
| Framework | Next.js 14+ (Static Export) | Static site generation, React ecosystem |
| UI Library | Material UI (MUI) v5+ | Matches app design, requested |
| Styling | Emotion (MUI default) | Theme customization |
| Hosting | GitHub Pages | Free static hosting, easy deployment |
| Analytics | Google Analytics 4 | Basic traffic tracking |
| Forms | Formspree or Google Forms | Contact form handling (external service) |

**Note:** This is a static website. Use `next export` to generate static HTML files for GitHub Pages deployment.

### Project Structure

```
zenshift-website/
├── public/
│   ├── images/
│   │   ├── screenshots/      # App screenshots
│   │   ├── meditation/       # Meditation imagery
│   │   ├── icons/            # Category icons
│   │   └── logo/             # ZenShift branding
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── app/                  # Next.js App Router
│   │   ├── page.tsx          # Home
│   │   ├── product/page.tsx
│   │   ├── ai-personalization/page.tsx
│   │   ├── about/page.tsx
│   │   ├── faq/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── privacy-policy/page.tsx
│   │   ├── terms/page.tsx
│   │   └── delete-account/page.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Navigation.tsx
│   │   ├── home/
│   │   │   ├── Hero.tsx
│   │   │   ├── HowItWorks.tsx
│   │   │   ├── Features.tsx
│   │   │   ├── Pricing.tsx
│   │   │   └── Testimonials.tsx
│   │   ├── shared/
│   │   │   ├── AppStoreButtons.tsx
│   │   │   ├── FeatureCard.tsx
│   │   │   ├── PricingCard.tsx
│   │   │   └── Screenshot.tsx
│   │   └── ui/               # Custom MUI overrides
│   ├── theme/
│   │   └── zenshift-theme.ts # MUI theme configuration
│   ├── lib/
│   │   └── constants.ts      # Design tokens
│   └── types/
│       └── index.ts
├── .env.local                # Environment variables
├── next.config.js
├── package.json
└── README.md
```

### Environment Variables

```env
# .env.local
NEXT_PUBLIC_SITE_URL=https://zenshift.onepingfanventure.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_APP_STORE_URL=https://apps.apple.com/app/zenshift/id[APP_ID]
NEXT_PUBLIC_PLAY_STORE_URL=https://play.google.com/store/apps/details?id=com.zenshift.app
```

### Key Dependencies

```json
{
  "dependencies": {
    "next": "^14.0.0",
    "@mui/material": "^5.15.0",
    "@mui/icons-material": "^5.15.0",
    "@emotion/react": "^11.11.0",
    "@emotion/styled": "^11.11.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
}
```

---

## SEO & Metadata

### Global Metadata

```html
<title>ZenShift - AI-Powered Meditation for Busy Professionals</title>
<meta name="description" content="Find calm in minutes with ZenShift. Our AI Coach recommends personalized meditation sessions based on your mood and needs. Free for iOS and Android.">
<meta name="keywords" content="meditation app, AI meditation, mindfulness, stress relief, professional wellness, personalized meditation, anxiety relief, sleep meditation, focus meditation">
<meta name="author" content="ZenShift">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://zenshift.onepingfanventure.com/">
```

### Open Graph

```html
<meta property="og:title" content="ZenShift - AI-Powered Meditation for Busy Professionals">
<meta property="og:description" content="Find calm in minutes with ZenShift. AI-powered personalized meditation sessions.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://zenshift.onepingfanventure.com/">
<meta property="og:image" content="https://zenshift.onepingfanventure.com/images/og-image.png">
<meta property="og:site_name" content="ZenShift">
```

### Twitter Card

```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@ZenShiftApp">
<meta name="twitter:title" content="ZenShift - AI-Powered Meditation">
<meta name="twitter:description" content="Find calm in minutes with AI-powered personalized meditation.">
<meta name="twitter:image" content="https://zenshift.onepingfanventure.com/images/twitter-card.png">
```

### Page-Specific Titles

| Page | Title |
|------|-------|
| Home | ZenShift - AI-Powered Meditation for Busy Professionals |
| Product | Features & Pricing - ZenShift |
| AI Coach | AI Personalization - ZenShift |
| About | About Us - ZenShift |
| FAQ | Frequently Asked Questions - ZenShift |
| Contact | Contact Us - ZenShift |
| Privacy | Privacy Policy - ZenShift |
| Delete Account | Delete Account - ZenShift |

### Sitemap Structure

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://zenshift.onepingfanventure.com/</loc><priority>1.0</priority></url>
  <url><loc>https://zenshift.onepingfanventure.com/product</loc><priority>0.9</priority></url>
  <url><loc>https://zenshift.onepingfanventure.com/ai-personalization</loc><priority>0.8</priority></url>
  <url><loc>https://zenshift.onepingfanventure.com/about</loc><priority>0.7</priority></url>
  <url><loc>https://zenshift.onepingfanventure.com/faq</loc><priority>0.7</priority></url>
  <url><loc>https://zenshift.onepingfanventure.com/contact</loc><priority>0.6</priority></url>
  <url><loc>https://zenshift.onepingfanventure.com/privacy-policy</loc><priority>0.5</priority></url>
  <url><loc>https://zenshift.onepingfanventure.com/terms</loc><priority>0.5</priority></url>
  <url><loc>https://zenshift.onepingfanventure.com/delete-account</loc><priority>0.3</priority></url>
</urlset>
```

### robots.txt

```
User-agent: *
Allow: /

Sitemap: https://zenshift.onepingfanventure.com/sitemap.xml
```

---

## Implementation Roadmap

### Phase 1: Foundation (Week 1)

- [ ] Set up Next.js project with Material UI
- [ ] Configure ZenShift theme (colors, typography, spacing)
- [ ] Create layout components (Header, Footer, Navigation)
- [ ] Implement responsive navigation
- [ ] Set up GitHub Pages deployment pipeline

### Phase 2: Core Pages (Week 2)

- [ ] Build Home page with all sections
- [ ] Build Product page with feature grid
- [ ] Build AI Personalization page
- [ ] Capture and optimize app screenshots
- [ ] Implement App Store/Play Store buttons

### Phase 3: Supporting Pages (Week 3)

- [ ] Build About page
- [ ] Build FAQ page with accordion
- [ ] Build Contact page with form
- [ ] Import Privacy Policy content
- [ ] Create Terms of Service page

### Phase 4: Polish & Launch (Week 4)

- [ ] Responsive testing (mobile, tablet, desktop)
- [ ] SEO implementation (metadata, sitemap, robots)
- [ ] Performance optimization (images, lazy loading)
- [ ] Accessibility audit (WCAG 2.1 AA)
- [ ] Final QA and launch

---

## Success Criteria

### Content Accuracy
- [ ] All features mentioned match documented product reality
- [ ] No speculative or unimplemented features claimed

### User Experience
- [ ] Mobile-first responsive design works on all devices
- [ ] Page load time < 3 seconds (Core Web Vitals)
- [ ] Clear navigation and information hierarchy
- [ ] Professional, serene visual design

### Technical Quality
- [ ] WCAG 2.1 AA accessibility compliance
- [ ] SEO basics implemented (metadata, sitemap, structured data)
- [ ] Material UI theme matches app design system
- [ ] Clean, maintainable code

### Business Goals
- [ ] Clear path to app download (prominent CTAs)
- [ ] Credible presentation for investors/reviewers
- [ ] FAQ reduces common support inquiries

---

## Appendix

### Reference Documents

| Document | Path | Purpose |
|----------|------|---------|
| Product Overview | `docs/PRODUCT_OVERVIEW.md` | Product features, roadmap |
| Technical Overview | `docs/TECHNICAL_OVERVIEW.md` | AI capabilities, infrastructure |
| UX Design | `docs/features/P1/UX_DESIGN.md` | UI patterns, components |
| Design Tokens | `mobile/utils/constants.ts` | Colors, typography, spacing |
| Privacy Policy | `docs/legal/privacy-policy.md` | Legal text for privacy page |
| App Store Listing | `docs/deployment/store-listings/app-store/listing.md` | Marketing copy reference |
| Play Store Listing | `docs/deployment/store-listings/google-play/listing.md` | Marketing copy reference |

### Asset Locations

| Asset Type | Path |
|------------|------|
| Meditation Images | `mobile/assets/images/` |
| App Screenshots | Capture from running app |
| Logo/Branding | App icon from `mobile/assets/` |

### Brand Guidelines

| Platform | Guideline URL | Purpose |
|----------|--------------|---------|
| Google Play | https://partnermarketinghub.withgoogle.com/brands/google-play/visual-identity/badge-guidelines/ | Official Google Play badge requirements and assets |
| Apple App Store | https://developer.apple.com/app-store/marketing/guidelines/ | Official Apple App Store badge requirements and assets |

**Key Requirements:**
- Use official unmodified badge artwork only
- Minimum badge height: 40px for onscreen display
- Clear space: 1/4 of badge height around all sides
- Google Play badge must be same size or larger than other platform badges
- Use black Apple badge when multiple platform badges appear together
- Never modify, translate, or animate the badges

### Contact for Clarifications

For questions about product features or technical details, refer to:
- Backend docs: `backend/Claude.md`
- Mobile docs: `mobile/CLAUDE.md`
- GitHub Issues: https://github.com/he-engineer/MeditationApp/issues

---

**Document Prepared By:** Claude Code
**Date:** December 26, 2025
**Version:** 1.0

---

*This document is the source of truth for the ZenShift website redesign project. All content decisions should reference back to the linked source documents in the meditation app repository.*
