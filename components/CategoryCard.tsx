'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Category } from '@/types';

interface CategoryCardProps {
  category: Category;
  index?: number;
}

const CategoryCard = ({ category, index = 0 }: CategoryCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="group relative overflow-hidden"
    >
      <Link href={`/collections/${category.slug}`}>
        <div className="relative aspect-[3/4] overflow-hidden bg-sand-100">
          <Image
            src={category.image}
            alt={category.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-olive-900/70 via-olive-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-end p-8">
            <motion.h3
              className="text-3xl md:text-4xl font-serif tracking-wide text-cream-50 mb-3"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              {category.name}
            </motion.h3>
            <p className="text-sm text-cream-100 mb-4 opacity-90">
              {category.description}
            </p>
            <span className="text-xs text-cream-50 tracking-luxury uppercase inline-flex items-center group-hover:translate-x-2 transition-transform duration-300">
              SHOP NOW
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CategoryCard;
