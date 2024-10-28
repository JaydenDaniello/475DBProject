import { NextResponse } from 'next/server';
import { getClient } from '@/app/lib/database';
import { Project } from '@/app/lib/definitions';

export async function GET(request) {
    const client = await getClient();
    try {
        const result = await client.sql`SELECT * FROM projects`;
        const projects: Project[] = result.rows.map(row => row as Project);

        if (projects.length === 0) {
            return NextResponse.json({ error: 'Projects not found' }, { status: 404 });
        }

        return NextResponse.json(projects);
    } catch (error) {
        console.error('Error during fetching:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
