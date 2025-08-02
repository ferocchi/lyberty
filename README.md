# Lyberty Monorepo

_Last synced 2 Aug 2025_

Lyberty.ai is an **AI venture‑operating system**. One Turborepo ships every surface—marketing site, web app, desktop/iOS shells, Cloudflare Workers, and shared Rust/WASM packages.

> **Doc map** • [`docs/overview.mdc`](../docs/overview.mdc) • [`docs/backend.mdc`](../docs/backend.mdc) • [`docs/infra.mdc`](../docs/infra.mdc)

---

## 1 Repo Layout (live)

| Path                       | Purpose                                              |
| -------------------------- | ---------------------------------------------------- |
| **apps/marketing**         | Next 15 edge‑rendered marketing site                 |
| **apps/web**               | Next 15 static product app (Tauri‑ready)             |
| **apps/desktop**           | Tauri desktop shell                                  |
| **apps/ios-shell**         | Tauri 2 + SwiftUI mobile wrapper                     |
| **services/auth-worker**   | Cloudflare Worker for Auth.js flows                  |
| **services/heavy-worker**  | Rust→WASM Worker (PDF, compile, ML)                  |
| **packages/ui**            | Tailwind design system components                    |
| **packages/core**          | Domain logic (experiments, funnels)                  |
| **packages/crdt**          | Yjs helpers                                          |
| **packages/wasm-formulas** | High‑perf Rust kernels to WASM                       |
| **packages/types**         | Shared Zod/TS types                                  |
| **infra/**                 | Pulumi definitions: DNS, Workers, D1, KV, R2, Queues |

**\*Note:** legacy `export-service` was merged into **heavy-worker**; Fastly is no longer used.\*

---

## 2 🚀 Quick‑Start (dev)

### Currently Running

| App            | Port                    | Status                |
| -------------- | ----------------------- | --------------------- |
| Marketing site | `http://localhost:3001` | ✅ Next 15 edge‑style |
| Web app        | `http://localhost:3000` | ✅ Next 15 static     |
| Dependencies   | pnpm + Turborepo        | ✅                    |

### Dev Commands

```bash
# Start everything (watch mode)
pnpm turbo dev

# Start only marketing site
pnpm turbo dev --filter=marketing

# Start only web app
pnpm turbo dev --filter=web

# Build / Lint / Test
pnpm turbo build      # all
pnpm turbo lint       # eslint across repo
pnpm turbo test       # jest/vitest (affected)
```

_Ports are configurable via `-- --port=<port>`._

---

## 3 Project Tree

```
lyberty/
├─ apps/
│  ├─ marketing/
│  ├─ web/
│  ├─ desktop/
│  └─ ios-shell/
├─ services/
│  ├─ auth-worker/
│  └─ heavy-worker/
├─ packages/
│  ├─ ui/
│  ├─ core/
│  ├─ crdt/
│  ├─ wasm-formulas/
│  └─ types/
├─ infra/
└─ docs/
```

---

## 4 Deployment Targets

| Surface     | Platform                       | URL                                               |
| ----------- | ------------------------------ | ------------------------------------------------- |
| Marketing   | Cloudflare Pages (Edge Render) | [https://lyberty.ai](https://lyberty.ai)          |
| Web App     | Cloudflare Pages (Static)      | [https://lyberty.app](https://lyberty.app) (soon) |
| API         | Cloudflare Workers             | [https://api.lyberty.ai](https://api.lyberty.ai)  |
| Desktop/iOS | Tauri auto‑update              | —                                                 |

Preview envs live at `*.dev.lyberty.ai` per PR.

---

## 5 Next Steps Checklist

1. **Scripts for packages** – add proper `build` to `packages/ui`, `core`, `crdt`.
2. **Desktop shell** – `cargo install tauri-cli`, then `pnpm tauri dev`.
3. **Env vars** – copy `.env.example` → `.env.local` for each app.
4. **Rust target** – `rustup target add wasm32-unknown-unknown`.

---

## 6 CI / CD

GitHub Actions → test → build → `wrangler deploy` (Workers) → Pages deploy → Tauri artifacts. Secrets via **GitHub Environments**. SLSA provenance on every build.

---

## 7 Troubleshooting

| Issue             | Fix                                          |
| ----------------- | -------------------------------------------- |
| Port in use       | `pnpm turbo dev --filter=web -- --port 3002` |
| `pnpm` missing    | `corepack enable` then reopen shell          |
| Tauri build fails | Check Rust toolchain + OS deps               |

---

## 8 Contribution Flow

1. Branch off `main` using Conventional Commits.
2. `pnpm install` & run tests.
3. Update docs if behaviour changes.
4. PR – auto preview + review.

---

Built for **speed, leverage, and safe sharing**. When in doubt, open `docs/overview.mdc` or ping `#help-lyberty`.
