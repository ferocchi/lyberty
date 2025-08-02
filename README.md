# Lyberty Monorepo

This is a monorepo setup for the Lyberty project, allowing development and deployment of web, desktop, iOS, marketing site, and backend services from a single repository. It uses Turborepo for fast builds, pnpm for workspace management, Next.js for web apps, Tauri for desktop/iOS, Rust for WASM and services, and more.

## Architecture Overview

Based on the specified monorepo-first architecture:

- **apps/**: Runnable entry-points
  - marketing/: Next.js 15 app (React/TS) - SEO-optimized marketing site with full edge capabilities
  - web/: Next.js 15 app (React/TS/Jotai) - Main product app with static export for Tauri wrapping
  - ios-shell/: Tauri + SwiftUI for iOS - Native iOS wrapper around web app
  - desktop/: Tauri for desktop (Mac/Win/Linux) - Native desktop wrapper around web app
- **services/**: Deployable back-end
  - auth-worker/: Cloudflare Worker
  - export-service/: Rust + Axum for Fastly
- **packages/**: Shareable libraries
  - ui/: Design system (React components)
  - core/: Domain logic (TS)
  - crdt/: Yjs wrappers
  - wasm-formulas/: Rust to WASM engine
  - types/: Shared types (Zod/tRPC)
- **infra/**: IaC (e.g., Pulumi/Terraform)
- **.github/**: Workflows and CODEOWNERS

## Detailed Project Structure

```
lyberty/
├── apps/
│   ├── marketing/        # Marketing site (Next.js 15 + full edge features)
│   │   ├── src/
│   │   ├── next.config.js
│   │   ├── tsconfig.json
│   │   └── package.json
│   ├── web/              # Main product app (Next.js 15 + static export)
│   │   ├── src/
│   │   ├── next.config.js
│   │   ├── tsconfig.json
│   │   └── package.json
│   ├── desktop/          # Tauri desktop wrapper
│   │   └── src-tauri/
│   └── ios-shell/        # Tauri iOS wrapper
│       └── src-tauri/
├── services/
│   ├── auth-worker/
│   │   └── worker.js
│   └── export-service/
│       └── src/
├── packages/
│   ├── ui/
│   ├── core/
│   ├── crdt/
│   ├── wasm-formulas/
│   │   └── src/
│   └── types/
│       └── index.ts
├── infra/
├── docs/
│   ├── monorepo-guide.md
│   └── RULES.md
├── .github/
│   ├── workflows/
│   │   └── ci.yml
│   └── CODEOWNERS
├── pnpm-workspace.yaml
├── turbo.json
├── package.json
└── README.md
```

## Deployment Strategy

### Marketing Site (apps/marketing)

- **Platform**: Cloudflare Pages
- **Features**: Full Next.js 15 capabilities (edge middleware, server components, image optimization)
- **Purpose**: SEO, lead generation, marketing presence
- **URL**: lyberty.ai

### Main Web App (apps/web)

- **Platform**: Cloudflare Pages (static export)
- **Features**: Static export for Tauri wrapping
- **Purpose**: Main product application
- **URL**: app.lyberty.ai (future)

### Desktop/iOS Apps

- **Platform**: Tauri (desktop) + Tauri for iOS
- **Features**: Native wrappers around static web app
- **Purpose**: Native desktop and mobile applications
- **Distribution**: App stores, direct downloads

## Advanced Setup

- For remote caching: Configure Turborepo with your Vercel account (see turbo.json).
- Rust Toolchain: `rustup target add wasm32-unknown-unknown` for WASM builds.
- Tauri Dependencies: Install system deps per Tauri docs (e.g., webkit2gtk on Linux).

## Common Commands

- Lint all: `pnpm turbo lint`
- Test affected: `pnpm turbo test --since=main`
- Build marketing: `cd apps/marketing ; pnpm build`
- Build web app: `cd apps/web ; pnpm build`
- Build desktop: `cd apps/desktop ; pnpm tauri build`

## Contributing Guidelines

1. Fork the repo and create a branch.
2. Install deps with pnpm.
3. Make changes in the appropriate package/app.
4. Run lint and tests.
5. Commit with conventional commits.
6. Open PR targeting main.

## Troubleshooting

- pnpm not found: Source your shell config (`source ~/.zshrc`).
- Tauri build fails: Check Rust version and system deps.
- Dependency conflicts: Run `pnpm install --force`.

For full architecture details, see docs/monorepo-guide.md. For coding rules, see docs/RULES.md.

Below is a monorepo-first architecture that lets you
• ship a Web app (Next .js), a native iOS app in Swift/Tauri, desktop binaries, and serverless back-end services from one place,
• grant per-folder or per-package access so you can hand off just a micro-service, a marketing site, or a single "agent" without exposing the rest of the source, and
• keep builds fast with remote caching and fine-grained CI.

⸻

Why a Turborepo + pnpm workspace?
• Fast incremental builds and remote cache → everyone shares build artefacts.
• turbo run lint --filter=... / turbo run test --since main keeps CI cheap.
• Can publish any folder in packages/ to npm (private) or GitHub Packages; or export Docker images from services/.

Need to hand code to a partner? 1. Tag only the package (e.g. services/export-service) and push a Git subtree split to a temporary repo OR 2. Run npm publish --access restricted from that folder.
They get exactly one component, no monorepo leakage.

⸻

2 Project boundaries & access control

Layer How to share / withhold
Public SDKs / agents Located in packages/. Publish as versioned npm packages; consumers never see other internals.
Marketing site apps/marketing — deploys straight to Cloudflare Pages. Contractors get apps/marketing write access only (CODEOWNERS + branch protection).
Micro-services One folder ⇢ one Docker image / Worker script. Use GitHub Actions to build and push to GHCR. Hand partners the container URI, not the source.
iOS shell apps/ios-shell is a standalone Xcode workspace that imports the shared Rust static lib and UI kit via Swift PM. You can zip the whole folder or add them as a submodule to a clean repo if required.

⸻

3 Cross-platform strategy

Shared engine
• Rust crate lives in pkg-rust/formula-engine.
• Web → compiled to WASM, exported via wasm-bindgen, consumed by Next.js dynamically (next/dynamic).
• iOS → cargo lipo builds a universal static lib; a tiny Swift wrapper exposes it to SwiftUI.

iOS shell
• Built with Tauri 2. Tauri takes your exported Next build and embeds it in a SwiftUI WebView; plugins can call native Swift or Rust code just by adding a plugin scaffold. ￼
• You keep one JS/React UI; only native-API heavy features (e.g. Core ML, ARKit) become Swift plugins.

Web app
• Full Next .js 15 with static export for Tauri wrapping.
• Uses Jotai atoms for local state — minimal bundle cost, fine for concurrent React.

When you do need pure Swift
• Drop the feature into /apps/ios-shell/Plugins/YourFeature/. Swift Package Manager builds only that submodule; UI still rendered with HTML/CSS or a SwiftUI overlay if you prefer.

⸻

4 Runtime placement guide

Concern / task Where to run it Why
< 50 ms CPU, small payload (CRUD, presence ping) Next 15 Server Action on Cloudflare Pages Functions Lives right beside the React page; no extra R/TT.
Auth.js callback / refresh Cloudflare Worker Official Auth.js Edge guide targets Workers; zero-cold-start isolates (≈ 5 ms) ￼.
Spreadsheet export (10 k rows XLSX) Rust micro-service on Fastly Compute@Edge WASM sandbox starts in ≈ 35 µs and scales 100 × faster than container-based FaaS ￼.
3rd-party webhook fan-out, cron jobs Deno Deploy / Workers Cron Long-lived, isolate-friendly, no cold-start fees.

⸻

5 Supabase vs PlanetScale vs Neon (mid-2025 snapshot)

Provider Hot QPS p99 hot-query latency Cold-start penalty First paid tier DX notes
Supabase (OrioleDB beta) **~ 37 k** ￼ 4-8 ms n/a (always-on) $25 /mo Auth, Storage, RLS, Realtime in one console.
PlanetScale Metal ~ 35 k ￼ 3-5 ms n/a $39 /mo Branch/merge DB; MySQL & Postgres Wire.
Neon Serverless 27 k (hot) ￼ 5-9 ms + ~ 480 ms autosuspend wake ￼ $19 /mo Pay-per-compute; great for bursty workloads.

For sustained OLTP and built-in Realtime, stick with Supabase; flip a feature flag to PlanetScale only if you outgrow 40 k QPS.

⸻

6 Edge host reality check (TTFB, cold-start, DX)

Platform Median cold-start US-E TTFB (edge fn) Cheapest paid tier
Cloudflare Pages + Workers < 5 ms isolates → zero cold-starts ￼ 75 ms US-E static TTFB ￼ $5/mo (10 M req)
Vercel Edge Network 100-400 ms (Fluid reduces but still triple CF) ￼ 105 ms (US-E Node fn) ￼ $20 /seat
Fastly Compute@Edge ≈ 35 µs WASM sandbox, marketed "100 × faster" than container FaaS ￼ 20-40 ms median (customer tests) ￼ $50 min

Pick order: Cloudflare for raw speed + cost, Vercel only if Next.js preview flows are worth the premium, Fastly for Rust-heavy specialty services.

⸻

7 Publishing / sharing modules safely

Need Technique
Share UI kit with a client project npm publish --access restricted @your/ui (package in packages/ui)
Hand off Auth Worker to security auditors Git subtree split services/auth-worker → temp repo, or push Docker image to partner container registry
Open-source CRDT helpers Create public npm scope; pipelines mark that package as public while everything else remains private
Hire contractor for marketing site only CODEOWNERS on apps/marketing/\*\*; GitHub fine-grained PAT limits clone to that path; OR split to separate repo with Turborepo remote-cache.

⸻

8 Putting it in CI
• Matrix builds—turbo run build --filter=apps/web… ensures only affected artifacts build.
• Publish step in GitHub Actions reads package.json{"publishConfig.access"} to decide npm vs GHCR push.
• Security—git secrets scan + Provenance attestations on each build artifact.

⸻

TL-DR workflow 1. Develop everything in one Turborepo. 2. Edge deploy (Cloudflare Pages + Workers) for the Web; same codebase, next export feeds Tauri 2 for desktop-and-mobile shells. 3. Swift is added only where you need frameworks Web can't reach; done through Tauri mobile plugin scaffold so your core UI stays React/TS. 4. Share any slice—micro-service, agent, or UI kit—just by publishing that folder; monorepo boundaries + CI enforce no accidental leaks.

This setup keeps code velocity high, lets you "go native" where it actually pays off, and still gives partners a clean, minimal slice of code when you need to collaborate or outsource.
