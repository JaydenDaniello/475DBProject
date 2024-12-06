import UpdateFormPage from '@/app/ui/projects/edit-form';
import Breadcrumbs from '@/app/ui/projects/breadcrumbs';
import { fetchProjectByID } from '@/app/lib/data';
import { cookies } from 'next/headers';
import { Project } from '@/app/lib/definitions';
 
export default async function Page(props: { params: Promise<{ id: string }> }) {
        
    //Get token from cookie
    const cookieStore = cookies();
    const token = (await cookieStore).get('token')?.value;
    
    //Check token exists
    if (!token) throw new Error('No token found');
    
    const params = await props.params;
    const id = params.id;

    const projects = await fetchProjectByID('123-999999', token);
    if (!projects) throw new Error('No project found'); 


  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Manage', href: '/home/manage' },
          {
            label: 'Edit Project',
            href: `/home/manage/123-999999/edit`,
            active: true,
          },
        ]}
      />
      <UpdateFormPage projects={projects[0]} token={token} />
    </main>
  );
}
