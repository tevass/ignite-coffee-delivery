import { InputHTMLAttributes } from 'react'
import { useFormContext, FieldValues, Path } from 'react-hook-form'

import { InputContainer, OptionalLabel } from './styles'

interface InputProps<Form> extends InputHTMLAttributes<HTMLInputElement> {
  isOptional?: boolean
  formName: Path<Form>
}

export function Input<Form extends FieldValues>({
  isOptional,
  formName,
  ...props
}: InputProps<Form>) {
  const { register } = useFormContext<Form>()

  return (
    <InputContainer>
      <input {...props} {...register(formName)} />
      {isOptional && <OptionalLabel>Opcional</OptionalLabel>}
    </InputContainer>
  )
}
