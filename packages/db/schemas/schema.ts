import { boolean, integer, pgTable, text, timestamp, varchar } from 'drizzle-orm/pg-core'

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
