import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const schoolInfo = {
  name: 'SD Negeri Harapan Bangsa',
  shortName: 'SDNHB',
  jenjang: 'SD',
  tagline: 'Membangun Generasi Cerdas dan Berkarakter',
  address: 'Jl. Pendidikan No. 45, Jakarta Selatan',
  phone: '021-12345678',
  whatsapp: '6281234567890',
  email: 'info@sdnharapanbangsa.sch.id',
  operationalHours: 'Senin - Jumat: 07.00 - 15.00 WIB',
  colors: {
    primary: '#1e40af', // blue-800
    secondary: '#f59e0b', // amber-500 (emas)
    accent: '#3b82f6',
  },
  social: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    youtube: 'https://youtube.com',
  },
};
