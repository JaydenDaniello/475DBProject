import { sql } from "@vercel/postgres";
import {
    User,
    Client,
    Vendor,
    Project,
} from './definitions';
import { jwtVerify } from "jose";

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET as string);

export async function fetchUsers(token: string) {
    try {
        //Validate token before filling request
        const { payload } = await jwtVerify(token, JWT_SECRET);
        console.log('Token validated, user payload:', payload);

        const data = await sql<User>`SELECT * FROM users`;
        return data.rows;
    } catch (error) {
        console.error('Database error: ', error);
        throw new Error('Failed to fetch user data');
    }
}

export async function fetchClients(token: string) {
    try {
        //Validate token before filling request
        const { payload } = await jwtVerify(token, JWT_SECRET);
        console.log('Token validated, user payload:', payload);

        const data = await sql<Client>`SELECT * FROM clients`;
        return data.rows;
    } catch (error) {
        console.error('Database error: ', error);
        throw new Error('Failed to fetch client data');
    }
}

export async function fetchVendors(token: string) {
    try {
        //Validate token before filling request
        const { payload } = await jwtVerify(token, JWT_SECRET);
        console.log('Token validated, user payload:', payload);

        const data = await sql<Vendor>`SELECT * FROM vendors`;
        return data.rows;
    } catch (error) {
        console.error('Database error: ', error);
        throw new Error('Failed to fetch vendor data');
    }
}

export async function fetchProjects(token: string) {
    try {
        //Validate token before filling request
        const { payload } = await jwtVerify(token, JWT_SECRET);
        console.log('Token validated, user payload:', payload);
        
        const data = await sql<Project>`
        SELECT * FROM projects
        ORDER BY due_date`;
        return data.rows;
    } catch (error) {
        console.error('Database error: ', error);
        throw new Error('Failed to fetch project data');
    }
}

const ITEMS_PER_PAGE = 6;
export async function fetchFilteredProjects(
    query: string,
    currentPage: number,
) {
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;

    try {
        const projects = await sql<Project>`
        SELECT 
          projects.salesid,
          projects.name,
          projects.po,
          projects.status,
          projects.due_date,
          projects.project_name,
          projects.clientid,
          projects.vendorid
        FROM projects
        WHERE
          projects.salesid ILIKE ${`%${query}%`} OR
          projects.name ILIKE ${`%${query}%`} OR
          projects.po ILIKE ${`%${query}%`} OR
          projects.status ILIKE ${`%${query}%`} OR
          projects.due_date ILIKE ${`%${query}%`} OR
          projects.project_name ILIKE ${`%${query}%`} OR
          projects.clientid ILIKE ${`%${query}%`} OR
          projects.vendorid ILIKE ${`%${query}%`}
        ORDER BY projects.due_date DESC
        LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
        `;

        return projects.rows;
    } catch (error) {
        console.error('Database error: ', error);
        throw new Error('Failed to fetch filtered projects.');
    }
}
