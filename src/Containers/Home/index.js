import React from 'react'

import HomeLogo from '../../assets/home-logo.svg'
import { CategoryCarousel, OffersCarousel } from '../../Components'
import { Container, HomeImg } from './styles'

export const Home = () => {
  return (
    <Container>
      <HomeImg src={HomeLogo} alt="logo da home" />
      <CategoryCarousel />
      <OffersCarousel />
    </Container>
  )
}
