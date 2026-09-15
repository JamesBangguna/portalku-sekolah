'use client';

const items = [
  'Akreditasi A',
  'ISO 9001',
  'Sekolah Adiwiyata',
  'Juara Olimpiade Sains',
  'Mitra Kemendikbud',
  'Fasilitas Modern',
  'Guru Bersertifikat',
  'Program Tahfidz',
];

export function Marquee() {
  const doubled = [...items, ...items];

  return (
    <section className='py-8 bg-linear-to-r from-blue-700 via-blue-600 to-amber-500 overflow-hidden'>
      <div className='flex animate-marquee whitespace-nowrap'>
        {doubled.map((item, i) => (
          <span
            key={i}
            className='mx-8 text-white/90 font-semibold text-sm sm:text-base tracking-wide'
          >
            ★ {item}
          </span>
        ))}
      </div>
    </section>
  );
}
