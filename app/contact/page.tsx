'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Facebook, MessageCircle } from 'lucide-react';
import { FadeIn } from '@/components/AnimationWrappers';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Header */}
      <section className="py-16 px-6 text-center">
        <FadeIn>
          <h1 className="text-5xl md:text-6xl font-serif tracking-wide text-olive-900 mb-4">
            Get In Touch
          </h1>
          <p className="text-lg text-olive-700 max-w-2xl mx-auto leading-relaxed">
            We would love to hear from you. Whether you have a question about our
            products, need styling advice, or just want to say hello.
          </p>
        </FadeIn>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <FadeIn>
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-serif tracking-wide text-olive-900 mb-8">
                  Contact Information
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="mt-1">
                      <Mail className="text-rust-600" size={24} />
                    </div>
                    <div>
                      <h3 className="text-sm font-sans tracking-wide uppercase text-olive-900 mb-1">
                        Email
                      </h3>
                      <a
                        href="mailto:hello@divya.com"
                        className="text-olive-700 hover:text-rust-600 transition-colors"
                      >
                        hello@divya.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="mt-1">
                      <Phone className="text-rust-600" size={24} />
                    </div>
                    <div>
                      <h3 className="text-sm font-sans tracking-wide uppercase text-olive-900 mb-1">
                        Phone
                      </h3>
                      <a
                        href="tel:+911234567890"
                        className="text-olive-700 hover:text-rust-600 transition-colors"
                      >
                        +91 12345 67890
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="mt-1">
                      <MapPin className="text-rust-600" size={24} />
                    </div>
                    <div>
                      <h3 className="text-sm font-sans tracking-wide uppercase text-olive-900 mb-1">
                        Address
                      </h3>
                      <p className="text-olive-700">
                        123 Heritage Lane
                        <br />
                        Mumbai, Maharashtra 400001
                        <br />
                        India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-sans tracking-wide uppercase text-olive-900 mb-4">
                  Quick Contact
                </h3>
                <WhatsAppButton 
                  message="Hello! I'd like to inquire about your products."
                  className="mb-4"
                >
                  Chat on WhatsApp
                </WhatsAppButton>
                <p className="text-xs text-olive-600">
                  Get instant responses to your queries
                </p>
              </div>

              <div>
                <h3 className="text-sm font-sans tracking-wide uppercase text-olive-900 mb-4">
                  Follow Us
                </h3>
                <div className="flex space-x-6">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-olive-700 hover:text-rust-600 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={24} />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-olive-700 hover:text-rust-600 transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook size={24} />
                  </a>
                </div>
              </div>

              <div className="pt-8 border-t border-sand-200">
                <h3 className="text-xl font-serif tracking-wide text-olive-900 mb-4">
                  Store Hours
                </h3>
                <div className="space-y-2 text-olive-700">
                  <div className="flex justify-between">
                    <span>Monday - Saturday</span>
                    <span>10:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>11:00 AM - 6:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Contact Form */}
          <FadeIn delay={0.2}>
            <div className="bg-sand-50 p-8 md:p-12">
              <h2 className="text-3xl font-serif tracking-wide text-olive-900 mb-8">
                Send Us A Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm tracking-wide uppercase text-olive-900 mb-2"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-cream-50 border border-sand-300 focus:border-rust-500 focus:outline-none focus:ring-1 focus:ring-rust-500 transition-colors text-olive-900"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm tracking-wide uppercase text-olive-900 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-cream-50 border border-sand-300 focus:border-rust-500 focus:outline-none focus:ring-1 focus:ring-rust-500 transition-colors text-olive-900"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm tracking-wide uppercase text-olive-900 mb-2"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-cream-50 border border-sand-300 focus:border-rust-500 focus:outline-none focus:ring-1 focus:ring-rust-500 transition-colors text-olive-900"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm tracking-wide uppercase text-olive-900 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-cream-50 border border-sand-300 focus:border-rust-500 focus:outline-none focus:ring-1 focus:ring-rust-500 transition-colors text-olive-900 resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-olive-900 text-cream-50 text-sm tracking-wide uppercase hover:bg-rust-600 transition-colors duration-300"
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="mt-24 py-16 px-6 bg-sand-100">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-serif tracking-wide text-olive-900 mb-12 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-8">
              {[
                {
                  q: 'Do you ship internationally?',
                  a: 'Yes, we ship worldwide. International shipping charges vary by location and will be calculated at checkout.',
                },
                {
                  q: 'What is your return policy?',
                  a: 'We offer easy returns within 7 days of delivery. Items must be unworn with all tags attached.',
                },
                {
                  q: 'How do I care for my garments?',
                  a: 'Each product comes with specific care instructions. Generally, we recommend dry cleaning for silk and embroidered pieces.',
                },
                {
                  q: 'Can I customize a design?',
                  a: 'Yes, we offer customization services for select pieces. Please contact us for more information.',
                },
              ].map((faq, index) => (
                <div key={index} className="pb-8 border-b border-sand-200 last:border-0">
                  <h3 className="text-lg font-serif text-olive-900 mb-3">
                    {faq.q}
                  </h3>
                  <p className="text-olive-700 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
