export interface Product {
  id: string;
  name: string;
  category: 'sarees' | 'tailoring' | 'jewellery' | 'others';
  price: number;
  images: string[];
  fabric?: string;
  colors: string[];
  description: string;
  fit?: string;
  occasion?: string[];
  care?: string;
  featured?: boolean;
  bestseller?: boolean;
  new?: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
  description: string;
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize?: string;
}

export interface Filter {
  category?: string[];
  fabric?: string[];
  color?: string[];
  priceRange?: [number, number];
  occasion?: string[];
}
