import { BookingItem } from '@/app/_components/booking-item'
import { Header } from '@/app/_components/header'
import { dateManager } from '@/app/_lib/date-manager'

import { SearchForm } from './_components/search-form'

export default function Home() {
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
        <h3 className="text-xs font-bold uppercase text-[#838896]">
          Agendamentos
        </h3>
        <div className="flex flex-col gap-4">
          <BookingItem />
          <BookingItem />
        </div>
      </div>
    </main>
  )
}
