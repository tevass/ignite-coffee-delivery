import { Minus, Plus } from 'phosphor-react'

import { Button, CounterContainer } from './styles'

interface CounterButtonProps {
  amount: number
  onIncrement?: () => void
  onDecrement?: () => void
  disabled?: boolean
  limit?: number
}

export function CounterButton({
  amount,
  onDecrement,
  onIncrement,
  disabled,
  limit,
}: CounterButtonProps) {
  const incrementDisabled = (!!limit && amount === limit) || disabled
  const decrementDisabled = (!!limit && amount === 1) || disabled

  return (
    <CounterContainer>
      <Button onClick={onDecrement} disabled={decrementDisabled}>
        <Minus size={12} weight="bold" />
      </Button>
      <span>{amount}</span>
      <Button onClick={onIncrement} disabled={incrementDisabled}>
        <Plus size={12} weight="bold" />
      </Button>
    </CounterContainer>
  )
}
