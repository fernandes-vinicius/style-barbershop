'use client'

import { useMemo, useState } from 'react'

import { Service } from '@prisma/client'
import { ptBR } from 'date-fns/locale'
import { Loader2Icon } from 'lucide-react'

import { Button } from '@/app/_components/ui/button'
import { Calendar } from '@/app/_components/ui/calendar'
import { Card, CardContent } from '@/app/_components/ui/card'
import { Separator } from '@/app/_components/ui/separator'
import { dateManager } from '@/app/_lib/date-manager'
import { cn, formatCentsToCurrency } from '@/app/_lib/utils'

import { saveBooking } from '../_actions/booking'
import { generateDayTimeList } from '../_lib/utils'

interface BookingFormProps {
  service: Service
  barbershopName: string
  userId: string
  onSuccess?: () => void
}

export function BookingForm(props: BookingFormProps) {
  const { service, barbershopName, userId, onSuccess } = props

  const [selectedDate, setSelectedDate] = useState<Date | undefined>()
  const [selectedTime, setSelectedTime] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const timeList = useMemo(() => {
    return selectedDate ? generateDayTimeList(selectedDate) : []
  }, [selectedDate])

  function handleChangeDate(date: Date | undefined) {
    setSelectedDate(date)
    setSelectedTime('')
  }

  function handleSelectTime(time: string) {
    setSelectedTime(time)
  }

  async function handleBookingSubmit() {
    if (!selectedDate || !selectedTime) {
      return
    }

    setIsSubmitting(true)

    try {
      const hour = Number(selectedTime.split(':')[0])
      const minutes = Number(selectedTime.split(':')[1])

      const bookingDate = dateManager(
        dateManager(selectedDate).setHours(hour),
      ).setMinutes(minutes)

      await saveBooking({
        serviceId: service.id,
        barbershopId: service.barbershopId,
        date: bookingDate,
        userId,
      })

      if (onSuccess) {
        onSuccess()
      }
    } catch (error) {
      console.log('Save booking error', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form className="flex w-full flex-col gap-6">
      <Calendar
        mode="single"
        selected={selectedDate}
        onSelect={handleChangeDate}
        locale={ptBR}
        fromDate={new Date()}
        styles={{
          root: {
            padding: '0 1.25rem',
          },
          head_cell: {
            width: '100%',
            textTransform: 'capitalize',
          },
          cell: {
            width: '100%',
          },
          button: {
            width: '100%',
          },
          nav_button_previous: {
            width: '1.75rem',
            height: '1.75rem',
          },
          nav_button_next: {
            width: '1.75rem',
            height: '1.75rem',
          },
          caption: {
            textTransform: 'capitalize',
          },
        }}
      />

      <Separator />

      {selectedDate && (
        <>
          <div className="flex items-center gap-3 overflow-y-auto px-5 [&::-webkit-scrollbar]:hidden">
            {timeList.map((time) => (
              <Button
                key={time}
                type="button"
                variant={time === selectedTime ? 'default' : 'outline'}
                onClick={() => handleSelectTime(time)}
                className={cn(
                  'rounded-full border px-4 py-2 font-normal',
                  time === selectedTime && 'border-primary font-bold',
                )}
              >
                {time}
              </Button>
            ))}
          </div>

          <Separator />
        </>
      )}

      {selectedDate && selectedTime && (
        <div className="px-5">
          <Card>
            <CardContent className="p-3">
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between font-bold">
                  <h2 className="pr-6 font-bold">{service.name}</h2>
                  <h3 className="text-right text-sm">
                    {formatCentsToCurrency(Number(service.price))}
                  </h3>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <h3 className="text-[#838896]">Data</h3>
                  <h4 className="text-right">
                    {dateManager(selectedDate).format("dd 'de' MMMM")}
                  </h4>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <h3 className="text-[#838896]">Horário</h3>
                  <h4 className="text-right">{selectedTime}</h4>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <h3 className="pr-12 text-[#838896]">Barbearia</h3>
                  <h4 className="truncate text-right">{barbershopName}</h4>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      <div className="px-5">
        <Button
          type="button"
          className="w-full"
          disabled={!selectedDate || !selectedTime || isSubmitting}
          onClick={handleBookingSubmit}
        >
          {isSubmitting && <Loader2Icon className="size-4 animate-spin" />}
          Confirmar
        </Button>
      </div>
    </form>
  )
}
