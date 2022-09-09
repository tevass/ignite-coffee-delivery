import { ShoppingCart } from 'phosphor-react'
import { Link } from 'react-router-dom'
import { useCart } from '../../../hooks/useCart'

import { CartButtonContainer, CartCounter } from './styles'

export function CartButton() {
  const { itens } = useCart()
  const hasItensOnCart = !!itens.length

  return (
    <Link to="/checkout">
      <CartButtonContainer>
        <ShoppingCart size={22} weight="fill" />

        {hasItensOnCart && (
          <CartCounter>
            <span>{itens.length}</span>
          </CartCounter>
        )}
      </CartButtonContainer>
    </Link>
  )
}
