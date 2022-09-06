import { InputHTMLAttributes, ReactNode } from 'react'
import { RadioContainer, RadioContent } from './styles'

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  children: ReactNode
}

export function Radio({ children, id, ...props }: RadioProps) {
  return (
    <RadioContainer>
      <input type="radio" id={id} {...props} />
      <RadioContent htmlFor={id}>{children}</RadioContent>
    </RadioContainer>
  )
}
