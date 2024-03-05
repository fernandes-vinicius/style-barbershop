'use client'

import { signIn } from 'next-auth/react'

import { LogInIcon } from 'lucide-react'

import { Button } from '@/app/_components/ui/button'

export function LoginButton() {
  async function handleLogin() {
    await signIn('google')
  }

  return (
    <Button
      type="button"
      variant="secondary"
      className="justify-start font-bold"
      onClick={handleLogin}
    >
      <LogInIcon className="size-4" />
      Fazer Login
    </Button>
  )
}
