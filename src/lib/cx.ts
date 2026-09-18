export function cx(...values: (string | false | null | undefined)[]): string {
  return values.filter(Boolean).join(' ')
}

export function price(value: number): string {
  return `$${value}`
}
