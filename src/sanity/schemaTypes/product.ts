import {defineField, defineType} from 'sanity'

export const product = defineType({
  name: 'product',
  title: 'Phone Case Product',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{
        type: 'image',
        options: {
          hotspot: true,
        }
      }],
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'category'}],
    }),
    defineField({
      name: 'supportedDevices',
      title: 'Supported Devices',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Type the name of the device (e.g. iPhone 16 Pro, iPhone 15) and press enter',
      options: {
        layout: 'tags',
      },
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'stockCount',
      title: 'Stock Count',
      type: 'number',
      description: 'Enter the number of cases available. The website will automatically subtract from this when a purchase is made.',
      initialValue: 10,
      validation: (Rule) => Rule.required().min(0),
    }),
  ],
})
