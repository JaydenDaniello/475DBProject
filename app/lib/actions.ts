'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function deleteProject(id: string) {
    try {
      await sql`DELETE FROM projects WHERE po = ${id}`;
      revalidatePath('/home/manage');
      return { message: 'Deleted Project.' };
    } catch (error) {
      return { message: 'Database Error: Failed to Delete Invoice.' };
    }
  }