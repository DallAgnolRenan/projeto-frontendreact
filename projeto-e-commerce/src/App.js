import React, {useState} from "react"
import styled from "styled-components"

import Header from "./components/Header/Header"
import Filters from "./components/Filters/Filters"
import Home from "./components/ProductList/Home/Home"
import Cart from "./components/ShoppingCart/Cart/Cart"
import productsList from "./components/Assets/productsList"

import "./globalStyles.css"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: lightgray;
`

export const ContentWrapper = styled.div`
  display: flex;
`

export const ProductsWrapper = styled.div`
  width: 850px;
`
export const CartWrapper = styled.div`
  height: 200px;
`

function App() {
  const [cartItems, setCartItems] = useState([])
  const [minValue, setMinValue] = useState("")
  const [maxValue, setMaxValue] = useState("")
  const [productName, setProductName] = useState("")
  const [order, setOrder] = useState("")

  const filteredProducts = productsList.filter((product) => {
    if (minValue && product.value < minValue) {
      return false
    }

    if (maxValue && product.value > maxValue) {
      return false
    }

    if (
      productName &&
      !product.name.toLowerCase().includes(productName.toLowerCase())
    ) {
      return false
    }

    return true
  })

  return (
    <Container>
      <Header />
      <ContentWrapper>
        <Filters
          minValue={minValue}
          maxValue={maxValue}
          productName={productName}
          setMinValue={setMinValue}
          setMaxValue={setMaxValue}
          setProductName={setProductName}
        />
        <ProductsWrapper>
          <Home
            products={filteredProducts}
            order={order}
            setOrder={setOrder}
            cartItems={cartItems}
            setCartItems={setCartItems}
          />
        </ProductsWrapper>
        <CartWrapper>
          <Cart cartItems={cartItems} setCartItems={setCartItems} />
        </CartWrapper>
      </ContentWrapper>
    </Container>
  )
}

export default App
