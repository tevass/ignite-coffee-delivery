import { Minus, Plus } from 'phosphor-react'

import { Button, CounterContainer } from './styles'

interface CounterButtonProps {
  amount: number
  onIncrement?: () => void
  onDecrement?: () => void
  disabled?: boolean
}

export function CounterButton({
  amount,
  onDecrement,
  onIncrement,
  disabled,
}: CounterButtonProps) {
  return (
    <CounterContainer>
      <Button onClick={onDecrement} disabled={disabled}>
        <Minus size={12} weight="bold" />
      </Button>
      <span>{amount}</span>
      <Button onClick={onIncrement} disabled={disabled}>
        <Plus size={12} weight="bold" />
      </Button>
    </CounterContainer>
  )
}
