'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/data';
import { FadeIn } from '@/components/AnimationWrappers';

export default function CollectionsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedFabric, setSelectedFabric] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<string>('all');
  const [isFilterOpen, setIsFilterOpen] = useState(true);

  // Get unique fabrics from products
  const fabrics = ['all', ...new Set(products.map((p) => p.fabric))];

  // Filter products
  const filteredProducts = products.filter((product) => {
    if (selectedCategory !== 'all' && product.category !== selectedCategory)
      return false;
    if (selectedFabric !== 'all' && product.fabric !== selectedFabric)
      return false;
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number);
      if (max && (product.price < min || product.price > max)) return false;
      if (!max && product.price < min) return false;
    }
    return true;
  });

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <FadeIn className="mb-12 text-center">
          <h1 className="text-5xl md:text-6xl font-serif tracking-wide text-olive-900 mb-4">
            Our Collections
          </h1>
          <p className="text-olive-700 max-w-2xl mx-auto leading-relaxed">
            Discover timeless pieces crafted with love and tradition
          </p>
        </FadeIn>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Filters Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="sticky top-24">
              {/* Mobile Filter Toggle */}
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="lg:hidden w-full flex items-center justify-between mb-4 px-4 py-3 bg-sand-100 text-olive-900"
              >
                <span className="text-sm tracking-wide uppercase">Filters</span>
                <ChevronDown
                  className={`transform transition-transform ${
                    isFilterOpen ? 'rotate-180' : ''
                  }`}
                  size={20}
                />
              </button>

              <div
                className={`space-y-8 ${
                  isFilterOpen ? 'block' : 'hidden lg:block'
                }`}
              >
                {/* Category Filter */}
                <div>
                  <h3 className="text-sm font-sans tracking-wide uppercase text-olive-900 mb-4">
                    Category
                  </h3>
                  <div className="space-y-2">
                    {[
                      { value: 'all', label: 'All' },
                      { value: 'sarees', label: 'Sarees' },
                      { value: 'chudidhars', label: 'Chudidhars' },
                      { value: 'designer-tops', label: 'Designer Tops' },
                    ].map((cat) => (
                      <label
                        key={cat.value}
                        className="flex items-center space-x-3 cursor-pointer group"
                      >
                        <input
                          type="radio"
                          name="category"
                          value={cat.value}
                          checked={selectedCategory === cat.value}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                          className="w-4 h-4 accent-rust-600"
                        />
                        <span className="text-sm text-olive-700 group-hover:text-rust-600 transition-colors">
                          {cat.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Fabric Filter */}
                <div>
                  <h3 className="text-sm font-sans tracking-wide uppercase text-olive-900 mb-4">
                    Fabric
                  </h3>
                  <div className="space-y-2">
                    {fabrics.map((fabric) => (
                      <label
                        key={fabric}
                        className="flex items-center space-x-3 cursor-pointer group"
                      >
                        <input
                          type="radio"
                          name="fabric"
                          value={fabric}
                          checked={selectedFabric === fabric}
                          onChange={(e) => setSelectedFabric(e.target.value)}
                          className="w-4 h-4 accent-rust-600"
                        />
                        <span className="text-sm text-olive-700 group-hover:text-rust-600 transition-colors">
                          {fabric === 'all' ? 'All' : fabric}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Filter */}
                <div>
                  <h3 className="text-sm font-sans tracking-wide uppercase text-olive-900 mb-4">
                    Price Range
                  </h3>
                  <div className="space-y-2">
                    {[
                      { value: 'all', label: 'All' },
                      { value: '0-5000', label: 'Under ₹5,000' },
                      { value: '5000-10000', label: '₹5,000 - ₹10,000' },
                      { value: '10000-20000', label: '₹10,000 - ₹20,000' },
                      { value: '20000', label: 'Above ₹20,000' },
                    ].map((price) => (
                      <label
                        key={price.value}
                        className="flex items-center space-x-3 cursor-pointer group"
                      >
                        <input
                          type="radio"
                          name="price"
                          value={price.value}
                          checked={priceRange === price.value}
                          onChange={(e) => setPriceRange(e.target.value)}
                          className="w-4 h-4 accent-rust-600"
                        />
                        <span className="text-sm text-olive-700 group-hover:text-rust-600 transition-colors">
                          {price.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Clear Filters */}
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedFabric('all');
                    setPriceRange('all');
                  }}
                  className="w-full py-2 text-sm text-rust-600 hover:text-rust-700 transition-colors tracking-wide uppercase"
                >
                  Clear All Filters
                </button>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-8">
              <p className="text-sm text-olive-700">
                {filteredProducts.length} product
                {filteredProducts.length !== 1 ? 's' : ''}
              </p>
              <select className="text-sm px-4 py-2 border border-sand-300 bg-cream-50 text-olive-800 focus:outline-none focus:border-rust-500">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
              </select>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-lg text-olive-600">
                  No products found matching your filters.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedFabric('all');
                    setPriceRange('all');
                  }}
                  className="mt-6 px-8 py-3 bg-olive-900 text-cream-50 text-sm tracking-wide uppercase hover:bg-rust-600 transition-colors duration-300"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
