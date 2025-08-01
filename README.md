# Lyberty Monorepo

This is a monorepo setup for the Lyberty project, allowing development and deployment of web, desktop, iOS, marketing site, and backend services from a single repository. It uses Turborepo for fast builds, pnpm for workspace management, Next.js for web apps, Tauri for desktop/iOS, Rust for WASM and services, and more.

## Architecture Overview

Based on the specified monorepo-first architecture:

- **apps/**: Runnable entry-points
  - web/: Next.js 15 app (React/TS/Jotai)
  - ios-shell/: Tauri + SwiftUI for iOS
  - desktop/: Tauri for desktop (Mac/Win/Linux)
  - marketing/: Static Next.js 15 site
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
│   ├── web/
│   │   ├── src/
│   │   ├── next.config.js
│   │   ├── tsconfig.json
│   │   └── package.json
│   ├── desktop/
│   │   └── src-tauri/
│   ├── ios-shell/
│   │   └── src-tauri/
│   └── marketing/
│       ├── public/
│       ├── next.config.js
│       └── package.json
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

## Advanced Setup

- For remote caching: Configure Turborepo with your Vercel account (see turbo.json).
- Rust Toolchain: `rustup target add wasm32-unknown-unknown` for WASM builds.
- Tauri Dependencies: Install system deps per Tauri docs (e.g., webkit2gtk on Linux).

## Common Commands

- Lint all: `pnpm turbo lint`
- Test affected: `pnpm turbo test --since=main`
- Build and export marketing: `cd apps/marketing ; pnpm build ; pnpm export`

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
