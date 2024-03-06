interface ServiceSummaryProps {
  name: string
  price: number
  date: Date
  time: string
  barberShopName: string
}

export function ServiceSummary(props: ServiceSummaryProps) {
  console.log(props)

  return <div>ServiceSummary</div>
}
