'use client'

import { signOut } from 'next-auth/react'

import { LogOutIcon } from 'lucide-react'

import { Button } from '@/app/_components/ui/button'

export function LogoutButton() {
  async function handleLogout() {
    await signOut()
  }

  return (
    <Button
      aria-label="Logout"
      size="icon"
      variant="secondary"
      onClick={handleLogout}
    >
      <LogOutIcon className="size-5" />
    </Button>
  )
}
