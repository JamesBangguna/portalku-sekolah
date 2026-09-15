'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    name: 'Ibu Siti Aminah',
    role: 'Orang Tua Siswa Kelas 4',
    quote:
      'Anak saya sangat senang belajar di sini. Guru-gurunya perhatian dan komunikasinya dengan orang tua sangat baik melalui portal digital.',
  },
  {
    name: 'Bapak Andi Wijaya',
    role: 'Alumni 2018',
    quote:
      'Fondasi yang saya dapat di SDNHB sangat kuat. Saya bisa bersaing di SMP favorit berkat pendidikan karakter dan akademik yang solid.',
  },
  {
    name: 'Ibu Rina Kartika',
    role: 'Orang Tua Siswa Kelas 2',
    quote:
      'Fasilitas lengkap, lingkungan aman, dan program ekstrakurikuler yang beragam. Sangat recommended!',
  },
  {
    name: 'Bapak Dedi Prasetyo',
    role: 'Orang Tua Siswa Kelas 6',
    quote:
      'Transparansi nilai dan kehadiran melalui dashboard orang tua membuat saya tenang memantau perkembangan anak.',
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id='testimoni'
      className='py-20 sm:py-28 bg-gray-50 dark:bg-gray-900'
    >
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4'>
            Apa Kata Mereka
          </h2>
          <p className='text-gray-600 dark:text-gray-400'>
            Testimoni dari orang tua dan alumni
          </p>
        </div>

        <div className='max-w-2xl mx-auto relative'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className='bg-white dark:bg-gray-950 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-800'
            >
              <Quote className='h-8 w-8 text-amber-500 mb-4' />
              <p className='text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed'>
                &ldquo;{testimonials[index].quote}&rdquo;
              </p>
              <div>
                <p className='font-semibold text-gray-900 dark:text-white'>
                  {testimonials[index].name}
                </p>
                <p className='text-sm text-gray-500'>
                  {testimonials[index].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className='flex items-center justify-center gap-4 mt-6'>
            <Button
              variant='outline'
              size='icon'
              onClick={() =>
                setIndex(
                  (i) => (i - 1 + testimonials.length) % testimonials.length
                )
              }
            >
              <ChevronLeft className='h-4 w-4' />
            </Button>
            <div className='flex gap-2'>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all ${i === index ? 'w-6 bg-blue-600' : 'w-2 bg-gray-300 dark:bg-gray-600'}`}
                />
              ))}
            </div>
            <Button
              variant='outline'
              size='icon'
              onClick={() => setIndex((i) => (i + 1) % testimonials.length)}
            >
              <ChevronRight className='h-4 w-4' />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
