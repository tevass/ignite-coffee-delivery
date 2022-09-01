import { Minus, Plus } from 'phosphor-react'

import { CounterButton, CounterContainer } from './styles'

export function Counter() {
  return (
    <CounterContainer>
      <CounterButton>
        <Minus size={12} weight="bold" />
      </CounterButton>
      <span>1</span>
      <CounterButton>
        <Plus size={12} weight="bold" />
      </CounterButton>
    </CounterContainer>
  )
}
