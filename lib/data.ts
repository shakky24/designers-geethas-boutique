import { Product, Category } from '@/types';
import { generatePlaceholderImage } from './utils';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Sarees',
    slug: 'sarees',
    image: generatePlaceholderImage(1200, 1600, 'Sarees Collection', 'd4c9ba'),
    description: 'Timeless elegance in every drape',
  },
  {
    id: '2',
    name: 'Tailoring',
    slug: 'tailoring',
    image: generatePlaceholderImage(1200, 1600, 'Custom Tailoring', '97a87b'),
    description: 'Perfect fit, personalized for you',
  },
  {
    id: '3',
    name: 'Jewellery',
    slug: 'jewellery',
    image: generatePlaceholderImage(1200, 1600, 'Jewellery', 'c96949'),
    description: 'Exquisite pieces to complete your look',
  },
  {
    id: '4',
    name: 'Others',
    slug: 'others',
    image: generatePlaceholderImage(1200, 1600, 'Other Items', 'a95f58'),
    description: 'Blouses, lehenga, dress materials & more',
  },
];

export const products: Product[] = [
  // Sarees
  {
    id: 'saree-1',
    name: 'Handwoven Silk Saree - Rust',
    category: 'sarees',
    price: 18500,
    images: [
      generatePlaceholderImage(1200, 1600, 'Silk Saree', 'c96949'),
      generatePlaceholderImage(1200, 1600, 'Detail View', 'd4c9ba'),
    ],
    fabric: 'Pure Silk',
    colors: ['Rust', 'Gold'],
    description:
      'Exquisite handwoven silk saree featuring traditional motifs and intricate zari work. Each piece is a celebration of Indian textile heritage.',
    fit: 'Standard 6 yards with unstitched blouse piece',
    occasion: ['Wedding', 'Festival', 'Formal'],
    care: 'Dry clean only',
    featured: true,
    bestseller: true,
  },
  {
    id: 'saree-2',
    name: 'Block Print Cotton Saree',
    category: 'sarees',
    price: 6500,
    images: [
      generatePlaceholderImage(1200, 1600, 'Cotton Saree', '97a87b'),
      generatePlaceholderImage(1200, 1600, 'Block Print', '7a8c5d'),
    ],
    fabric: 'Organic Cotton',
    colors: ['Sage Green', 'Ivory'],
    description:
      'Hand block printed cotton saree with natural dyes. Breathable and perfect for everyday elegance.',
    fit: 'Standard 6 yards with unstitched blouse piece',
    occasion: ['Casual', 'Office', 'Brunch'],
    care: 'Hand wash with mild detergent',
    new: true,
  },
  {
    id: 'saree-3',
    name: 'Chanderi Silk Saree - Maroon',
    category: 'sarees',
    price: 12500,
    images: [
      generatePlaceholderImage(1200, 1600, 'Chanderi Silk', '8a423a'),
      generatePlaceholderImage(1200, 1600, 'Maroon Saree', 'a95f58'),
    ],
    fabric: 'Chanderi Silk',
    colors: ['Maroon', 'Gold'],
    description:
      'Lightweight Chanderi silk with delicate border work. A perfect blend of tradition and comfort.',
    fit: 'Standard 6 yards with unstitched blouse piece',
    occasion: ['Festival', 'Party', 'Formal'],
    care: 'Dry clean recommended',
    bestseller: true,
  },

  // Jewellery
  {
    id: 'jewellery-1',
    name: 'Temple Jewellery Necklace Set',
    category: 'jewellery',
    price: 4500,
    images: [
      generatePlaceholderImage(1200, 1600, 'Temple Jewellery', 'c96949'),
      generatePlaceholderImage(1200, 1600, 'Necklace Detail', 'd4c9ba'),
    ],
    colors: ['Gold', 'Antique'],
    description:
      'Traditional temple jewellery necklace set with intricate detailing. Perfect for weddings and festivals.',
    occasion: ['Wedding', 'Festival', 'Traditional'],
    care: 'Store in a dry place, avoid moisture',
    featured: true,
    bestseller: true,
  },
  {
    id: 'jewellery-2',
    name: 'Kundan Earrings',
    category: 'jewellery',
    price: 2800,
    images: [
      generatePlaceholderImage(1200, 1600, 'Kundan Earrings', 'a95f58'),
      generatePlaceholderImage(1200, 1600, 'Earring Detail', 'c96949'),
    ],
    colors: ['Gold', 'Red', 'Green'],
    description:
      'Elegant kundan earrings with pearl drops. Adds grace to any traditional outfit.',
    occasion: ['Wedding', 'Party', 'Festival'],
    care: 'Wipe with soft cloth after use',
    new: true,
  },

  // Tailoring
  {
    id: 'tailoring-1',
    name: 'Custom Blouse Stitching',
    category: 'tailoring',
    price: 1500,
    images: [
      generatePlaceholderImage(1200, 1600, 'Tailoring Service', '97a87b'),
      generatePlaceholderImage(1200, 1600, 'Custom Fit', '7a8c5d'),
    ],
    colors: ['Any'],
    description:
      'Professional blouse stitching service with custom measurements. Perfect fit guaranteed.',
    fit: 'Custom measurements taken',
    care: 'Depends on fabric',
    featured: true,
  },

  // Blouses -> Others
  {
    id: 'others-3',
    name: 'Designer Readymade Blouse',
    category: 'others',
    price: 2200,
    images: [
      generatePlaceholderImage(1200, 1600, 'Designer Blouse', 'bfaf97'),
      generatePlaceholderImage(1200, 1600, 'Blouse Back', 'd4c9ba'),
    ],
    fabric: 'Cotton Silk',
    colors: ['Maroon', 'Gold', 'Green'],
    description:
      'Readymade designer blouse with intricate embroidery work. Available in multiple sizes.',
    fit: 'Available in S, M, L, XL',
    occasion: ['Wedding', 'Festival', 'Party'],
    care: 'Dry clean only',
    bestseller: true,
  },

  // Lehenga -> Others
  {
    id: 'others-1',
    name: 'Bridal Lehenga Set',
    category: 'others',
    price: 35000,
    images: [
      generatePlaceholderImage(1200, 1600, 'Bridal Lehenga', 'a95f58'),
      generatePlaceholderImage(1200, 1600, 'Lehenga Detail', 'c96949'),
    ],
    fabric: 'Silk with Zari Work',
    colors: ['Red', 'Gold'],
    description:
      'Stunning bridal lehenga with heavy embroidery and zari work. Includes lehenga, blouse, and dupatta.',
    fit: 'Custom stitching available',
    occasion: ['Wedding', 'Engagement'],
    care: 'Dry clean only',
    featured: true,
    new: true,
  },
  {
    id: 'others-2',
    name: 'Dress Material Set',
    category: 'others',
    price: 2500,
    images: [
      generatePlaceholderImage(1200, 1600, 'Dress Material', 'b8c5a4'),
      generatePlaceholderImage(1200, 1600, 'Fabric Detail', 'd5ddc9'),
    ],
    fabric: 'Cotton',
    colors: ['Multi'],
    description:
      'Unstitched dress material with matching dupatta. Get it tailored to your preference.',
    occasion: ['Casual', 'Daily Wear'],
    care: 'Machine washable',
    bestseller: true,
  },
];

export const getFeaturedProducts = () => products.filter((p) => p.featured);
export const getBestsellers = () => products.filter((p) => p.bestseller);
export const getNewProducts = () => products.filter((p) => p.new);
export const getProductsByCategory = (category: string) =>
  products.filter((p) => p.category === category);
