import PropTypes from 'prop-types'
import React from 'react'

import { useCart } from '../../Hooks/CartContext'
import { Button } from '../index'
import { Container, Image, ProductName, ProductPrice } from './styles'

export const CardProduct = ({ product }) => {
  const { putProductCart } = useCart()

  return (
    <Container>
      <Image src={product.url} alt="imagem do produto" />
      <div>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{product.formatedPrice}</ProductPrice>
        <Button
          onClick={() => {
            putProductCart(product)
          }}
        >
          Adicionar
        </Button>
      </div>
    </Container>
  )
}

CardProduct.propTypes = {
  product: PropTypes.object
}
