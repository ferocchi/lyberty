# Lyberty Monorepo Guide

This guide compiles all details from the setup process.

## Top-Level Layout (Detailed)

repo-root/
├─ apps/ # Runnable entry-points
│ ├─ web/ # Next.js 14 (React/TS/Jotai) - Main web app with Server Actions.
│ ├─ ios-shell/ # Tauri-for-iOS + SwiftUI wrapper - Embeds web build.
│ ├─ desktop/ # Tauri desktop (mac/Win/Linux) - Cross-platform desktop app.
│ └─ marketing/ # Static Next.js site - For marketing pages, exports to static HTML.
├─ services/ # Deployable back-end workloads
│ ├─ auth-worker/ # Cloudflare Worker (Edge, Node 18) - Handles auth callbacks.
│ ├─ export-service/ # Rust + Axum, compiled to WASI ⟶ Fastly - For heavy exports like XLSX.
│ └─ … other micro-services # Add more as needed.
├─ packages/ # Shareable libraries
│ ├─ ui/ # Design-system React components and tokens.
│ ├─ core/ # Pure domain logic (TS).
│ ├─ crdt/ # Yjs helper wrappers for real-time collab.
│ ├─ wasm-formulas/ # Rust → WebAssembly engine - Shared compute.
│ └─ types/ # Zod / tRPC / shared TS types - Validation and APIs.
├─ infra/ # IaC (Pulumi / Terraform) for CF, Supabase, etc.
└─ .github/
├─ workflows/ # CI: “affected” builds, publish, deploy.
└─ CODEOWNERS # Path-based permissions.

## Why a Turborepo + pnpm Workspace? (Expanded)

- Fast incremental builds and remote cache → everyone shares build artefacts.
- turbo run lint --filter=... / turbo run test --since main keeps CI cheap.
- Can publish any folder in packages/ to npm (private) or GitHub Packages; or export Docker images from services/.
- Example: To publish ui package: `cd packages/ui ; pnpm publish --access restricted`.

## Project Boundaries & Access Control (Detailed)

| Layer                | How to share / withhold                                                                                                                                                                              |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Public SDKs / agents | Located in packages/. Publish as versioned npm packages; consumers never see other internals.                                                                                                        |
| Marketing site       | apps/marketing — deploys straight to Cloudflare Pages. Contractors get apps/marketing write access only (CODEOWNERS + branch protection).                                                            |
| Micro-services       | One folder ⇢ one Docker image / Worker script. Use GitHub Actions to build and push to GHCR. Hand partners the container URI, not the source.                                                        |
| iOS shell            | apps/ios-shell is a standalone Xcode workspace that imports the shared Rust static lib and UI kit via Swift PM. You can zip the whole folder or add them as a submodule to a clean repo if required. |

Example: To share auth-worker: Git subtree push to temp repo.

## Cross-Platform Strategy (Detailed)

Shared engine

- Rust crate lives in packages/wasm-formulas.
- Web → compiled to WASM, exported via wasm-bindgen, consumed by Next.js dynamically (next/dynamic).
- iOS → cargo lipo builds a universal static lib; a tiny Swift wrapper exposes it to SwiftUI.

iOS shell

- Built with Tauri 2. Tauri takes your exported Next build and embeds it in a SwiftUI WebView; plugins can call native Swift or Rust code just by adding a plugin scaffold.
- You keep one JS/React UI; only native-API heavy features (e.g. Core ML, ARKit) become Swift plugins.

Web app

- Full Next.js 14 with Server Actions for lightweight edge code.
- Uses Jotai atoms for local state — minimal bundle cost, fine for concurrent React.

When you do need pure Swift

- Drop the feature into /apps/ios-shell/Plugins/YourFeature/. Swift Package Manager builds only that submodule; UI still rendered with HTML/CSS or a SwiftUI overlay if you prefer.

## Runtime Placement Guide (Detailed)

