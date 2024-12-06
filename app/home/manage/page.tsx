import { cookies } from "next/headers";
import { fetchProjectByID, fetchProjects, fetchProjectsPages } from "@/app/lib/data";
import Table from "@/app/ui/projects/table";
import Pagination from "@/app/ui/projects/pagination";
import { Suspense } from "react";
import { TableSkeleton } from "@/app/ui/skeletons";
import Search from "@/app/ui/search";


export default async function ProjectsPage(props: {
  searchParams?: {
    query?: string;
    page?: string;
    editProjectId?: string;
  };
}) {
  const searchParams = await props.searchParams || {};
  const query = searchParams.query || "";
  const currentPage = Number(searchParams.page) || 1;
  const editProjectId = searchParams.editProjectId || null;

  // Get token from cookie
  const cookieStore = cookies();
  const token = (await cookieStore).get("token")?.value;

  // Check token exists
  if (!token) throw new Error("No token found");

  // Fetch projects and total pages
  const projects = await fetchProjects(token);
  const totalPages = await fetchProjectsPages(query);

  // If an editProjectId is provided, fetch the corresponding project
  let projectToEdit = null;
  if (editProjectId) {
    projectToEdit = await fetchProjectByID(editProjectId, token);
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">

        <div className="w-full max-w-6xl bg-white p-6 rounded-lg shadow-lg">

          <div className="flex w-full items-center justify-between border-b pb-4">
            <h1 className="text-2xl text-black font-semibold">Projects</h1>
          </div>

          <div className="mt-4 flex items-center justify-between gap-4">
            <Search placeholder="Search Projects..." />
          </div>


          <Suspense key={query + currentPage} fallback={<TableSkeleton />}>
            <Table query={query} currentPage={currentPage} />
          </Suspense>

          <div className="text-black mt-6 flex justify-center">
            <Pagination totalPages={totalPages} />
          </div>
        </div>
      </div>

  );
}
