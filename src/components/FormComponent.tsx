import type { FormComponetProps } from '@/types'
import { pxToRem } from '@/utils'
import { StyledButton, StyledInput } from '@/components'
import styled from 'styled-components'

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: ${pxToRem(16)};
`

function FormComponent(props: FormComponetProps) {
  const { input, buttons, message } = props
  return (
    <StyledForm action="">
      {input.map((inputProps, index) => (
        <StyledInput key={index} {...inputProps} />
      ))}
      {buttons.map((buttonProps, index) => (
        <StyledButton key={index} {...buttonProps} />
      ))}
      {message && (
        <div style={{ color: message.type === 'error' ? 'red' : 'green' }}>
          {message.msg}
        </div>
      )}
    </StyledForm>
  )
}
export default FormComponent
