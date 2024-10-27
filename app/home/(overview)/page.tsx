import { fetchUsers, fetchClients, fetchProjects, fetchVendors } from "@/app/lib/data";
import { cookies } from "next/headers";

export default async function Page() {
    //Get token from cookie
    const cookieStore = cookies();
    const token = (await cookieStore).get('token')?.value;
    
    //Check token exists
    if (!token) throw new Error('No token found');

    console.log((await fetchUsers(token)));

    return (
        <main></main>
    );
}