import Image from 'next/image';
import { fetchFilteredProjects } from '@/app/lib/data';
import ProjectStatus from './status';
import { formatDateToLocal } from '@/app/lib/utils';
import { DeleteProject, UpdateProject } from './buttons';


export default async function ProjectsTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const projects = await fetchFilteredProjects(query, currentPage);

  return (
    <div className="mt-6 flow-root item-center">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="rounded-lg bg-gray-50 p-4">
            <table className="min-w-full text-gray-900">
              <thead className="bg-gray-100 text-left text-sm font-medium">
                <tr>
                  <th scope="col" className="px-4 py-4 sm:pl-6">Sales ID</th>
                  <th scope="col" className="px-4 py-4">Salesman Name</th>
                  <th scope="col" className="px-4 py-4">PO Number</th>
                  <th scope="col" className="px-4 py-4">Status</th>
                  <th scope="col" className="px-4 py-4">Due Date</th>
                  <th scope="col" className="px-4 py-4">Project Name</th>
                  <th scope="col" className="px-4 py-4">Client ID</th>
                  <th scope="col" className="px-4 py-4">Vendor ID</th>
                  <th scope="col" className="px-4 py-4">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {projects?.map((project) => (
                  <tr
                    key={project.po}
                    className="border-b last:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                  >
                    <td className="whitespace-nowrap py-3 px-4 sm:pl-6">
                      {project.salesid}
                    </td>
                    <td className="whitespace-nowrap py-3 px-4">{project.name}</td>
                    <td className="whitespace-nowrap py-3 px-4">{project.po}</td>
                    <td className="whitespace-nowrap py-3 px-4">
                      <ProjectStatus status={project.status} />
                    </td>
                    <td className="whitespace-nowrap py-3 px-4">
                      {formatDateToLocal(project.due_date)}
                    </td>
                    <td className="whitespace-nowrap py-3 px-4">
                      {project.project_name}
                    </td>
                    <td className="whitespace-nowrap py-3 px-4">
                      {project.clientid}
                    </td>
                    <td className="whitespace-nowrap py-3 px-4">
                      {project.vendorid}
                    </td>
                    <td className="whitespace-nowrap py-3 px-4">
                      <div className="flex justify-end gap-3">
                        <UpdateProject id={project.po} />
                        <DeleteProject id={project.po} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );

}
