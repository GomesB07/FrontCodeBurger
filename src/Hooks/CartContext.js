import PropTypes from 'prop-types'
import React, { createContext, useContext, useEffect, useState } from 'react'

const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([])
  const [quantityAllProducts, setQuantityAllProducts] = useState(0)

  const updateLocalStorage = async (products) => {
    await localStorage.setItem('codeburger:cartInfo', JSON.stringify(products))
  }

  const putProductCart = async (product) => {
    const cartIndex = cartProducts.findIndex((prd) => prd.id === product.id)

    let newCardProducts = []
    if (cartIndex >= 0) {
      newCardProducts = cartProducts

      newCardProducts[cartIndex].quantity =
        newCardProducts[cartIndex].quantity + 1

      setCartProducts(newCardProducts)
    } else {
      product.quantity = 1
      newCardProducts = [...cartProducts, product]
      setCartProducts(newCardProducts)
    }

    await updateLocalStorage(newCardProducts)
  }

  const increaseProducts = async (productId) => {
    const newCart = cartProducts.map((product) => {
      return product.id === productId
        ? { ...product, quantity: product.quantity + 1 }
        : product
    })
    setCartProducts(newCart)
    await updateLocalStorage(newCart)
  }

  const decreaseProducts = async (productId) => {
    const cartIndex = cartProducts.findIndex((prd) => prd.id === productId)

    if (cartProducts[cartIndex].quantity > 1) {
      const newCart = cartProducts.map((product) => {
        return product.id === productId
          ? { ...product, quantity: product.quantity - 1 }
          : product
      })
      setCartProducts(newCart)
      await updateLocalStorage(newCart)
    } else {
      deleteProduct(productId)
    }
  }

  const deleteProduct = async (productId) => {
    const newCart = cartProducts.filter((product) => product.id !== productId)
    setCartProducts(newCart)
    await updateLocalStorage(newCart)
  }

  useEffect(() => {
    const loadCartData = async () => {
      const clientCartData = await localStorage.getItem('codeburger:cartInfo')

      if (clientCartData) {
        setCartProducts(JSON.parse(clientCartData))
      }
    }
    loadCartData()
  }, [])

  useEffect(() => {
    let allQuantity = 0
    cartProducts.map((product) => (allQuantity += product.quantity))
    setQuantityAllProducts(allQuantity)
  }, [cartProducts])

  return (
    <CartContext.Provider
      value={{
        putProductCart,
        cartProducts,
        increaseProducts,
        decreaseProducts,
        quantityAllProducts
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must bet used with useContext')
  }

  return context
}

CartProvider.propTypes = {
  children: PropTypes.node
}
