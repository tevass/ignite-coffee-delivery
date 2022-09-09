import { Code, ShoppingCart } from 'phosphor-react'
import { useState } from 'react'
import { CounterButton } from '../../../../components/CounterButton'
import { useCart } from '../../../../hooks/useCart'
import { formatPrice } from '../../../../utils/formatPrice'

import {
  CoffeeCardContainer,
  CoffeeCardContainerImg,
  CoffeeCardContent,
  CoffeeCardFooter,
  CoffeeCardFooterActions,
  CoffeeCardTag,
  CoffeeCardTagsContainer,
  CoffeeCartButton,
} from './styles'

interface Coffee {
  id: number
  name: string
  description: string
  price: number
  tags: string[]
  img: string
}

interface CoffeeCardProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const [amount, setAmount] = useState(1)
  const { addNewItem, itens } = useCart()

  const handleIncrement = () => {
    if (amount < 3) setAmount((prev) => prev + 1)
  }

  const handleDecrement = () => {
    if (amount > 1) setAmount((prev) => prev - 1)
  }

  const handleAddInCart = () => addNewItem({ ...coffee, amount })

  const price = formatPrice(coffee.price).split('R$')[1]

  const coffeeIsOnCart = !!itens.find((item) => item.id === coffee.id)

  return (
    <div>
      <CoffeeCardContainer disabled={coffeeIsOnCart}>
        <CoffeeCardContainerImg>
          <img src={coffee.img} alt={coffee.name} />
        </CoffeeCardContainerImg>

        <CoffeeCardTagsContainer>
          {coffee.tags.map((tag) => (
            <CoffeeCardTag key={tag}>{tag}</CoffeeCardTag>
          ))}
        </CoffeeCardTagsContainer>

        <CoffeeCardContent>
          <h4>{coffee.name}</h4>
          <p>{coffee.description}</p>
        </CoffeeCardContent>

        <CoffeeCardFooter>
          <p>
            <span>R$</span> {price}
          </p>

          <CoffeeCardFooterActions>
            <CounterButton
              amount={amount}
              onDecrement={handleDecrement}
              onIncrement={handleIncrement}
              disabled={coffeeIsOnCart}
            />
            <CoffeeCartButton
              onClick={handleAddInCart}
              disabled={coffeeIsOnCart}
            >
              <ShoppingCart size={22} weight="fill" />
            </CoffeeCartButton>
          </CoffeeCardFooterActions>
        </CoffeeCardFooter>
      </CoffeeCardContainer>
    </div>
  )
}
