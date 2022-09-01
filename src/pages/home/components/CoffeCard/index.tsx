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

export function CoffeeCard() {
  return (
    <div>
      <CoffeeCardContainer>
        <CoffeeCardContainerImg>
          <img src="/americano.png" alt="" />
        </CoffeeCardContainerImg>

        <CoffeeCardTagsContainer>
          <CoffeeCardTag>TRADICIONAL</CoffeeCardTag>
          <CoffeeCardTag>TRADICIONAL</CoffeeCardTag>
        </CoffeeCardTagsContainer>

        <CoffeeCardContent>
          <h4>Expresso Tradicional</h4>
          <p>O tradicional café feito com água quente e grãos moídos</p>
        </CoffeeCardContent>

        <CoffeeCardFooter>
          <p>
            <span>R$</span> 9,90
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
