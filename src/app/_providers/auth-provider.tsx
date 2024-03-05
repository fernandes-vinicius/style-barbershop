'use client'

import { SessionProvider, type SessionProviderProps } from 'next-auth/react'

export function AuthProvider(props: SessionProviderProps) {
  return <SessionProvider {...props} />
}
