'use client'

import { signIn } from 'next-auth/react'

import { Button } from '@/app/_components/ui/button'

interface BookingButtonProps {
  isAuthenticated?: boolean
}

export function BookingButton({ isAuthenticated }: BookingButtonProps) {
  async function handleBooking() {
    if (!isAuthenticated) {
      await signIn('google')
    } else {
      // TODO handle booking
    }
  }

  return (
    <Button type="button" variant="secondary" size="sm" onClick={handleBooking}>
      Reservar
    </Button>
  )
}
