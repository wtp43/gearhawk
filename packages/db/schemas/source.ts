import { integer, pgTable, timestamp, varchar } from 'drizzle-orm/pg-core'

export const xmlFeeds = pgTable('xml_feeds', {
  vendorId: integer('vendor_id'),
  url: varchar('url', { length: 255 }).primaryKey(),
  createdAt: timestamp('created_at'),
  queriedAt: timestamp('queried_at'),
})
