'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toogle';
import { schoolInfo } from '@/lib/utils';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#beranda', label: 'Beranda' },
  { href: '#tentang', label: 'Tentang' },
  { href: '#program', label: 'Program' },
  { href: '#testimoni', label: 'Testimoni' },
  { href: '#faq', label: 'FAQ' },
  { href: '#kontak', label: 'Kontak' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/80 dark:bg-gray-950/80 backdrop-blur-md shadow-sm border-b border-gray-200/50 dark:border-gray-800/50'
          : 'bg-transparent'
      )}
    >
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex h-16 items-center justify-between'>
          {/* Logo */}
          <Link href='/' className='flex items-center gap-2 font-bold text-lg'>
            <div className='flex h-9 w-9 items-center justify-center rounded-lg bg-linear-to-br from-blue-700 to-amber-500 text-white'>
              <GraduationCap className='h-5 w-5' />
            </div>
            <span className='hidden sm:inline gradient-text'>
              {schoolInfo.shortName}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className='hidden md:flex items-center gap-1'>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className='px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-400 transition-colors'
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className='flex items-center gap-2'>
            <ThemeToggle />
            <Button asChild size='sm' className='hidden sm:inline-flex'>
              <Link href='/login'>Masuk</Link>
            </Button>

            {/* Mobile menu button */}
            <Button
              variant='ghost'
              size='icon'
              className='md:hidden'
              onClick={() => setIsOpen(!isOpen)}
              aria-label='Toggle menu'
            >
              {isOpen ? (
                <X className='h-5 w-5' />
              ) : (
                <Menu className='h-5 w-5' />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className='md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950'
          >
            <nav className='container mx-auto px-4 py-4 flex flex-col gap-1'>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className='px-3 py-3 text-sm font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900'
                >
                  {link.label}
                </a>
              ))}
              <Button asChild className='mt-2'>
                <Link href='/login' onClick={() => setIsOpen(false)}>
                  Masuk ke Portal
                </Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
