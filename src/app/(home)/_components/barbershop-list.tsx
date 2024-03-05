import { type Barbershop } from '@prisma/client'

import { BarbershopItem } from './barbershop-item'

interface BarbershopListProps {
  barbershops: Barbershop[]
}

export function BarbershopList({ barbershops }: BarbershopListProps) {
  return (
    <div className="flex items-center gap-4 overflow-y-auto px-5 [&::-webkit-scrollbar]:hidden">
      {barbershops.map((barbershop) => (
        <BarbershopItem key={barbershop.id} barbershop={barbershop} />
      ))}
    </div>
  )
}
