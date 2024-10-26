import { fetchUsers, fetchClients, fetchProjects, fetchVendors } from "@/app/lib/data";

export default async function Page() {
    console.log((await fetchUsers()));

    return (
        <main></main>
    );
}