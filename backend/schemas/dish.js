import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name of Dish',
      type: 'string',
      validation:(rule)=>rule.required()
    }),
    defineField({
      name: 'short_description',
      title: 'Short Description',
      type: 'string',
      validation:(rule)=>rule.max(200)
    }),
    defineField({
      name: 'image',
      title: 'Image of the Dish',
      type: 'image',
      
    }),
  ],
  
})
