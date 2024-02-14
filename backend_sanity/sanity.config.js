import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
require("dotenv").config()

export default defineConfig({
  name: process.env.NAME,
  title: process.env.TITLE,

  projectId: process.env.ID,
  dataset: process.env.DATASET,

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
