import Link from 'next/link'

import { MenuIcon } from 'lucide-react'

import { StyleBarbershopLogo } from '@/app/_components/logo'
import { Button } from '@/app/_components/ui/button'
import { Card, CardContent } from '@/app/_components/ui/card'

export function Header() {
  return (
    <Card className="bg-background rounded-none border-l-0 border-r-0">
      <CardContent className="flex items-center justify-between px-5 py-4">
        <Link href="/" aria-label="Navigate to home">
          <StyleBarbershopLogo />
        </Link>

        <Button aria-label="Open menu" size="icon" variant="ghost">
          <MenuIcon className="size-5" />
        </Button>
      </CardContent>
    </Card>
  )
}
