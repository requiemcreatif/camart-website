# CamART Animation Spec (v1)

## Motion Principles
- Style: clean, editorial, restrained.
- Purpose: guide attention, indicate interaction, reinforce hierarchy.
- Constraints: short durations, low travel distance, no decorative looping.
- Accessibility: honor `prefers-reduced-motion`; disable non-essential motion.

## Motion Tokens
- Duration:
  - `--motion-duration-sm`: `220ms`
  - `--motion-duration-md`: `360ms`
  - `--motion-duration-lg`: `520ms`
- Easing:
  - `--motion-ease-standard`: `cubic-bezier(0.22, 1, 0.36, 1)`
  - `--motion-ease-emphasis`: `cubic-bezier(0.2, 0.8, 0.2, 1)`
- Distance:
  - `--motion-distance-sm`: `10px`
  - `--motion-distance-md`: `18px`

## Concrete Animation List
1. Global page-entry reveal
- Scope: each major section container.
- Motion: `fade + translateY(18px -> 0)`.
- Timing: `520ms`, `--motion-ease-emphasis`.
- Stagger: `60ms` between sibling blocks.

2. Navbar micro-motion
- Scope: nav links and CTA.
- Motion: color transition + subtle y-shift on CTA hover.
- Timing: `220ms`, `--motion-ease-standard`.

3. Hero staged intro
- Scope: badge, title, paragraph, CTA row.
- Motion: reveal-up staggered sequence.
- Timing: each element `520ms`, stagger `80ms`.

4. Section heading reveal
- Scope: small label + heading pair per section.
- Motion: fade-in + upward reveal.
- Timing: `360ms`.

5. Card hover polish (artists/news)
- Scope: card root + image.
- Motion: card lift `-4px`, soft shadow, tiny brightness increase.
- Timing: `220ms`.

6. CTA/button interactions
- Scope: all primary/secondary buttons.
- Motion: hover lift (`-1px`) and press scale (`0.985`).
- Timing: `220ms`.

7. Mobile menu open
- Scope: overlay, panel, items, footer actions.
- Motion: fade overlay, panel lift, item stagger.
- Timing: `220ms` / `300ms` / `360ms`.

8. Feedback/status motion
- Scope: contact success/error text, inline notices.
- Motion: short fade/reveal.
- Timing: `220–360ms`.

## Phase Plan
### Phase 1 (implemented now)
- Add shared motion tokens in global CSS.
- Add reusable utility classes:
  - `animate-fade-in`
  - `animate-reveal-up`
  - `animate-reveal-down`
  - `motion-enter` / `motion-enter is-visible`
  - `motion-card-hover`
  - `motion-button`
- Add global reduced-motion safety via media query.

### Phase 2
- Apply section-entry reveals (Hero, Artists, News, Contact, Footer).
- Apply motion-button class across CTA/buttons.
- Apply card hover polish to artists/news cards.

### Phase 3
- Add route transitions between Home / Artist / News detail.
- Add subtle parallax in hero and final polish.
