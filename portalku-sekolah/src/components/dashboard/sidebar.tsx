'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { signOut } from 'next-auth/react';
import {
  LayoutDashboard,
  Users,
  BookOpen,
  Calendar,
  FileText,
  Bell,
  LogOut,
  GraduationCap,
  ClipboardList,
  MessageSquare,
  BarChart3,
  Menu,
  X,
} from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toogle';

type NavItem = { href: string; label: string; icon: React.ElementType };

const navByRole: Record<string, NavItem[]> = {
  KEPALA_SEKOLAH: [
    { href: '/kepala-sekolah', label: 'Overview', icon: LayoutDashboard },
    { href: '/kepala-sekolah/siswa', label: 'Data Siswa', icon: Users },
    { href: '/kepala-sekolah/guru', label: 'Data Guru', icon: GraduationCap },
    { href: '/kepala-sekolah/laporan', label: 'Laporan', icon: BarChart3 },
    { href: '/kepala-sekolah/pengumuman', label: 'Pengumuman', icon: Bell },
  ],
  GURU: [
    { href: '/guru', label: 'Overview', icon: LayoutDashboard },
    { href: '/guru/materi', label: 'Bahan Ajar', icon: BookOpen },
    { href: '/guru/kelas', label: 'Manajemen Kelas', icon: Users },
    { href: '/guru/presensi', label: 'Presensi', icon: ClipboardList },
    { href: '/guru/tugas', label: 'Tugas & Nilai', icon: FileText },
    { href: '/guru/jadwal', label: 'Jadwal', icon: Calendar },
  ],
  ORANG_TUA: [
    { href: '/orang-tua', label: 'Overview', icon: LayoutDashboard },
    { href: '/orang-tua/kehadiran', label: 'Kehadiran', icon: ClipboardList },
    { href: '/orang-tua/nilai', label: 'Nilai & Rapor', icon: BarChart3 },
    { href: '/orang-tua/tugas', label: 'Tugas Anak', icon: FileText },
    { href: '/orang-tua/pesan', label: 'Pesan Guru', icon: MessageSquare },
  ],
};

export function DashboardSidebar({
  role,
  userName,
}: {
  role: string;
  userName?: string | null;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const items = navByRole[role] || [];

  const SidebarContent = () => (
    <div className='flex flex-col h-full'>
      <div className='p-4 border-b border-gray-200 dark:border-gray-800'>
        <div className='flex items-center gap-2'>
          <div className='h-9 w-9 rounded-lg bg-linear-to-br from-blue-700 to-amber-500 flex items-center justify-center text-white'>
            <GraduationCap className='h-5 w-5' />
          </div>
          <div>
            <p className='font-semibold text-sm text-gray-900 dark:text-white truncate max-w-140px'>
              {userName || 'User'}
            </p>
            <p className='text-xs text-gray-500 capitalize'>
              {role.replace('_', ' ').toLowerCase()}
            </p>
          </div>
        </div>
      </div>

      <nav className='flex-1 p-3 space-y-1 overflow-y-auto'>
        {items.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors',
                active
                  ? 'bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300'
                  : 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-900'
              )}
            >
              <item.icon className='h-4 w-4 shrink-0' />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className='p-3 border-t border-gray-200 dark:border-gray-800 space-y-2'>
        <div className='flex items-center justify-between px-2'>
          <ThemeToggle />
        </div>
        <Button
          variant='ghost'
          className='w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-950/30'
          onClick={() => signOut({ callbackUrl: '/login' })}
        >
          <LogOut className='h-4 w-4 mr-2' />
          Keluar
        </Button>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile toggle */}
      <div className='lg:hidden fixed top-0 left-0 right-0 z-40 h-14 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 flex items-center px-4'>
        <Button variant='ghost' size='icon' onClick={() => setOpen(!open)}>
          {open ? <X className='h-5 w-5' /> : <Menu className='h-5 w-5' />}
        </Button>
        <span className='ml-3 font-semibold text-sm'>Dashboard</span>
      </div>

      {/* Mobile overlay */}
      {open && (
        <div
          className='lg:hidden fixed inset-0 z-40 bg-black/40'
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed top-0 left-0 z-50 h-full w-64 bg-white dark:bg-gray-950 border-r border-gray-200 dark:border-gray-800 transition-transform lg:translate-x-0',
          open ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <SidebarContent />
      </aside>
    </>
  );
}
