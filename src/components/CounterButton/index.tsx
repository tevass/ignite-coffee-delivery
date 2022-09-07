import { Minus, Plus } from 'phosphor-react'

import { Button, CounterContainer } from './styles'

interface CounterButtonProps {
  amount: number
  onIncrement?: () => void
  onDecrement?: () => void
}

export function CounterButton({
  amount,
  onDecrement,
  onIncrement,
}: CounterButtonProps) {
  return (
    <CounterContainer>
      <Button onClick={onDecrement}>
        <Minus size={12} weight="bold" />
      </Button>
      <span>{amount}</span>
      <Button onClick={onIncrement}>
        <Plus size={12} weight="bold" />
      </Button>
    </CounterContainer>
  )
}
