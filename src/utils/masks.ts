export function maskDate(date: string) {
  return date
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\d{4})(\d)/, "$1");
}

export function maskHour(hour: string) {
  return hour
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "$1:$2")
    .replace(/(\d{2})(\d)/, "$1:$2");
}
