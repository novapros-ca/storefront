# NovaPros - Engineering Handoff (Senior Team)

## 1) Production Readiness Checklist

### Build and CI
- [ ] `pnpm lint` passes in CI.
- [ ] `pnpm build` passes in CI.
- [ ] CI blocks merge on lint/build failures.
- [ ] Node and pnpm versions are pinned in CI environment.

### Type Safety and Code Quality
- [ ] No `any` in business logic (exceptions documented).
- [ ] No disabled lint rules without justification.
- [ ] Imports are minimal and dead code is removed.
- [ ] Shared constants are centralized (content/contact/nav).

### Contact Pipeline
- [ ] `CONTACT_WEBHOOK_URL` is set in all environments.
- [ ] API route `/api/contact` returns correct status codes.
- [ ] Invalid payload tests exist (400/503/502/500 cases).
- [ ] Honeypot behavior is tested.
- [ ] Error feedback is user-friendly on frontend.

### Accessibility
- [ ] Keyboard navigation works from header to footer.
- [ ] Skip link is visible on focus and functional.
- [ ] Mobile menu is screen-reader understandable.
- [ ] Form fields have labels and error messages announced.
- [ ] Color contrast passes WCAG AA for text and controls.

### SEO and Discoverability
- [ ] Canonical URL is correct in production.
- [ ] Robots and sitemap are reachable.
- [ ] OpenGraph/Twitter preview is validated.
- [ ] JSON-LD is valid in Rich Results Test.
- [ ] Metadata content matches final brand/legal wording.

### Performance
- [ ] Lighthouse mobile: Performance >= 85.
- [ ] Lighthouse mobile: Accessibility >= 90.
- [ ] Lighthouse mobile: Best Practices >= 90.
- [ ] Lighthouse mobile: SEO >= 90.
- [ ] No large unused JS chunks from optional UI modules.

### Security and Operations
- [ ] No secrets committed to repository.
- [ ] Contact endpoint has request rate protection at infra layer.
- [ ] Error logs are observable (platform logs + alert threshold).
- [ ] Recovery path exists if webhook provider is down.

---

## 2) Team Conventions (Proposed)

### Architecture
1. Keep one-page composition in `app/page.tsx` only.
2. Keep section rendering in `components/*-section.tsx`.
3. Keep business/config content in `content/*`.
4. Keep validation schemas in `lib/*-schema.ts`.
5. Keep API routes thin and deterministic.

### Naming and Organization
1. Use explicit names: `ContactPayload`, `contactPayloadSchema`, `siteConfig`.
2. No duplicate hooks/utilities across folders.
3. Keep UI kit wrappers in `components/ui`, business UI in `components`.
4. Prefer one responsibility per file.

### TypeScript
1. Prefer strict inferred types over manual broad annotations.
2. Validate external inputs at boundaries (API/form/env).
3. Export shared types from schema files when needed.
4. Avoid `as` casts unless boundary constraints require it.

### React and Next.js
1. Keep server/client boundaries clear (`"use client"` only when needed).
2. Avoid state updates directly inside effects unless callback-driven.
3. Prefer declarative rendering from central content objects.
4. Keep layout metadata as single source of truth.

### Styling and Design System
1. Use existing black/white/gray + subtle accent palette.
2. Reuse existing tokenized Tailwind variables.
3. Maintain `scroll-mt` behavior for anchored sections.
4. Do not introduce visual style drift between sections.

### Git and Review
1. Small PRs with one main objective.
2. PR template must include: context, change summary, risks, screenshots.
3. Mandatory checks: lint + build + quick mobile smoke test.
4. For content changes, include explicit "copy changed" note.

---

## 3) Prioritized Delivery Plan (Tickets)

## P0 - Must Have Before Production

### T1. Contact Delivery Reliability
- Goal: Guarantee lead capture reliability.
- Scope:
  - Add retry/backoff strategy for webhook forwarding (or queue fallback).
  - Add structured logging with request correlation id.
  - Add explicit timeout and graceful failure response.
- Output:
  - Reliable contact pipeline and operational runbook.
- Acceptance Criteria:
  - Successful request path and failure path validated.
  - Timeouts and upstream 5xx handled predictably.

### T2. E2E Smoke Coverage
- Goal: Prevent regression on key conversion flow.
- Scope:
  - Add Playwright smoke tests:
    - page loads,
    - anchor navigation,
    - contact form success/failure states.
- Output:
  - Minimal E2E suite in CI.
- Acceptance Criteria:
  - Tests green on PR and main.

### T3. Environment Contract and Deployment Guardrails
- Goal: Prevent misconfiguration in production.
- Scope:
  - Validate required envs at startup or route level.
  - Add deployment checklist and rollback notes.
- Output:
  - Clear env contract and safer release process.
- Acceptance Criteria:
  - Missing webhook env is caught and documented.

## P1 - Strongly Recommended

### T4. Content Model Hardening
- Goal: Improve maintainability and editorial workflow.
- Scope:
  - Move remaining section static arrays into `content/*` modules.
  - Normalize field naming and section-level interfaces.
- Output:
  - Consistent content architecture.
- Acceptance Criteria:
  - Sections render entirely from typed content sources.

### T5. Accessibility QA Pass
- Goal: Raise confidence for AA compliance.
- Scope:
  - Run automated axe scan and manual keyboard pass.
  - Fix any contrast/focus issues discovered.
- Output:
  - Accessibility report + fixes.
- Acceptance Criteria:
  - No serious/critical a11y violations.

### T6. Performance Budget Baseline
- Goal: Keep performance stable over time.
- Scope:
  - Record Lighthouse baseline.
  - Add simple budget thresholds in CI or PR checks.
- Output:
  - Performance budget policy.
- Acceptance Criteria:
  - Baseline documented and alerts defined.

## P2 - Nice to Have

### T7. Analytics and Conversion Events
- Goal: Measure CTA and form conversion quality.
- Scope:
  - Track clicks on primary CTAs and form submit outcomes.
  - Build event naming convention document.
- Output:
  - Actionable conversion telemetry.
- Acceptance Criteria:
  - Events visible in analytics and documented.

### T8. Optional UI Kit Pruning
- Goal: Reduce maintenance overhead.
- Scope:
  - Audit unused UI wrappers and remove safely.
  - Verify no regressions in lint/build.
- Output:
  - Leaner frontend surface.
- Acceptance Criteria:
  - Build and smoke tests remain green.

---

## 4) Suggested PR Sequence
1. PR-1: Contact reliability + tests.
2. PR-2: Content model hardening.
3. PR-3: Accessibility and performance pass.
4. PR-4: Analytics and optional cleanup.

This sequence keeps conversion-critical risk first and preserves a clean review flow for a senior engineering team.
