import { fetchProjects } from "@/app/lib/data";
import { Project } from "@/app/lib/definitions";
import { cookies } from "next/headers";
import ProjectTable from "@/app/ui/home/ProjectTable";

export default async function Page() {
    //Get token from cookie
    const cookieStore = cookies();
    const token = (await cookieStore).get('token')?.value;
    
    //Check token exists
    if (!token) throw new Error('No token found');

    const projectList = await fetchProjects(token);
    //Puts all open projects into a Project array
    let openProjects: Project[] = projectList.filter(project => project.status != 'closed');

    return (
        <main className="flex justify-center items-center min-h-screen bg-black">
            <ProjectTable projects={openProjects} />
        </main>
    );
}