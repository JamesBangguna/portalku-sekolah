import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Users, ClipboardList, FileText } from 'lucide-react';

const stats = [
  { label: 'Kelas Diampu', value: '3', icon: Users },
  { label: 'Materi Aktif', value: '24', icon: BookOpen },
  { label: 'Tugas Pending', value: '7', icon: FileText },
  { label: 'Presensi Hari Ini', value: '2/3', icon: ClipboardList },
];

export default function GuruPage() {
  return (
    <div>
      <h1 className='text-2xl font-bold text-gray-900 dark:text-white mb-6'>
        Dashboard Guru
      </h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8'>
        {stats.map((s) => (
          <Card key={s.label}>
            <CardHeader className='flex flex-row items-center justify-between pb-2'>
              <CardTitle className='text-sm font-medium text-gray-500'>
                {s.label}
              </CardTitle>
              <s.icon className='h-5 w-5 text-blue-600' />
            </CardHeader>
            <CardContent>
              <p className='text-3xl font-bold'>{s.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Jadwal Mengajar Hari Ini</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='space-y-3'>
            {[
              { time: '07:30 - 08:40', subject: 'Matematika', class: '4A' },
              { time: '09:00 - 10:10', subject: 'Matematika', class: '5B' },
              { time: '10:30 - 11:40', subject: 'Matematika', class: '6A' },
            ].map((j) => (
              <div
                key={j.time}
                className='flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-900'
              >
                <div>
                  <p className='font-medium'>
                    {j.subject} — {j.class}
                  </p>
                  <p className='text-sm text-gray-500'>{j.time}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
