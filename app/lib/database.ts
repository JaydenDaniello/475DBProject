import { createPool } from '@vercel/postgres';

const pool = createPool({
  connectionString: process.env.POSTGRES_URL,
});

// Export a function to get a client from the pool
export const getClient = async () => {
  const client = await pool.connect();
  return client;
};
