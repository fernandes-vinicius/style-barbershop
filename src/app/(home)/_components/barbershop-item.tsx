import Image from 'next/image'
import Link from 'next/link'

import { type Barbershop } from '@prisma/client'
import { StarIcon } from 'lucide-react'

import { Badge } from '@/app/_components/ui/badge'
import { Button } from '@/app/_components/ui/button'
import { Card, CardContent } from '@/app/_components/ui/card'

interface BarbershopItemProps {
  barbershop: Barbershop
}

export function BarbershopItem({ barbershop }: BarbershopItemProps) {
  return (
    <Card className="relative min-w-[167px] max-w-[167px] rounded-2xl">
      {/* TODO - Add rating */}
      <div className="absolute left-2 top-2 z-10">
        <Badge variant="secondary" className="font-bold opacity-90">
          <StarIcon className="size-3 fill-primary text-primary" />
          <span>5,0</span>
        </Badge>
      </div>

      <CardContent className="p-0">
        <div className="px-1 pb-2 pt-1">
          <div className="relative h-40 w-full overflow-hidden rounded-2xl">
            <Image
              src={barbershop.imageUrl}
              alt={barbershop.name}
              sizes="100vw"
              quality={100}
              priority
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>

        <div className="flex flex-col gap-3 px-3 pb-3">
          <div className="space-y-1">
            <h2 className="truncate font-bold">{barbershop.name}</h2>
            <p className="truncate text-xs leading-none text-[#838896]">
              {barbershop.address}
            </p>
          </div>

          <Button asChild variant="secondary">
            <Link href={`/barbershop/${barbershop.id}`}>Reservar</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
