'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Heart, ShoppingBag } from 'lucide-react';
import { Product } from '@/types';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group relative"
      onMouseEnter={() => {
        setIsHovered(true);
        if (product.images.length > 1) setImageIndex(1);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setImageIndex(0);
      }}
    >
      <Link href={`/products/${product.id}`}>
        <div className="relative aspect-[3/4] overflow-hidden bg-sand-100 mb-4">
          <Image
            src={product.images[imageIndex]}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          
          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
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

          {/* Quick Actions */}
          <div
            className={`absolute top-4 right-4 flex flex-col gap-2 transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <button
              aria-label="Add to wishlist"
              className="bg-cream-50 p-2 hover:bg-rust-600 hover:text-cream-50 transition-colors duration-300"
            >
              <Heart size={18} />
            </button>
            <button
              aria-label="Quick add to cart"
              className="bg-cream-50 p-2 hover:bg-olive-900 hover:text-cream-50 transition-colors duration-300"
            >
              <ShoppingBag size={18} />
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-sans text-olive-900 group-hover:text-rust-600 transition-colors duration-300">
            {product.name}
          </h3>
          <p className="text-xs text-olive-600 uppercase tracking-wide">
            {product.fabric}
          </p>
          <p className="text-base font-serif text-olive-900">
            ₹{product.price.toLocaleString('en-IN')}
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
