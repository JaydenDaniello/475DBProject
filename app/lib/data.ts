import { sql } from "@vercel/postgres";
import {
    User,
    Client,
    Vendor,
    Project,
} from './definitions';

export async function fetchUsers() {
    try {
        const data = await sql<User>`SELECT * FROM users`;
        return data.rows;
    } catch (error) {
        console.error('Database error: ', error);
        throw new Error('Failed to fetch user data');
    }
}

export async function fetchClients() {
    try {
        const data = await sql<Client>`SELECT * FROM clients`;
        return data.rows;
    } catch (error) {
        console.error('Database error: ', error);
        throw new Error('Failed to fetch client data');
    }
}

export async function fetchVendors() {
    try {
        const data = await sql<Vendor>`SELECT * FROM vendors`;
        return data.rows;
    } catch (error) {
        console.error('Database error: ', error);
        throw new Error('Failed to fetch vendor data');
    }
}

export async function fetchProjects() {
    try {
        const data = await sql<Project>`SELECT * FROM projects`;
        return data.rows;
    } catch (error) {
        console.error('Database error: ', error);
        throw new Error('Failed to fetch project data');
    }
}