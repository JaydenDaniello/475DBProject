import { jwtVerify } from 'jose';
import { upsertProject as upsertProjectDB } from '@/app/lib/data';
import { NextRequest, NextResponse } from 'next/server';


const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET as string);

export async function POST(req: NextRequest) {
    const token = req.headers.get('Authorization')?.split(' ')[1];
    if (!token) throw new Error("Token is undefined in POST.");

    const { updates, po } = await req.json();

    if (!JWT_SECRET) {
        return NextResponse.json({ error: 'Server configuration error: JWT_SECRET is not defined.' }, { status: 500 });
    }


    try {
        const { payload } = await jwtVerify(token, JWT_SECRET);
        console.log('Token validated, user payload:', payload);

        const result = await upsertProjectDB(po, token, updates);

        if (result.rowCount) {
            return NextResponse.json({ success: true, message: 'Project updated successfully.' });
        } else {
            return NextResponse.json({ success: false, message: 'Failed to update project.' }, { status: 400 });
        }
    } catch (error) {
        console.error('Error during token validation or project update:', error);
        return NextResponse.json({ error: 'Unauthorized access. Invalid token.' }, { status: 401 });
    }
}