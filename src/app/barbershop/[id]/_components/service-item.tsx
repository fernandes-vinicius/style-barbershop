'use client'

import { type User } from 'next-auth'
import { signIn } from 'next-auth/react'
import Image from 'next/image'

import { type MouseEvent, useState } from 'react'

import type { Barbershop, Service } from '@prisma/client'

import { Button } from '@/app/_components/ui/button'
import { Card, CardContent } from '@/app/_components/ui/card'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/app/_components/ui/sheet'
import { formatCentsToCurrency } from '@/app/_lib/utils'

import { BookingForm } from './booking-form'

interface ServiceItemProps {
  barbershop: Barbershop
  service: Service
  user?: User
}

export function ServiceItem(props: ServiceItemProps) {
  const { barbershop, service, user } = props

  const [open, setOpen] = useState(false)

  async function handleBooking(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault()

    if (!user) {
      await signIn('google')
    } else {
      setOpen(true)
    }
  }

  function handleBookingSuccess() {
    setOpen(false)
  }

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

              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                  <Button
                    type="button"
                    variant="secondary"
                    size="sm"
                    onClick={handleBooking}
                  >
                    Reservar
                  </Button>
                </SheetTrigger>
                <SheetContent className="overflow-y-auto p-0">
                  <SheetHeader className="border-b px-5 py-6 text-left">
                    <SheetTitle className="font-bold">Fazer Reserva</SheetTitle>
                  </SheetHeader>
                  <div className="my-6">
                    {user && (
                      <BookingForm
                        service={service}
                        barbershopName={barbershop.name}
                        userId={user.id}
                        onSuccess={handleBookingSuccess}
                      />
                    )}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