| Concern / task                                   | Where to run it                                     | Why                                                                               |
| ------------------------------------------------ | --------------------------------------------------- | --------------------------------------------------------------------------------- |
| < 50 ms CPU, small payload (CRUD, presence ping) | Next 13 Server Action on Cloudflare Pages Functions | Lives right beside the React page; no extra R/TT.                                 |
| Auth.js callback / refresh                       | Cloudflare Worker                                   | Official Auth.js Edge guide targets Workers; zero-cold-start isolates (≈ 5 ms).   |
| Spreadsheet export (10 k rows XLSX)              | Rust micro-service on Fastly Compute@Edge           | WASM sandbox starts in ≈ 35 µs and scales 100 × faster than container-based FaaS. |
| 3rd-party webhook fan-out, cron jobs             | Deno Deploy / Workers Cron                          | Long-lived, isolate-friendly, no cold-start fees.                                 |

## Supabase vs PlanetScale vs Neon (Detailed)

| Provider                 | Hot QPS   | p99 hot-query latency | Cold-start penalty         | First paid tier | DX notes                                     |
| ------------------------ | --------- | --------------------- | -------------------------- | --------------- | -------------------------------------------- |
| Supabase (OrioleDB beta) | ~37k      | 4-8 ms                | n/a (always-on)            | $25/mo          | Auth, Storage, RLS, Realtime in one console. |
| PlanetScale Metal        | ~35k      | 3-5 ms                | n/a                        | $39/mo          | Branch/merge DB; MySQL & Postgres Wire.      |
| Neon Serverless          | 27k (hot) | 5-9 ms                | + ~480 ms autosuspend wake | $19/mo          | Pay-per-compute; great for bursty workloads. |

For sustained OLTP and built-in Realtime, stick with Supabase; flip a feature flag to PlanetScale only if you outgrow 40k QPS.

## Edge Host Reality Check (Detailed)

| Platform                   | Median cold-start                                                | US-E TTFB (edge fn)              | Cheapest paid tier |
| -------------------------- | ---------------------------------------------------------------- | -------------------------------- | ------------------ |
| Cloudflare Pages + Workers | <5 ms isolates → zero cold-starts                                | 75 ms US-E static TTFB           | $5/mo (10M req)    |
| Vercel Edge Network        | 100-400 ms (Fluid reduces but still triple CF)                   | 105 ms (US-E Node fn)            | $20/seat           |
| Fastly Compute@Edge        | ≈35 µs WASM sandbox, marketed “100 × faster” than container FaaS | 20-40 ms median (customer tests) | $50 min            |

Pick order: Cloudflare for raw speed + cost, Vercel only if Next.js preview flows are worth the premium, Fastly for Rust-heavy specialty services.

## Publishing / Sharing Modules Safely (Detailed)

| Need                                      | Technique                                                                                                                                    |
| ----------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Share UI kit with a client project        | npm publish --access restricted @your/ui (package in packages/ui)                                                                            |
| Hand off Auth Worker to security auditors | Git subtree split services/auth-worker → temp repo, or push Docker image to partner container registry                                       |
| Open-source CRDT helpers                  | Create public npm scope; pipelines mark that package as public while everything else remains private                                         |
| Hire contractor for marketing site only   | CODEOWNERS on apps/marketing/\*\*; GitHub fine-grained PAT limits clone to that path; OR split to separate repo with Turborepo remote-cache. |

## Putting it in CI (Detailed)

- Matrix builds—turbo run build --filter=apps/web… ensures only affected artifacts build.
- Publish step in GitHub Actions reads package.json{"publishConfig.access"} to decide npm vs GHCR push.
- Security—git secrets scan + Provenance attestations on each build artifact.

## TL;DR Workflow

1. Develop everything in one Turborepo.
2. Edge deploy (Cloudflare Pages + Workers) for the Web; same codebase, next export feeds Tauri 2 for desktop-and-mobile shells.
3. Swift is added only where you need frameworks Web can’t reach; done through Tauri mobile plugin scaffold so your core UI stays React/TS.
4. Share any slice—micro-service, agent, or UI kit—just by publishing that folder; monorepo boundaries + CI enforce no accidental leaks.
