import styled from 'styled-components'
import { pxToRem } from '@/utils'

export const CardComponent = styled.div`
  background-color: ${(props) => props.theme.card.background};
  border: ${pxToRem(1)} solid ${(props) => props.theme.card.border};
  border-radius:${pxToRem(8)};
  padding: ${pxToRem(24)};
  box-sizing: border-box;
  width: 100%;
  &.alert {
  background-color: ${(props) => props.theme.card.alert};
  border: ${pxToRem(1)} solid ${(props) => props.theme.card.alert}};
  }
  &.success {
  background-color: ${(props) => props.theme.card.success};
  border: ${pxToRem(1)} solid ${(props) => props.theme.card.success}};
  }
  &.waring {
  background-color: ${(props) => props.theme.card.warning};
  border: ${pxToRem(1)} solid ${(props) => props.theme.card.warning}};
  }
  a {
    color: inherit
    text-decoration:none;
  }
`
