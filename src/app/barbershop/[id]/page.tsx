import Image from 'next/image'
import { notFound } from 'next/navigation'

import { MapPinIcon, MenuIcon, StarIcon } from 'lucide-react'

import { Button } from '@/app/_components/ui/button'
import { Separator } from '@/app/_components/ui/separator'
import { db } from '@/app/_lib/prisma'

import { BackButton } from './_components/back-button'
import { BarbershopInfo } from './_components/barbershop-info'
import { ServiceItem } from './_components/service-item'
import {
  type ContentType,
  ToggleContentButtons,
} from './_components/toggle-content-buttons'

interface BarbershopPageProps {
  params: {
    id: string
  }
  searchParams: {
    content?: string
  }
}

export default async function BarbershopPage(props: BarbershopPageProps) {
  const { params, searchParams } = props

  const currentContent = (searchParams.content as ContentType) || 'services'

  const barbershop = await db.barbershop.findFirst({
    where: {
      id: params.id,
    },
    include: {
      services: true,
    },
  })

  if (!barbershop) {
    notFound()
  }

  return (
    <main className="relative flex flex-1 flex-col pb-12">
      <div className="relative z-10 h-64 w-full">
        <Image
          src={barbershop.imageUrl}
          alt={barbershop.name}
          sizes="(100vw - 4rem) 32rem"
          quality={100}
          priority
          fill
          className="opacity-65"
          style={{ objectFit: 'cover' }}
        />
      </div>

      <div className="absolute left-5 top-6 z-20">
        <BackButton />
      </div>

      <div className="absolute right-5 top-6 z-20">
        <Button
          aria-label="Open menu"
          type="button"
          variant="secondary"
          size="icon"
        >
          <MenuIcon className="size-5" />
        </Button>
      </div>

      <div className="space-y-3 px-5 pt-3">
        <h1 className="text-xl font-bold">{barbershop.name}</h1>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <MapPinIcon className="size-4 text-primary" />
            <span className="text-sm">{barbershop.address}</span>
          </div>

          <div className="flex items-center gap-2">
            <StarIcon className="size-4 text-primary" />
            {/* TODO - Add rating */}
            <span className="text-sm">5,0 (889 avaliações)</span>
          </div>
        </div>
      </div>

      <Separator className="my-6" />

      <div className="px-5">
        <ToggleContentButtons currentContent={currentContent} />
      </div>

      {currentContent === 'services' && (
        <div className="flex flex-col gap-3 px-5 pt-6">
          {barbershop.services.map((service) => (
            <ServiceItem key={service.id} service={service} />
          ))}
        </div>
      )}

      {currentContent === 'info' && (
        <div className="pt-6">
          <BarbershopInfo barbershop={barbershop} />
        </div>
      )}
    </main>
  )
}
