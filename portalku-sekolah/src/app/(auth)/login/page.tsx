'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { GraduationCap, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { schoolInfo } from '@/lib/utils';

const roles = [
  {
    value: 'KEPALA_SEKOLAH',
    label: 'Kepala Sekolah',
    color: 'from-purple-600 to-indigo-600',
  },
  { value: 'GURU', label: 'Guru', color: 'from-blue-600 to-cyan-600' },
  {
    value: 'ORANG_TUA',
    label: 'Orang Tua',
    color: 'from-amber-500 to-orange-500',
  },
];

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl');

  const [role, setRole] = useState('GURU');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await signIn('credentials', {
        email,
        password,
        role,
        redirect: false,
      });

      if (res?.error) {
        setError('Email atau password salah, atau role tidak sesuai.');
        setLoading(false);
        return;
      }

      // Redirect based on role
      const dest =
        role === 'KEPALA_SEKOLAH'
          ? '/kepala-sekolah'
          : role === 'GURU'
            ? '/guru'
            : '/orang-tua';

      router.push(callbackUrl || dest);
      router.refresh();
    } catch {
      setError('Terjadi kesalahan. Coba lagi.');
      setLoading(false);
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 via-white to-amber-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950 p-4'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className='w-full max-w-md'
      >
        <div className='text-center mb-8'>
          <Link href='/' className='inline-flex items-center gap-2 mb-4'>
            <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-blue-700 to-amber-500 text-white'>
              <GraduationCap className='h-6 w-6' />
            </div>
          </Link>
          <h1 className='text-2xl font-bold text-gray-900 dark:text-white'>
            Portal Sekolah
          </h1>
          <p className='text-gray-500 dark:text-gray-400 text-sm mt-1'>
            {schoolInfo.name}
          </p>
        </div>

        <div className='bg-white dark:bg-gray-950 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 p-6 sm:p-8'>
          {/* Role selector */}
          <div className='grid grid-cols-3 gap-2 mb-6'>
            {roles.map((r) => (
              <button
                key={r.value}
                type='button'
                onClick={() => setRole(r.value)}
                className={`py-2.5 px-1 text-xs sm:text-sm font-medium rounded-lg transition-all ${
                  role === r.value
                    ? `bg-linear-to-r ${r.color} text-white shadow`
                    : 'bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800'
                }`}
              >
                {r.label}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className='space-y-4'>
            <div>
              <label className='block text-sm font-medium mb-1.5'>Email</label>
              <Input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='email@sekolah.sch.id'
                required
              />
            </div>
            <div>
              <label className='block text-sm font-medium mb-1.5'>
                Password
              </label>
              <Input
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='••••••••'
                required
              />
            </div>

            {error && (
              <p className='text-sm text-red-500 bg-red-50 dark:bg-red-950/30 p-3 rounded-lg'>
                {error}
              </p>
            )}

            <Button
              type='submit'
              className='w-full'
              size='lg'
              disabled={loading}
            >
              {loading ? <Loader2 className='h-4 w-4 animate-spin' /> : 'Masuk'}
            </Button>
          </form>

          <p className='text-center text-xs text-gray-500 mt-6'>
            Demo: gunakan akun seed (lihat README)
          </p>
        </div>

        <p className='text-center text-sm text-gray-500 mt-6'>
          <Link href='/' className='hover:text-blue-600'>
            ← Kembali ke Beranda
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
