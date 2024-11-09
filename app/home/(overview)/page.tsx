import { fetchUsers, fetchClients, fetchProjects, fetchVendors } from "@/app/lib/data";
import { cookies } from "next/headers";
import { User } from "@/app/lib/definitions";
import UserTable from "@/app/ui/home/UserTable";

export default async function Page() {
    //Get token from cookie
    const cookieStore = cookies();
    const token = (await cookieStore).get('token')?.value;
    
    //Check token exists
    if (!token) throw new Error('No token found');

    const userInfo = await fetchUsers(token);
    //Puts all users into a User array
    let users: User[] = userInfo;
{/* */}

    return (
        <main className="flex justify-center items-center min-h-screen bg-black">
            <UserTable users={users} />
        </main>
    );
}
