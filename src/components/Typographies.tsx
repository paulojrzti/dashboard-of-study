import styled from 'styled-components'
import type { TypographisProps } from '@/types'
import { pxToRem } from '@/utils'

export const StyledH1 = styled.h1<TypographisProps>`

  color: ${(props) => props.color || 'inerit'};
  font-size: ${(props) => pxToRem(props.size || 24)};
  font-weight: ${(props) => pxToRem(props.size || 600)};
  letter-spacing: ${pxToRem(-1)}
  line-height: ${(props) => pxToRem(props.lineheight || 36)}
  
`
export const StyledH2 = styled.h2<TypographisProps>`
  color: ${(props) => props.color || 'inerit'};
  font-size: ${(props) => pxToRem(props.size || 16)};
  font-weight: ${(props) => pxToRem(props.size || 600)};
  line-height: ${(props) => pxToRem(props.lineheight || 24)};
`
export const StyledP = styled.p<TypographisProps>`
  color: ${(props) => props.color || 'inerit'};
  font-size: ${(props) => pxToRem(props.size || 16)};
  font-weight: ${(props) => pxToRem(props.size || 400)};
  line-height: ${(props) => pxToRem(props.lineheight || 24)};
`
export const StyledSpan = styled.span<TypographisProps>`
  color: ${(props) => props.color || 'inerit'};
  font-size: ${(props) => pxToRem(props.size || 16)};
  font-weight: ${(props) => pxToRem(props.size || 400)};
  line-height: ${(props) => pxToRem(props.lineheight || 24)};
`
export const StyledUl = styled.ul<TypographisProps>`

  color: ${(props) => props.color || 'inerit'};
  font-size: ${(props) => pxToRem(props.size || 16)};
  font-weight: ${(props) => pxToRem(props.size || 400)};
  line-height: ${(props) => pxToRem(props.lineheight || 24)}
  list-style-position: inside;
  li {
   list-style-position: outside;
   margin-left: ${pxToRem(15)}
  }

`
