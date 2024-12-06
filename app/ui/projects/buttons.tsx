"use client";

import { deleteProject } from '@/app/lib/actions';
import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export function CreateProject() {
    return (
        <Link
            href="home/manage/create"
            className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
            <span className="hidden md:block">Create Project</span>{' '}
            <PlusIcon className="h-5 md:ml-4" />
        </Link>
    );
}

export function UpdateProject({ id }: { id: string }) {
    return (
      <Link
        href={`/home/manage/${id}/edit`}
        className="rounded-md border p-2 hover:bg-gray-100"
      >
        <PencilIcon className="w-5" />
      </Link>
    );
  }

  export function DeleteProject({ id }: { id: string }) {
    // Prebind the ID to the delete function
    const deleteProjectWithID = deleteProject.bind(null, id);

    // Handle form submission on the client side
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await deleteProjectWithID(); // Call the bound function
    };

    return (
        <form onSubmit={handleSubmit}>
            <button className="rounded-md border p-2 hover:bg-gray-100">
                <span className="sr-only">Delete</span>
                <TrashIcon className="w-5" />
            </button>
        </form>
    );
}


  /*export function DeleteProject({ id }: { id: string }) {
    
    const deleteProjectWithID = (FormData: FormData) => {
      return deleteProject(id).then(() => {});
    };
    return (
      <form action={deleteProjectWithID}>
        <button className="rounded-md border p-2 hover:bg-gray-100">
          <span className="sr-only">Delete</span>
          <TrashIcon className="w-5" />
        </button>
      </form>
    );
  }*/

  /*
  export function DeleteInvoice({ id }: { id: string }) {
    const deleteInvoiceWithId = deleteInvoice.bind(null, id);
    return (
      <form action={deleteInvoiceWithId}>
        <button className="rounded-md border p-2 hover:bg-gray-100">
          <span className="sr-only">Delete</span>
          <TrashIcon className="w-5" />
        </button>
      </form>
    );
  }*/

    /*async function deleteProjectWithID(formData: FormData) {
        await deleteProject(id);
    }*/