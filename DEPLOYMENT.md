# Lyberty Deployment Guide

## 🚀 Cloudflare Pages Deployment

### Current Status

- ✅ **Marketing Site**: Ready for Cloudflare Pages deployment
- ✅ **Web App**: Development environment running locally
- ✅ **Infrastructure**: Monorepo configured with Turborepo

### Quick Deploy to Cloudflare Pages

#### 1. **Deploy Marketing Site**

```bash
# Navigate to marketing app
cd apps/marketing

# Build the site
pnpm build

# Deploy to Cloudflare Pages
wrangler pages deploy .next --project-name lyberty-marketing
```

#### 2. **Set Custom Domain**

After deployment, configure your custom domain:

1. Go to Cloudflare Dashboard → Pages → lyberty-marketing
2. Go to Custom Domains
3. Add `lyberty.ai`
4. Update DNS records as needed

### 📋 **Deployment Checklist**

#### Marketing Site (Cloudflare Pages)

- [x] Next.js 15 configured
- [x] Tailwind CSS setup
- [x] Static export ready
- [x] CNAME file created
- [x] Wrangler configuration
- [ ] Deploy to Cloudflare Pages
- [ ] Configure custom domain
- [ ] Set up environment variables

#### Web App (Future: Vercel/Cloudflare)

- [x] Next.js 15 configured
- [x] Development environment running
- [ ] Production build optimization
- [ ] Environment variables setup
- [ ] Database configuration
- [ ] Deploy to production

#### Services

- [ ] Auth Worker (Cloudflare Workers)
- [ ] Export Service (Fastly/Rust)
- [ ] Database setup (Supabase/PlanetScale)

### 🔧 **Environment Variables**

#### Marketing Site

```bash
# Cloudflare Pages Environment Variables
NEXT_PUBLIC_SITE_URL=https://lyberty.ai
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

#### Web App

```bash
# Database
DATABASE_URL=your-database-url

# Authentication
NEXTAUTH_SECRET=your-secret
NEXTAUTH_URL=https://app.lyberty.ai

# Third-party APIs
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

### 🌐 **Domain Configuration**

#### Primary Domain

- **Marketing**: `lyberty.ai`
- **Web App**: `app.lyberty.ai` (future)
- **API**: `api.lyberty.ai` (future)

#### DNS Records

```
Type    Name    Value
A       @       185.199.108.153
A       @       185.199.109.153
A       @       185.199.110.153
A       @       185.199.111.153
CNAME   www     ferocchi.github.io
```

### 📊 **Performance Monitoring**

#### Cloudflare Analytics

- Enable Cloudflare Web Analytics
- Monitor Core Web Vitals
- Track real user performance

#### Error Monitoring

- Set up error tracking (Sentry)
- Monitor build failures
- Track user experience issues

### 🔒 **Security**

#### SSL/TLS

- ✅ Cloudflare Pages provides automatic SSL
- ✅ HTTPS enforcement
- ✅ Security headers

#### Content Security Policy

```html
<!-- Add to _document.tsx or layout.tsx -->
<meta
  http-equiv="Content-Security-Policy"
  content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdnjs.cloudflare.com https://d3js.org; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdnjs.cloudflare.com; font-src 'self' https://fonts.gstatic.com;"
/>
```

### 🚀 **CI/CD Pipeline**

#### GitHub Actions Workflow

```yaml
name: Deploy to Cloudflare Pages

on:
  push:
    branches: [main]
    paths: ["apps/marketing/**"]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: "18"
      - run: npm install -g pnpm
      - run: pnpm install
      - run: cd apps/marketing && pnpm build
      - uses: cloudflare/pages-action@v1
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          projectName: lyberty-marketing
          directory: apps/marketing/.next
```

### 📈 **Analytics & SEO**

#### Google Analytics

- Set up GA4 tracking
- Configure conversion goals
- Monitor user behavior

#### SEO Optimization

- Meta tags optimization
- Open Graph tags
- Structured data
- Sitemap generation

### 🔄 **Rollback Strategy**

#### Cloudflare Pages

- Automatic rollback on build failure
- Manual rollback to previous deployment
- Preview deployments for testing

#### Database

- Regular backups
- Point-in-time recovery
- Migration testing

### 📞 **Support & Monitoring**

#### Uptime Monitoring

- Set up uptime monitoring (UptimeRobot)
- Configure alerts for downtime
- Monitor response times

#### Performance Monitoring

- Core Web Vitals tracking
- Real User Monitoring (RUM)
- Performance budgets

---

## 🎯 **Next Steps**

1. **Deploy Marketing Site** to Cloudflare Pages
2. **Configure Custom Domain** (lyberty.ai)
3. **Set up Analytics** and monitoring
4. **Deploy Web App** to production
5. **Configure Services** (Auth Worker, Export Service)
6. **Set up CI/CD** pipeline
7. **Performance Optimization** and monitoring

---

_Last updated: August 1, 2024_
