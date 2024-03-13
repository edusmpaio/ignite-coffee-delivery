import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'

import {
  HeaderContainer,
  LocationTag,
  CartButton,
  CartQuantity,
} from './styles'
import { MapPin, ShoppingCartSimple } from '@phosphor-icons/react'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="Coffee Delivery" />

      <div>
        <LocationTag>
          <MapPin size={22} weight="fill" />
          Porto Alegre, RS
        </LocationTag>
        <CartButton>
          <Link to="/checkout">
            <ShoppingCartSimple size={22} weight="fill" />

            <CartQuantity>1</CartQuantity>
          </Link>
        </CartButton>
      </div>
    </HeaderContainer>
  )
}
