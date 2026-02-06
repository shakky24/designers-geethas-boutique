'use client';

import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { openWhatsApp } from '@/lib/whatsapp';

interface WhatsAppButtonProps {
  message?: string;
  variant?: 'primary' | 'secondary' | 'icon';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
}

export default function WhatsAppButton({
  message,
  variant = 'primary',
  size = 'md',
  className = '',
  children,
}: WhatsAppButtonProps) {
  const handleClick = () => {
    openWhatsApp(message);
  };

  // Size classes
  const sizeClasses = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  // Variant classes
  const variantClasses = {
    primary: 'bg-[#25D366] text-white hover:bg-[#20BA5A]',
    secondary: 'bg-olive-900 text-cream-50 hover:bg-rust-600',
    icon: 'p-3 bg-[#25D366] text-white hover:bg-[#20BA5A] rounded-full',
  };

  if (variant === 'icon') {
    return (
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleClick}
        className={`${variantClasses[variant]} transition-all duration-300 shadow-lg ${className}`}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={24} />
      </motion.button>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={handleClick}
      className={`
        ${sizeClasses[size]} 
        ${variantClasses[variant]}
        tracking-wide uppercase font-sans
        transition-all duration-300
        flex items-center justify-center gap-2
        ${className}
      `}
    >
      <MessageCircle size={20} />
      {children || 'Chat on WhatsApp'}
    </motion.button>
  );
}
