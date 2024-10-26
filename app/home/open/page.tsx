import { fetchProjects } from "@/app/lib/data";
import { Project } from "@/app/lib/definitions";

export default async function Page() {

    const projectList = await fetchProjects();
    //Puts all open projects into a Project array
    let openProjects: Project[] = projectList.filter(project => project.status === 'open');

    return (
        <main></main>
    );
}