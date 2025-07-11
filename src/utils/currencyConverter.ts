/**
 * convert to BRl currency format
 * @param value - Number to be converted
 * @returns Converted BRL string
 */

export function currencyConverter(value: number): string {
  return new Intl.NumberFormat('pt-bt', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}
