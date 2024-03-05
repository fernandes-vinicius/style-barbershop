import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  try {
    // Drop all data
    await prisma.service.deleteMany()
    await prisma.booking.deleteMany()
    await prisma.barbershop.deleteMany()
    await prisma.user.deleteMany()

    const images = [
      'https://utfs.io/f/8d6da0f9-49d5-4204-b47b-bdaa8c243d9d-16p.png',
      'https://utfs.io/f/e15a8f96-94de-4c9e-8631-c87f6ea68803-16q.png',
      'https://utfs.io/f/72f088ca-b84a-45ff-afcb-2d3800b2bb07-16r.png',
      'https://utfs.io/f/354a13c6-f199-4c53-aee3-45f322f2988f-16s.png',
      'https://utfs.io/f/373592cc-e95b-400b-be17-06a6ca9c297c-16t.png',
      'https://utfs.io/f/d168a449-f59b-41a8-a109-1df8ff13e5f1-16u.png',
      'https://utfs.io/f/bbef7727-aa6e-4235-8ad3-2c4e7d0b09df-16v.png',
      'https://utfs.io/f/51006fe2-46c1-42ee-84af-68985ed70890-16w.png',
      'https://utfs.io/f/7e42c69c-6e99-49b4-bdd0-22ee9630c26b-16x.png',
      'https://utfs.io/f/18da79ab-3354-4e59-9d5d-f6b8daffd7a9-17j.png',
    ]

    // Creative names for barbershops
    const creativeNames = [
      'Barbearia Vintage',
      'Corte & Estilo',
      'Barba & Navalha',
      'The Dapper Den',
      'Cabelo & Cia.',
      'Machado & Tesoura',
      'Barbearia Elegance',
      'Aparência Impecável',
      'Estilo Urbano',
      'Estilo Clássico',
    ]

    // Fake barbershop addresses
    const addresses = [
      'Rua da Barbearia, 123',
      'Avenida dos Cortes, 456',
      'Praça da Barba, 789',
      'Travessa da Navalha, 101',
      'Alameda dos Estilos, 202',
      'Estrada do Machado, 303',
      'Avenida Elegante, 404',
      'Praça da Aparência, 505',
      'Rua Urbana, 606',
      'Avenida Clássica, 707',
    ]

    const services = [
      {
        name: 'Corte de Cabelo',
        description: 'Estilo personalizado com as últimas tendências.',
        price: 6000,
        imageUrl: `https://utfs.io/f/cfb6a995-9357-4333-849b-7cca8b78a2e1-1kgxo7.png`,
      },
      {
        name: 'Barba',
        description: 'Modelagem completa para destacar sua masculinidade.',
        price: 4000,
        imageUrl: `https://utfs.io/f/4c8526c9-af1f-4460-9529-fd2a9018d831-1jo6tu.png`,
      },
      {
        name: 'Pézinho',
        description: 'Acabamento perfeito para um visual renovado.',
        price: 3500,
        imageUrl: `https://utfs.io/f/30f80905-eba8-46b5-89fd-31fc07feeb83-b3pegf.png`,
      },
      {
        name: 'Sobrancelha',
        description: 'Expressão acentuada com modelagem precisa.',
        price: 2000,
        imageUrl: `https://utfs.io/f/d754bef6-a8bc-410a-b38f-0f5d805987f1-qqmh6e.png`,
      },
      {
        name: 'Massagem',
        description: 'Relaxe com uma massagem revigorante.',
        price: 5000,
        imageUrl: `https://utfs.io/f/bbec54de-2ea0-41d3-9c93-0911bf20183b-4oen2a.png`,
      },
      {
        name: 'Hidratação',
        description: 'Hidratação profunda para cabelo e barba.',
        price: 2500,
        imageUrl: `https://utfs.io/f/00b0bc1d-03a7-4989-9c2c-36a173a3b2ed-9uuelq.png`,
      },
    ]

    // Create 10 barbershops with fake names and addresses
    const barbershops = []

    for (let i = 0; i < 10; i++) {
      const name = creativeNames[i]
      const address = addresses[i]
      const imageUrl = images[i]

      const barbershop = await prisma.barbershop.create({
        data: {
          name,
          address,
          imageUrl,
        },
      })

      // Create services for each barbershop
      for (const service of services) {
        await prisma.service.create({
          data: {
            name: service.name,
            description: service.description,
            price: service.price,
            imageUrl: service.imageUrl,
            barbershop: {
              connect: {
                id: barbershop.id,
              },
            },
          },
        })
      }

      barbershops.push(barbershop)
    }

    console.log('Done!')
  } catch (e) {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

main()
