import path from "node:path";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: path.join("db", "schema.prisma"),
  // migrations: {
  //   path: path.join("db", "migrations"),
  // },
});
