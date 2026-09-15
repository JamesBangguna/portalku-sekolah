'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { schoolInfo } from '@/lib/utils';
import { Send } from 'lucide-react';

const schema = z.object({
  name: z.string().min(2, 'Nama minimal 2 karakter'),
  email: z.string().email('Email tidak valid'),
  whatsapp: z.string().min(10, 'Nomor WhatsApp tidak valid'),
  message: z.string().min(10, 'Pesan minimal 10 karakter'),
});

type FormData = z.infer<typeof schema>;

export function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    const text = `Halo ${schoolInfo.name},\n\nNama: ${data.name}\nEmail: ${data.email}\nWhatsApp: ${data.whatsapp}\n\nPesan:\n${data.message}`;
    const url = `https://wa.me/${schoolInfo.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section
      id='kontak'
      className='py-20 sm:py-28 bg-linear-to-br from-blue-50 to-amber-50 dark:from-gray-900 dark:to-gray-950'
    >
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='max-w-xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center mb-10'
          >
            <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4'>
              Hubungi Kami
            </h2>
            <p className='text-gray-600 dark:text-gray-400'>
              Ada pertanyaan? Kirim pesan dan kami akan segera merespons via
              WhatsApp.
            </p>
          </motion.div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className='bg-white dark:bg-gray-950 rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 dark:border-gray-800 space-y-5'
          >
            <div>
              <label className='block text-sm font-medium mb-1.5'>
                Nama Lengkap
              </label>
              <Input {...register('name')} placeholder='Nama Anda' />
              {errors.name && (
                <p className='text-red-500 text-xs mt-1'>
                  {errors.name.message}
                </p>
              )}
            </div>
            <div>
              <label className='block text-sm font-medium mb-1.5'>Email</label>
              <Input
                type='email'
                {...register('email')}
                placeholder='email@contoh.com'
              />
              {errors.email && (
                <p className='text-red-500 text-xs mt-1'>
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <label className='block text-sm font-medium mb-1.5'>
                No. WhatsApp
              </label>
              <Input {...register('whatsapp')} placeholder='08xxxxxxxxxx' />
              {errors.whatsapp && (
                <p className='text-red-500 text-xs mt-1'>
                  {errors.whatsapp.message}
                </p>
              )}
            </div>
            <div>
              <label className='block text-sm font-medium mb-1.5'>Pesan</label>
              <textarea
                {...register('message')}
                rows={4}
                className='flex w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-gray-700 dark:bg-gray-900'
                placeholder='Tulis pesan Anda...'
              />
              {errors.message && (
                <p className='text-red-500 text-xs mt-1'>
                  {errors.message.message}
                </p>
              )}
            </div>
            <Button
              type='submit'
              className='w-full'
              size='lg'
              disabled={isSubmitting}
            >
              <Send className='mr-2 h-4 w-4' />
              Kirim via WhatsApp
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
