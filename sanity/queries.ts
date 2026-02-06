import { client } from './client';

// Get all products
export async function getProducts() {
  const query = `*[_type == "product" && inStock == true] | order(_createdAt desc) {
    _id,
    name,
    "slug": slug.current,
    category,
    price,
    images,
    fabric,
    colors,
    description,
    fit,
    occasion,
    care,
    featured,
    bestseller,
    new,
    inStock,
    sizes
  }`;
  
  return await client.fetch(query);
}

// Get single product by slug
export async function getProduct(slug: string) {
  const query = `*[_type == "product" && slug.current == $slug][0] {
    _id,
    name,
    "slug": slug.current,
    category,
    price,
    images,
    fabric,
    colors,
    description,
    fit,
    occasion,
    care,
    featured,
    bestseller,
    new,
    inStock,
    sizes
  }`;
  
  return await client.fetch(query, { slug });
}

// Get products by category
export async function getProductsByCategory(category: string) {
  const query = `*[_type == "product" && category == $category && inStock == true] | order(_createdAt desc) {
    _id,
    name,
    "slug": slug.current,
    category,
    price,
    images,
    fabric,
    colors,
    description,
    fit,
    occasion,
    care,
    featured,
    bestseller,
    new,
    inStock,
    sizes
  }`;
  
  return await client.fetch(query, { category });
}

// Get featured products
export async function getFeaturedProducts() {
  const query = `*[_type == "product" && featured == true && inStock == true] | order(_createdAt desc) [0...6] {
    _id,
    name,
    "slug": slug.current,
    category,
    price,
    images,
    fabric,
    colors,
    description,
    featured,
    bestseller,
    new
  }`;
  
  return await client.fetch(query);
}

// Get bestseller products
export async function getBestsellerProducts() {
  const query = `*[_type == "product" && bestseller == true && inStock == true] | order(_createdAt desc) [0...6] {
    _id,
    name,
    "slug": slug.current,
    category,
    price,
    images,
    fabric,
    colors,
    description,
    featured,
    bestseller,
    new
  }`;
  
  return await client.fetch(query);
}

// Get new arrivals
export async function getNewProducts() {
  const query = `*[_type == "product" && new == true && inStock == true] | order(_createdAt desc) [0...6] {
    _id,
    name,
    "slug": slug.current,
    category,
    price,
    images,
    fabric,
    colors,
    description,
    featured,
    bestseller,
    new
  }`;
  
  return await client.fetch(query);
}

// Get all categories
export async function getCategories() {
  const query = `*[_type == "category"] | order(order asc) {
    _id,
    name,
    "slug": slug.current,
    image,
    description,
    order
  }`;
  
  return await client.fetch(query);
}

// Get active hero
export async function getActiveHero() {
  const query = `*[_type == "hero" && active == true][0] {
    _id,
    title,
    subtitle,
    image,
    ctaText,
    ctaLink
  }`;
  
  return await client.fetch(query);
}

// Search products
export async function searchProducts(searchTerm: string) {
  const query = `*[_type == "product" && (
    name match $searchTerm ||
    description match $searchTerm ||
    fabric match $searchTerm
  ) && inStock == true] {
    _id,
    name,
    "slug": slug.current,
    category,
    price,
    images,
    fabric,
    colors
  }`;
  
  return await client.fetch(query, { searchTerm: `*${searchTerm}*` });
}
