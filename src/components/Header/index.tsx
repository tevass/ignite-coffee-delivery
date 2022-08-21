import { Link } from 'react-router-dom'
import { MapPin } from 'phosphor-react'

import { CartButton } from './CartButton'

import { HeaderContainer, HeaderWrapper, Location } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <img src="/coffee-delivery.png" alt="Logo Coffee Delivery" />
      </Link>

      <HeaderWrapper>
        <Location>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </Location>

        <CartButton />
      </HeaderWrapper>
    </HeaderContainer>
  )
}
