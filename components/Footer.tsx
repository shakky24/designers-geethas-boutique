import Link from 'next/link';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-sand-100 border-t border-sand-200 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-serif tracking-luxury text-olive-900 mb-4">
              DESIGNERS GEETHA'S BOUTIQUE
            </h2>
            <p className="text-sm text-olive-700 leading-relaxed">
              Celebrating the artistry of Indian craftsmanship with contemporary elegance.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-sm font-sans tracking-wide text-olive-900 mb-4 uppercase">
              Shop
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/collections/new"
                  className="text-sm text-olive-700 hover:text-rust-600 transition-colors duration-300"
                >
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link
                  href="/collections/sarees"
                  className="text-sm text-olive-700 hover:text-rust-600 transition-colors duration-300"
                >
                  Sarees
                </Link>
              </li>
              <li>
                <Link
                  href="/collections/tailoring"
                  className="text-sm text-olive-700 hover:text-rust-600 transition-colors duration-300"
                >
                  Tailoring
                </Link>
              </li>
              <li>
                <Link
                  href="/collections/jewellery"
                  className="text-sm text-olive-700 hover:text-rust-600 transition-colors duration-300"
                >
                  Jewellery
                </Link>
              </li>
              <li>
                <Link
                  href="/collections/others"
                  className="text-sm text-olive-700 hover:text-rust-600 transition-colors duration-300"
                >
                  Others
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="text-sm font-sans tracking-wide text-olive-900 mb-4 uppercase">
              Customer Care
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-olive-700 hover:text-rust-600 transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-olive-700 hover:text-rust-600 transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping"
                  className="text-sm text-olive-700 hover:text-rust-600 transition-colors duration-300"
                >
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link
                  href="/care"
                  className="text-sm text-olive-700 hover:text-rust-600 transition-colors duration-300"
                >
                  Care Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-sans tracking-wide text-olive-900 mb-4 uppercase">
              Stay Connected
            </h3>
            <p className="text-sm text-olive-700 mb-4">
              Subscribe to receive updates on new collections and special offers.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 text-sm bg-cream-50 border border-sand-300 focus:border-rust-500 focus:outline-none focus:ring-1 focus:ring-rust-500 transition-colors"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 text-sm bg-olive-900 text-cream-50 hover:bg-rust-600 transition-colors duration-300 tracking-wide uppercase"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-sand-200 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-xs text-olive-600">
          © {new Date().getFullYear()} Designers Geetha's Boutique. All rights reserved.
        </p>

          {/* Social Media */}
          <div className="flex items-center space-x-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-olive-700 hover:text-rust-600 transition-colors duration-300"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-olive-700 hover:text-rust-600 transition-colors duration-300"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-olive-700 hover:text-rust-600 transition-colors duration-300"
            >
              <Twitter size={18} />
            </a>
            <a
              href="mailto:hello@divya.com"
              aria-label="Email"
              className="text-olive-700 hover:text-rust-600 transition-colors duration-300"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
