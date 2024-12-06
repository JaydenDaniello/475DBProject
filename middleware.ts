import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';
import type { NextRequest } from 'next/server';
export const runtime = 'nodejs';

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET as string);

export async function middleware(request: NextRequest) {
    console.log("Middleware hit for:", request.nextUrl.pathname);

    const token = request.cookies.get('token')?.value;

    if (!token) {
        // Redirect to login if no token is found
        return NextResponse.redirect(new URL('/', request.url));
    }

    try {
        // Verify the token
        await jwtVerify(token, JWT_SECRET);
        return NextResponse.next();
    } catch (error) {
        console.error('JWT validation failed:', error);
        return NextResponse.redirect(new URL('/', request.url)); // Redirect on invalid token
    }
}

//Defining protected paths
export const config = {
    matcher: ['/home/:path*'],
};
