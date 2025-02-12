import { neon } from '@neondatabase/serverless'
import { getCloudflareContext } from '@opennextjs/cloudflare'
import { drizzle } from 'drizzle-orm/neon-http'

export const getDB = () => {
  const { env } = getCloudflareContext()
  const sql = neon(env.DATABASE_URL)
  const db = drizzle(sql)
  return db
}
