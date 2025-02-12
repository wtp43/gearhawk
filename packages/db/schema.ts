import { boolean, integer, jsonb, pgTable, serial, text, timestamp, varchar } from 'drizzle-orm/pg-core'

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

export const manufacturers = pgTable('manufacturers', {
  manufacturerId: integer('manufacturer_id').primaryKey(),
  name: varchar('name', { length: 255 }),
})

export const productType = pgTable('product_type', {
  productTypeId: integer('product_type_id').primaryKey(),
  desc: varchar('desc', { length: 255 }),
})

export const ammo = pgTable('ammo', {
  ammoId: integer('ammo_id'),
  name: varchar('name', { length: 255 }),
  manufacturerId: integer('manufacturer_id').primaryKey(),
  calibre: varchar('calibre', { length: 255 }),
  status: varchar('status', { length: 255 }),
  createdAt: timestamp('created_at'),
})

export const prices = pgTable('prices', {
  title: varchar('title', { length: 255 }),
  body: text('body'),
  qty: integer('qty'),
  vendorId: integer('vendor_id'),
  productUrl: varchar('product_url', { length: 255 }).primaryKey(),
  imageUrl: varchar('image_url', { length: 255 }),
  productId: integer('product_id'),
  productTypeId: integer('product_type_id'),
  createdAt: timestamp('created_at'),
  updatedAt: timestamp('updated_at'),
  stale: boolean('stale'),
})

export const priceArchive = pgTable('price_archive', {
  title: varchar('title', { length: 255 }),
  qty: integer('qty'),
  vendorId: integer('vendor_id'),
  productUrl: varchar('product_url', { length: 255 }).primaryKey(),
  productTypeId: integer('product_type_id'),
  productId: integer('product_id'),
  createdAt: timestamp('created_at'),
  updatedAt: timestamp('updated_at'),
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

export const xmlFeeds = pgTable('xml_feeds', {
  vendorId: integer('vendor_id'),
  url: varchar('url', { length: 255 }).primaryKey(),
  createdAt: timestamp('created_at'),
  queriedAt: timestamp('queried_at'),
})
