import { Minus, Plus } from 'phosphor-react'
import { useState } from 'react'

import { CounterButton, CounterContainer } from './styles'

export function Counter() {
  const [amount, setAmount] = useState(1)

  const handleIncrement = () => {
    if (amount < 3) setAmount((prev) => prev + 1)
  }

  const handleDecrement = () => {
    if (amount > 1) setAmount((prev) => prev - 1)
  }

  return (
    <CounterContainer>
      <CounterButton onClick={handleDecrement}>
        <Minus size={12} weight="bold" />
      </CounterButton>
      <span>{amount}</span>
      <CounterButton onClick={handleIncrement}>
        <Plus size={12} weight="bold" />
      </CounterButton>
    </CounterContainer>
  )
}
