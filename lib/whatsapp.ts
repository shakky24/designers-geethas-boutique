// WhatsApp Business Integration Utilities

export const WHATSAPP_CONFIG = {
  number: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919876543210',
  businessName: process.env.NEXT_PUBLIC_BUSINESS_NAME || 'Divya Fashion',
};

/**
 * Generate WhatsApp chat URL
 * @param message - Pre-filled message
 * @returns WhatsApp Web URL
 */
export function getWhatsAppURL(message?: string): string {
  const encodedMessage = message
    ? encodeURIComponent(message)
    : encodeURIComponent(`Hello ${WHATSAPP_CONFIG.businessName}! I'm interested in your products.`);
  
  return `https://wa.me/${WHATSAPP_CONFIG.number}?text=${encodedMessage}`;
}

/**
 * Generate product inquiry message for WhatsApp
 * @param productName - Name of the product
 * @param productPrice - Price of the product
 * @param productUrl - URL of the product page
 * @returns Formatted message
 */
export function getProductInquiryMessage(
  productName: string,
  productPrice: number,
  productUrl?: string
): string {
  let message = `Hi! I'm interested in:\n\n`;
  message += `*${productName}*\n`;
  message += `Price: ₹${productPrice.toLocaleString('en-IN')}\n\n`;
  
  if (productUrl) {
    message += `Product Link: ${productUrl}\n\n`;
  }
  
  message += `Could you please provide more details?`;
  
  return message;
}

/**
 * Generate general inquiry message
 * @param name - Customer name
 * @param phone - Customer phone
 * @param message - Customer message
 * @returns Formatted message
 */
export function getGeneralInquiryMessage(
  name: string,
  phone?: string,
  message?: string
): string {
  let msg = `Hello! I'd like to inquire about your products.\n\n`;
  msg += `*Name:* ${name}\n`;
  
  if (phone) {
    msg += `*Phone:* ${phone}\n`;
  }
  
  if (message) {
    msg += `\n*Message:*\n${message}`;
  }
  
  return msg;
}

/**
 * Open WhatsApp chat in new window
 * @param message - Pre-filled message
 */
export function openWhatsApp(message?: string): void {
  const url = getWhatsAppURL(message);
  window.open(url, '_blank', 'noopener,noreferrer');
}

/**
 * Format Indian phone number for WhatsApp
 * @param phone - Phone number (10 digits)
 * @returns Formatted number with country code
 */
export function formatPhoneForWhatsApp(phone: string): string {
  // Remove all non-digit characters
  const cleaned = phone.replace(/\D/g, '');
  
  // If it's a 10-digit number, add India country code
  if (cleaned.length === 10) {
    return `91${cleaned}`;
  }
  
  return cleaned;
}
