import imageUrlBuilder from '@sanity/image-url';
import { client } from './client';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// Helper to get optimized image URL
export function getImageUrl(
  source: SanityImageSource,
  width?: number,
  height?: number
) {
  let image = urlFor(source);
  
  if (width) image = image.width(width);
  if (height) image = image.height(height);
  
  return image.auto('format').fit('max').url();
}
