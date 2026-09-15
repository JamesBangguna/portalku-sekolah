import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  const password = await bcrypt.hash('password123', 10);

  // Kepala Sekolah
  await prisma.user.upsert({
    where: { email: 'kepala@sdnhb.sch.id' },
    update: {},
    create: {
      email: 'kepala@sdnhb.sch.id',
      name: 'Drs. Budi Santoso, M.Pd',
      password,
      role: 'KEPALA_SEKOLAH',
    },
  });

  // Guru
  await prisma.user.upsert({
    where: { email: 'guru@sdnhb.sch.id' },
    update: {},
    create: {
      email: 'guru@sdnhb.sch.id',
      name: 'Siti Nurhaliza, S.Pd',
      password,
      role: 'GURU',
      teacher: {
        create: {
          nip: '198505152010012001',
          subject: 'Matematika',
        },
      },
    },
  });

  // Orang Tua
  const parentUser = await prisma.user.upsert({
    where: { email: 'ortu@example.com' },
    update: {},
    create: {
      email: 'ortu@example.com',
      name: 'Budi Hartono',
      password,
      role: 'ORANG_TUA',
      phone: '081234567890',
      parent: {
        create: {},
      },
    },
  });

  // Class
  const kelas = await prisma.class.upsert({
    where: { id: 'class-4a' },
    update: {},
    create: {
      id: 'class-4a',
      name: '4A',
      grade: 4,
      year: '2025/2026',
    },
  });

  // Student linked to parent
  const parent = await prisma.parent.findUnique({
    where: { userId: parentUser.id },
  });
  if (parent) {
    await prisma.student.upsert({
      where: { id: 'student-1' },
      update: {},
      create: {
        id: 'student-1',
        name: 'Ahmad Fauzan',
        nis: '2024001',
        classId: kelas.id,
        parentId: parent.id,
        gender: 'L',
      },
    });
  }

  console.log('Seed completed!');
  console.log('Demo accounts (password: password123):');
  console.log('  Kepala Sekolah : kepala@sdnhb.sch.id');
  console.log('  Guru           : guru@sdnhb.sch.id');
  console.log('  Orang Tua      : ortu@example.com');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
