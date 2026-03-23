import { defineField, defineType } from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Naslov',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Kratak opis',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'mainImage',
      title: 'Naslovna slika',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'category',
      title: 'Kategorija',
      type: 'string',
      options: {
        list: [
          { title: 'Osnove investiranja', value: 'osnove' },
          { title: 'Akcije', value: 'akcije' },
          { title: 'ETF', value: 'etf' },
          { title: 'Nekretnine', value: 'nekretnine' },
          { title: 'Lične finansije', value: 'finansije' },
          { title: 'Kriptovalute', value: 'kripto' },
        ],
      },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Datum objave',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      title: 'Sadržaj',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Opis slike',
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      subtitle: 'publishedAt',
    },
  },
})
