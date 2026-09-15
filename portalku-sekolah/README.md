🚀**aplikasi web sekolah**
Aplikasi Web Sekolah menggunakan **Next.js (App Router), TypeScript, Tailwind CSS, shadcn/ui, dan Framer Motion**, terdiri dari **1 halaman utama (landing page publik)** dan **3 halaman dashboard khusus** dengan sistem login berbeda untuk masing-masing role: **Kepala Sekolah, Guru, dan Orang Tua**.

## Tech & Styling

- Next.js App Router + TypeScript
- Tailwind CSS + shadcn/ui sebagai component library
- Framer Motion untuk semua animasi
- CSS gradient modern & menarik sebagai aksen visual (hero background, tombol CTA, section divider) — kombinasikan warna brand sekolah
- Dark mode ready (toggle light/dark, gunakan `next-themes`)
- Fully responsive (mobile, tablet, desktop) — mobile-first approach

## Efek & Optimasi Tambahan

- **Scroll Reveal Animation**: setiap section muncul dengan fade-in/slide-up saat masuk viewport (gunakan `framer-motion` `whileInView`)
- **SEO Optimization**: metadata lengkap (title, description, Open Graph, Twitter Card) per halaman menggunakan Next.js Metadata API, struktur heading semantik (H1-H3), alt text semua gambar, sitemap.xml, robots.txt
- **Mobile Friendly**: semua elemen interaktif (tombol, form, navbar) dioptimalkan untuk touch, ukuran font & spacing nyaman dibaca di layar kecil

---

## 6. REQUIREMENT TEKNIS TAMBAHAN

- **Database**: [sebutkan preferensi, misal: PostgreSQL dengan Prisma ORM, atau Supabase]
- **State Management**: Zustand atau React Context sesuai kebutuhan kompleksitas
- **Responsive**: seluruh dashboard (bukan hanya landing page) harus responsive — gunakan layout sidebar collapsible di mobile untuk dashboard
- **Integrasi WhatsApp**: gunakan WhatsApp Business API atau link `wa.me` dengan pesan otomatis untuk notifikasi dan kontak form
- **Keamanan**: hashing password (bcrypt), validasi input di sisi server, proteksi terhadap SQL injection/XSS
- **Struktur folder**: rapi dan modular (pisahkan `components`, `app/(public)`, `app/(dashboard)/kepala-sekolah`, `app/(dashboard)/guru`, `app/(dashboard)/orang-tua`, `lib`, `types`)

---

## 3. Structure

```

├── app/
│ ├── (auth)
│ ├── (Dasboard)
│ ├── Api
│ ├── page.tsx # Single-page landing
│ ├── global.css
│ └── layout.tsx
├── components/
│ ├── ui/ # Button, Card, Input, Label, Textarea, Avatar
│ ├── landing
│ ├── dashboard
│ ├── theme-provider.tsx
│ ├── theme-toogle.tsx
│ ├── provider.tsx
├── lib
├── types
├── middleware.ts
├── .env.example
└── README.md

```
