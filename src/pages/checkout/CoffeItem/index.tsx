import { Trash } from 'phosphor-react'
import { CounterButton } from '../../../components/CounterButton'
import { useCart } from '../../../hooks/useCart'
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
  const { changeAmountOfItem, removeItem } = useCart()

  const handleIncrement = () => changeAmountOfItem(item, item.amount + 1)
  const handleDecrement = () => changeAmountOfItem(item, item.amount - 1)
  const handleRemove = () => removeItem(item)

  const price = formatPrice(item.price)

  return (
    <CoffeeItemContainer>
      <CoffeeItemImg>
        <img src={item.img} alt={item.name} />
      </CoffeeItemImg>
      <CoffeeItemContent>
        <span>{item.name}</span>
        <div>
          <CounterButton
            amount={item.amount}
            limit={5}
            onDecrement={handleDecrement}
            onIncrement={handleIncrement}
          />
          <RemoveButton onClick={handleRemove}>
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
