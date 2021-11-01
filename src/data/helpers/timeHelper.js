export function dateToYMD(date, separator) {
    const decemberNumber = 11
    const year = date.getMonth() - 1 === -1 ? date.getFullYear() -1  : date.getFullYear()
    const month = date.getMonth() - 1 === -1 ? decemberNumber  : date.getMonth()
    const day = date.getDate()

    return [year, trailingZero(month), trailingZero(day)].join(separator)
}

export function dateTodayYMD(date, separator) {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()

    return [year, trailingZero(month), trailingZero(day)].join(separator)
}

export function dateToD(date) {
    return date?.getDate()
}

export function dateToM(date) {
  return date.getMonth() + 1
}

export function dateToY(date) {
   return date.getFullYear()
}

export function testDate(date) {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    return [year, month, day]
}

export function qwe(year, month, day, separator = '-') {
   return [year ?? '' ,month ?? '', day ?? ''].filter(val=>val).join(separator)
}

export function trailingZero(date) {
    return `${date < 10 ? '0' : ''}${date}`
}

export function daysInMonth (month, year) {
    return new Date(year, month, 0).getDate();
}