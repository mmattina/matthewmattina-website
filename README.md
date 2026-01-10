# matthewmattina.com

Personal portfolio website for Matthew Mattina, built with React and Vite.

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

The built files will be in the `dist` directory.

## 📦 Deployment

This website is configured to deploy on Vercel, Netlify, and Cloudflare Pages. Choose the platform that works best for you.

### Option 1: Deploy to Vercel (Recommended)

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/matthewmattina-website.git
   git push -u origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite and configure settings
   - Click "Deploy"

3. **Add Custom Domain:**
   - In your Vercel project dashboard, go to "Settings" > "Domains"
   - Add `matthewmattina.com`
   - Follow Vercel's DNS configuration instructions
   - Update your GoDaddy DNS settings:
     - Add a CNAME record: `@` → `cname.vercel-dns.com`
     - Or use A records if CNAME is not supported for root domain

4. **Configure GoDaddy DNS:**
   - Log into GoDaddy
   - Go to DNS Management for matthewmattina.com
   - Update records as shown in Vercel dashboard
   - Wait for DNS propagation (can take up to 48 hours, usually much faster)

### Option 2: Deploy to Netlify

1. **Push to GitHub** (same as above)

2. **Connect to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Sign up/Login with GitHub
   - Click "Add new site" > "Import an existing project"
   - Select your GitHub repository
   - Build settings are auto-detected from `netlify.toml`:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

3. **Add Custom Domain:**
   - In your Netlify site dashboard, go to "Domain settings"
   - Click "Add custom domain"
   - Enter `matthewmattina.com`
   - Follow Netlify's DNS configuration instructions
   - Update your GoDaddy DNS settings with the provided values

### Option 3: Deploy to Cloudflare Pages

1. **Push to GitHub** (same as above)

2. **Connect to Cloudflare Pages:**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Navigate to "Pages" in the sidebar
   - Click "Create a project" > "Connect to Git"
   - Select your GitHub repository
   - Configure build settings:
     - Build command: `npm run build`
     - Build output directory: `dist`
   - Click "Save and Deploy"

3. **Add Custom Domain:**
   - In your Cloudflare Pages project, go to "Custom domains"
   - Click "Set up a custom domain"
   - Enter `matthewmattina.com`
   - Follow Cloudflare's DNS configuration (you may need to transfer your domain or update nameservers)

## 🎨 Customization

### Update Personal Information

Edit the following files to customize your site:

1. **Hero Section** (`src/components/Hero.jsx`): Update greeting and subtitle
2. **About Section** (`src/components/About.jsx`): Update bio and skills
3. **Experience Section** (`src/components/Experience.jsx`): Add your work experience
4. **Projects Section** (`src/components/Projects.jsx`): Add your projects
5. **Contact Section** (`src/components/Contact.jsx`): Update email and social links
6. **Footer** (`src/components/Footer.jsx`): Update social links

### Colors and Styling

Main color variables are defined in `src/index.css`:
- `--primary-color`: Main brand color
- `--primary-dark`: Darker shade for hover states
- `--secondary-color`: Secondary accent color

### Form Integration

The contact form currently uses a simple alert. To make it functional:

**Option A: Use Formspree (Free tier available)**
1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form
3. Update `src/components/Contact.jsx` to submit to Formspree endpoint

**Option B: Use EmailJS**
1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Configure email service
3. Install: `npm install @emailjs/browser`
4. Update `src/components/Contact.jsx` with EmailJS integration

**Option C: Use Netlify Forms (if deploying to Netlify)**
1. Add `netlify` attribute to form in `src/components/Contact.jsx`
2. Netlify will automatically handle form submissions

## 📝 GoDaddy DNS Configuration

After deploying to your chosen platform, you'll need to configure DNS records in GoDaddy:

### For Vercel:
- **Type:** CNAME
- **Name:** @ (or leave blank for root domain)
- **Value:** `cname.vercel-dns.com`
- **TTL:** 1 hour

Or use A records if CNAME isn't supported for root:
- Add A records pointing to Vercel's IP addresses (provided in Vercel dashboard)

### For Netlify:
- **Type:** CNAME
- **Name:** @
- **Value:** `your-site-name.netlify.app`
- **TTL:** 1 hour

### For Cloudflare Pages:
- Update nameservers to Cloudflare's (if using Cloudflare DNS)
- Or add CNAME record pointing to your Pages URL

**Note:** DNS changes can take 24-48 hours to propagate, but usually happen within minutes to hours.

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start dev server (runs on http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📄 License

This project is private and personal.

## 🤝 Support

For issues or questions, please open an issue on GitHub or contact directly.
