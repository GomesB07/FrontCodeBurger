import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'
import { useNavigate } from 'react-router-dom'

import Offers from '../../assets/offers.svg'
import { useCart } from '../../Hooks/CartContext'
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import { Container, CategoryImg, ContainerItems, Image, Button } from './styles'

export const OffersCarousel = () => {
  const navigate = useNavigate()
  const { putProductCart } = useCart()
  const [offers, setOffers] = useState([])

  const addProductCartAndNavigate = (product) => {
    putProductCart(product)
    navigate('/carrinho')
  }

  useEffect(() => {
    const loadOffers = async () => {
      const { data } = await api.get('products')
      const onlyOffers = data
        .filter((product) => product.offer)
        .map((product) => {
          return { ...product, formatedPrice: formatCurrency(product.price) }
        })
      setOffers(onlyOffers)
    }
    loadOffers()
  }, [])

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 900, itemsToShow: 4 },
    { width: 1300, itemsToShow: 5 }
  ]

  return (
    <Container>
      <CategoryImg src={Offers} alt="logo de ofertas" />

      <Carousel
        itemsToShow={2}
        style={{ width: '90%' }}
        breakPoints={breakPoints}
      >
        {offers.map((product) => (
          <ContainerItems key={product.id}>
            <Image src={product.url} alt={`foto da oferta ${product.name}`} />
            <p>{product.name}</p>
            <p>{product.formatedPrice}</p>
            <Button onClick={() => addProductCartAndNavigate(product)}>
              Peça agora
            </Button>
          </ContainerItems>
        ))}
      </Carousel>
    </Container>
  )
}
