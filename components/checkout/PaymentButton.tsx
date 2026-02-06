'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  order_id: string;
  handler: (response: any) => void;
  prefill: {
    name: string;
    email: string;
    contact: string;
  };
  theme: {
    color: string;
  };
}

declare global {
  interface Window {
    Razorpay: any;
  }
}

interface PaymentButtonProps {
  amount: number;
  customerDetails: {
    name: string;
    email: string;
    phone: string;
  };
  onSuccess?: (paymentId: string, orderId: string) => void;
  onFailure?: (error: any) => void;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export default function PaymentButton({
  amount,
  customerDetails,
  onSuccess,
  onFailure,
  disabled = false,
  className = '',
  children = 'Proceed to Payment',
}: PaymentButtonProps) {
  const [loading, setLoading] = useState(false);

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      if (window.Razorpay) {
        resolve(true);
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    setLoading(true);

    try {
      // Load Razorpay script
      const scriptLoaded = await loadRazorpayScript();
      if (!scriptLoaded) {
        throw new Error('Failed to load Razorpay SDK');
      }

      // Create order on backend
      const orderResponse = await fetch('/api/payment/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount,
          customerDetails,
        }),
      });

      if (!orderResponse.ok) {
        throw new Error('Failed to create payment order');
      }

      const orderData = await orderResponse.json();

      // Configure Razorpay options
      const options: RazorpayOptions = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
        amount: orderData.amount,
        currency: orderData.currency,
        name: 'Divya Fashion',
        description: 'Purchase from Divya Fashion Store',
        order_id: orderData.orderId,
        handler: async function (response: any) {
          try {
            // Verify payment on backend
            const verifyResponse = await fetch('/api/payment/verify', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              }),
            });

            const verifyData = await verifyResponse.json();

            if (verifyData.success) {
              onSuccess?.(verifyData.paymentId, verifyData.orderId);
            } else {
              throw new Error('Payment verification failed');
            }
          } catch (error) {
            onFailure?.(error);
          }
        },
        prefill: {
          name: customerDetails.name,
          email: customerDetails.email,
          contact: customerDetails.phone,
        },
        theme: {
          color: '#c96949', // rust-600
        },
      };

      // Open Razorpay checkout
      const razorpay = new window.Razorpay(options);
      razorpay.on('payment.failed', function (response: any) {
        onFailure?.(response.error);
      });
      razorpay.open();
    } catch (error) {
      console.error('Payment error:', error);
      onFailure?.(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.button
      whileHover={{ scale: disabled || loading ? 1 : 1.02 }}
      whileTap={{ scale: disabled || loading ? 1 : 0.98 }}
      onClick={handlePayment}
      disabled={disabled || loading}
      className={`
        w-full py-4 px-6 
        bg-olive-900 text-cream-50 
        text-sm tracking-wide uppercase font-sans
        hover:bg-rust-600 
        transition-colors duration-300
        disabled:opacity-50 disabled:cursor-not-allowed
        flex items-center justify-center gap-3
        ${className}
      `}
    >
      {loading ? (
        <>
          <Loader2 className="animate-spin" size={20} />
          Processing...
        </>
      ) : (
        children
      )}
    </motion.button>
  );
}
