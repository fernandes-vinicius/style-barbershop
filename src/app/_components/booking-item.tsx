import { ScissorsIcon } from 'lucide-react'

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/app/_components/ui/avatar'
import { Badge } from '@/app/_components/ui/badge'
import { Card, CardContent } from '@/app/_components/ui/card'

export function BookingItem() {
  return (
    <Card>
      <CardContent className="p-0">
        <div className="flex items-center">
          <div className="flex-1 space-y-3 border-r p-3">
            <Badge className="text-primary bg-[#221C3D] font-bold hover:bg-[#221C3D]">
              Confirmado
            </Badge>

            <div className="space-y-2">
              <h2 className="font-bold">Corte de Cabelo</h2>
              <div className="flex items-center gap-2">
                <Avatar className="size-6">
                  <AvatarImage
                    src="https://utfs.io/f/8d6da0f9-49d5-4204-b47b-bdaa8c243d9d-16p.png"
                    alt="Vintage Barber"
                  />
                  <AvatarFallback className="text-xs font-bold">
                    <ScissorsIcon className="size-3" />
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-sm leading-none">Vintage Barber</h3>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center px-9 py-3 text-center text-xs">
            <span>Fevereiro</span>
            <h2 className="text-2xl">06</h2>
            <span>09:45</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
