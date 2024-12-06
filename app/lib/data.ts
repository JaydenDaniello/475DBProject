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

export async function fetchProjectByPO(po: string) {
    try {
        const data = await sql<Project>`
        SELECT * FROM projects 
        WHERE projects.po = ${po};`;
        const project = data.rows.map((project) => ({

        }));

        return project[0];
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch project.');
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
          projects.salesid::text ILIKE ${`%${query}%`} OR
          projects.name ILIKE ${`%${query}%`} OR
          projects.po::text ILIKE ${`%${query}%`} OR
          projects.status ILIKE ${`%${query}%`} OR
          projects.due_date::text ILIKE ${`%${query}%`} OR
          projects.project_name ILIKE ${`%${query}%`} OR
          projects.clientid::text ILIKE ${`%${query}%`} OR
          projects.vendorid::text ILIKE ${`%${query}%`}
        ORDER BY projects.due_date DESC
        LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
        `;

        return projects.rows;
    } catch (error) {
        console.error('Database error: ', error);
        throw new Error('Failed to fetch filtered projects.');
    }
}

export async function fetchProjectsPages(query: string) {
    try {
        const count = await sql`SELECT COUNT(*)
        FROM projects
        JOIN users ON projects.salesid = users.salesid
        WHERE
          users.name ILIKE ${`%${query}%`} OR
          users.email ILIKE ${`%${query}%`} OR
          projects.salesid::text ILIKE ${`%${query}%`} OR
          projects.name ILIKE ${`%${query}%`} OR
          projects.po::text ILIKE ${`%${query}%`} OR
          projects.status ILIKE ${`%${query}%`} OR
          projects.due_date::text ILIKE ${`%${query}%`} OR
          projects.project_name ILIKE ${`%${query}%`} OR
          projects.clientid::text ILIKE ${`%${query}%`} OR
          projects.vendorid::text ILIKE ${`%${query}%`}
      `;

        const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
        return totalPages;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch total number of projects.');
    }
}

export async function fetchProjectByID(id: string, token: string) {
    try {
        //Validate token before filling request
        const { payload } = await jwtVerify(token, JWT_SECRET);
        console.log('Token validated, user payload:', payload);

        const data = await sql<Project>`
      SELECT * FROM projects
      WHERE projects.po::text ILIKE ${`%${id}%`}`;
        return data.rows;
    } catch (error) {
        console.error('Database error: ', error);
        throw new Error('Failed to fetch project data');
    }
}

export async function upsertProject(
    id: string,
    token: string,
    updates: Partial<Project>
) {
    console.log('Token in upsert: ', token);
    //Validate token before filling request
    const { payload } = await jwtVerify(token, JWT_SECRET);
    console.log('Token validated, user payload:', payload);

    let project = null;
    if (id) {
    project = await fetchProjectByID(id, token);
    console.log('Project to update:', project);
    }

    if (!project && id) {
        throw new Error('Project not found');
    }

    // Handle null or undefined updates by keeping values from the existing project if necessary
    /**if (updates.clientid == null) {
        updates.clientid = project[0].clientid;
    }
    if (updates.due_date == null) {
        updates.due_date = project[0].due_date;
    }
    if (updates.name == null) {
        updates.name = project[0].name;
    }
    if (updates.po == null) {
        updates.po = project[0].po;
    }
    if (updates.project_name == null) {
        updates.project_name = project[0].project_name;
    }
    if (updates.salesid == null) {
        updates.salesid = project[0].salesid;
    }
    if (updates.status == null) {
        updates.status = project[0].status;
    }
    if (updates.vendorid == null) {
        updates.vendorid = project[0].vendorid;
    }*/

    const finalUpdates: Partial<Project> = {};
    // If this is an update, fill in information which wasn't included
    if (project) {
    finalUpdates.po = updates.po ?? project[0]?.po;
    finalUpdates.salesid = updates.salesid ?? project[0]?.salesid;
    finalUpdates.name = updates.name ?? project[0]?.name;
    finalUpdates.status = updates.status ?? project[0]?.status;
    finalUpdates.due_date = updates.due_date ?? project[0]?.due_date;
    finalUpdates.project_name = updates.project_name ?? project[0]?.project_name;
    finalUpdates.clientid = updates.clientid ?? project[0]?.clientid;
    finalUpdates.vendorid = updates.vendorid ?? project[0]?.vendorid;
    } else {
    // If this is an insert, fill all values with form data
    finalUpdates.po = updates.po;
    finalUpdates.salesid = updates.salesid;
    finalUpdates.name = updates.name;
    finalUpdates.status = updates.status;
    finalUpdates.due_date = updates.due_date;
    finalUpdates.project_name = updates.project_name;
    finalUpdates.clientid = updates.clientid;
    finalUpdates.vendorid = updates.vendorid;
    }
    
    // Validation: Ensure no required fields are null or undefined
const requiredFields: (keyof Partial<Project>)[] = [
    "po", "salesid", "name", "status", "due_date", "project_name", "clientid", "vendorid"
];

for (const field of requiredFields) {
    if (finalUpdates[field] == null) {  // Checks for both null and undefined
        throw new Error(`Field ${field} is required and cannot be null or undefined`);
    }
}
    
        console.log('Final updates:', finalUpdates);

    try {
        // Use INSERT ... ON CONFLICT for upsert (insert or update)
        const result = await sql`
      INSERT INTO projects (
        po, 
        salesid, 
        name, 
        status, 
        due_date, 
        project_name, 
        clientid, 
        vendorid
      ) 
      VALUES (
        ${updates.po},
        ${updates.salesid},
        ${updates.name},
        ${updates.status},
        ${updates.due_date},
        ${updates.project_name},
        ${updates.clientid},
        ${updates.vendorid}
      )
      ON CONFLICT (po)
      DO UPDATE SET 
        salesid = EXCLUDED.salesid,
        name = EXCLUDED.name,
        status = EXCLUDED.status,
        due_date = EXCLUDED.due_date,
        project_name = EXCLUDED.project_name,
        clientid = EXCLUDED.clientid,
        vendorid = EXCLUDED.vendorid;
    `;

        console.log('SQL Upsert Result:', result);
        return result;
    } catch (error) {
        console.error('Database error: ', error);
        throw new Error('Failed to update or insert project data');
    }
}

