import React from 'react'

import CartLogo from '../../assets/cart-logo.svg'
import { CartItems, CartResume } from '../../Components'
import { Container, CartImg, Wrapper } from './styles'

export const Cart = () => {
  return (
    <Container>
      <CartImg src={CartLogo} alt="logo do carrinho" />
      <Wrapper>
        <CartItems />
        <CartResume />
      </Wrapper>
    </Container>
  )
}
