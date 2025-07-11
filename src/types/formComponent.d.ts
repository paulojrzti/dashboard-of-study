export type InputProps = React.InputHTMLAttributes<HTMLInputElement>
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export type MessageProps = {
  msg: string
  type: 'error' | 'success' // corrigido: 'sucess' → 'success'
}

export interface FormComponetProps {
  input: InputProps[]
  buttons: ButtonProps[]
  message?: MessageProps
}
