# Lyberty™ - The AI Engine for Builders Who Think Bigger

A unified presentation showcasing Lyberty's vision for automating venture building and amplifying human potential.

## Features

- **Single Page Application**: All 14 slides integrated into one responsive HTML file
- **Smooth Navigation**: Interactive navigation dots and arrow controls
- **Keyboard Support**: Use arrow keys or spacebar to navigate
- **Touch Support**: Swipe gestures for mobile devices
- **Responsive Design**: Optimized for desktop and mobile viewing
- **Modern UI**: Beautiful gradient backgrounds with blueprint overlay effects

## Navigation

- **Navigation Dots**: Click any dot on the right side to jump to a specific slide
- **Arrow Buttons**: Use the bottom arrow buttons for sequential navigation
- **Keyboard**:
  - `→` or `Spacebar`: Next slide
  - `←`: Previous slide
- **Touch**: Swipe left/right on mobile devices

## Deployment to GitHub Pages

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right and select "New repository"
3. Name your repository (e.g., `lyberty-presentation`)
4. Make it **Public** (required for free GitHub Pages)
5. Don't initialize with README (we already have one)
6. Click "Create repository"

### Step 2: Upload Files

1. In your new repository, click "uploading an existing file"
2. Drag and drop the `index.html` file
3. Add a commit message like "Initial commit: Lyberty presentation"
4. Click "Commit changes"

### Step 3: Enable GitHub Pages

1. Go to your repository's **Settings** tab
2. Scroll down to the **Pages** section (or click "Pages" in the left sidebar)
3. Under **Source**, select "Deploy from a branch"
4. Choose the **main** branch and **root** folder
5. Click **Save**
6. Your site will be available at `https://yourusername.github.io/repository-name`

## Setting Up Custom Domain (Namecheap)

### Step 1: Purchase Domain on Namecheap

1. Go to [Namecheap](https://www.namecheap.com)
2. Search for your desired domain name
3. Add to cart and complete purchase
4. Note: You'll need to wait for domain propagation (can take up to 24 hours)

### Step 2: Configure DNS Settings in Namecheap

1. Log into your Namecheap account
2. Go to **Domain List** → click **Manage** next to your domain
3. Go to the **Advanced DNS** tab
4. Add these DNS records:

#### For Apex Domain (e.g., yourdomain.com):

```
Type: A
Host: @
Value: 185.199.108.153
TTL: Automatic
```

```
Type: A
Host: @
Value: 185.199.109.153
TTL: Automatic
```

```
Type: A
Host: @
Value: 185.199.110.153
TTL: Automatic
```

```
Type: A
Host: @
Value: 185.199.111.153
TTL: Automatic
```

#### For www Subdomain (e.g., www.yourdomain.com):

```
Type: CNAME
Host: www
Value: yourusername.github.io
TTL: Automatic
```

### Step 3: Configure GitHub Pages Custom Domain

1. Go back to your GitHub repository
2. Go to **Settings** → **Pages**
3. In the **Custom domain** field, enter your domain (e.g., `yourdomain.com`)
4. Check the box for **Enforce HTTPS** (recommended)
5. Click **Save**

### Step 4: Create CNAME File

1. In your repository, create a new file called `CNAME` (no extension)
2. Add your domain name to the file (e.g., `yourdomain.com`)
3. Commit the changes

### Step 5: Verify Setup

1. Wait for DNS propagation (can take up to 24 hours)
2. Test your domain: `https://yourdomain.com`
3. Test www subdomain: `https://www.yourdomain.com`

## Troubleshooting

### Common Issues:

1. **Domain not working**: Wait for DNS propagation (up to 24 hours)
2. **HTTPS not working**: Make sure "Enforce HTTPS" is checked in GitHub Pages settings
3. **www not working**: Verify CNAME record is set correctly
4. **Page not loading**: Check that the repository is public and GitHub Pages is enabled

### DNS Check Commands:

```bash
# Check A records
dig yourdomain.com

# Check CNAME records
dig www.yourdomain.com

# Check from different locations
nslookup yourdomain.com
```

## File Structure

```
lyberty/
├── index.html          # Main presentation file
├── README.md          # This file
├── page_1.html        # Original individual slides (for reference)
├── page_2.html
├── ...
└── page_14.html
```

## Customization

To customize the presentation:

1. **Colors**: Modify the CSS variables in the `<style>` section
2. **Content**: Edit the HTML content within each slide
3. **Images**: Replace image URLs with your own hosted images
4. **Animations**: Adjust CSS animations and transitions

## Browser Support

- Chrome/Chromium (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This presentation is created for Lyberty™. All rights reserved.

---

**Need help?** Check the [GitHub Pages documentation](https://docs.github.com/en/pages) or [Namecheap DNS guide](https://www.namecheap.com/support/knowledgebase/article.aspx/9645/2208/how-do-i-link-my-domain-to-github-pages/).
