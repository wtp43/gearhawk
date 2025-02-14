import { integer, jsonb, pgTable, serial, text, timestamp, varchar } from 'drizzle-orm/pg-core'

export const users = pgTable('users', {
  userId: serial('user_id').primaryKey().notNull(),
  username: varchar('username', { length: 255 }),
  name: text(),
  role: varchar('role', { length: 255 }),
  vendorId: integer('vendor_id'),
  lastSeenAt: timestamp('last_seen_at'),
  email: text(),
  settings: jsonb(),
  createdAt: timestamp('created_at', { mode: 'string' }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { mode: 'string' }).defaultNow().notNull(),
})

export const vendors = pgTable('vendors', {
  vendorId: integer('vendor_id').primaryKey(),
  url: varchar('url', { length: 255 }),
  streetAddress: varchar('street_address', { length: 255 }),
  zip: varchar('zip', { length: 255 }),
  state: varchar('state', { length: 255 }),
  email: varchar('email', { length: 255 }),
  phone: varchar('phone', { length: 255 }),
  freeShippingMinimum: integer('free_shipping_minimum'),
  createdAt: timestamp('created_at'),
  updatedAt: timestamp('updated_at'),
})
