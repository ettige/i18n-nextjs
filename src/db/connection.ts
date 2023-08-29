import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
const client = postgres(String(process.env.POSTGRES_URL));
let db = drizzle(client);

function initializeDb() {
  if (!db) {

    db = drizzle(client);
  }
}

initializeDb();

export default db;
