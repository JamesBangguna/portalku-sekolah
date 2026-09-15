import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '@/lib/auth';
import { DashboardSidebar } from '@/components/dashboard/sidebar';

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect('/login');
  }

  const user = session.user as { role?: string; name?: string | null };
  const role = user.role || '';

  return (
    <div className='min-h-screen bg-gray-50 dark:bg-gray-900'>
      <DashboardSidebar role={role} userName={session.user.name} />
      <main className='lg:pl-64 pt-14 lg:pt-0 min-h-screen'>
        <div className='p-4 sm:p-6 lg:p-8'>{children}</div>
      </main>
    </div>
  );
}
