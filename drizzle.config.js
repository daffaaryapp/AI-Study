import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.js",
  dbCredentials:{
    url:'postgresql://dapp-database_owner:wtU9DgO8fLyK@ep-flat-wave-a19gqdqx.ap-southeast-1.aws.neon.tech/ai-study?sslmode=require'
  }
});
