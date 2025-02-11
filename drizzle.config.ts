import { config } from 'dotenv'
import { defineConfig } from 'drizzle-kit'

config({ path: './.dev.vars' })

export default defineConfig({
    out: './src/db/migrations',
    schema: './src/db/schema.ts',
    dialect: 'postgresql',
    dbCredentials: {
        url: process.env.DATABASE_URL!,
    },
})
