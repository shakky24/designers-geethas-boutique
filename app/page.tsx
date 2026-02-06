'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import CategoryCard from '@/components/CategoryCard';
import ProductCard from '@/components/ProductCard';
import { FadeIn } from '@/components/AnimationWrappers';
import { categories, getBestsellers } from '@/lib/data';
import { generatePlaceholderImage } from '@/lib/utils';

export default function HomePage() {
  const bestsellers = getBestsellers();
  const heroRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  // Transform scroll progress to padding value (24px to 200px) - only for desktop
  const sidePaddingDesktop = useTransform(scrollYProgress, [0, 1], [32, 200]);

  return (
    <div className="bg-cream-100">
      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        className="relative h-[70vh] md:h-[80vh] mt-20 md:mt-24 px-6"
        style={{ 
          paddingLeft: typeof window !== 'undefined' && window.innerWidth >= 768 ? sidePaddingDesktop : undefined,
          paddingRight: typeof window !== 'undefined' && window.innerWidth >= 768 ? sidePaddingDesktop : undefined
        }}
      >
        <div className="relative h-full overflow-hidden grain-effect">
          <Image
            src="/banner-1.jpeg"
            alt="Exquisite Kanchipuram Saree - Designers Geetha's Boutique"
            fill
            priority
            className="object-contain md:object-cover"
            sizes="100vw"
            quality={100}
            style={{ objectPosition: 'center' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-olive-900/30 via-olive-900/10 to-cream-100/60" />
       
          <div className="absolute inset-0 flex items-center justify-center text-center px-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif tracking-wide text-cream-50 mb-6 leading-tight drop-shadow-lg">
                DESIGNERS GEETHA'S BOUTIQUE
              </h1>
              <p className="text-lg md:text-xl text-cream-50 mb-8 tracking-wide uppercase font-sans drop-shadow-md">
                Handloom Sarees & Custom Tailoring
              </p>
              <Link href="/collections">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-4 bg-cream-50 text-olive-900 text-sm tracking-luxury uppercase hover:bg-rust-600 hover:text-cream-50 transition-all duration-500 shadow-xl"
                >
                  Shop Collection
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-6 h-10 border-2 border-cream-50/50 rounded-full flex justify-center pt-2"
            >
              <div className="w-1 h-3 bg-cream-50/50 rounded-full" />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Category Highlight Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif tracking-wide text-olive-900 mb-4">
              Explore Our Collections
            </h2>
            <p className="text-olive-700 max-w-2xl mx-auto leading-relaxed">
              Each piece tells a story of heritage, craftsmanship, and timeless beauty
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <CategoryCard key={category.id} category={category} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Split Section - The Silk Edit */}
      <section className="relative min-h-screen md:h-screen grain-effect bg-sand-50">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          {/* Left Side - Saree Image */}
          <div className="relative h-[70vh] md:h-full overflow-hidden">
            <Image
              src="/main-page-saree.png"
              alt="Exquisite silk saree from Designers Geetha's Boutique"
              fill
              className="object-cover object-center scale-110"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              style={{ objectPosition: 'center 40%' }}
            />
          </div>

          {/* Right Side - Text Content */}
          <div className="relative h-[30vh] md:h-full flex items-center justify-center p-8 md:p-16">
            <FadeIn delay={0.3} className="max-w-xl text-center md:text-left">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-wide text-olive-900 mb-6 leading-tight">
                THE SILK EDIT
              </h2>
              <p className="text-base md:text-lg text-olive-600 tracking-wide uppercase mb-4">
                Kanchipuram Handloom
              </p>
              <p className="text-lg md:text-xl text-olive-700 leading-relaxed italic">
                "Where timeless tradition meets contemporary elegance in every weave"
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Fabric / Craft Focus Section */}
      <section className="py-24 px-6 bg-sand-100">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif tracking-wide text-olive-900 mb-4">
              Our Craftsmanship
            </h2>
            <p className="text-olive-700 max-w-2xl mx-auto leading-relaxed">
              Time-honored techniques passed down through generations
            </p>
          </FadeIn>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Block Print', color: 'c96949' },
              { name: 'Hand Embroidery', color: '97a87b' },
              { name: 'Silk Weaves', color: 'c2b5a3' },
              { name: 'Natural Dyes', color: '7a8c5d' },
            ].map((craft, index) => (
              <FadeIn key={craft.name} delay={index * 0.1}>
                <div className="group relative aspect-square overflow-hidden">
                  <Image
                    src={generatePlaceholderImage(600, 600, craft.name, craft.color)}
                    alt={craft.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-olive-900/40 group-hover:bg-olive-900/60 transition-colors duration-500 flex items-center justify-center">
                    <h3 className="text-cream-50 text-lg md:text-xl font-serif tracking-wide text-center px-4">
                      {craft.name}
                    </h3>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers Carousel */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="mb-12">
            <h2 className="text-4xl md:text-5xl font-serif tracking-wide text-olive-900 mb-4">
              Bestsellers
            </h2>
            <p className="text-olive-700 leading-relaxed">
              Our most loved pieces, chosen by you
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {bestsellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/collections">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-10 py-3 border-2 border-olive-900 text-olive-900 text-sm tracking-wide uppercase hover:bg-olive-900 hover:text-cream-50 transition-all duration-300"
              >
                View All Products
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-24 px-6 bg-sand-50 grain-effect">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-serif tracking-wide text-olive-900 mb-8">
              Our Story
            </h2>
            <p className="text-lg text-olive-800 leading-relaxed mb-6">
              At Divya, we celebrate the rich heritage of Indian textiles through
              contemporary design. Each piece in our collection is thoughtfully
              crafted by skilled artisans, honoring centuries-old traditions while
              embracing modern sensibilities.
            </p>
            <p className="text-lg text-olive-800 leading-relaxed mb-8">
              We believe in slow fashion—creating timeless pieces that transcend
              trends and become cherished parts of your wardrobe. Our commitment to
              sustainable practices and fair trade ensures that every garment carries
              not just beauty, but also dignity and respect for the hands that made it.
            </p>
            <Link href="/about">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-10 py-3 bg-rust-600 text-cream-50 text-sm tracking-wide uppercase hover:bg-rust-700 transition-colors duration-300"
              >
                Learn More
              </motion.button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
