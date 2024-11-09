import { fetchProjects } from "@/app/lib/data";
import Breadcrumbs from "@/app/ui/projects/breadcrumbs";
import { cookies } from "next/headers";

export default async function Page() {
    //Get token from cookie
    const cookieStore = cookies();
    const token = (await cookieStore).get('token')?.value;
    
    //Check token exists
    if (!token) throw new Error('No token found');

    const projects = await fetchProjects(token);

    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Projects', href: '/home/manage' },
                    {
                        label: 'Create Project',
                        href: '/home/manage/create',
                        active: true,
                    },
                ]}
            />
            {/*<Form customers={customers} />*/}
        </main>
    );
}