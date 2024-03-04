import { ScissorsIcon } from 'lucide-react'

export function StyleBarbershopLogo() {
  return (
    <div className="flex items-center justify-start gap-1">
      <ScissorsIcon className="text-primary" size={22} />
      <h1 className="text-primary text-2xl font-bold uppercase leading-none">
        Style <span className="text-white">Barber</span>
      </h1>
    </div>
  )
}
