import { config } from 'dotenv'
import { defineConfig } from 'drizzle-kit'

config({ path: './.dev.vars' })

export default defineConfig({
  out: './migrations',
  schema: './schemas',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
})
