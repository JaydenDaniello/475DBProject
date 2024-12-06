"use client"

import { Project } from '@/app/lib/definitions';
import Link from 'next/link';
import moment from 'moment-timezone';

export default function CreateProjectForm({
  token,
}: {
  token: string;
}) {

  console.log("Create received token:", token);
  const handleSubmit = async (formData: FormData) => {
    console.log("Token before fetch: ", token);
    const updates: Partial<Project> = {
      salesid: parseInt(formData.get('salesid') as string, 10) || undefined,
      name: formData.get('name') as string,
      po: formData.get('po') as string,
      status: formData.get('status') as string,
      due_date: formData.get('due_date') ? moment(formData.get('due_date') as string).tz('America/New_York').format() : undefined,  // Convert to ISO string
      project_name: formData.get('project_name') as string,
      clientid: parseInt(formData.get('clientid') as string, 10) || undefined,
      vendorid: parseInt(formData.get('vendorid') as string, 10) || undefined,
    };

    try {

      const response = await fetch('/api/upsertProject', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ token, updates })
      });

      const result = await response.json();

      if (response.ok) {
        console.log('Update successful:', result);
        alert('Project updated successfully!');
      } else {
        console.error('Update failed:', result.error);
        alert('Error: ' + result.error);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An unexpected error occurred.');
    }
  };

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault(); // Prevent default form submission
        const formData = new FormData(e.currentTarget); // Collect form data
        await handleSubmit(formData); // Await handleSubmit asynchronously
      }}
    >
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Sales ID */}
        <div className="mb-4">
          <label htmlFor="salesid" className="mb-2 block text-sm font-medium">
            Sales ID
          </label>
          <input
            id="salesid"
            name="salesid"
            type="text"
            className="peer block w-full rounded-md border border-gray-200 py-2 px-3 text-sm outline-2 text-black placeholder:text-gray-500"
            placeholder="Enter Sales ID"
            required
          />
        </div>

        {/* Name */}
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="peer block w-full rounded-md border border-gray-200 py-2 px-3 text-sm outline-2 text-black placeholder:text-gray-500"
            placeholder="Enter Name"
            required
          />
        </div>

        {/* PO */}
        <div className="mb-4">
          <label htmlFor="po" className="mb-2 block text-sm font-medium">
            PO
          </label>
          <input
            id="po"
            name="po"
            type="text"
            className="peer block w-full rounded-md border border-gray-200 py-2 px-3 text-sm outline-2 text-black placeholder:text-gray-500"
            placeholder="Enter PO"
            required
          />
        </div>

        {/* Status */}
        <div className="mb-4">
          <label htmlFor="status" className="mb-2 block text-sm font-medium">
            Status
          </label>
          <input
            id="status"
            name="status"
            type="text"
            className="peer block w-full rounded-md border border-gray-200 py-2 px-3 text-sm outline-2 text-black placeholder:text-gray-500"
            placeholder="Enter Status (e.g., pending, open, close)"
            required
          />
        </div>

        {/* Due Date */}
        <div className="mb-4">
          <label htmlFor="due_date" className="mb-2 block text-sm font-medium">
            Due Date
          </label>
          <input
            id="due_date"
            name="due_date"
            type="text"
            className="peer block w-full rounded-md border border-gray-200 py-2 px-3 text-sm outline-2 text-black placeholder:text-gray-500"
            placeholder="Enter Due Date (YYYY-MM-DD)"
            required
          />
        </div>

        {/* Project Name */}
        <div className="mb-4">
          <label htmlFor="project_name" className="mb-2 block text-sm font-medium">
            Project Name
          </label>
          <input
            id="project_name"
            name="project_name"
            type="text"
            className="peer block w-full rounded-md border border-gray-200 py-2 px-3 text-sm outline-2 text-black placeholder:text-gray-500"
            placeholder="Enter Project Name"
            required
          />
        </div>

        {/* Client ID */}
        <div className="mb-4">
          <label htmlFor="clientid" className="mb-2 block text-sm font-medium">
            Client ID
          </label>
          <input
            id="clientid"
            name="clientid"
            type="text"
            className="peer block w-full rounded-md border border-gray-200 py-2 px-3 text-sm outline-2 text-black placeholder:text-gray-500"
            placeholder="Enter Client ID"
            required
          />
        </div>

        {/* Vendor ID */}
        <div className="mb-4">
          <label htmlFor="vendorid" className="mb-2 block text-sm font-medium">
            Vendor ID
          </label>
          <input
            id="vendorid"
            name="vendorid"
            type="text"
            className="peer block w-full rounded-md border border-gray-200 py-2 px-3 text-sm outline-2 text-black placeholder:text-gray-500"
            placeholder="Enter Vendor ID"
            required
          />
        </div>
      </div>

      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/home/manage"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <button
          type="submit"
          className="h-10 rounded-lg bg-blue-600 px-4 text-sm font-medium text-white hover:bg-blue-700"
        >
          Create Project
        </button>
      </div>

      {/*{error && <p className="mt-4 text-sm text-red-500">{error}</p>}*/}
    </form>
  );
}
