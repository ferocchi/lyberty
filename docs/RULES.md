# Lyberty Monorepo Rules and Patterns

These rules are based on the architecture and setup discussed.

## General Rules

- Use pnpm for all package management.
- Run tasks via Turborepo (e.g., `turbo build`).
- Keep packages private unless publishing.

## Coding Patterns

- **Server Actions**: Use in Next.js for <50ms tasks (e.g., CRUD).
- **Auth**: Handle in Cloudflare Workers.
- **Heavy Compute**: Use Rust micro-services.
- **Shared Types**: Define in packages/types with Zod.
- **State Management**: Jotai for local state in React.
- **CRDT**: Use Yjs wrappers in packages/crdt.
- **WASM**: Export Rust functions via wasm-bindgen.

## Access Control

- Follow CODEOWNERS for permissions.
- Share minimal slices (e.g., single package).

## Database and Hosting

- Prefer Supabase for most cases.
- Deploy to Cloudflare for edge speed.

These can be extended as the project grows.

## Server Actions Patterns

[Full details from fetched rule: Documents general Server Actions patterns used throughout the project. Categorizes actions by functionality (tracking, experiments, rotators, reports, etc.). Includes session management, database operations, and error handling. Best practices for data processing.]

- Always check session before actions.
- Use try-catch for errors.
- Categorize: trackingActions, experimentActions, etc.

## Third-Party APIs

[Full details: Third-party API integrations like Google, Auth, Facebook, Shopify, Cloudflare, Email. Integration patterns.]

- Use environment variables for API keys.
- Handle rate limiting and errors gracefully.
- Examples: Google Auth via Workers, Shopify webhooks in services.

## Universal Form System

[Full details: Form handling patterns.]

- Use React Hook Form with Zod validation from packages/types.
- Server-side validation in Actions.

## Additional Best Practices

- **Error Handling**: Centralized error types in packages/types.
- **Testing**: Unit tests in packages, integration in apps.
- **Performance**: Use memoization in React, optimize Rust for WASM.
- **Security**: RLS in Supabase, secure Workers.

Follow these to maintain consistency across the monorepo.
