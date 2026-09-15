'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { schoolInfo } from '@/lib/utils';
import { MessageCircle, ArrowRight } from 'lucide-react';

export function Hero() {
  const waUrl = `https://wa.me/${schoolInfo.whatsapp}?text=${encodeURIComponent(`Halo, saya tertarik dengan ${schoolInfo.name}. Mohon informasinya.`)}`;

  return (
    <section
      id='beranda'
      className='relative min-h-screen flex items-center justify-center overflow-hidden pt-16'
    >
      {/* Background gradient + blobs */}
      <div className='absolute inset-0 bg-linear-to-br from-blue-50 via-white to-amber-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950' />
      <div className='absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse' />
      <div className='absolute bottom-20 right-10 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl animate-pulse delay-1000' />

      <div className='container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-20'>
        <div className='max-w-4xl mx-auto text-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className='inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300'>
              Sekolah Dasar Unggulan
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-6'
          >
            <span className='gradient-text'>{schoolInfo.name}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className='text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-4 max-w-2xl mx-auto'
          >
            {schoolInfo.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className='text-base text-gray-500 dark:text-gray-400 mb-10 max-w-xl mx-auto'
          >
            Membentuk generasi cerdas, berkarakter, dan siap menghadapi masa
            depan dengan pendidikan berkualitas tinggi dan lingkungan belajar
            yang menyenangkan.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className='flex flex-col sm:flex-row items-center justify-center gap-4'
          >
            <Button asChild size='lg' className='w-full sm:w-auto text-base'>
              <Link href='#kontak'>
                Daftar Sekarang
                <ArrowRight className='ml-2 h-4 w-4' />
              </Link>
            </Button>
            <Button
              asChild
              variant='secondary'
              size='lg'
              className='w-full sm:w-auto text-base'
            >
              <a href={waUrl} target='_blank' rel='noopener noreferrer'>
                <MessageCircle className='mr-2 h-4 w-4' />
                Hubungi via WhatsApp
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
