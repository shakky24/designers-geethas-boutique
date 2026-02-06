'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FadeIn } from '@/components/AnimationWrappers';
import PaymentButton from '@/components/checkout/PaymentButton';
import { useRouter } from 'next/navigation';

export default function CheckoutPage() {
  const router = useRouter();
  
  // Mock cart data - in production, fetch from state/context
  const [cartItems] = useState([
    {
      id: '1',
      name: 'Handwoven Silk Saree - Rust',
      price: 18500,
      quantity: 1,
      image: 'https://placehold.co/400x500/c96949/6e614f?text=Silk+Saree',
      fabric: 'Pure Silk',
    },
  ]);

  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    email: '',
    phone: '',
    address: {
      line1: '',
      line2: '',
      city: '',
      state: '',
      postal_code: '',
    },
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 2000 ? 0 : 150;
  const tax = Math.round(subtotal * 0.05); // 5% GST
  const total = subtotal + shipping + tax;

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!customerDetails.name.trim()) newErrors.name = 'Name is required';
    if (!customerDetails.email.trim()) newErrors.email = 'Email is required';
    if (!customerDetails.phone.trim()) newErrors.phone = 'Phone is required';
    if (!customerDetails.address.line1.trim()) newErrors.address_line1 = 'Address is required';
    if (!customerDetails.address.city.trim()) newErrors.city = 'City is required';
    if (!customerDetails.address.state.trim()) newErrors.state = 'State is required';
    if (!customerDetails.address.postal_code.trim()) newErrors.postal_code = 'Postal code is required';

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (customerDetails.email && !emailRegex.test(customerDetails.email)) {
      newErrors.email = 'Invalid email address';
    }

    // Phone validation
    const phoneRegex = /^[6-9]\d{9}$/;
    if (customerDetails.phone && !phoneRegex.test(customerDetails.phone)) {
      newErrors.phone = 'Invalid phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePaymentSuccess = (paymentId: string, orderId: string) => {
    // Redirect to success page
    router.push(`/order-confirmation?payment_id=${paymentId}&order_id=${orderId}`);
  };

  const handlePaymentFailure = (error: any) => {
    alert('Payment failed. Please try again.');
    console.error('Payment error:', error);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Form is valid, PaymentButton will handle the payment
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-6 bg-cream-100">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-serif tracking-wide text-olive-900 mb-8 text-center">
            Checkout
          </h1>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Checkout Form */}
          <FadeIn delay={0.1}>
            <div className="bg-sand-50 p-8">
              <h2 className="text-2xl font-serif tracking-wide text-olive-900 mb-6">
                Shipping Details
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm tracking-wide uppercase text-olive-900 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={customerDetails.name}
                    onChange={(e) =>
                      setCustomerDetails({ ...customerDetails, name: e.target.value })
                    }
                    className={`w-full px-4 py-3 bg-cream-50 border ${
                      errors.name ? 'border-rust-600' : 'border-sand-300'
                    } focus:border-rust-500 focus:outline-none focus:ring-1 focus:ring-rust-500 transition-colors text-olive-900`}
                  />
                  {errors.name && (
                    <p className="text-rust-600 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm tracking-wide uppercase text-olive-900 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={customerDetails.email}
                    onChange={(e) =>
                      setCustomerDetails({ ...customerDetails, email: e.target.value })
                    }
                    className={`w-full px-4 py-3 bg-cream-50 border ${
                      errors.email ? 'border-rust-600' : 'border-sand-300'
                    } focus:border-rust-500 focus:outline-none focus:ring-1 focus:ring-rust-500 transition-colors text-olive-900`}
                  />
                  {errors.email && (
                    <p className="text-rust-600 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm tracking-wide uppercase text-olive-900 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={customerDetails.phone}
                    onChange={(e) =>
                      setCustomerDetails({ ...customerDetails, phone: e.target.value })
                    }
                    placeholder="10-digit mobile number"
                    className={`w-full px-4 py-3 bg-cream-50 border ${
                      errors.phone ? 'border-rust-600' : 'border-sand-300'
                    } focus:border-rust-500 focus:outline-none focus:ring-1 focus:ring-rust-500 transition-colors text-olive-900`}
                  />
                  {errors.phone && (
                    <p className="text-rust-600 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>

                {/* Address Line 1 */}
                <div>
                  <label className="block text-sm tracking-wide uppercase text-olive-900 mb-2">
                    Address Line 1 *
                  </label>
                  <input
                    type="text"
                    value={customerDetails.address.line1}
                    onChange={(e) =>
                      setCustomerDetails({
                        ...customerDetails,
                        address: { ...customerDetails.address, line1: e.target.value },
                      })
                    }
                    className={`w-full px-4 py-3 bg-cream-50 border ${
                      errors.address_line1 ? 'border-rust-600' : 'border-sand-300'
                    } focus:border-rust-500 focus:outline-none focus:ring-1 focus:ring-rust-500 transition-colors text-olive-900`}
                  />
                  {errors.address_line1 && (
                    <p className="text-rust-600 text-sm mt-1">{errors.address_line1}</p>
                  )}
                </div>

                {/* Address Line 2 */}
                <div>
                  <label className="block text-sm tracking-wide uppercase text-olive-900 mb-2">
                    Address Line 2
                  </label>
                  <input
                    type="text"
                    value={customerDetails.address.line2}
                    onChange={(e) =>
                      setCustomerDetails({
                        ...customerDetails,
                        address: { ...customerDetails.address, line2: e.target.value },
                      })
                    }
                    className="w-full px-4 py-3 bg-cream-50 border border-sand-300 focus:border-rust-500 focus:outline-none focus:ring-1 focus:ring-rust-500 transition-colors text-olive-900"
                  />
                </div>

                {/* City, State, Postal Code */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm tracking-wide uppercase text-olive-900 mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      value={customerDetails.address.city}
                      onChange={(e) =>
                        setCustomerDetails({
                          ...customerDetails,
                          address: { ...customerDetails.address, city: e.target.value },
                        })
                      }
                      className={`w-full px-4 py-3 bg-cream-50 border ${
                        errors.city ? 'border-rust-600' : 'border-sand-300'
                      } focus:border-rust-500 focus:outline-none focus:ring-1 focus:ring-rust-500 transition-colors text-olive-900`}
                    />
                    {errors.city && (
                      <p className="text-rust-600 text-sm mt-1">{errors.city}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm tracking-wide uppercase text-olive-900 mb-2">
                      State *
                    </label>
                    <input
                      type="text"
                      value={customerDetails.address.state}
                      onChange={(e) =>
                        setCustomerDetails({
                          ...customerDetails,
                          address: { ...customerDetails.address, state: e.target.value },
                        })
                      }
                      className={`w-full px-4 py-3 bg-cream-50 border ${
                        errors.state ? 'border-rust-600' : 'border-sand-300'
                      } focus:border-rust-500 focus:outline-none focus:ring-1 focus:ring-rust-500 transition-colors text-olive-900`}
                    />
                    {errors.state && (
                      <p className="text-rust-600 text-sm mt-1">{errors.state}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm tracking-wide uppercase text-olive-900 mb-2">
                      Postal Code *
                    </label>
                    <input
                      type="text"
                      value={customerDetails.address.postal_code}
                      onChange={(e) =>
                        setCustomerDetails({
                          ...customerDetails,
                          address: { ...customerDetails.address, postal_code: e.target.value },
                        })
                      }
                      className={`w-full px-4 py-3 bg-cream-50 border ${
                        errors.postal_code ? 'border-rust-600' : 'border-sand-300'
                      } focus:border-rust-500 focus:outline-none focus:ring-1 focus:ring-rust-500 transition-colors text-olive-900`}
                    />
                    {errors.postal_code && (
                      <p className="text-rust-600 text-sm mt-1">{errors.postal_code}</p>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </FadeIn>

          {/* Order Summary */}
          <FadeIn delay={0.2}>
            <div className="bg-sand-50 p-8 h-fit sticky top-24">
              <h2 className="text-2xl font-serif tracking-wide text-olive-900 mb-6">
                Order Summary
              </h2>

              {/* Cart Items */}
              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="relative w-20 h-24 bg-sand-200">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm text-olive-900 mb-1">{item.name}</h3>
                      <p className="text-xs text-olive-600 mb-2">{item.fabric}</p>
                      <p className="text-sm text-olive-900">
                        Qty: {item.quantity} × ₹{item.price.toLocaleString('en-IN')}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Price Breakdown */}
              <div className="border-t border-sand-300 pt-6 space-y-3">
                <div className="flex justify-between text-olive-800">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-olive-800">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'Free' : `₹${shipping}`}</span>
                </div>
                <div className="flex justify-between text-olive-800">
                  <span>Tax (GST 5%)</span>
                  <span>₹{tax.toLocaleString('en-IN')}</span>
                </div>
                <div className="border-t border-sand-300 pt-3 flex justify-between text-lg font-serif text-olive-900">
                  <span>Total</span>
                  <span>₹{total.toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* Payment Button */}
              <div className="mt-8">
                <PaymentButton
                  amount={total}
                  customerDetails={{
                    name: customerDetails.name,
                    email: customerDetails.email,
                    phone: customerDetails.phone,
                  }}
                  onSuccess={handlePaymentSuccess}
                  onFailure={handlePaymentFailure}
                  disabled={!validateForm()}
                >
                  Pay ₹{total.toLocaleString('en-IN')}
                </PaymentButton>
              </div>

              <p className="text-xs text-olive-600 text-center mt-4">
                Your payment information is secure and encrypted
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
