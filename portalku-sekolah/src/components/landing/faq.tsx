'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const faqs = [
  {
    q: 'Bagaimana cara mendaftar di SD Negeri Harapan Bangsa?',
    a: 'Pendaftaran dibuka setiap tahun ajaran baru. Anda dapat mengisi formulir di halaman kontak atau datang langsung ke sekolah dengan membawa dokumen persyaratan (KK, Akta Kelahiran, dll).',
  },
  {
    q: 'Berapa biaya pendidikan di sekolah ini?',
    a: 'Sebagai sekolah negeri, biaya operasional didukung pemerintah. Terdapat iuran komite sekolah yang bersifat sukarela dan transparan. Detail dapat ditanyakan ke bagian administrasi.',
  },
  {
    q: 'Apa saja fasilitas yang tersedia?',
    a: 'Ruang kelas ber-AC, perpustakaan digital, laboratorium komputer, lapangan olahraga, ruang UKS, mushola, kantin sehat, dan area bermain yang aman.',
  },
  {
    q: 'Apakah ada program ekstrakurikuler?',
    a: 'Ya, tersedia Pramuka, Tari, Futsal, Basket, Tahfidz, Robotik, dan English Club. Kegiatan dilaksanakan setelah jam pelajaran.',
  },
  {
    q: 'Bagaimana cara memantau perkembangan anak?',
    a: 'Orang tua dapat login ke Portal Orang Tua untuk melihat kehadiran, nilai, tugas, dan menerima notifikasi real-time. Juga tersedia laporan berkala dari wali kelas.',
  },
  {
    q: 'Apakah sekolah menyediakan transportasi?',
    a: 'Saat ini belum ada layanan bus sekolah resmi. Namun banyak orang tua yang bergabung dalam carpool community.',
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id='faq' className='py-20 sm:py-28 bg-white dark:bg-gray-950'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4'>
            Pertanyaan Umum
          </h2>
          <p className='text-gray-600 dark:text-gray-400'>
            Temukan jawaban atas pertanyaan yang sering diajukan
          </p>
        </div>

        <div className='space-y-3'>
          {faqs.map((faq, i) => (
            <div
              key={i}
              className='border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden'
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className='w-full flex items-center justify-between p-5 text-left font-medium text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors'
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={cn(
                    'h-5 w-5 shrink-0 text-gray-500 transition-transform',
                    open === i && 'rotate-180'
                  )}
                />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className='px-5 pb-5 text-gray-600 dark:text-gray-400 text-sm leading-relaxed'>
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
