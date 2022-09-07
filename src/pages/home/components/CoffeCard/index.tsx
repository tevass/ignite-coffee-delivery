import { ShoppingCart } from 'phosphor-react'
import { useState } from 'react'
import { CounterButton } from '../../../../components/CounterButton'

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

  const handleIncrement = () => {
    if (amount < 3) setAmount((prev) => prev + 1)
  }

  const handleDecrement = () => {
    if (amount > 1) setAmount((prev) => prev - 1)
  }

  const price = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
    .format(coffee.price)
    .split('R$')[1]

  return (
    <div>
      <CoffeeCardContainer>
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
            />
            <CoffeeCartButton>
              <ShoppingCart size={22} weight="fill" />
            </CoffeeCartButton>
          </CoffeeCardFooterActions>
        </CoffeeCardFooter>
      </CoffeeCardContainer>
    </div>
  )
}
