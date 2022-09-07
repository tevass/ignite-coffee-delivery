import { Trash } from 'phosphor-react'
import { CounterButton } from '../../../components/CounterButton'

import {
  CoffeeItemContainer,
  CoffeeItemContent,
  CoffeeItemImg,
  RemoveButton,
} from './styles'

export function CoffeeItem() {
  return (
    <CoffeeItemContainer>
      <CoffeeItemImg>
        <img src="/americano.png" alt="" />
      </CoffeeItemImg>
      <CoffeeItemContent>
        <span>Expresso Tradicional</span>
        <div>
          <CounterButton amount={1} />
          <RemoveButton>
            <div>
              <Trash size={18} />
            </div>
            <span>Remover</span>
          </RemoveButton>
        </div>
      </CoffeeItemContent>
      <span>R$ 9,90</span>
    </CoffeeItemContainer>
  )
}
