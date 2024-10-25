
import bcrypt from 'bcrypt';
import { db } from '@vercel/postgres';
import { users, projects, clients, vendors  } from '../lib/placeholder-data';

const client = await db.connect();

async function seedUsers() {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await client.sql`
    CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        salesid INTEGER UNIQUE NOT NULL,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        phone_number TEXT
    );
    `;

    const insertedUsers = await Promise.all(
        users.map(async (user) => {
            const hashedPassword = await bcrypt.hash(user.password, 10);
            return client.sql`
                INSERT INTO users (id, salesid, name, email, password, phone_number)
                VALUES (${user.id}, ${user.salesid}, ${user.name}, ${user.email}, ${hashedPassword}, ${user.phone_number})
                ON CONFLICT (id) DO NOTHING;
            `;
        }),
    );

    return insertedUsers;
}

async function seedProjects() {
    await client.sql`
    CREATE TABLE IF NOT EXISTS projects (
        salesid INTEGER NOT NULL REFERENCES users(salesid),
        name VARCHAR(255) NOT NULL,
        po TEXT PRIMARY KEY,
        status TEXT NOT NULL,
        due_date DATE,
        project_name VARCHAR(255) NOT NULL,
        clientid INTEGER NOT NULL REFERENCES clients(clientid),
        vendorid INTEGER NOT NULL REFERENCES vendors(vendorid)
    );
    `;

    const insertedProjects = await Promise.all(
        projects.map(async (project) => client.sql`
            INSERT INTO projects (salesid, name, po, status, due_date, project_name, clientid, vendorid)
            VALUES (${project.salesid}, ${project.name}, ${project.po}, ${project.status}, ${project.due_date}, ${project.project_name}, ${project.clientid}, ${project.vendorid})
            ON CONFLICT (po) DO NOTHING;
        `),
    );

    return insertedProjects;
}

async function seedClient() {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await client.sql`
        CREATE TABLE IF NOT EXISTS clients (
            business_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
            clientid INTEGER UNIQUE NOT NULL,
            business_name VARCHAR(255) NOT NULL,
            phone_number TEXT NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            notes TEXT,
            client_name VARCHAR(100) NOT NULL
        );
    `;

    const insertedClients = await Promise.all(
        clients.map(async (item) => client.sql`
            INSERT INTO clients (business_id, clientid, business_name, phone_number, email, notes, client_name)
            VALUES (${item.business_id}, ${item.clientid}, ${item.business_name}, ${item.phone_number}, ${item.email}, ${item.notes}, ${item.client_name})
            ON CONFLICT (business_id) DO NOTHING;
        `),
    );

    return insertedClients;
}

async function seedVendors() {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await client.sql`
        CREATE TABLE IF NOT EXISTS vendors (
            company_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
            vendorid INTEGER UNIQUE NOT NULL,
            company_name VARCHAR(255) NOT NULL,
            email VARCHAR(100) NOT NULL UNIQUE,
            address VARCHAR(255) NOT NULL,
            phone_number TEXT,
            ask DECIMAL(12,2),
            price_plan TEXT
        );
    `;

    const insertedVendors = await Promise.all(
        vendors.map(async (vendor) => client.sql`
            INSERT INTO vendors (company_id, vendorid, company_name, email, address, phone_number, ask, price_plan)
            VALUES (${vendor.company_id}, ${vendor.vendorid}, ${vendor.company_name}, ${vendor.email}, ${vendor.address}, ${vendor.phone_number}, ${vendor.ask}, ${vendor.price_plan})
            ON CONFLICT (vendorid) DO NOTHING;
        `),
    );

    return insertedVendors;
}

{/*
async function seedUsers() {
    await client.sql `CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await client.sql`
    CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        salesid INTEGER UNIQUE NOT NULL,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        phone_number TEXT
        );
    `;

    const insertedUsers = await Promise.all(
    users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      return client.sql`
        INSERT INTO users (id, name, email, password, phone_number)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword}, ${user.phone_number})
        ON CONFLICT (id) DO NOTHING;
      `;
    }),
  );

  return insertedUsers;

}

async function seedProjects() {
    //await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await client.sql`
    CREATE TABLE IF NOT EXISTS projects (
        salesid INTEGER NOT NULL REFERENCES users(salesid),
        name VARCHAR(255) NOT NULL,
        po TEXT PRIMARY KEY,
        status TEXT NOT NULL,
        due_date DATE,
        project_name VARCHAR(255) NOT NULL,
        clientid INTEGER NOT NULL REFERENCES clients(clientid),
        vendorid INTEGER NOT NULL REFERENCES vendors(vendorid)
        );
    `;

    const insertedProjects = await Promise.all(
        projects.map(async (project) => client.sql`
            INSERT INTO projects (salesid, name, po, status, due_date, project_name, clientid, vendorid)
            VALUES (${project.salesid}, ${project.name}, ${project.po}, ${project.status}, ${project.due_date}, ${project.project_name}, ${project.clientid}, ${project.vendorid})
            ON CONFLICT (po) DO NOTHING;
          `,
        ),
    );
    
    return insertedProjects;

}

async function seedClient() {
    await client.sql`CREATE EXTENSION IF NOT EXISTS “uuid-ossp”`;
    await client.sql`
        CREATE TABLE IF NOT EXISTS clients (
            business_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
            clientid INTEGER NOT NULL UNIQUE,
            business_name VARCHAR(255) NOT NULL,
            phone_number TEXT NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            notes TEXT,
            client_name VARCHAR(100) NOT NULL
        );
    `;
    const insertedClients = await Promise.all(
        clients.map(async (item) => client.sql`
            INSERT INTO clients (business_id, clientid, business_name, phone_number, email, notes, client_name)
            VALUES (${item.business_id}, ${item.clientid}, ${item.business_name}, ${item.phone_number}, ${item.email}, ${item.notes}, ${item.client_name})
            ON CONFLICT (business_id) DO NOTHING;
        `,
        ),
    );

    return insertedClients;
}


async function seedVendors()  {
    await client.sql`CREATE EXTENSION IF NOT EXISTS “uuid-ossp”`;
    await client.sql `
        CREATE TABLE IF NOT EXISTS vendors (
            company_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
            vendorid INTEGER NOT NULL UNIQUE,
            company_name VARCHAR(255) NOT NULL,
            email VARCHAR(100) NOT NULL UNIQUE,
            address VARCHAR(255) NOT NULL,
            phone_number TEXT,
            ask DECIMAL(12,2),
            price_plan TEXT
        );
    `;

    const insertedVendors = await Promise.all(
        vendors.map(async (vendor) => client.sql`
            INSERT INTO vendors (company_id, vendorid, company_name, email, address, phone_number, ask, price_plan)
            VALUES (${vendor.company_id}, ${vendor.vendorid}, ${vendor.company_name}, ${vendor.email}, ${vendor.address}, ${vendor.phone_number}, ${vendor.ask}, ${vendor.price_plan})
            ON CONFLICT (company_id) DO NOTHING;
          `,
        ),
    );
    
    return insertedVendors;
}
*/}

export async function GET() {
    try {
        await client.sql`BEGIN`;
        console.log("seeding users...");
        await seedUsers();
        console.log("seeding clients...");
        await seedClient();
        console.log("seeding vendors...");
        await seedVendors();
        console.log("seeding projects...");
        await seedProjects();
        await client.sql`COMMIT`;

        return Response.json({ message: 'Database seeded successfully' });
    } catch (error) {
        await client.sql`ROLLBACK`;
        return Response.json({ error }, { status: 500 });
    }
}



{ /** 
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
*/}
