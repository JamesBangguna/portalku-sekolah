import Link from 'next/link';
import { GraduationCap, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { schoolInfo } from '@/lib/utils';

export function Footer() {
  return (
    <footer className='bg-gray-900 text-gray-300'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
          {/* Brand */}
          <div>
            <div className='flex items-center gap-2 mb-4'>
              <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-br from-blue-600 to-amber-500 text-white'>
                <GraduationCap className='h-5 w-5' />
              </div>
              <span className='font-bold text-white text-lg'>
                {schoolInfo.name}
              </span>
            </div>
            <p className='text-sm text-gray-400 mb-4'>{schoolInfo.tagline}</p>
          </div>

          {/* Contact */}
          <div>
            <h3 className='font-semibold text-white mb-4'>Kontak</h3>
            <ul className='space-y-3 text-sm'>
              <li className='flex items-start gap-2'>
                <MapPin className='h-4 w-4 mt-0.5 shrink-0 text-amber-500' />
                {schoolInfo.address}
              </li>
              <li className='flex items-center gap-2'>
                <Phone className='h-4 w-4 shrink-0 text-amber-500' />
                {schoolInfo.phone}
              </li>
              <li className='flex items-center gap-2'>
                <Mail className='h-4 w-4 shrink-0 text-amber-500' />
                {schoolInfo.email}
              </li>
              <li className='flex items-center gap-2'>
                <Clock className='h-4 w-4 shrink-0 text-amber-500' />
                {schoolInfo.operationalHours}
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className='font-semibold text-white mb-4'>Tautan Cepat</h3>
            <ul className='space-y-2 text-sm'>
              <li>
                <a
                  href='#beranda'
                  className='hover:text-amber-400 transition-colors'
                >
                  Beranda
                </a>
              </li>
              <li>
                <a
                  href='#tentang'
                  className='hover:text-amber-400 transition-colors'
                >
                  Tentang
                </a>
              </li>
              <li>
                <a
                  href='#faq'
                  className='hover:text-amber-400 transition-colors'
                >
                  FAQ
                </a>
              </li>
              <li>
                <Link
                  href='/login'
                  className='hover:text-amber-400 transition-colors'
                >
                  Portal Login
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className='border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500'>
          © {new Date().getFullYear()} {schoolInfo.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
