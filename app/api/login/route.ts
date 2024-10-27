import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';
import { getClient } from '@/app/lib/database';
import { SignJWT } from 'jose';
import { User } from '@/app/lib/definitions';


export async function POST(request: Request) {
    const client = await getClient();
    try {
        const { username, password } = await request.json();

        console.log('Fetching user with salesid:', username);

        // Fetch user from the database by username
        const result = await client.sql`SELECT * FROM users WHERE salesid = ${username} LIMIT 1`;
        console.log('Query result:', result);

        const user: User | null = result.rows[0] ? (result.rows[0] as User) : null;

        if (!user) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }

        // Compare provided password with the stored hashed password
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
        }

        //Create token if successful
        const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET as string);
        const token = await new SignJWT({ userID: user.id })
        .setProtectedHeader({ alg: 'HS256' })
        .setExpirationTime('30m')
        .sign(JWT_SECRET);

        // Successful authentication
        return NextResponse.json({ 
            message: 'Login successful', 
            user: { id: user.id, username: user.salesid },
            token,
        });

    } catch (error) {
        console.error('Error during login:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
