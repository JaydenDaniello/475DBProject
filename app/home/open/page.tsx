import { fetchUsers, fetchClients, fetchProjects, fetchVendors } from "@/app/lib/data";
import { cookies } from "next/headers";
<<<<<<< HEAD
=======
import { Project } from "@/app/lib/definitions";
>>>>>>> 9924ff3421ea7a349a5a898c5cfbd68cc28a1260
import ProjectTable from "@/app/ui/home/ProjectTable";

export default async function Page() {
    //Get token from cookie
    const cookieStore = cookies();
    const token = (await cookieStore).get('token')?.value;
    
    //Check token exists
    if (!token) throw new Error('No token found');

    const projectList = await fetchProjects(token);
<<<<<<< HEAD
    //Puts all open projects into a Project array
    let openProjects: Project[] = projectList.filter(project => project.status != 'closed');

    return (
        <main className="flex justify-center items-center min-h-screen bg-black">
            <ProjectTable projects={openProjects} />
=======
    //Puts all projects into a Project array
    let projects: Project[] = projectList;


    return (
        <main className="flex justify-center items-center min-h-screen bg-black">
            <ProjectTable projects={projects} />
>>>>>>> 9924ff3421ea7a349a5a898c5cfbd68cc28a1260
        </main>
    );
}