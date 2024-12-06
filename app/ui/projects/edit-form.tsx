'use client';

import { Project, ProjectForm } from '@/app/lib/definitions';
import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { upsertProject } from '@/app/lib/data';

export default function UpdateFormPage({
  projects,
  token,
}: {
  projects: Project;
  token: string;
}) {

    const upsertProjectWithPOAndToken = upsertProject.bind(null, projects.po,projects, token);

  const handleSubmit = (formData: FormData) => {
    try {
      // Create an updates object from FormData
      const updates: Partial<Project> = {
        salesid: parseInt(formData.get('salesid') as string, 10) || undefined,
        name: formData.get('name') as string,
        po: formData.get('po') as string,
        status: formData.get('status') as string,
        due_date: formData.get('due_date') as string,
        project_name: formData.get('project_name') as string,
        clientid: parseInt(formData.get('clientid') as string, 10) || undefined,
        vendorid: parseInt(formData.get('vendorid') as string, 10) || undefined,
      };

      console.log('Submitting updates:', updates);

      // Call the pre-bound upsertProject function
      const result = upsertProjectWithPOAndToken(updates);
      
      console.log('Update result:', result);
    } catch (error) {
      console.error('Error updating project:', error);
      throw new Error('Failed to update project.');
    }
  };
    
      return (
        <form action={handleSubmit}>
          <div className="rounded-md bg-gray-50 p-4 md:p-6">
            {/* Sales ID */}
            <div className="mb-4 text-gray-500">
              <label htmlFor="salesid" className="mb-2 block text-sm text-black font-medium">
                Sales ID
              </label>
              <input
                id="salesid"
                name="salesid"
                type="text"
                className="peer block w-full rounded-md border border-gray-200 py-2 px-3 text-sm outline-2 placeholder:text-gray-600"
                placeholder="Enter Sales ID"
                defaultValue={projects.salesid || ''}
              />
            </div>
    
            {/* Name */}
            <div className="mb-4 text-gray-500">
              <label htmlFor="name" className="mb-2 block text-sm text-black font-medium">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="peer block w-full rounded-md border border-gray-200 py-2 px-3 text-sm outline-2 placeholder:text-gray-400"
                placeholder="Enter Name"
                defaultValue={projects.name || ''}
              />
            </div>
    
            {/* PO */}
            <div className="mb-4 text-gray-500">
              <label htmlFor="po" className="mb-2 block text-sm text-black font-medium">
                PO
              </label>
              <input
                id="po"
                name="po"
                type="text"
                className="peer block w-full rounded-md border border-gray-200 py-2 px-3 text-sm outline-2 placeholder:text-gray-400"
                placeholder="Enter PO"
                defaultValue={projects.po || ''}
              />
            </div>
    
            {/* Status */}
            <div className="mb-4 text-gray-500">
              <label htmlFor="status" className="mb-2 block text-sm text-black font-medium">
                Status
              </label>
              <input
                id="status"
                name="status"
                type="text"
                className="peer block w-full rounded-md border border-gray-200 py-2 px-3 text-sm outline-2 placeholder:text-gray-400"
                placeholder="Enter Status (e.g., pending, open, close)"
                defaultValue={projects.status || ''}
              />
            </div>
    
            {/* Due Date */}
            <div className="mb-4 text-gray-500">
              <label htmlFor="due_date" className="mb-2 block text-sm text-black font-medium">
                Due Date
              </label>
              <input
                id="due_date"
                name="due_date"
                type="text"
                className="peer block w-full rounded-md border border-gray-200 py-2 px-3 text-sm outline-2 placeholder:text-gray-400"
                placeholder="Enter Due Date (YYYY-MM-DD)"
                defaultValue={projects.due_date || ''}
              />
            </div>
    
            {/* Project Name */}
            <div className="mb-4 text-gray-500">
              <label htmlFor="project_name" className="mb-2 block text-sm text-black font-medium">
                Project Name
              </label>
              <input
                id="project_name"
                name="project_name"
                type="text"
                className="peer block w-full rounded-md border border-gray-200 py-2 px-3 text-sm outline-2 placeholder:text-gray-400"
                placeholder="Enter Project Name"
                defaultValue={projects.project_name || ''}
              />
            </div>
    
            {/* Client ID */}
            <div className="mb-4 text-gray-500">
              <label htmlFor="clientid" className="mb-2 block text-black text-sm font-medium">
                Client ID
              </label>
              <input
                id="clientid"
                name="clientid"
                type="number"
                className="peer block w-full rounded-md border border-gray-200 py-2 px-3 text-sm outline-2 placeholder:text-gray-400"
                placeholder="Enter Client ID"
                defaultValue={projects.clientid || ''}
              />
            </div>
    
            {/* Vendor ID */}
            <div className="mb-4 text-gray-500">
              <label htmlFor="vendorid" className="mb-2 block text-black text-sm font-medium">
                Vendor ID
              </label>
              <input
                id="vendorid"
                name="vendorid"
                type="number"
                className="peer block w-full rounded-md border border-gray-200 py-2 px-3 text-sm outline-2 placeholder:text-gray-400"
                placeholder="Enter Vendor ID"
                defaultValue={projects.vendorid || ''}
              />
            </div>
          </div>
    
          <div className="mt-6 flex justify-end gap-4">
            <Link
              href="/home/manage"
              className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-black transition-colors hover:bg-gray-200"
            >
              Cancel
            </Link>
            <Button type="submit">Edit Project</Button>
          </div>
        </form>
      );
}
