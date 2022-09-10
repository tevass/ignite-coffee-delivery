import { InputHTMLAttributes, ReactNode } from 'react'
import { Path, FieldValues, useFormContext } from 'react-hook-form'

import { RadioContainer, RadioContent } from './styles'

interface RadioProps<Form> extends InputHTMLAttributes<HTMLInputElement> {
  children: ReactNode
  formName: Path<Form>
}

export function Radio<Form extends FieldValues>({
  children,
  id,
  formName,
  ...props
}: RadioProps<Form>) {
  const { register } = useFormContext<Form>()

  return (
    <RadioContainer>
      <input type="radio" id={id} {...props} {...register(formName)} />
      <RadioContent htmlFor={id}>{children}</RadioContent>
    </RadioContainer>
  )
}
