import styled from "styled-components"

export const CartBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1px;
  padding: 10px;
  border: 1px solid rgba(255, 255, 255);
  min-height: 200px;
  width: 200px;
  text-align: center;
  background: lightgray;
  border-radius: 10px;
  margin-left: 10px;
`

export const H2 = styled.h2`
  text-align: center;
`

export const P = styled.p`
  text-align: center;
`

export const Button = styled.button`
  min-width: 100px;
  background: grey;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  transition: background 0.3s ease;

  &:hover {
    background: black;
  }
`
