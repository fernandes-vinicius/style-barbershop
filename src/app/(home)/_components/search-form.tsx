'use client'

import { SearchIcon } from 'lucide-react'

import { Button } from '@/app/_components/ui/button'
import { Input } from '@/app/_components/ui/input'

export function SearchForm() {
  return (
    <form className="flex items-center gap-2">
      <Input placeholder="Busque uma barbearia..." className="flex-1" />

      <Button aria-label="Search" size="icon">
        <SearchIcon className="size-5" />
      </Button>
    </form>
  )
}
