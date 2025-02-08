import { Hono } from "hono";
import { users } from "@/db/schema";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { env } from "hono/adapter";
type Bindings = {
  DATABASE_URL: string;
};

const app = new Hono<{ Bindings: Bindings }>().basePath("/api");

app.get("/", (c) => {
  return c.text("Honc! 🪿");
});

app.get("/users", async (c) => {
  const { DATABASE_URL } = env<{ DATABASE_URL: string }>(c);
  const sql = neon(DATABASE_URL!);
  const db = drizzle(sql);

  return c.json({
    users: await db.select().from(users),
  });
});

app.get("/hello", (c) => {
  return c.text("Hello Hono!");
});

export default app;
