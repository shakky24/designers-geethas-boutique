import { defineType, defineField } from 'sanity';

export const productSchema = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Sarees', value: 'sarees' },
          { title: 'Chudidhars', value: 'chudidhars' },
          { title: 'Designer Tops', value: 'designer-tops' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price (₹)',
      type: 'number',
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: 'images',
      title: 'Product Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1).max(10),
    }),
    defineField({
      name: 'fabric',
      title: 'Fabric',
      type: 'string',
      options: {
        list: [
          'Pure Silk',
          'Cotton Silk',
          'Chanderi Silk',
          'Organic Cotton',
          'Georgette',
          'Rayon',
          'Raw Silk',
          'Linen',
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'colors',
      title: 'Available Colors',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'fit',
      title: 'Fit Details',
      type: 'string',
    }),
    defineField({
      name: 'occasion',
      title: 'Suitable Occasions',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Wedding', value: 'Wedding' },
          { title: 'Festival', value: 'Festival' },
          { title: 'Formal', value: 'Formal' },
          { title: 'Casual', value: 'Casual' },
          { title: 'Party', value: 'Party' },
          { title: 'Office', value: 'Office' },
          { title: 'Brunch', value: 'Brunch' },
          { title: 'Everyday', value: 'Everyday' },
        ],
      },
    }),
    defineField({
      name: 'care',
      title: 'Care Instructions',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'featured',
      title: 'Featured Product',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'bestseller',
      title: 'Bestseller',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'new',
      title: 'New Arrival',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'inStock',
      title: 'In Stock',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'sizes',
      title: 'Available Sizes',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'Free Size'],
      },
      hidden: ({ document }) => document?.category === 'sarees',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
      media: 'images.0',
    },
  },
});
