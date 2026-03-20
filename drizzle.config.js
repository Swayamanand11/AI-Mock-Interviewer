/** @type {import("drizzle-kit").Config} */
import { defineConfig } from "drizzle-kit";
export default{
    schema: "./utils/schema.js" ,
    dialect: 'postgresql',
    out: "./drizzle",
    dbCredentials: {
        url:'',
    }
};
