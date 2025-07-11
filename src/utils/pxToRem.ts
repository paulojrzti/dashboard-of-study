/**
 * convert Pixcels to rem
 * @param pixels -pixeles value to be converted
 * @returns The converted rem value
 */

export function pxToRem(pixels: number): string {
  return `${pixels / 16}rem`
}
