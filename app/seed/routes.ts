{ /*

import bcrypt from 'bcrypt';
import { db } from '@vercel/postgres';
import { users, projects, clients, vendors  } from '../lib/placeholder-data';

const client = await db.connect();

async function seedUsers() {
await client.sql CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
await client.sql
CREATE TABLE IF NOT EXISTS users (
    id UUID NOT NULL,
    name VARCHAR(255) NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    phone_number TEXT,
    PRIMARY KEY(id)
    );
;
}

async function seedProjects() {
await client.sqlCREATE EXTENSION IF NOT EXISTS "uuid-ossp";
await client.sql
CREATE TABLE IF NOT EXISTS projects (
    id UUID NOT NULL REFERENCES users(id),
    name VARCHAR(255) NOT NULL,
    po TEXT PRIMARY KEY,
    status TEXT NOT NULL,
    due_date DATE,
    project_name VARCHAR(255) NOT NULL
    );
;
}

async function seedClient() {
await client.sqlCREATE EXTENSION IF NOT EXISTS “uuid-ossp”;
await client.sql
    CREATE TABLE IF NOT EXISTS clients (
        business_id UUID PRIMARY KEY,
        business_name VARCHAR(255) NOT NULL,
        phone_number TEXT NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        notes TEXT,
        client_name VARCHAR(100) NOT NULL
    );
;
}


async function seedVendors()  {
    await client.sql CREATE EXTENSION IF NOT EXISTS “uuid-ossp’sql”;
    await client.sql
        CREATE TABLE IF NOT EXISTS vendors (
            company_id UUID PRIMARY KEY,
            company_name VARCHAR(255) NOT NULL,
            email VARCHAR(100) NOT NULL UNIQUE,
            address VARCHAR(255) NOT NULL,
            phone_number TEXT,
            ask DECIMAL(12,2),
            price_plan TEXT
        );
`;
}

async function runSeeds() {
try {
    await seedUsers();
    await seedProjects();
    await seedClient();
    await seedVendors();
console.log('Seeding completed.');
    } catch (error) {
    console.error('Error seeding database:', error);
    } finally {
    client.release();
    }
}

runSeeds();
*/ }