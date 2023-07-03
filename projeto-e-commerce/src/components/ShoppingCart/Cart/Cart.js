import React, {useEffect} from "react"
import {CartBox, H2, P, Button} from "./CartStyle"

const Cart = ({cartItems, setCartItems}) => {
  const removeFromCart = (itemId) => {
    const updatedItems = cartItems.filter((item) => item.id !== itemId)
    setCartItems(updatedItems)
  }

  const total = cartItems.reduce(
    (total, item) => total + item.value * item.quantity,
    0
  )

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems")
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems))
  }, [cartItems])

  return (
    <CartBox>
      <div>
        <H2>Carrinho</H2>
        {cartItems.length === 0 ? (
          <P>O carrinho está vazio.</P>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <p>{item.name}</p>
                <p>Quantidade: {item.quantity}</p>
                <p>Preço: US$ {item.value}</p>
                <Button onClick={() => removeFromCart(item.id)}>Remover</Button>
              </li>
            ))}
          </ul>
        )}
        <P>Total: US$ {total}</P>
      </div>
    </CartBox>
  )
}

export default Cart
