import { defineConfig } from 'sanity'
import { desk } from 'sanity/desk'
import { schemaTypes } from './src/sanity/schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Investiraj Pametno',
  projectId: 'rb1q4enl',
  dataset: 'production',
  plugins: [desk()],
  schema: {
    types: schemaTypes,
  },
})
