"use client";

import { useState } from "react";
import Table from "@/app/ui/projects/table";
import Pagination from "@/app/ui/projects/pagination";
import EditModal from "@/app/ui/projects/EditModal"; // Import modal if applicable


export default function ProjectsClient({
  query,
  currentPage,
  projects,
  totalPages,
  token,
}: {
  query: string;
  currentPage: number;
  projects: any[];
  totalPages: number;
}) {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleEditClick = (project: any) => {
    setSelectedProject(project); // Open modal or perform any other action
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg">
        <div className="flex w-full items-center justify-between border-b pb-4">
          <h1 className="text-2xl text-black font-semibold">Projects</h1>
        </div>

        {/* Table Content */}
        <Table
          query={query}
          currentPage={currentPage}
          projects={projects}
          handleEditClick={handleEditClick} // Pass the function here
        />

        {/* Render modal if a project is selected */}
        {selectedProject && (
          <EditModal
            project={selectedProject}
            onClose={handleCloseModal}
            onRefresh={() => console.log("Data refreshed")}
            token={token}
          />
        )}

        {/* Pagination */}
        <div className="mt-6 flex justify-center">
          <Pagination totalPages={totalPages} />
        </div>
      </div>
    </div>
  );
}
