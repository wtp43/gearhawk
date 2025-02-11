CREATE TABLE "ammo" (
	"ammo_id" integer,
	"name" varchar(255),
	"manufacturer_id" integer PRIMARY KEY NOT NULL,
	"calibre" varchar(255),
	"status" varchar(255),
	"created_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "manufacturers" (
	"manufacturer_id" integer PRIMARY KEY NOT NULL,
	"name" varchar(255)
);
--> statement-breakpoint
CREATE TABLE "price_archive" (
	"title" varchar(255),
	"qty" integer,
	"vendor_id" integer,
	"product_url" varchar(255) PRIMARY KEY NOT NULL,
	"product_type_id" integer,
	"product_id" integer,
	"created_at" timestamp,
	"updated_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "prices" (
	"title" varchar(255),
	"body" text,
	"qty" integer,
	"vendor_id" integer,
	"product_url" varchar(255) PRIMARY KEY NOT NULL,
	"image_url" varchar(255),
	"product_id" integer,
	"product_type_id" integer,
	"created_at" timestamp,
	"updated_at" timestamp,
	"stale" boolean
);
--> statement-breakpoint
CREATE TABLE "product_type" (
	"product_type_id" integer PRIMARY KEY NOT NULL,
	"desc" varchar(255)
);
--> statement-breakpoint
CREATE TABLE "users" (
	"user_id" serial PRIMARY KEY NOT NULL,
	"username" varchar(255),
	"name" text,
	"role" varchar(255),
	"created_at" timestamp DEFAULT now() NOT NULL,
	"vendor_id" integer,
	"last_seen_at" timestamp,
	"email" text,
	"settings" jsonb,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "vendors" (
	"vendor_id" integer PRIMARY KEY NOT NULL,
	"url" varchar(255),
	"street_address" varchar(255),
	"zip" varchar(255),
	"state" varchar(255),
	"email" varchar(255),
	"phone" varchar(255),
	"free_shipping_minimum" integer,
	"created_at" timestamp,
	"updated_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "xml_feeds" (
	"vendor_id" integer,
	"url" varchar(255) PRIMARY KEY NOT NULL,
	"created_at" timestamp,
	"queried_at" timestamp
);
