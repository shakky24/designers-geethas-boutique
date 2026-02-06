# Divya - Premium Indian Heritage Wear E-commerce

A modern, high-end e-commerce website for premium Indian ethnic wear featuring sarees, chudidhars, and designer tops. Built with Next.js, TypeScript, and Tailwind CSS.

## 🎨 Design Philosophy

### Visual Style
- **Editorial & Heritage Luxury**: Cinematic photography with muted earthy colors
- **Textile-Inspired**: Warm, soft, fabric-like color palette
- **Spacious Layouts**: Generous whitespace for premium feel
- **Elegant Typography**: Playfair Display serif for headings, Inter for body text

### Color Palette
- **Cream/Parchment** backgrounds (#faf8f5)
- **Muted tones**: Beige, sand, ivory
- **Accent colors**: Rust, maroon, sage green, olive, charcoal
- **No pure white or harsh blacks**

## 🚀 Features

### Homepage
- ✨ Full-width cinematic hero section with animated content
- 📦 Category highlight grid (Sarees, Chudidhars, Designer Tops)
- 🎭 Editorial split section with centered text overlay
- 🧵 Craft focus section (Block Print, Embroidery, Silk Weaves, Natural Dyes)
- ⭐ Bestsellers carousel
- 📖 Brand story section

### Product Listing
- 🔍 Advanced filtering (Category, Fabric, Price Range)
- 🎯 Clean 3-column grid layout
- 🖼️ Image hover shows second product image
- 💫 Smooth animations on scroll
- 📱 Fully responsive design

### Product Detail Page
- 🖼️ Image gallery with thumbnail navigation
- 📝 Detailed product information
- 👗 Size selector (for applicable items)
- 🛒 Quantity selector
- ❤️ Add to wishlist
- 📋 Accordion sections (Description, Fabric & Care, Shipping)
- 🔗 Related products section

### Global Features
- 📱 Responsive mobile-first design
- 🎨 Luxury interactions with Framer Motion
- 🎯 SEO-friendly structure
- ⚡ Fast loading with Next.js 15
- 🎭 Sticky header with blur effect on scroll
- 🦶 Comprehensive footer with newsletter signup

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom luxury color palette
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Playfair Display (serif), Inter (sans-serif)

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🌐 Usage

Visit `http://localhost:3000` after running the development server.

### Key Routes
- `/` - Homepage
- `/collections` - All products with filters
- `/collections/sarees` - Sarees collection
- `/collections/chudidhars` - Chudidhars collection
- `/collections/designer-tops` - Designer Tops collection
- `/products/[id]` - Individual product pages
- `/about` - About page
- `/contact` - Contact page

## 📁 Project Structure

```
├── app/
│   ├── page.tsx                 # Homepage
│   ├── layout.tsx               # Root layout with fonts
│   ├── globals.css              # Global styles
│   ├── collections/
│   │   └── page.tsx             # Product listing
│   └── products/
│       └── [id]/page.tsx        # Product detail
├── components/
│   ├── Header.tsx               # Navigation header
│   ├── Footer.tsx               # Site footer
│   ├── ProductCard.tsx          # Product card component
│   ├── CategoryCard.tsx         # Category card component
│   └── AnimationWrappers.tsx    # Reusable animation components
├── lib/
│   └── data.ts                  # Mock product data
├── types/
│   └── index.ts                 # TypeScript interfaces
└── public/
    └── images/                  # Product and category images
```

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to customize the color palette. Current luxury palette includes:
- Cream (backgrounds)
- Sand (neutral tones)
- Rust (accent)
- Maroon (accent)
- Sage (accent)
- Olive (primary text)

### Typography
Fonts are configured in `app/layout.tsx`:
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

### Products
Add or modify products in `lib/data.ts`. Each product includes:
- Images
- Category
- Price
- Fabric details
- Descriptions
- Care instructions

## 🖼️ Image Setup

For production, replace placeholder images in `/public/images/` with actual photography:

```
public/images/
├── hero/
│   └── hero-main.jpg           # Hero section image
├── categories/
│   ├── sarees.jpg
│   ├── chudidhars.jpg
│   └── designer-tops.jpg
├── products/
│   ├── saree-1-main.jpg
│   ├── saree-1-detail.jpg
│   └── ... (product images)
├── editorial/
│   ├── model-full.jpg
│   └── fabric-detail.jpg
└── crafts/
    ├── block-print.jpg
    ├── embroidery.jpg
    ├── silk-weave.jpg
    └── natural-dyes.jpg
```

### Image Guidelines
- **Format**: JPEG for photographs
- **Color grading**: Warm tones, slight film grain
- **Dimensions**: 
  - Hero: 1920x1080 minimum
  - Products: 1200x1600 (3:4 ratio)
  - Categories: 1200x1600 (3:4 ratio)
- **Optimization**: Use Next.js Image component (already implemented)

## 🎯 Design Principles

### Interactions
- ✨ Smooth fade-ins on scroll
- 🔍 Subtle image zoom on hover
- ⏱️ Slow, luxury-style transitions (500-700ms)
- 🚫 No flashy animations

### Typography Treatment
- 📐 Generous letter spacing (0.1em - 0.15em)
- 📏 Tall, refined headings
- 🔤 Uppercase for section titles
- 📖 Relaxed line height for readability

## 🚧 Future Enhancements

- [ ] Shopping cart functionality
- [ ] User authentication
- [ ] Wishlist management
- [ ] Product search
- [ ] Payment integration
- [ ] Order management
- [ ] Customer reviews
- [ ] Size guide modal
- [ ] Zoom functionality for product images
- [ ] Blog section for fashion inspiration

## 📄 License

This project is created for Divya Fashion Store.

## 🙏 Credits

- Design inspired by premium Indian designer brand websites
- Icons by Lucide React
- Fonts from Google Fonts
- Built with Next.js, React, and Tailwind CSS

---

**Note**: This is a demo implementation with mock data. Replace placeholder images and data with actual product information for production use.
