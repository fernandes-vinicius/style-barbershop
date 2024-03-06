import Link from 'next/link'

import { CalendarIcon, HomeIcon, UserCircleIcon, UserIcon } from 'lucide-react'

import { LoginButton } from '@/app/_components/login-button'
import { LogoutButton } from '@/app/_components/logout-button'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/app/_components/ui/avatar'
import { Button } from '@/app/_components/ui/button'
import { SheetClose } from '@/app/_components/ui/sheet'
import { getSessionUser } from '@/app/_lib/auth'

export async function SideMenu() {
  const user = await getSessionUser()

  return (
    <div>
      <div className="border-b px-5 py-6">
        <h2 className="text-left text-base font-bold">Menu</h2>
      </div>

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
        <SheetClose asChild>
          <Button asChild variant="outline" className="justify-start">
            <Link href="/">
              <HomeIcon className="size-4" />
              Início
            </Link>
          </Button>
        </SheetClose>

        {user && (
          <SheetClose asChild>
            <Button asChild variant="outline" className="justify-start">
              <Link href="/bookings">
                <CalendarIcon className="size-4" />
                Agendamentos
              </Link>
            </Button>
          </SheetClose>
        )}
      </div>
    </div>
  )
}
