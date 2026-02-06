# 🔄 Migration Guide: From Mock Data to Sanity CMS

This guide helps you migrate your existing mock data to Sanity CMS.

---

## 📋 Pre-Migration Checklist

- [ ] Sanity project created
- [ ] Environment variables configured in `.env.local`
- [ ] Studio accessible at `/studio`
- [ ] Test product created and published

---

## 🗂️ Current Data Structure

Your website currently uses mock data from:
- `lib/data.ts` - Products and categories
- Placeholder images from placehold.co

After migration, data will come from:
- Sanity CMS backend
- Real images hosted on Sanity CDN

---

## 📝 Step-by-Step Migration

### Step 1: Add Content to Sanity Studio

1. **Add Categories** (3 items)
   
   Go to `/studio` → Click "+ Create" → "Category"
   
   ```
   Category 1:
   - Name: Sarees
   - Slug: sarees
   - Description: Timeless elegance in every drape
   - Image: Upload a beautiful saree image
   - Order: 0
   
   Category 2:
   - Name: Chudidhars
   - Slug: chudidhars
   - Description: Contemporary grace, traditional roots
   - Image: Upload a chudidhar image
   - Order: 1
   
   Category 3:
   - Name: Designer Tops
   - Slug: designer-tops
   - Description: Modern artistry meets craftsmanship
   - Image: Upload a designer top image
   - Order: 2
   ```

2. **Add Products** (Start with 3-5 products)
   
   Go to `/studio` → Click "+ Create" → "Product"
   
   Example Product:
   ```
   Name: Handwoven Silk Saree - Rust
   Slug: handwoven-silk-saree-rust (auto-generated)
   Category: sarees
   Price: 18500
   Images: Upload 2-3 high-quality images
   Fabric: Pure Silk
   Colors: Rust, Gold
   Description: Exquisite handwoven silk saree featuring traditional motifs...
   Fit: Standard 6 yards with unstitched blouse piece
   Occasion: Wedding, Festival, Formal
   Care: Dry clean only
   ✓ Featured Product
   ✓ Bestseller
   ✓ In Stock
   ```

3. **Add Hero Section**
   
   Go to `/studio` → Click "+ Create" → "Hero Section"
   
   ```
   Title: TIMELESS ELEGANCE
   Subtitle: Indian Heritage Wear
   Image: Upload hero banner image (1920x1080)
   CTA Text: Shop Collection
   CTA Link: /collections
   ✓ Active
   ```

### Step 2: Update Frontend Components

#### Update Homepage (`app/page.tsx`)

Replace mock data imports:

```typescript
// OLD - Remove these lines
import { categories, getBestsellers } from '@/lib/data';
import { generatePlaceholderImage } from '@/lib/utils';

// NEW - Add these imports
import { getBestsellerProducts, getCategories, getActiveHero } from '@/sanity/queries';
import { getImageUrl } from '@/sanity/image';
```

Update the component to async and fetch data:

```typescript
export default async function HomePage() {
  // Fetch data from Sanity
  const bestsellers = await getBestsellerProducts();
  const categories = await getCategories();
  const hero = await getActiveHero();

  return (
    <div className="bg-cream-100">
      {/* Hero Section - Update image source */}
      <section className="relative h-screen grain-effect">
        <div className="absolute inset-0">
          <Image
            src={getImageUrl(hero.image, 1920, 1080)}
            alt={hero.title}
            fill
            priority
            className="object-cover animate-slow-zoom"
            sizes="100vw"
          />
          {/* Rest of hero section */}
        </div>
      </section>

      {/* Category Section - Already mapped correctly */}
      {/* Product images will use getImageUrl() */}
      
      {/* Rest of your page */}
    </div>
  );
}
```

#### Update Product Card (`components/ProductCard.tsx`)

Update image handling:

```typescript
import { getImageUrl } from '@/sanity/image';

// In the component, change image src:
<Image
  src={getImageUrl(product.images[imageIndex], 1200, 1600)}
  alt={product.name}
  fill
  className="object-cover transition-transform duration-700 group-hover:scale-105"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```

#### Update Collections Page (`app/collections/page.tsx`)

Replace data import:

```typescript
// OLD
import { products } from '@/lib/data';

// NEW
import { getProducts } from '@/sanity/queries';

export default async function CollectionsPage() {
  const products = await getProducts();
  
  // Convert to client component for filters
  // or implement server-side filtering
  
  return (
    // Your existing JSX
  );
}
```

#### Update Category Page (`app/collections/[category]/page.tsx`)

```typescript
import { getProductsByCategory } from '@/sanity/queries';
import { getImageUrl } from '@/sanity/image';

export default async function CategoryPage({ params }: { params: { category: string } }) {
  const categoryProducts = await getProductsByCategory(params.category);

  if (!categoryProducts || categoryProducts.length === 0) {
    notFound();
  }

  return (
    // Your existing JSX with updated image sources
  );
}
```

