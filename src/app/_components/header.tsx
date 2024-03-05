import { getServerSession } from 'next-auth'
import Link from 'next/link'

import {
  CalendarIcon,
  HomeIcon,
  MenuIcon,
  UserCircleIcon,
  UserIcon,
} from 'lucide-react'

import { LoginButton } from '@/app/_components/login-button'
import { StyleBarbershopLogo } from '@/app/_components/logo'
import { LogoutButton } from '@/app/_components/logout-button'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/app/_components/ui/avatar'
import { Button } from '@/app/_components/ui/button'
import { Card, CardContent } from '@/app/_components/ui/card'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/app/_components/ui/sheet'
import { authOPtions } from '@/app/_lib/auth'

export async function Header() {
  const session = await getServerSession(authOPtions)

  const user = session?.user

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
            <SheetHeader className="border-b p-5">
              <SheetTitle className="text-left text-base font-bold">
                Menu
              </SheetTitle>
            </SheetHeader>

            <div className="mt-6 flex flex-col gap-3 px-5">
              <div className="flex items-center gap-2">
                {user && (
                  <Avatar>
                    {user.image && <AvatarImage src={user.image} />}
                    <AvatarFallback>
                      <UserIcon className="size-5" />
                    </AvatarFallback>
                  </Avatar>
                )}

                {!user && (
                  <UserCircleIcon
                    className="size-10 text-[#4E525B]"
                    strokeWidth={1}
                  />
                )}

                <h3 className="truncate pr-3 font-bold">
                  {user ? user.name : 'Olá. Faça seu login!'}
                </h3>

                {user && (
                  <div className="ml-auto">
                    <LogoutButton />
                  </div>
                )}
              </div>

              {!user && <LoginButton />}
            </div>

            <div className="mt-6 flex flex-col gap-3 px-5">
              <Button asChild variant="outline" className="justify-start">
                <Link href="/">
                  <HomeIcon className="size-4" />
                  Início
                </Link>
              </Button>

              {user && (
                <Button asChild variant="outline" className="justify-start">
                  <Link href="/bookings">
                    <CalendarIcon className="size-4" />
                    Agendamentos
                  </Link>
                </Button>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </CardContent>
    </Card>
  )
}
