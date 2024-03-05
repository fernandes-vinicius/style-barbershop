'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { Button } from '@/app/_components/ui/button'

export type ContentType = 'services' | 'info'

interface ToggleContentButtonsProps {
  currentContent: ContentType
}

export function ToggleContentButtons(props: ToggleContentButtonsProps) {
  const { currentContent } = props

  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  function handleToggleContent(content: ContentType) {
    const params = new URLSearchParams(searchParams)

    if (content === 'services') {
      params.set('content', 'services')
    } else if (content === 'info') {
      params.set('content', 'info')
    }

    router.replace(`${pathname}?${params.toString()}`)
  }

  return (
    <div className="flex items-center gap-3">
      <Button
        type="button"
        variant={currentContent === 'services' ? 'default' : 'secondary'}
        onClick={() => handleToggleContent('services')}
      >
        Serviços
      </Button>
      <Button
        type="button"
        variant={currentContent === 'info' ? 'default' : 'secondary'}
        onClick={() => handleToggleContent('info')}
      >
        Informações
      </Button>
    </div>
  )
}
