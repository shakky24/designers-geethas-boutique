'use client';

import { notFound } from 'next/navigation';
import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/data';
import { FadeIn } from '@/components/AnimationWrappers';
import { getCategoryName } from '@/lib/utils';

export default function CategoryPage({ params }: { params: { category: string } }) {
  const categoryProducts = products.filter((p) => p.category === params.category);

  if (categoryProducts.length === 0) {
    notFound();
  }

  const categoryName = getCategoryName(params.category);

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <FadeIn className="mb-12 text-center">
          <h1 className="text-5xl md:text-6xl font-serif tracking-wide text-olive-900 mb-4">
            {categoryName}
          </h1>
          <p className="text-olive-700 max-w-2xl mx-auto leading-relaxed">
            {params.category === 'sarees' &&
              'Timeless elegance in every drape. Each saree tells a story of heritage and craftsmanship.'}
            {params.category === 'chudidhars' &&
              'Contemporary grace meets traditional roots. Modern silhouettes with artisanal details.'}
            {params.category === 'designer-tops' &&
              'Modern artistry meets craftsmanship. Versatile pieces for contemporary styling.'}
          </p>
        </FadeIn>

        {/* Products Grid */}
        <div className="mb-8">
          <p className="text-sm text-olive-700">
            {categoryProducts.length} product{categoryProducts.length !== 1 ? 's' : ''}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
