import { getServerSession, type NextAuthOptions } from 'next-auth'
import { type Adapter } from 'next-auth/adapters'
import GoogleProvider from 'next-auth/providers/google'

import { PrismaAdapter } from '@auth/prisma-adapter'

import { env } from '@/app/_lib/env'
import { db } from '@/app/_lib/prisma'

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db) as Adapter,
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  debug: process.env.NODE_ENV === 'development',
}

export async function getSessionUser() {
  const session = await getServerSession(authOptions)

  return session?.user
}
