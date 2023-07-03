import styled from "styled-components"

export const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const Select = styled.select`
  margin-bottom: 5px;
  padding: 8px;
  font-size: 12px;
  border: 1px solid #ccc;
  border-radius: 10px;
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`

export const PaginationButton = styled.button`
  margin: 0 5px;
  padding: 5px 10px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }

  &.active {
    background-color: #ccc;
    color: #fff;
    border: none;
  }
`

export const TotalProducts = styled.p`
  text-align: center;
  font-size: 16px;
  margin-top: 10px;
  font-weight: bold;
`
