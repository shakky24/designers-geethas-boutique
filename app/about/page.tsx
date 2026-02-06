'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FadeIn } from '@/components/AnimationWrappers';
import { generatePlaceholderImage } from '@/lib/utils';

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero */}
      <section className="relative h-[60vh] grain-effect">
        <Image
          src={generatePlaceholderImage(1920, 1080, 'Our Heritage', '8a7967')}
          alt="About Divya"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-olive-900/40" />
        <div className="relative h-full flex items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-serif tracking-luxury text-cream-50 mb-4">
              Our Story
            </h1>
            <p className="text-xl text-cream-100 tracking-wide uppercase">
              Where Heritage Meets Contemporary Design
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-serif tracking-wide text-olive-900 mb-8 text-center">
              Celebrating Indian Craftsmanship
            </h2>
            <div className="space-y-6 text-lg text-olive-800 leading-relaxed">
              <p>
                Designers Geetha's Boutique was born from a deep appreciation for the artistry embedded in
                Indian textiles. Our journey began with a simple vision: to preserve
                and celebrate the centuries-old traditions of Indian craftsmanship
                while creating pieces that resonate with contemporary sensibilities.
              </p>
              <p>
                Every garment in our collection tells a story—of skilled artisans
                who pour their expertise into intricate embroidery, of weavers who
                create magic on their looms, and of master jewelers who craft pieces 
                that become family heirlooms. From custom tailoring to exquisite jewellery,
                we offer a complete experience for the discerning customer.
              </p>
              <p>
                We believe in quality over quantity, where timeless design transcends 
                fleeting trends. Each piece is thoughtfully crafted to become a cherished 
                part of your wardrobe, designed to be worn, loved, and passed down through generations.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 px-6 bg-sand-100">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif tracking-wide text-olive-900 mb-4">
              Our Values
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: 'Artisan First',
                description:
                  'We work directly with skilled craftspeople, ensuring fair wages and preserving traditional techniques for future generations.',
              },
              {
                title: 'Sustainable Practice',
                description:
                  'From natural dyes to organic fabrics, we prioritize eco-friendly processes that honor both craft and environment.',
              },
              {
                title: 'Timeless Design',
                description:
                  'Creating pieces that transcend trends, designed to be treasured for years rather than discarded with seasons.',
              },
            ].map((value, index) => (
              <FadeIn key={value.title} delay={index * 0.2}>
                <div className="text-center">
                  <h3 className="text-2xl font-serif tracking-wide text-olive-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-olive-700 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="relative aspect-[4/5]">
                <Image
                  src={generatePlaceholderImage(1200, 1500, 'Artisan', 'c2b5a3')}
                  alt="Our craftspeople"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-serif tracking-wide text-olive-900">
                  The Hands Behind Our Heritage
                </h2>
                <p className="text-lg text-olive-800 leading-relaxed">
                  Our artisans are the heart of Designers Geetha's Boutique. From expert tailors
                  to skilled jewelers, we collaborate with master craftspeople who have 
                  inherited their skills through generations.
                </p>
                <p className="text-lg text-olive-800 leading-relaxed">
                  Each saree, each piece of jewellery, each custom garment carries the mark
                  of their dedication and expertise. We ensure that their invaluable
                  contribution is recognized through fair compensation and long-term
                  partnerships.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-rust-600 text-center">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-serif tracking-wide text-cream-50 mb-6">
              Join Our Journey
            </h2>
            <p className="text-lg text-cream-100 mb-8 leading-relaxed">
              When you choose Designers Geetha's Boutique, you become part of a movement that values
              craftsmanship, quality, and timeless beauty.
            </p>
            <motion.a
              href="/collections"
              whileHover={{ scale: 1.05 }}
              className="inline-block px-12 py-4 bg-cream-50 text-rust-600 text-sm tracking-wide uppercase hover:bg-olive-900 hover:text-cream-50 transition-all duration-300"
            >
              Explore Collection
            </motion.a>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
