'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ShoppingBag, Search, Heart, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Set scrolled state for background
      setIsScrolled(currentScrollY > 50);
      
      // Hide/show header based on scroll direction
      if (currentScrollY < 50) {
        // Always show at top
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down - hide header
        setIsVisible(false);
      } else {
        // Scrolling up - show header
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: 'NEW IN', href: '/collections/new' },
    { name: 'SAREES', href: '/collections/sarees' },
    { name: 'TAILORING', href: '/collections/tailoring' },
    { name: 'JEWELLERY', href: '/collections/jewellery' },
    { name: 'OTHERS', href: '/collections/others' },
    { name: 'ABOUT', href: '/about' },
    { name: 'CONTACT', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-cream-50/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      } ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Brand Name */}
          <Link href="/" className="z-50 flex items-center gap-2 md:gap-3">
            <div className="relative w-12 h-12 md:w-14 md:h-14 p-2 flex-shrink-0">
              <Image
                src="/logo.webp"
                alt="Designers Geetha's Boutique Logo"
                fill
                className="object-contain p-1"
                priority
              />
            </div>
            <div>
              <h1 className="text-sm sm:text-base md:text-xl font-serif font-semibold text-olive-900 tracking-tight leading-tight">
                Designers Geetha's Boutique
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs tracking-wide text-olive-800 hover:text-rust-600 transition-colors duration-300 font-sans"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-6">
            <button
              aria-label="Search"
              className="text-olive-800 hover:text-rust-600 transition-colors duration-300"
            >
              <Search size={20} />
            </button>
            <button
              aria-label="Wishlist"
              className="text-olive-800 hover:text-rust-600 transition-colors duration-300"
            >
              <Heart size={20} />
            </button>
            <button
              aria-label="Shopping bag"
              className="text-olive-800 hover:text-rust-600 transition-colors duration-300"
            >
              <ShoppingBag size={20} />
            </button>

            {/* Mobile menu toggle */}
            <button
              aria-label="Menu"
              className="lg:hidden text-olive-800 hover:text-rust-600 transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden pt-6 pb-4"
            >
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-sm tracking-wide text-olive-800 hover:text-rust-600 transition-colors duration-300 font-sans py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
