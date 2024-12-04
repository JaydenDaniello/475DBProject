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
      <div className="flex justify-center items-center min-h-screen bg-black">
        {/* Container */}
        <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg">
          {/* Header */}
          <div className="flex w-full items-center justify-between border-b pb-4">
            <h1 className="text-2xl text-black font-semibold">Projects</h1>
          </div>
          
          {/* Search Bar */}
          <div className="mt-4 flex items-center justify-between gap-4">
            <Search placeholder="Search Projects..." />
            {/* Uncomment if needed */}
            {/* <CreateInvoice /> */}
          </div>
    
          {/* Table Content */}
          <Suspense key={query + currentPage} fallback={<TableSkeleton />}>
            <Table query={query} currentPage={currentPage} />
          </Suspense>
    
          {/* Pagination */}
          <div className="mt-6 flex justify-center">
            <Pagination totalPages={totalPages} />
          </div>
        </div>
      </div>
    );
    
}