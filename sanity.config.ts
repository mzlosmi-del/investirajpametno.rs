import { defineConfig } from 'sanity'
import { structuredText } from 'sanity/desk'
import { schemaTypes } from './src/sanity/schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Investiraj Pametno',
  projectId: 'rb1q4enl',
  dataset: 'production',
  plugins: [structuredText()],
  schema: {
    types: schemaTypes,
  },
})
