import { createPool } from '@vercel/postgres';

const pool = createPool({
  connectionString: process.env.POSTGRES_URL,
});

// Export a function to get a client from the pool
export const getClient = async () => {
  const client = await pool.connect();
  
  // Set the time zone for this client session
  await client.query('SET TIMEZONE = \'America/New_York\'');
  
  return client;
};