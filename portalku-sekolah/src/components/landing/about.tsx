'use client';

import { motion } from 'framer-motion';
import { schoolInfo } from '@/lib/utils';

const milestones = [
  {
    year: '1998',
    title: 'Berdiri',
    desc: 'SD Negeri Harapan Bangsa didirikan dengan 3 ruang kelas.',
  },
  {
    year: '2005',
    title: 'Akreditasi B',
    desc: 'Mendapatkan akreditasi B dari BAN-S/M.',
  },
  {
    year: '2012',
    title: 'Akreditasi A',
    desc: 'Naik peringkat menjadi Akreditasi A.',
  },
  {
    year: '2018',
    title: 'Sekolah Adiwiyata',
    desc: 'Menjadi Sekolah Adiwiyata tingkat nasional.',
  },
  {
    year: '2023',
    title: 'Digitalisasi',
    desc: 'Implementasi sistem pembelajaran digital & e-rapor.',
  },
  {
    year: '2025',
    title: 'Transformasi',
    desc: 'Peluncuran portal digital untuk orang tua & guru.',
  },
];

export function About() {
  return (
    <section id='tentang' className='py-20 sm:py-28 bg-white dark:bg-gray-950'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='max-w-3xl mx-auto text-center mb-16'
        >
          <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4'>
            Tentang Kami
          </h2>
          <p className='text-gray-600 dark:text-gray-400 text-lg'>
            {schoolInfo.name} berkomitmen memberikan pendidikan terbaik yang
            mengintegrasikan akademik, karakter, dan keterampilan abad 21. Visi
            kami adalah menjadi sekolah dasar unggulan yang menghasilkan lulusan
            berprestasi dan berakhlak mulia.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className='relative max-w-3xl mx-auto'>
          <div className='absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-blue-600 to-amber-500' />
          {milestones.map((m, i) => (
            <motion.div
              key={m.year}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex items-start mb-10 ${i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}
            >
              <div className='absolute left-4 sm:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-amber-500 border-4 border-white dark:border-gray-950 z-10' />
              <div
                className={`ml-12 sm:ml-0 sm:w-1/2 ${i % 2 === 0 ? 'sm:pr-12 sm:text-right' : 'sm:pl-12'}`}
              >
                <span className='inline-block px-3 py-1 text-sm font-bold rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 mb-2'>
                  {m.year}
                </span>
                <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
                  {m.title}
                </h3>
                <p className='text-gray-600 dark:text-gray-400 text-sm mt-1'>
                  {m.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
