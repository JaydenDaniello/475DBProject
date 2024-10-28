'use client';

import { Project } from "@/app/lib/definitions";
import { useEffect } from "react";

interface ProjectsTableProps {
    projects: Project[];
}

export default function ProjectTable({ projects }: ProjectsTableProps) {

    if (!projects || projects.length === 0) {
        return <div className="text-white">No projects to display or projects prop is undefined</div>; // Fallback if no projects
    }

    return (
        <div className="w-full max-w-4xl bg-black p-8 rounded-lg shadow-lg border border-cyan-200">
            <h1 className="text-2xl font-bold mb-6 text-center text-gray-200">Projects</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-gray-300 rounded-lg border-collapse">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 text-gray-800 border-b">Sales ID</th>
                            <th className="px-4 py-2 text-gray-800 border-b">Name</th>
                            <th className="px-4 py-2 text-gray-800 border-b">PO</th>
                            <th className="px-4 py-2 text-gray-800 border-b">Status</th>
                            <th className="px-4 py-2 text-gray-800 border-b">In-Hands Date</th>
                            <th className="px-4 py-2 text-gray-800 border-b">Project Name</th>
                            <th className="px-4 py-2 text-gray-800 border-b">Client ID</th>
                            <th className="px-4 py-2 text-gray-800 border-b">Vendor ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects.map((project) => (
                            <tr key={project.po} className="border-b hover:bg-gray-50">
                                <td className="px-4 py-2 text-gray-800 text-center">{project.salesid}</td>
                                <td className="px-4 py-2 text-gray-800 text-center">{project.name}</td>
                                <td className="px-4 py-2 text-gray-800 text-center">{project.po}</td>
                                <td className="px-4 py-2 text-gray-800 text-center">{project.status}</td>
                                <td className="px-4 py-2 text-gray-800 text-center">
                                    {project.due_date ? new Date(project.due_date).toLocaleDateString() : "N/A"}
                                </td>
                                <td className="px-4 py-2 text-gray-800 text-center">{project.project_name}</td>
                                <td className="px-4 py-2 text-gray-800 text-center">{project.clientid}</td>
                                <td className="px-4 py-2 text-gray-800 text-center">{project.vendorid}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}