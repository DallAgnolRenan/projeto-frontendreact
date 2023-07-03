import styled from "styled-components";

export const ProductCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border: 1px solid rgba(255, 255, 255);
  border-radius: 10px;
  width: 200px;
  margin: 10px;

  &:hover {
    transform: scale(1.05);
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  object-fit: cover;
  transition: opacity 0.3s ease;
`;

export const ProductName = styled.h3`
  margin: 10px 0;
  text-align: center;
  font-size: 15px;
  font-weight: bold;
`;

export const ProductValue = styled.p`
  margin-bottom: 10px;
  font-size: 15px;
  font-weight: bold;
`;

export const AddToCartButton = styled.button`
  min-width: 100px;
  background: grey;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 8px 16px;
  cursor: pointer;
  font-family: Arial, sans-serif;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  transition: background 0.3s ease;

  &:hover {
    background: black;
  }
`;
