import { fetchProjects, fetchProjectsPages } from "@/app/lib/data";
import { Project } from "@/app/lib/definitions";
import Search from "@/app/ui/search";
import { TableSkeleton } from "@/app/ui/skeletons";
import { cookies } from "next/headers";
import { Suspense } from "react";
import Table from '@/app/ui/projects/table'
import Pagination from "@/app/ui/projects/pagination";

export default async function Page(props: {
    searchParams?: Promise<{
        query?: string;
        page?: string;
    }>;
}) {
    const searchParams = await props.searchParams;
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;
    const totalPages = await fetchProjectsPages(query);

    //Get token from cookie
    const cookieStore = cookies();
    const token = (await cookieStore).get('token')?.value;
    
    //Check token exists
    if (!token) throw new Error('No token found');

    const projectList = await fetchProjects(token);
    //Puts all open projects into a Project array
    let openProjects: Project[] = projectList.filter(project => project.salesid === 123);

    

    return (

        <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`text-2xl`}>Projects</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search Projects..." />
        {/*<CreateInvoice />*/}
      </div>
      <Suspense key={query + currentPage} fallback={<TableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
    );
}