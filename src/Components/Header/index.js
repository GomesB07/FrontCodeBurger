import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import Cart from '../../assets/cart.svg'
import User from '../../assets/user.svg'
import { useCart } from '../../Hooks/CartContext'
import { useUser } from '../../Hooks/UserContext'
import {
  Container,
  ContainerLeft,
  PageLink,
  ContainerRight,
  Line,
  ContainerText,
  PageLinkExit,
  QuantityIndicator
} from './styles'

export const Header = () => {
  const { logout, userData } = useUser()
  const { quantityAllProducts } = useCart()

  const navigate = useNavigate()
  const { pathname } = useLocation()

  const logoutUser = () => {
    logout()
    navigate('/login')
  }

  return (
    <Container>
      <ContainerLeft>
        <PageLink onClick={() => navigate('/')} isActive={pathname === '/'}>
          Home
        </PageLink>
        <PageLink
          onClick={() => navigate('/produtos')}
          isActive={pathname.includes('produtos')}
        >
          Ver Produtos
        </PageLink>
      </ContainerLeft>

      <ContainerRight>
        <PageLink onClick={() => navigate('/carrinho')}>
          <QuantityIndicator product={quantityAllProducts}>
            {quantityAllProducts}
          </QuantityIndicator>
          <img src={Cart} alt="carrinho" />
        </PageLink>
        <Line />
        <PageLink>
          <img src={User} alt="user" />
        </PageLink>

        <ContainerText>
          <p>Olá, {userData.name}</p>
          <PageLinkExit onClick={logoutUser}>Sair</PageLinkExit>
        </ContainerText>
      </ContainerRight>
    </Container>
  )
}
