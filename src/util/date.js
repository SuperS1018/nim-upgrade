import _format from 'date-fns/format'
export const dateFormatted = (date, short) => {
  if (short) {
    return _format(new Date(date), 'mm/dd')
  }
  return _format(new Date(date), 'MMM dd, yyyy')
}
