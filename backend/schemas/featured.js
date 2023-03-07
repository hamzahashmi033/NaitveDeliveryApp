import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'featured',
  title: 'Featured Menu Category',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Featured Category name',
      type: 'string',
      validation:(rule)=>rule.required()
    }),
    defineField({
      name: 'short_description',
      title: 'Short Description',
      type: 'string',
    }),
    defineField({
        name: 'restaurant',
        title: 'Featured Restaurant',
        type: 'array',
        of:[{type:"reference",to:[{type:"restaurant"}]}]
      }),
  ],
})
