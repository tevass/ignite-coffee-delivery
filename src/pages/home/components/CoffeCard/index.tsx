import { ShoppingCart } from 'phosphor-react'
import { Counter } from './Counter'

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
            <Counter />
            <CoffeeCartButton>
              <ShoppingCart size={22} weight="fill" />
            </CoffeeCartButton>
          </CoffeeCardFooterActions>
        </CoffeeCardFooter>
      </CoffeeCardContainer>
    </div>
  )
}
