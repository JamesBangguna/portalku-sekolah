import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, GraduationCap, CalendarCheck, TrendingUp } from 'lucide-react';

const stats = [
  { label: 'Total Siswa', value: '482', icon: Users, color: 'text-blue-600' },
  {
    label: 'Total Guru',
    value: '28',
    icon: GraduationCap,
    color: 'text-amber-600',
  },
  {
    label: 'Kehadiran Hari Ini',
    value: '96%',
    icon: CalendarCheck,
    color: 'text-green-600',
  },
  {
    label: 'Rata-rata Nilai',
    value: '84.5',
    icon: TrendingUp,
    color: 'text-purple-600',
  },
];

export default function KepalaSekolahPage() {
  return (
    <div>
      <h1 className='text-2xl font-bold text-gray-900 dark:text-white mb-6'>
        Dashboard Kepala Sekolah
      </h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8'>
        {stats.map((s) => (
          <Card key={s.label}>
            <CardHeader className='flex flex-row items-center justify-between pb-2'>
              <CardTitle className='text-sm font-medium text-gray-500'>
                {s.label}
              </CardTitle>
              <s.icon className={`h-5 w-5 ${s.color}`} />
            </CardHeader>
            <CardContent>
              <p className='text-3xl font-bold text-gray-900 dark:text-white'>
                {s.value}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className='grid lg:grid-cols-2 gap-6'>
        <Card>
          <CardHeader>
            <CardTitle>Aktivitas Terbaru</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className='space-y-3 text-sm text-gray-600 dark:text-gray-400'>
              <li>• 12 pengajuan izin siswa menunggu approval</li>
              <li>• Laporan bulanan guru siap di-review</li>
              <li>• 3 pengumuman baru dipublikasikan minggu ini</li>
              <li>• Evaluasi kinerja semester ganjil dibuka</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Catatan</CardTitle>
          </CardHeader>
          <CardContent className='text-sm text-gray-600 dark:text-gray-400'>
            <p>
              Ini adalah skeleton dashboard. Fitur CRUD lengkap (siswa, guru,
              kelas, laporan PDF/Excel, grafik recharts, notifikasi) dapat
              dilanjutkan dari struktur ini. Gunakan Prisma Client di server
              components / API routes.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
