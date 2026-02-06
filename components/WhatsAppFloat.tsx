'use client';

import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { openWhatsApp } from '@/lib/whatsapp';

export default function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show button after page loads
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Show tooltip after 5 seconds, hide after 5 more seconds
    const showTimer = setTimeout(() => setShowTooltip(true), 5000);
    const hideTimer = setTimeout(() => setShowTooltip(false), 10000);
    
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  const handleClick = () => {
    openWhatsApp();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          className="fixed bottom-6 right-6 z-50"
        >
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="absolute bottom-full right-0 mb-4 bg-white shadow-lg rounded-lg p-4 max-w-xs"
              >
                <button
                  onClick={() => setShowTooltip(false)}
                  className="absolute top-2 right-2 text-olive-600 hover:text-olive-900"
                  aria-label="Close"
                >
                  <X size={16} />
                </button>
                <p className="text-sm text-olive-900 pr-4">
                  👋 Need help? Chat with us on WhatsApp!
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* WhatsApp Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleClick}
            className="w-16 h-16 bg-[#25D366] rounded-full shadow-2xl flex items-center justify-center text-white hover:bg-[#20BA5A] transition-colors duration-300"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle size={32} />
          </motion.button>

          {/* Pulse animation */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