#### Update Product Detail Page (`app/products/[id]/page.tsx`)

Change from ID-based to slug-based routing:

```typescript
import { getProduct } from '@/sanity/queries';
import { getImageUrl } from '@/sanity/image';

export default async function ProductPage({ params }: { params: { id: string } }) {
  // Note: params.id is actually the slug from the URL
  const product = await getProduct(params.id);

  if (!product) {
    return (
      // Not found UI
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Update all image sources */}
      <Image
        src={getImageUrl(product.images[selectedImage], 1200, 1600)}
        alt={product.name}
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 50vw"
        priority
      />
      
      {/* Rest of product page */}
    </div>
  );
}
```

### Step 3: Update Product Links

Change product links to use slugs instead of IDs:

```typescript
// OLD
<Link href={`/products/${product.id}`}>

// NEW
<Link href={`/products/${product.slug}`}>
```

### Step 4: Update TypeScript Interfaces

Update your `types/index.ts` to match Sanity schema:

```typescript
export interface Product {
  _id: string;
  name: string;
  slug: string;
  category: 'sarees' | 'chudidhars' | 'designer-tops';
  price: number;
  images: any[]; // Sanity image objects
  fabric: string;
  colors: string[];
  description: string;
  fit?: string;
  occasion?: string[];
  care?: string;
  featured?: boolean;
  bestseller?: boolean;
  new?: boolean;
  inStock: boolean;
  sizes?: string[];
}

export interface Category {
  _id: string;
  name: string;
  slug: string;
  image: any; // Sanity image object
  description: string;
  order: number;
}
```

---

## 🧪 Testing the Migration

### Test Checklist

- [ ] Homepage loads with Sanity data
- [ ] Categories display correctly
- [ ] Products show proper images
- [ ] Product detail pages work
- [ ] Category filtering works
- [ ] Search functionality (if implemented)
- [ ] No console errors
- [ ] Images load properly
- [ ] Mobile responsive

### Testing Steps

1. **Homepage**
   ```
   Visit: http://localhost:3001
   Check: Hero image, categories, bestsellers
   ```

2. **Collections**
   ```
   Visit: http://localhost:3001/collections
   Check: All products display
   ```

3. **Category Pages**
   ```
   Visit: http://localhost:3001/collections/sarees
   Check: Only sarees show
   ```

4. **Product Detail**
   ```
   Visit: http://localhost:3001/products/[product-slug]
   Check: Images, details, related products
   ```

---

## 🔧 Handling Client-Side Features

Some features need client-side state (filters, cart, etc.). Here's how to handle them:

### Option 1: Hybrid Approach (Recommended)

```typescript
// Server Component (fetches data)
import { getProducts } from '@/sanity/queries';

export default async function CollectionsPage() {
  const products = await getProducts();
  
  return <ProductsClient products={products} />;
}

// Client Component (handles interactions)
'use client';

export function ProductsClient({ products }) {
  const [filteredProducts, setFilteredProducts] = useState(products);
  // Your filter logic
  
  return (
    // UI with filters
  );
}
```

### Option 2: API Routes

Create API routes for dynamic data:

```typescript
// app/api/products/route.ts
import { getProducts } from '@/sanity/queries';
import { NextResponse } from 'next/server';

export async function GET() {
  const products = await getProducts();
  return NextResponse.json(products);
}
```

---

## 📊 Performance Optimization

### Enable ISR (Incremental Static Regeneration)

```typescript
export const revalidate = 60; // Revalidate every 60 seconds

export default async function Page() {
  const products = await getProducts();
  // ...
}
```

### Add Loading States

```typescript
// app/collections/loading.tsx
export default function Loading() {
  return <ProductsSkeleton />;
}
```

---

## 🚨 Common Issues & Solutions

### Issue: Images Not Loading

**Solution:** Check Sanity image domain in `next.config.ts`:
```typescript
{
  hostname: 'cdn.sanity.io',
}
```

### Issue: Data Not Updating

**Solution:**
1. Check if content is published in Studio
2. Clear Next.js cache: `rm -rf .next`
3. Restart dev server

### Issue: TypeScript Errors

**Solution:** Update imports and types to match Sanity schema

---

## 🎯 Post-Migration

After successful migration:

1. ✅ Remove mock data file (`lib/data.ts`)
2. ✅ Update README with Sanity instructions
3. ✅ Add more products in Studio
4. ✅ Test all pages thoroughly
5. ✅ Update deployment scripts
6. ✅ Set up webhooks for auto-revalidation

---

## 📚 Additional Resources

- [Sanity + Next.js Guide](https://www.sanity.io/guides/nextjs-app-router)
- [GROQ Cheat Sheet](https://www.sanity.io/docs/query-cheat-sheet)
- [Image URL Builder](https://www.sanity.io/docs/image-url)

---

**Need Help?** Refer to `SANITY_SETUP.md` for detailed CMS usage instructions.

Happy migrating! 🚀
