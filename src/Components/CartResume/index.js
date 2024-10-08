import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import { useCart } from '../../Hooks/CartContext'
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import { Button } from '../Button'
import { Container } from './styles'

export const CartResume = () => {
  const [finalPrice, setFinalPrice] = useState(0)
  const [deliveryTax] = useState(5)
  const { cartProducts } = useCart()

  useEffect(() => {
    const sumAllItems = cartProducts.reduce((acc, current) => {
      return current.price * current.quantity + acc
    }, 0)

    setFinalPrice(sumAllItems)
  }, [cartProducts, deliveryTax])

  const submitOrder = async () => {
    try {
      if (cartProducts.length >= 1) {
        const order = cartProducts.map((product) => {
          return { id: product.id, quantity: product.quantity }
        })
        await toast.promise(api.post('orders', { products: order }), {
          pending: 'Realizando Pedido...',
          success: 'Pedido Realizado',
          error: 'Falha no Pedido, tente novamente'
        })
      }
    } catch (err) {
      toast.error('Falha no Pedido, tente novamente', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored'
      })
    }
  }

  return (
    <div>
      <Container>
        <div className="container-top">
          <h2 className="title">Resumo do pedido</h2>
          <p className="items">Itens</p>
          <p className="items-price">{formatCurrency(finalPrice)}</p>
          <p className="delivery-tax">Taxa de entrega</p>
          <p className="delivery-tax-price">{formatCurrency(deliveryTax)}</p>
        </div>

        <div className="container-bottom">
          <p>Total</p>
          <p>{formatCurrency(finalPrice + deliveryTax)}</p>
        </div>
      </Container>
      <Button
        onClick={() => submitOrder()}
        style={{ width: '100%', marginTop: '10px' }}
      >
        Finalizar Pedido
      </Button>
    </div>
  )
}
