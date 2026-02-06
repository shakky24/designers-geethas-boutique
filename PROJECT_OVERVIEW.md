# 🌸 Divya - Premium Indian Heritage Wear E-Commerce Website

A modern, high-end e-commerce website showcasing premium Indian ethnic wear with an editorial luxury aesthetic.

## 🎯 Project Overview

**Brand**: Divya - Premium Indian ethnic wear featuring sarees, chudidhars, and designer tops

**Visual Style**: Editorial luxury with heritage influences - think cinematic photography, muted earthy colors, spacious layouts, and elegant typography inspired by premium Indian designer brand websites.

**Live Development Server**: http://localhost:3001

---

## ✨ Key Features

### 🏠 Complete Pages Implemented

1. **Homepage** (`/`)
   - Cinematic full-screen hero with animated content
   - Category showcase grid
   - Editorial split layout with centered overlay
   - Craftsmanship focus section
   - Bestsellers product carousel
   - Brand story with CTA

2. **Product Listing** (`/collections`)
   - Advanced filtering (Category, Fabric, Price)
   - Clean responsive grid layout
   - Mobile-friendly filter toggles
   - Sort functionality
   - Real-time product count

3. **Category Pages** (`/collections/[category]`)
   - Dedicated pages for each category
   - Category-specific descriptions
   - Filtered product displays

4. **Product Detail** (`/products/[id]`)
   - Multi-image gallery with thumbnails
   - Complete product information
   - Size and quantity selectors
   - Accordion details sections
   - Related products
   - Breadcrumb navigation

5. **About Page** (`/about`)
   - Brand heritage narrative
   - Core values showcase
   - Artisan stories
   - Mission statement

6. **Contact Page** (`/contact`)
   - Contact form with validation
   - Business information
   - Store hours
   - FAQ section

---

## 🎨 Design Philosophy

