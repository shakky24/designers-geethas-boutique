import Razorpay from 'razorpay';

// Initialize Razorpay instance
export const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

// Payment configuration
export const RAZORPAY_CONFIG = {
  currency: 'INR',
  receipt_prefix: 'DIVYA_',
  theme_color: '#c96949', // rust-600 from your design
  company_name: 'Divya Fashion',
  company_logo: '/logo.png', // Update with your actual logo path
};

// Payment helper functions
export function generateReceiptId(): string {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 1000);
  return `${RAZORPAY_CONFIG.receipt_prefix}${timestamp}_${random}`;
}

export function formatAmount(amount: number): number {
  // Razorpay accepts amount in paise (1 rupee = 100 paise)
  return Math.round(amount * 100);
}

export function parseAmount(amount: number): number {
  // Convert paise back to rupees
  return amount / 100;
}
