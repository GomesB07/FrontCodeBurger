import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'
import { useNavigate } from 'react-router-dom'

import Category from '../../assets/categories.svg'
import api from '../../services/api'
import { Container, CategoryImg, ContainerItems, Image, Button } from './styles'

export const CategoryCarousel = () => {
  const [categories, setCategories] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const loadCategories = async () => {
      const { data } = await api.get('categories')
      setCategories(data)
    }
    loadCategories()
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
      <CategoryImg src={Category} alt="logo de categorias" />

      <Carousel
        itemsToShow={2}
        style={{ width: '90%' }}
        breakPoints={breakPoints}
      >
        {categories.map((category) => (
          <ContainerItems key={category.id}>
            <Image
              src={category.url}
              alt={`foto da categoria ${category.name}`}
            />
            <Button
              onClick={() =>
                navigate('/produtos', { state: { categoryId: category.id } })
              }
            >
              {category.name}
            </Button>
          </ContainerItems>
        ))}
      </Carousel>
    </Container>
  )
}
