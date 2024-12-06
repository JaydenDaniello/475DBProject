"use client"

import { Project } from '@/app/lib/definitions';
import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { createProject } from '@/app/lib/actions';

import { useState } from "react";

export default function CreateProjectForm() {
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const formData = new FormData(e.currentTarget);

    try {
      await createProject(formData); // Call the server action
    } catch (err: any) {
      setError(err.message || "Failed to create invoice.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
            className="peer block w-full rounded-md border border-gray-200 py-2 px-3 text-sm outline-2 placeholder:text-gray-500"
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
            className="peer block w-full rounded-md border border-gray-200 py-2 px-3 text-sm outline-2 placeholder:text-gray-500"
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
            className="peer block w-full rounded-md border border-gray-200 py-2 px-3 text-sm outline-2 placeholder:text-gray-500"
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
            className="peer block w-full rounded-md border border-gray-200 py-2 px-3 text-sm outline-2 placeholder:text-gray-500"
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
            className="peer block w-full rounded-md border border-gray-200 py-2 px-3 text-sm outline-2 placeholder:text-gray-500"
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
            className="peer block w-full rounded-md border border-gray-200 py-2 px-3 text-sm outline-2 placeholder:text-gray-500"
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
            className="peer block w-full rounded-md border border-gray-200 py-2 px-3 text-sm outline-2 placeholder:text-gray-500"
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
            className="peer block w-full rounded-md border border-gray-200 py-2 px-3 text-sm outline-2 placeholder:text-gray-500"
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

      {error && <p className="mt-4 text-sm text-red-500">{error}</p>}
    </form>
  );
}
