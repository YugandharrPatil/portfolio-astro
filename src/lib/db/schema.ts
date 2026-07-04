import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";

export const messages = sqliteTable("messages", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
  sentAt: integer("sent_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
});

export const repos = sqliteTable("repos", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull().unique(),
  order: integer("order").notNull(),
});
