// Utility functions for the application

export const formatPrice = (price: number): string => {
  return `₹${price.toLocaleString('en-IN')}`;
};

export const generatePlaceholderImage = (
  width: number,
  height: number,
  text: string,
  bgColor: string = 'e0d8cc'
): string => {
  return `https://placehold.co/${width}x${height}/${bgColor}/6e614f?text=${encodeURIComponent(text)}`;
};

export const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-')
    .trim();
};

export const getCategoryName = (slug: string): string => {
  const categories: { [key: string]: string } = {
    sarees: 'Sarees',
    chudidhars: 'Chudidhars',
    'designer-tops': 'Designer Tops',
  };
  return categories[slug] || slug;
};
