'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Heart, ChevronDown, Share2, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { products } from '@/lib/data';
import ProductCard from '@/components/ProductCard';
import { FadeIn } from '@/components/AnimationWrappers';
import { getProductInquiryMessage, openWhatsApp } from '@/lib/whatsapp';

export default function ProductPage() {
  const params = useParams();
  const product = products.find((p) => p.id === params.id);

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('M');

  const handleWhatsAppInquiry = () => {
    const productUrl = typeof window !== 'undefined' ? window.location.href : '';
    const message = getProductInquiryMessage(product.name, product.price, productUrl);
    openWhatsApp(message);
  };

  if (!product) {
    return (
      <div className="min-h-screen pt-24 px-6 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-serif text-olive-900 mb-4">
            Product Not Found
          </h1>
          <Link
            href="/collections"
            className="text-rust-600 hover:text-rust-700 underline"
          >
            Return to Collections
          </Link>
        </div>
      </div>
    );
  }

  // Related products from same category
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center space-x-2 text-sm text-olive-600">
          <Link href="/" className="hover:text-rust-600 transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link
            href="/collections"
            className="hover:text-rust-600 transition-colors"
          >
            Collections
          </Link>
          <span>/</span>
          <span className="text-olive-900">{product.name}</span>
        </div>
      </div>

      {/* Product Section */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <FadeIn>
              <div className="relative aspect-[3/4] bg-sand-100 overflow-hidden">
                <Image
                  src={product.images[selectedImage]}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </FadeIn>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square bg-sand-100 overflow-hidden border-2 transition-colors ${
                    selectedImage === index
                      ? 'border-rust-600'
                      : 'border-transparent hover:border-sand-300'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 25vw, 12.5vw"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <FadeIn delay={0.2}>
              <div className="sticky top-24">
                {/* Badges */}
                <div className="flex gap-2 mb-4">
                  {product.new && (
                    <span className="bg-rust-600 text-cream-50 text-xs px-3 py-1 tracking-wide uppercase">
                      New
                    </span>
                  )}
                  {product.bestseller && (
                    <span className="bg-olive-800 text-cream-50 text-xs px-3 py-1 tracking-wide uppercase">
                      Bestseller
                    </span>
                  )}
                </div>

                <h1 className="text-3xl md:text-4xl font-serif tracking-wide text-olive-900 mb-2">
                  {product.name}
                </h1>

                <p className="text-sm text-olive-600 uppercase tracking-wide mb-6">
                  {product.fabric}
                </p>

                <p className="text-3xl font-serif text-olive-900 mb-8">
                  ₹{product.price.toLocaleString('en-IN')}
                </p>

                {/* Size Selection (for tops and chudidhars) */}
                {(product.category === 'designer-tops' ||
                  product.category === 'chudidhars') && (
                  <div className="mb-8">
                    <label className="block text-sm text-olive-900 mb-3 tracking-wide uppercase">
                      Select Size
                    </label>
                    <div className="flex gap-3">
                      {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`px-4 py-2 text-sm border transition-colors ${
                            selectedSize === size
                              ? 'border-rust-600 bg-rust-600 text-cream-50'
                              : 'border-sand-300 text-olive-800 hover:border-rust-600'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* WhatsApp Inquiry Buttons */}
                <div className="space-y-3 mb-8">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleWhatsAppInquiry}
                    className="w-full py-4 bg-[#25D366] text-white text-sm tracking-wide uppercase hover:bg-[#20BA5A] transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={20} />
                    Inquire on WhatsApp
                  </motion.button>
                  <button className="w-full py-4 border-2 border-olive-900 text-olive-900 text-sm tracking-wide uppercase hover:bg-olive-900 hover:text-cream-50 transition-all duration-300 flex items-center justify-center gap-2">
                    <Heart size={18} />
                    Add to Wishlist
                  </button>
                </div>

                {/* Share */}
                <button className="flex items-center gap-2 text-sm text-olive-700 hover:text-rust-600 transition-colors mb-8">
                  <Share2 size={16} />
                  Share this product
                </button>

                {/* Accordion Details */}
                <div className="space-y-4 border-t border-sand-200 pt-8">
                  <AccordionItem title="Description" defaultOpen>
                    <p className="text-olive-700 leading-relaxed">
                      {product.description}
                    </p>
                  </AccordionItem>

                  <AccordionItem title="Fabric & Fit">
                    <div className="space-y-2 text-sm text-olive-700">
                      <p>
                        <strong>Fabric:</strong> {product.fabric}
                      </p>
                      {product.fit && (
                        <p>
                          <strong>Fit:</strong> {product.fit}
                        </p>
                      )}
                      {product.colors && (
                        <p>
                          <strong>Colors:</strong> {product.colors.join(', ')}
                        </p>
                      )}
                    </div>
                  </AccordionItem>

                  <AccordionItem title="Care Instructions">
                    <p className="text-sm text-olive-700">
                      {product.care ||
                        'Handle with care. Dry clean recommended for best results.'}
                    </p>
                  </AccordionItem>

                  <AccordionItem title="Shipping & Returns">
                    <div className="space-y-2 text-sm text-olive-700">
                      <p>Free shipping on orders above ₹2,000</p>
                      <p>Easy returns within 7 days</p>
                      <p>Exchanges available based on availability</p>
                    </div>
                  </AccordionItem>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-24">
            <h2 className="text-3xl md:text-4xl font-serif tracking-wide text-olive-900 mb-8">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

// Accordion Component
function AccordionItem({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-sand-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 flex items-center justify-between text-left"
      >
        <span className="text-sm tracking-wide uppercase text-olive-900">
          {title}
        </span>
        <ChevronDown
          size={20}
          className={`transform transition-transform text-olive-700 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && <div className="pb-4">{children}</div>}
    </div>
  );
}
