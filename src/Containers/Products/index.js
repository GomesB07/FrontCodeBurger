import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import ProductsLogo from '../../assets/products-logo.svg'
import { CardProduct } from '../../Components'
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import {
  Container,
  ProductsImg,
  CategoriesMenu,
  CategoryButton,
  ProductsContainer
} from './styles'

export const Products = () => {
  const { state } = useLocation()

  let categoryId = 0
  if (state?.categoryId) {
    categoryId = state.categoryId
  }

  const [categories, setCategories] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [products, setProducts] = useState([])
  const [activeCategory, setActiveCategory] = useState(categoryId)

  useEffect(() => {
    const loadCategories = async () => {
      const { data } = await api.get('categories')
      const newCategories = [{ id: 0, name: 'Todos' }, ...data]
      setCategories(newCategories)
    }

    const loadProducts = async () => {
      const { data: allProducts } = await api.get('products')
      const newProducts = allProducts.map((product) => {
        return { ...product, formatedPrice: formatCurrency(product.price) }
      })
      setProducts(newProducts)
    }

    loadProducts()
    loadCategories()
  }, [])

  useEffect(() => {
    if (activeCategory === 0) {
      setFilteredProducts(products)
    } else {
      const newFilteredProducts = products.filter(
        (product) => product.category_id === activeCategory
      )
      setFilteredProducts(newFilteredProducts)
    }
  }, [activeCategory, products])

  return (
    <Container>
      <ProductsImg src={ProductsLogo} alt="logo da página de produtos" />
      <CategoriesMenu>
        {categories.map((category) => (
          <CategoryButton
            type="button"
            key={category.id}
            isActiveCategory={activeCategory === category.id}
            onClick={() => {
              setActiveCategory(category.id)
            }}
          >
            {category.name}
          </CategoryButton>
        ))}
      </CategoriesMenu>
      <ProductsContainer>
        {filteredProducts &&
          filteredProducts.map((product) => (
            <CardProduct key={product.id} product={product} />
          ))}
      </ProductsContainer>
    </Container>
  )
}
