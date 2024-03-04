import { cn } from '@/app/_lib/utils'

interface SectionTitleProps extends React.ComponentProps<'h3'> {}

export function SectionTitle({ className, ...props }: SectionTitleProps) {
  return (
    <h3
      className={cn('text-xs font-bold uppercase text-[#838896]', className)}
      {...props}
    />
  )
}
