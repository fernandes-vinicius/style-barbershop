import Link from 'next/link'

import { BookingItem } from '@/app/_components/booking-item'
import { Header } from '@/app/_components/header'
import { SectionTitle } from '@/app/_components/section-title'
import { dateManager } from '@/app/_lib/date-manager'
import { db } from '@/app/_lib/prisma'

import { BarbershopItem } from './_components/barbershop-item'
import { SearchForm } from './_components/search-form'

export default async function Home() {
  const barbershops = await db.barbershop.findMany()

  return (
    <main className="flex flex-col">
      <Header />

      <div className="flex flex-col gap-1 px-5 py-6">
        <h2 className="text-xl">
          Olá, <strong>Miguel</strong>
        </h2>
        <p className="text-sm first-letter:uppercase">
          {dateManager().format("EEE',' d 'de' MMMM")}
        </p>
      </div>

      <div className="px-5">
        <SearchForm />
      </div>

      <div className="mt-9 flex flex-col gap-3 px-5">
        <SectionTitle>Agendamentos</SectionTitle>
        <BookingItem />
      </div>

      <div className="mt-6 flex flex-col gap-3 pb-12">
        <SectionTitle className="px-5">Recomendados</SectionTitle>
        <div className="flex items-center gap-4 overflow-y-auto px-5 [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <Link href={`/barbershop/${barbershop.id}`} key={barbershop.id}>
              <BarbershopItem barbershop={barbershop} />
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
