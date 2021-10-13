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
    const day = date?.getDate()
    return day
}

export function dateToM(date) {
    const month = date.getMonth() + 1
    return month
}

export function dateToY(date) {
    const year = date.getFullYear()
    return year
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

