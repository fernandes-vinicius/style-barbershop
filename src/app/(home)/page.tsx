import { Header } from '@/app/_components/header'
import { dateManager } from '@/app/_lib/date-manager'

export default function Home() {
  return (
    <main className="flex flex-col">
      <Header />

      <div className="flex flex-col gap-1 px-5 py-6">
        <h2 className="text-xl">
          Olá, <strong>MIguel</strong>
        </h2>
        <p className="text-sm first-letter:uppercase">
          {dateManager().format("EEE',' d 'de' MMMM")}
        </p>
      </div>
    </main>
  )
}
