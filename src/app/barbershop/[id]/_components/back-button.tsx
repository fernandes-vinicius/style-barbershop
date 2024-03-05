'use client'

import { useRouter } from 'next/navigation'

import { ChevronLeftIcon } from 'lucide-react'

import { Button } from '@/app/_components/ui/button'

export function BackButton() {
  const router = useRouter()

  function handleBack() {
    // router.back()
    router.replace('/')
  }

  return (
    <Button
      aria-label="Go back"
      type="button"
      variant="secondary"
      size="icon"
      onClick={handleBack}
    >
      <ChevronLeftIcon className="size-5" />
    </Button>
  )
}
