import Link from 'next/link'

import { MenuIcon } from 'lucide-react'

import { StyleBarbershopLogo } from '@/app/_components/logo'
import { SideMenu } from '@/app/_components/side-menu'
import { Button } from '@/app/_components/ui/button'
import { Card, CardContent } from '@/app/_components/ui/card'
import { Sheet, SheetContent, SheetTrigger } from '@/app/_components/ui/sheet'

export function Header() {
  return (
    <Card className="rounded-none border-l-0 border-r-0 bg-background">
      <CardContent className="flex items-center justify-between p-5">
        <Link href="/" aria-label="Navigate to home">
          <StyleBarbershopLogo />
        </Link>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              aria-label="Open menu"
              type="button"
              size="icon"
              variant="ghost"
            >
              <MenuIcon className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent className="p-0">
            <SideMenu />
          </SheetContent>
        </Sheet>
      </CardContent>
    </Card>
  )
}
