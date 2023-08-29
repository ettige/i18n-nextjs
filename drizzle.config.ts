
import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";
dotenv.config();

if (!process.env.POSTGRES_URL) {
    throw new Error("Missing required environment variables for PostgreSQL configuration.");
}
export default {
    schema: "./src/db/schema/*.ts",
    out: "./drizzle",
    driver: 'pg',
    dbCredentials: {
        connectionString: process.env.POSTGRES_URL,
        ssl: true
    }
} satisfies Config;