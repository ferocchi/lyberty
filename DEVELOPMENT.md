# Lyberty Development Setup Guide

## 🚀 Quick Start

Your development environment is now set up and running! Here's what's currently working:

### ✅ **Currently Running:**

- **Web App**: http://localhost:3000 (Next.js 15)
- **Marketing Site**: http://localhost:3001 (Next.js 15)
- **Dependencies**: All installed via pnpm
- **Monorepo**: Turborepo configured and working

### 🛠 **Development Commands:**

```bash
# Start all development servers
pnpm turbo dev

# Start specific apps
pnpm turbo dev --filter=web          # Web app only
pnpm turbo dev --filter=marketing    # Marketing site only

# Build all projects
pnpm turbo build

# Lint all projects
pnpm turbo lint

# Run tests (when configured)
pnpm turbo test
```

## 📁 **Project Structure**

```
lyberty/
├── apps/
│   ├── web/              # Main Next.js 15 app (React/TS/Jotai)
│   ├── marketing/        # Marketing/landing pages (Next.js 15)
│   ├── desktop/          # Tauri desktop app
│   └── ios-shell/        # Tauri iOS app
├── packages/
│   ├── ui/              # Design system components
│   ├── core/            # Domain logic
│   ├── crdt/            # Yjs wrappers
│   ├── wasm-formulas/   # Rust to WASM engine
│   └── types/           # Shared TypeScript types
├── services/
│   ├── auth-worker/     # Cloudflare Worker
│   └── export-service/  # Rust + Axum service
└── infra/               # Infrastructure as Code
```

## 🔧 **Next Steps to Complete Setup:**

### 1. **Set up Missing Package Configurations**

Some packages need build scripts and proper configurations:

```bash
# Add build scripts to packages
cd packages/core && echo '{"scripts":{"build":"echo \"core build\""}}' > package.json
cd packages/ui && echo '{"scripts":{"build":"echo \"ui build\""}}' > package.json
cd packages/crdt && echo '{"scripts":{"build":"echo \"crdt build\""}}' > package.json
```

### 2. **Set up Desktop App**

```bash
cd apps/desktop
# Install Tauri CLI if not already installed
cargo install tauri-cli
# Set up proper package.json
```

### 3. **Configure Rust Services**

```bash
cd services/export-service
cargo build
```

### 4. **Set up Environment Variables**

Create `.env.local` files for each app as needed.

## 🌐 **Accessing Your Apps:**

- **Web App**: http://localhost:3000
- **Marketing Site**: http://localhost:3001
- **Desktop App**: Run `pnpm tauri dev` in `apps/desktop`

## 🐛 **Troubleshooting:**

### Port Conflicts

If you get port conflicts, you can specify different ports:

```bash
pnpm turbo dev --filter=web -- --port 3002
```

### Missing Dependencies

```bash
pnpm install
pnpm turbo clean
pnpm install
```

### Rust Issues

```bash
# Install Rust if not already installed
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
rustup target add wasm32-unknown-unknown
```

## 📚 **Development Workflow:**

1. **Start Development**: `pnpm turbo dev`
2. **Make Changes**: Edit files in your preferred app/package
3. **Test Changes**: Hot reload should work automatically
4. **Build**: `pnpm turbo build` to test production builds
5. **Commit**: Use conventional commits for better changelog

## 🎯 **What's Ready to Use:**

✅ **Web App**: Fully configured Next.js 15 with TypeScript  
✅ **Marketing Site**: Static site generation ready (Next.js 15)  
✅ **Monorepo**: Turborepo with caching and parallel builds  
✅ **Package Management**: pnpm workspaces configured  
✅ **TypeScript**: Configured across all packages

## 🚧 **What Needs Setup:**

⚠️ **Desktop App**: Needs Tauri CLI and proper package.json  
⚠️ **iOS App**: Needs iOS development environment  
⚠️ **Rust Services**: Need Cargo.toml configurations  
⚠️ **UI Package**: Needs component library setup  
⚠️ **Core Package**: Needs domain logic implementation

## 🎉 **You're Ready to Start Developing!**

Your development environment is working. You can now:

- Edit the web app at `apps/web/src/`
- Edit the marketing site at `apps/marketing/src/`
- Add new packages in the `packages/` directory
- Set up additional services as needed

Happy coding! 🚀
