import { Navbar } from '@/components/landing/navbar';
import { Hero } from '@/components/landing/hero';
import { Marquee } from '@/components/landing/marquee';
import { About } from '@/components/landing/about';
import { Testimonials } from '@/components/landing/testimonials';
import { FAQ } from '@/components/landing/faq';
import { Contact } from '@/components/landing/contact';
import { Footer } from '@/components/landing/footer';
import { FloatingWA } from '@/components/landing/floating-wa';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        {/* Program section placeholder */}
        <section id='program' className='py-20 bg-white dark:bg-gray-950'>
          <div className='container mx-auto px-4 text-center'>
            <h2 className='text-3xl font-bold mb-4 text-gray-900 dark:text-white'>
              Program Unggulan
            </h2>
            <p className='text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10'>
              Kurikulum merdeka, program literasi & numerasi, STEM, pendidikan
              karakter, dan ekstrakurikuler beragam.
            </p>
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto'>
              {[
                'Kurikulum Merdeka',
                'STEM & Robotik',
                'Tahfidz & Karakter',
                'Ekstrakurikuler',
              ].map((p) => (
                <div
                  key={p}
                  className='p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900'
                >
                  <h3 className='font-semibold text-gray-900 dark:text-white'>
                    {p}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWA />
    </>
  );
}
