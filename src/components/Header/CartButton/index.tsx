import { ShoppingCart } from 'phosphor-react'
import { Link } from 'react-router-dom'

import { CartButtonContainer, CartCounter } from './styles'

export function CartButton() {
  const hasItensOnCart = false

  return (
    <Link to="/">
      <CartButtonContainer>
        <ShoppingCart size={22} weight="fill" />

        {hasItensOnCart && (
          <CartCounter>
            <span>3</span>
          </CartCounter>
        )}
      </CartButtonContainer>
    </Link>
  )
}
