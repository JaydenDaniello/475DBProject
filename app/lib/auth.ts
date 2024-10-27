/*This file contains a function to be used on API 
routes for validating requests to the server*/
//NOTE: not implemented yet!

import { jwtVerify } from 'jose';
import { NextRequest, NextResponse } from 'next/server';

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET as string);

export async function verifyToken(request: NextRequest) {
    const token = request.cookies.get('token')?.value;
    if (!token) {
        return { valid: false, error: 'No token provided' };
    }
    try {
        const { payload } = await jwtVerify(token, JWT_SECRET);
        return { valid: true, decoded: payload };
    } catch (error) {
        return { valid: false, error: 'Invalid token' };
    }
}

/**Example implementation:
 * export async function POST(request: NextRequest) {
 *  const auth = verifyToken(request);
 * 
 *  if (!auth.valid) {
 *      return NextResponse.json({ error: auth.error }, { status: 401 });
 *  }
 * 
 *  API CODE HERE
 * }
 */