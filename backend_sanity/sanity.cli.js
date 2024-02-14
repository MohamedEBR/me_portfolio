import {defineCliConfig} from 'sanity/cli'
require("dotenv").config()

export default defineCliConfig({
  api: {
    projectId: process.env.ID,
    dataset: process.env.DATASET
  }
})
