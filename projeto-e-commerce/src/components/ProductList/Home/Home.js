import React, {useState} from "react"
import ProductCard from "../ProductCard/ProductCard"
import {
  ProductList,
  Select,
  Container,
  PaginationContainer,
  PaginationButton,
  TotalProducts,
} from "./HomeStyle"

const Home = ({products, order, setOrder, cartItems, setCartItems}) => {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 3

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id)

    if (existingItem) {
      const updatedItems = cartItems.map((item) => {
        if (item.id === product.id) {
          return {...item, quantity: item.quantity + 1}
        }
        return item
      })
      setCartItems(updatedItems)
    } else {
      setCartItems([...cartItems, {...product, quantity: 1}])
    }
  }

  const sortedProducts = [...products].sort((a, b) => {
    if (order === "asc") {
      return a.value - b.value
    } else if (order === "desc") {
      return b.value - a.value
    } else {
      return 0
    }
  })

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentProducts = sortedProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  )

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const pageNumbers = Math.ceil(sortedProducts.length / itemsPerPage)

  const renderPageNumbers = () => {
    const pageArray = []

    for (let i = 1; i <= pageNumbers; i++) {
      pageArray.push(
        <PaginationButton key={i} onClick={() => paginate(i)}>
          {i}
        </PaginationButton>
      )
    }

    return pageArray
  }

  return (
    <Container>
      <Select value={order} onChange={(e) => setOrder(e.target.value)}>
        <option value="">Ordenar por</option>
        <option value="asc">Menor Preço</option>
        <option value="desc">Maior Preço</option>
      </Select>
      <ProductList>
        {currentProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            value={product.value}
            imageUrl={product.imageUrl}
            addToCart={addToCart}
          />
        ))}
      </ProductList>
      <PaginationContainer>
        <div className="pagination">{renderPageNumbers()}</div>
      </PaginationContainer>
      <TotalProducts>Total de produtos: {sortedProducts.length}</TotalProducts>
    </Container>
  )
}

export default Home
