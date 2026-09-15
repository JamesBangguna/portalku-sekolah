'use client';

import { MessageCircle } from 'lucide-react';
import { schoolInfo } from '@/lib/utils';

export function FloatingWA() {
  const url = `https://wa.me/${schoolInfo.whatsapp}?text=${encodeURIComponent(`Halo ${schoolInfo.name}, saya ingin bertanya.`)}`;

  return (
    <a
      href={url}
      target='_blank'
      rel='noopener noreferrer'
      className='fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-colors wa-float'
      aria-label='Chat WhatsApp'
    >
      <MessageCircle className='h-7 w-7' />
    </a>
  );
}
