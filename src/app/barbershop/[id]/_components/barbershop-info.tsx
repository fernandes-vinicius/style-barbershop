import { type Barbershop } from '@prisma/client'

import { SectionTitle } from '@/app/_components/section-title'

interface BarbershopInfoProps {
  barbershop: Barbershop
}

export function BarbershopInfo({ barbershop }: BarbershopInfoProps) {
  console.log(barbershop)

  return (
    <div className="flex flex-col gap-6">
      <section className="flex flex-col gap-3 px-5">
        <SectionTitle>Sobre nós</SectionTitle>
        <p className="text-justify text-sm leading-relaxed">
          Bem-vindo à Vintage Barber, onde tradição encontra estilo. Nossa
          equipe de mestres barbeiros transforma cortes de cabelo e barbas em
          obras de arte. Em um ambiente acolhedor, promovemos confiança, estilo
          e uma comunidade unida
        </p>
      </section>
    </div>
  )
}
