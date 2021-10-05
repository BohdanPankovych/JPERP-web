export function dateToYMD(date, separator = "/") {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    return [year, month, day].join(separator)
}

export function dateToD(date) {
    const day = date?.getDate()
    return day
}
