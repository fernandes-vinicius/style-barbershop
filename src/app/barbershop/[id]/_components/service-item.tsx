import Image from 'next/image'

import { type Service } from '@prisma/client'

import { Button } from '@/app/_components/ui/button'
import { Card, CardContent } from '@/app/_components/ui/card'
import { formatCentsToCurrency } from '@/app/_lib/utils'

interface ServiceItemProps {
  service: Service
}

export function ServiceItem({ service }: ServiceItemProps) {
  return (
    <Card>
      <CardContent className="p-3">
        <div className="flex items-center gap-3">
          <Image
            src={service.imageUrl}
            alt={service.name}
            width={110}
            height={110}
            className="rounded-lg"
            style={{ objectFit: 'contain' }}
          />

          <div className="flex flex-1 flex-col">
            <h2 className="text-sm font-bold">{service.name}</h2>

            <p className="mt-1 text-sm text-[#838896]">{service.description}</p>

            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-[#8162FF]">
                {formatCentsToCurrency(Number(service.price))}
              </h3>

              <Button type="button" variant="secondary" size="sm">
                Reservar
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
