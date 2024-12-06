'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { ProjectForm } from './definitions';

const FormSchema = z.object({
  salesid: z.coerce.number(),
  name: z.string(),
  po: z.string(),
  status: z.string(),
  due_date: z.string(),
  project_name: z.string(),
  clientid: z.coerce.number(),
  vendorid: z.coerce.number(),
});

export async function deleteProject(id: string) {
    try {
      await sql`DELETE FROM projects WHERE po = ${id}`;
      revalidatePath('/home/manage');
      return { message: 'Deleted Project.' };
    } catch (error) {
      return { message: 'Database Error: Failed to Delete Invoice.' };
    }
  }

  const CreateInvoice = FormSchema;

  export async function createProject(formData: FormData) {
      const { salesid, name, po, status, due_date, project_name, clientid, vendorid } = CreateInvoice.parse({
          salesid: formData.get('salesid'),
          name: formData.get('name'),
          po: formData.get('po'),
          status: formData.get('status'),
          due_date: formData.get('due_date'),
          project_name: formData.get('project_name'),
          clientid: formData.get('clientid'),
          vendorid: formData.get('vendorid')
        });
  
      await sql`
          INSERT INTO projects (salesid, name, po, status, due_date, project_name, clientid, vendorid)
          VALUES (${salesid}, ${name}, ${po}, ${status}, ${due_date}, ${project_name}, ${clientid}, ${vendorid} )
          `;
  
      revalidatePath('/home/manage');
      redirect('/home/manage');
    }

    const NewProject = FormSchema;

    export async function updateProject(id: string, formData: FormData) {
      const { salesid, name, po, status, due_date, project_name, clientid, vendorid } = NewProject.parse({
          salesid: formData.get('salesid'),
          name: formData.get('name'),
          po: formData.get('po'),
          status: formData.get('status'),
          due_date: formData.get('due_date'),
          project_name: formData.get('project_name'),
          clientid: formData.get('clientid'),
          vendorid: formData.get('vendorid')
      });
     
      await sql`UPDATE projects SET name = ${name} WHERE po = ${id}`;
     
      revalidatePath('/home/manage');
      redirect('/home/manage');
    }
    