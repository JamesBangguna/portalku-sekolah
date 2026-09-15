import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, FileText, TrendingUp, Bell } from 'lucide-react';

export default function OrangTuaPage() {
  return (
    <div>
      <h1 className='text-2xl font-bold text-gray-900 dark:text-white mb-2'>
        Dashboard Orang Tua
      </h1>
      <p className='text-gray-500 mb-6'>
        Memantau perkembangan: <strong>Ahmad Fauzan</strong> (Kelas 4A)
      </p>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8'>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between pb-2'>
            <CardTitle className='text-sm font-medium text-gray-500'>
              Status Hari Ini
            </CardTitle>
            <CheckCircle className='h-5 w-5 text-green-600' />
          </CardHeader>
          <CardContent>
            <p className='text-2xl font-bold text-green-600'>Hadir</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between pb-2'>
            <CardTitle className='text-sm font-medium text-gray-500'>
              Tugas Pending
            </CardTitle>
            <FileText className='h-5 w-5 text-amber-600' />
          </CardHeader>
          <CardContent>
            <p className='text-2xl font-bold'>2</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between pb-2'>
            <CardTitle className='text-sm font-medium text-gray-500'>
              Rata-rata Nilai
            </CardTitle>
            <TrendingUp className='h-5 w-5 text-blue-600' />
          </CardHeader>
          <CardContent>
            <p className='text-2xl font-bold'>87.5</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between pb-2'>
            <CardTitle className='text-sm font-medium text-gray-500'>
              Notifikasi
            </CardTitle>
            <Bell className='h-5 w-5 text-red-500' />
          </CardHeader>
          <CardContent>
            <p className='text-2xl font-bold'>3 baru</p>
          </CardContent>
        </Card>
      </div>

      <div className='grid lg:grid-cols-2 gap-6'>
        <Card>
          <CardHeader>
            <CardTitle>Nilai Terbaru</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className='space-y-2 text-sm'>
              <li className='flex justify-between'>
                <span>Matematika (UH)</span>
                <span className='font-semibold'>90</span>
              </li>
              <li className='flex justify-between'>
                <span>Bahasa Indonesia (Tugas)</span>
                <span className='font-semibold'>85</span>
              </li>
              <li className='flex justify-between'>
                <span>IPA (UTS)</span>
                <span className='font-semibold'>88</span>
              </li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Tugas Mendatang</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className='space-y-2 text-sm text-gray-600 dark:text-gray-400'>
              <li>• PR Matematika — Deadline: Senin, 15 Sep</li>
              <li>• Essay Bahasa Indonesia — Deadline: Rabu, 17 Sep</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
