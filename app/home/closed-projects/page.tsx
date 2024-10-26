import { fetchProjects } from "@/app/lib/data";
import { Project } from "@/app/lib/definitions";

export default async function Page() {

    const projectList = await fetchProjects();
    //Puts all closed projects into a Project array
    let closedProjects: Project[] = projectList.filter(project => project.status === 'closed');


    return (
        <main></main>
    );
}