import { Trash } from 'phosphor-react'
import { CounterButton } from '../../../components/CounterButton'
import { formatPrice } from '../../../utils/formatPrice'

import {
  CoffeeItemContainer,
  CoffeeItemContent,
  CoffeeItemImg,
  RemoveButton,
} from './styles'

interface Item {
  id: number
  name: string
  description: string
  price: number
  tags: string[]
  img: string
  amount: number
}

interface CoffeeItemProps {
  item: Item
}

export function CoffeeItem({ item }: CoffeeItemProps) {
  const price = formatPrice(item.price)

  return (
    <CoffeeItemContainer>
      <CoffeeItemImg>
        <img src={item.img} alt={item.name} />
      </CoffeeItemImg>
      <CoffeeItemContent>
        <span>{item.name}</span>
        <div>
          <CounterButton amount={item.amount} />
          <RemoveButton>
            <div>
              <Trash size={18} />
            </div>
            <span>Remover</span>
          </RemoveButton>
        </div>
      </CoffeeItemContent>
      <span>{price}</span>
    </CoffeeItemContainer>
  )
}
