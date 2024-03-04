import * as dateFns from 'date-fns'
import { ptBR } from 'date-fns/locale'

type DateType = string | number | Date

export abstract class DateManger {
  abstract format: (format?: string) => string
}

class DateFnsDateManger implements DateManger {
  date: DateType

  locale

  constructor(date: DateType) {
    this.date = date
    this.locale = ptBR
  }

  format(format = 'dd/MM/yyyy') {
    return dateFns.format(this.date, format, { locale: this.locale })
  }
}

export const dateManager = (date: DateType = new Date()): DateManger => {
  return new DateFnsDateManger(date)
}
