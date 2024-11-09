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
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {projects?.map((project) => (
              <div
                key={project.po}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <p>{project.name}</p>
                    </div>
                    <p className="text-sm text-gray-500">{project.project_name}</p>
                  </div>
                  <ProjectStatus status={project.status} />
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p>{formatDateToLocal(project.due_date)}</p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <UpdateProject id={project.po} />
                    <DeleteProject id={project.po} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Project Lead
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Project Name
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Due Date
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Status
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {projects?.map((project) => (
                <tr
                  key={project.po}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <p>{project.name}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {project.project_name}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatDateToLocal(project.due_date)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <ProjectStatus status={project.status} />
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
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
  );
}
