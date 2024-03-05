import Image from 'next/image'

import { type Service } from '@prisma/client'

import { Card, CardContent } from '@/app/_components/ui/card'
import { formatCentsToCurrency } from '@/app/_lib/utils'

import { BookingButton } from './booking-button'

interface ServiceItemProps {
  service: Service
  isAuthenticated?: boolean
}

export function ServiceItem({ service, isAuthenticated }: ServiceItemProps) {
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

              <BookingButton isAuthenticated={isAuthenticated} />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
