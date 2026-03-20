/** @type {import("drizzle-kit").Config} */
import { defineConfig } from "drizzle-kit";
export default{
    schema: "./utils/schema.js" ,
    dialect: 'postgresql',
    out: "./drizzle",
    dbCredentials: {
        url:'postgresql://neondb_owner:npg_zLQHSCP36WkF@ep-damp-dream-ad127qga-pooler.c-2.us-east-1.aws.neon.tech/AI-Mock?sslmode=require&channel_binding=require',
    }
};
