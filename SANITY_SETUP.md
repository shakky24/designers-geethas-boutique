# 🎨 Sanity CMS Setup Guide for Divya Fashion

Your website now has a powerful Content Management System! Here's how to get started.

---

## 🚀 Quick Setup

### Step 1: Create a Sanity Account

1. Go to [sanity.io](https://sanity.io)
2. Sign up for a free account (or log in)
3. Click "Create Project"

### Step 2: Get Your Project Credentials

After creating a project, you'll get:
- **Project ID** (looks like: `abc123de`)
- **Dataset** (usually: `production`)

### Step 3: Configure Environment Variables

1. Copy the example file:
```bash
cp .env.local.example .env.local
```

2. Edit `.env.local` and add your credentials:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your-actual-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your-api-token-if-needed
```

### Step 4: Deploy the Studio Schema

```bash
# Install Sanity CLI globally (if not already installed)
npm install -g @sanity/cli

# Login to Sanity
sanity login

# Deploy the schema
sanity deploy
```

### Step 5: Access Your CMS

1. Restart your dev server:
```bash
npm run dev
```

2. Open the Sanity Studio:
```
http://localhost:3001/studio
```

3. Start adding content! 🎉

---

## 📝 Content Types

Your CMS has three main content types:

### 1. Products
Create and manage your fashion products:
- **Basic Info**: Name, slug, category, price
- **Images**: Upload up to 10 high-quality images
- **Details**: Fabric, colors, description, fit
- **Metadata**: Featured, bestseller, new arrival flags
- **Availability**: Stock status, sizes
- **Care**: Care instructions

### 2. Categories
Manage your product categories:
- **Name**: Category display name
- **Slug**: URL-friendly identifier
- **Image**: Hero image for category page
- **Description**: Short description
- **Order**: Display order on homepage

### 3. Hero Section
Control your homepage hero:
- **Title**: Main headline
- **Subtitle**: Supporting text
- **Image**: Background image
- **CTA**: Button text and link
- **Active**: Toggle visibility

---

## 🎯 Using the CMS

### Adding a New Product

1. Go to `/studio`
2. Click "+ Create" → "Product"
3. Fill in the details:
   - **Name**: "Handwoven Silk Saree - Rust"
   - **Category**: Select from dropdown
   - **Price**: Enter amount in rupees
   - **Images**: Upload 2-10 images
   - **Fabric**: Choose from list
   - **Colors**: Add color names
   - **Description**: Write compelling copy
   - Check badges (featured/bestseller/new)
4. Click "Publish"

### Managing Categories

1. Go to `/studio`
2. Click "Category"
3. Add/edit categories with images
4. Set display order (0 = first)

### Updating Hero Section

1. Go to `/studio`
2. Click "Hero Section"
3. Upload new image or update text
4. Toggle "Active" to enable/disable
5. Publish changes

---

## 🔄 Connecting to Your Frontend

Your website is already configured to use Sanity! Here's how it works:

### Data Fetching

The website uses these helper functions (in `sanity/queries.ts`):

```typescript
// Get all products
import { getProducts } from '@/sanity/queries';
const products = await getProducts();

// Get single product
import { getProduct } from '@/sanity/queries';
const product = await getProduct('product-slug');

// Get products by category
import { getProductsByCategory } from '@/sanity/queries';
const sarees = await getProductsByCategory('sarees');

// Get featured products
import { getFeaturedProducts } from '@/sanity/queries';
const featured = await getFeaturedProducts();

// Get bestsellers
import { getBestsellerProducts } from '@/sanity/queries';
const bestsellers = await getBestsellerProducts();

// Get categories
import { getCategories } from '@/sanity/queries';
const categories = await getCategories();

// Search products
import { searchProducts } from '@/sanity/queries';
const results = await searchProducts('silk');
```

### Image Optimization

Use the helper to get optimized Sanity images:

```typescript
import { getImageUrl } from '@/sanity/image';

// Get optimized image URL
const imageUrl = getImageUrl(product.images[0], 1200, 1600);

// In Next.js Image component
<Image 
  src={getImageUrl(product.images[0])} 
  alt={product.name}
  width={1200}
  height={1600}
/>
```

---

## 🎨 Updating Your Pages to Use Sanity

### Example: Update Homepage

Replace the mock data in `app/page.tsx`:

```typescript
import { getBestsellerProducts, getCategories } from '@/sanity/queries';

export default async function HomePage() {
  // Fetch real data from Sanity
  const bestsellers = await getBestsellerProducts();
  const categories = await getCategories();
  
  return (
    // Your existing JSX
  );
}
```

### Example: Update Product Detail Page

Update `app/products/[id]/page.tsx`:

```typescript
import { getProduct } from '@/sanity/queries';
import { getImageUrl } from '@/sanity/image';

export default async function ProductPage({ params }) {
  const product = await getProduct(params.id);
  
  if (!product) {
    notFound();
  }
  
  return (
    // Use product data with Sanity images
    <Image 
      src={getImageUrl(product.images[0], 1200, 1600)}
      alt={product.name}
      // ... other props
    />
  );
}
```

---

## 🔧 Advanced Configuration

### Webhooks (Optional)

Set up webhooks to trigger builds when content changes:

1. Go to your Sanity project settings
2. Add webhook URL: `https://your-site.com/api/revalidate`
3. Select trigger events (publish, unpublish, delete)

### Custom API Routes

Create an API route for revalidation:

```typescript
// app/api/revalidate/route.ts
import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret');
  
  if (secret !== process.env.REVALIDATION_SECRET) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
  }
  
  revalidatePath('/');
  revalidatePath('/collections');
  
  return NextResponse.json({ revalidated: true });
}
```

### Image CDN

Sanity provides a global CDN for images automatically. All images are:
- Automatically optimized
- Served from edge locations
- Resizable on-the-fly
- Format converted (WebP, AVIF)

---

## 📊 Content Schema Reference

### Product Fields

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| name | String | Yes | Product display name |
| slug | Slug | Yes | Auto-generated from name |
| category | String | Yes | sarees, chudidhars, designer-tops |
| price | Number | Yes | Price in rupees |
| images | Image Array | Yes | 1-10 images |
| fabric | String | Yes | Select from predefined list |
| colors | String Array | Yes | Available color names |
| description | Text | Yes | Product description |
| fit | String | No | Fit details |
| occasion | String Array | No | Suitable occasions |
| care | Text | No | Care instructions |
| featured | Boolean | No | Show in featured section |
| bestseller | Boolean | No | Show in bestsellers |
| new | Boolean | No | Mark as new arrival |
| inStock | Boolean | Yes | Availability (default: true) |
| sizes | String Array | No | Available sizes (hidden for sarees) |

---

## 🎯 Best Practices

### Content Guidelines

1. **Product Names**
   - Be descriptive: "Handwoven Silk Saree - Rust"
   - Include key features
   - Keep under 100 characters

2. **Images**
   - Upload high-resolution (min 1200px width)
   - Use consistent lighting and backgrounds
   - Show product from multiple angles
   - Include detail shots

3. **Descriptions**
   - Write compelling, descriptive copy
   - Highlight unique features
   - Include fabric details
   - Mention craftsmanship

4. **Categories**
   - Use descriptive category images
   - Write clear, engaging descriptions
   - Set logical display order

### SEO Optimization

- Use descriptive slugs
- Write unique descriptions for each product
- Upload alt text for images
- Use relevant keywords naturally

---

## 🆘 Troubleshooting

### Studio Won't Load

1. Check `.env.local` has correct credentials
2. Verify project ID matches Sanity dashboard
3. Restart dev server

### Images Not Displaying

1. Ensure images are published in Studio
2. Check `NEXT_PUBLIC_SANITY_PROJECT_ID` is set
3. Verify domain is allowed in Sanity project settings

### Schema Changes Not Appearing

1. Hard refresh Studio (Cmd+Shift+R / Ctrl+Shift+R)
2. Clear browser cache
3. Restart dev server

---

## 📚 Resources

- [Sanity Documentation](https://www.sanity.io/docs)
- [Next.js + Sanity Guide](https://www.sanity.io/guides/nextjs-app-router)
- [Image URL Builder](https://www.sanity.io/docs/image-url)
- [GROQ Query Language](https://www.sanity.io/docs/groq)

---

## 🎉 Next Steps

1. ✅ Set up Sanity project
2. ✅ Configure environment variables
3. ✅ Access Studio at `/studio`
4. 📝 Add your first product
5. 📸 Upload real product images
6. 🔄 Update frontend to use Sanity data
7. 🚀 Deploy to production

---

**Need Help?**

Check the Sanity documentation or reach out to the community on the Sanity Slack!

Happy content managing! 🎨