### Color Palette
Warm, soft, textile-inspired tones:
- **Cream** (#faf8f5) - Primary background
- **Sand** (#f4f2ee) - Neutral tones
- **Rust** (#c96949) - Primary accent
- **Maroon** (#a95f58) - Secondary accent
- **Sage** (#7a8c5d) - Tertiary accent
- **Olive** (#3a3d2f) - Primary text

### Typography
- **Headings**: Playfair Display (serif) - Elegant, editorial
- **Body**: Inter (sans-serif) - Clean, modern
- **Letter spacing**: Generous (0.1-0.15em) for luxury feel

### Animations
- Smooth fade-ins on scroll (800ms)
- Subtle hover effects
- Slow, deliberate transitions (500-700ms)
- No flashy or jarring animations

### Image Treatment
- Warm color grading
- Slight film grain effect
- Soft shadows and muted contrast
- 3:4 aspect ratio for products

---

## 🛠️ Technical Stack

### Core Technologies
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Playfair Display, Inter)

### Architecture
- Component-based architecture
- Server and client components
- Dynamic routing
- Optimized image loading
- SEO-friendly structure

---

## 📁 Project Structure

```
divya-website/
├── app/
│   ├── page.tsx                    # Homepage
│   ├── layout.tsx                  # Root layout with fonts
│   ├── globals.css                 # Global styles
│   ├── about/page.tsx              # About page
│   ├── contact/page.tsx            # Contact page
│   ├── collections/
│   │   ├── page.tsx                # All products listing
│   │   ├── loading.tsx             # Loading state
│   │   └── [category]/page.tsx    # Category-specific pages
│   └── products/
│       └── [id]/page.tsx           # Product detail page
│
├── components/
│   ├── Header.tsx                  # Sticky navigation
│   ├── Footer.tsx                  # Site footer
│   ├── ProductCard.tsx             # Product display component
│   ├── CategoryCard.tsx            # Category showcase
│   └── AnimationWrappers.tsx       # Reusable animations
│
├── lib/
│   ├── data.ts                     # Product & category data
│   └── utils.ts                    # Helper functions
│
├── types/
│   └── index.ts                    # TypeScript interfaces
│
├── public/
│   └── images/                     # Static assets
│
├── tailwind.config.ts              # Custom design system
├── next.config.ts                  # Next.js configuration
└── README.md                       # Documentation
```

---

## 🚀 Getting Started

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
# Open http://localhost:3001
```

### Production Build
```bash
npm run build
npm start
```

---

## 🎯 Product Data

### Sample Products (9 total)

**Sarees** (3 products)
- Handwoven Silk Saree - ₹18,500 (Bestseller)
- Block Print Cotton Saree - ₹6,500 (New)
- Chanderi Silk Saree - ₹12,500 (Bestseller)

**Chudidhars** (3 products)
- Embroidered Anarkali Set - ₹8,900 (Featured, New)
- Cotton Straight Cut Suit - ₹4,500 (Bestseller)
- Palazzo Set with Kurta - ₹5,900 (New)

**Designer Tops** (3 products)
- Silk Jacket Top - ₹3,800 (Featured)
- Hand Embroidered Blouse - ₹4,200 (Bestseller)
- Printed Peplum Top - ₹2,900 (New)

---

## 🎨 Component Highlights

### Header
- Sticky navigation with scroll effect
- Mobile-responsive with hamburger menu
- Search, wishlist, and cart icons
- Smooth backdrop blur on scroll

### Product Card
- Hover effects with image swap
- Quick action buttons (wishlist, cart)
- Badge system (New, Bestseller)
- Smooth animations

### Category Card
- Gradient overlays
- Hover zoom effects
- Call-to-action arrows
- Full-bleed imagery

### Footer
- Newsletter subscription
- Social media links
- Navigation links
- Store information

---

## 🖼️ Image Guidelines

For production, replace placeholder images:

### Required Images
1. **Hero**: 1920x1080 (landscape, model in saree/chudidhar)
2. **Categories**: 1200x1600 each (portrait orientation)
   - Sarees
   - Chudidhars
   - Designer Tops
3. **Products**: 1200x1600 each (need 2 images per product)
4. **Editorial**: 1200x1600 each
   - Full model shot
   - Fabric detail close-up
5. **Crafts**: 600x600 each
   - Block print
   - Hand embroidery
   - Silk weaves
   - Natural dyes

### Image Specifications
- Format: JPEG for photos
- Color grading: Warm tones, muted colors
- Treatment: Slight film grain, soft shadows
- Optimization: Use Next.js Image component

---

## 🎯 Brand Voice & Messaging

### Tone
- Timeless and graceful
- Artisanal and heritage-focused
- Contemporary yet rooted in tradition
- Slow fashion advocate

### Key Messages
- "Timeless Elegance"
- "Where Heritage Meets Contemporary Design"
- "Celebrating Indian Craftsmanship"
- "Slow Fashion, Lasting Beauty"

---

## 🔮 Future Enhancements

### Phase 2 Features
- [ ] Shopping cart functionality
- [ ] User authentication & accounts
- [ ] Wishlist management
- [ ] Product reviews & ratings
- [ ] Advanced product search
- [ ] Size guide with modal
- [ ] Image zoom on product pages
- [ ] Related products algorithm

### Phase 3 Features
- [ ] Payment gateway integration
- [ ] Order management system
- [ ] Inventory tracking
- [ ] Customer dashboard
- [ ] Email notifications
- [ ] Blog/Editorial section
- [ ] Gift cards
- [ ] Customization requests

---

## 📊 Performance

- **Next.js 15** with Turbopack for fast compilation
- **Image optimization** with next/image
- **Lazy loading** for images and components
- **Code splitting** for optimal bundle size
- **Font optimization** with next/font

---

## 🎓 Code Quality

- ✅ TypeScript for type safety
- ✅ ESLint configured
- ✅ Component-based architecture
- ✅ Reusable utility functions
- ✅ Semantic HTML
- ✅ Accessible navigation
- ✅ Mobile-first responsive design
- ✅ No linter errors

---

## 📝 Notes

### Current State
- Using placeholder images from placehold.co
- Mock product data in `lib/data.ts`
- All pages functional and tested
- Mobile responsive
- Animations working smoothly
- No console errors or warnings

### For Production
1. Replace all placeholder images with professional photography
2. Connect to actual product database/CMS
3. Implement backend API for products, cart, orders
4. Add authentication system
5. Set up payment processing
6. Configure analytics
7. Add proper meta tags for SEO
8. Set up email service for contact form

---

## 🙏 Credits

- **Design Inspiration**: Premium Indian designer brand websites
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Playfair Display, Inter)
- **Framework**: Next.js by Vercel
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion

---

## 📞 Support

For questions or issues, refer to:
- `README.md` - Setup and basic usage
- `DEVELOPMENT_SUMMARY.md` - Technical details
- Next.js documentation: https://nextjs.org/docs

---

**Built with ❤️ for Divya Fashion**

*Celebrating Indian heritage, one thread at a time.*
