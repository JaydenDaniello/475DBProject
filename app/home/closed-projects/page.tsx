import { fetchProjects } from "@/app/lib/data";
import { Project } from "@/app/lib/definitions";
import { cookies } from "next/headers";

export default async function Page() {
    //Get token from cookie
    const cookieStore = cookies();
    const token = (await cookieStore).get('token')?.value;

    //Check token exists
    if (!token) throw new Error('No token found');

    const projectList = await fetchProjects(token);
    //Puts all closed projects into a Project array
    let closedProjects: Project[] = projectList.filter(project => project.status === 'closed');


    return (
        <main></main>
    );
}