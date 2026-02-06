import { productSchema } from './product';
import { categorySchema } from './category';
import { heroSchema } from './hero';

export const schema = {
  types: [productSchema, categorySchema, heroSchema],
};
