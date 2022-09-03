import { InputHTMLAttributes } from 'react'
import { InputContainer, OptionalLabel } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isOptional?: boolean
}

export function Input({ isOptional, ...props }: InputProps) {
  return (
    <InputContainer>
      <input {...props} />
      {isOptional && <OptionalLabel>Opcional</OptionalLabel>}
    </InputContainer>
  )
}
