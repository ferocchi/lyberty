# Cloudflare Pages Configuration

## 🎯 **Architecture Overview**

### **Marketing Site (apps/marketing)**

- **Purpose**: SEO, lead generation, marketing presence
- **Features**: Full Next.js 15 capabilities (edge middleware, server components, image optimization)
- **Deployment**: Cloudflare Pages with full edge features
- **URL**: lyberty.ai

### **Main Web App (apps/web)**

- **Purpose**: Main product application
- **Features**: Static export for Tauri desktop/iOS wrapping
- **Deployment**: Cloudflare Pages (static export)
- **URL**: app.lyberty.ai (future)

## 🚀 **Marketing Site Configuration (apps/marketing)**

### **Build Settings:**

```
Framework preset: Next.js
Build command: cd apps/marketing && pnpm build
Build output directory: apps/marketing/.next
Root directory: /
```

### **Environment Variables:**

```
NODE_VERSION: 18
PNPM_VERSION: 10.14.0
NEXT_TELEMETRY_DISABLED: 1
```

### **Features Available:**

- ✅ **Edge Middleware** - Server-side logic at the edge
- ✅ **Image Optimization** - Automatic WebP/AVIF conversion
- ✅ **Server Components** - React Server Components
- ✅ **API Routes** - `/api/*` endpoints
- ✅ **Server Actions** - Form handling and mutations
- ✅ **Dynamic Routes** - `[slug]` and `[...slug]` routes
- ✅ **SEO Optimization** - Meta tags, structured data
- ✅ **Social Sharing** - Open Graph tags

## 🔧 **Main Web App Configuration (apps/web)**

### **Build Settings:**

```
Framework preset: Next.js
Build command: cd apps/web && pnpm build
Build output directory: apps/web/out
Root directory: /
```

### **Environment Variables:**

```
NODE_VERSION: 18
PNPM_VERSION: 10.14.0
NEXT_TELEMETRY_DISABLED: 1
```

### **Features Available:**

- ✅ **Static Export** - Ready for Tauri wrapping
- ✅ **Client-side Features** - React hooks, state management
- ✅ **Offline Capability** - Works without internet
- ✅ **Native Performance** - Fast loading in Tauri apps

## 🎯 **Deployment Strategy**

### **Marketing Site (SEO-Focused)**

1. **Full Next.js features** for maximum SEO and performance
2. **Edge middleware** for A/B testing, redirects, analytics
3. **Image optimization** for better Core Web Vitals
4. **Server components** for dynamic content
5. **API routes** for backend functionality

### **Main Web App (Tauri-Ready)**

1. **Static export** for Tauri desktop/iOS wrapping
2. **Client-side only** features for offline capability
3. **Optimized bundle** for native app performance
4. **Shared codebase** with marketing site where possible

## 🔄 **Development Workflow**

### **Marketing Site Development:**

```bash
# Start marketing site development
cd apps/marketing
pnpm dev

# Build for production
pnpm build

# Deploy to Cloudflare Pages (automatic on push to main)
git push origin main
```

### **Main Web App Development:**

```bash
# Start web app development
cd apps/web
pnpm dev

# Build for Tauri
pnpm build

# Build Tauri desktop app
cd ../desktop
pnpm tauri build

# Build Tauri iOS app
cd ../ios-shell
pnpm tauri build
```

## 🎉 **Benefits of This Architecture**

### **Marketing Site:**

- **SEO optimized** - found via search engines
- **Social sharing** - easy to share and go viral
- **Edge performance** - fast loading worldwide
- **Dynamic content** - server-side rendering

### **Main Web App:**

- **Native performance** - wrapped in Tauri
- **Offline capability** - works without internet
- **Cross-platform** - desktop and mobile
- **App store presence** - native app distribution

### **Shared Benefits:**

- **Same codebase** - shared components and logic
- **Consistent UX** - same design system
- **Efficient development** - monorepo structure
- **Fast builds** - Turborepo caching

---

_This configuration optimizes each app for its specific purpose while maintaining code sharing and consistency._
