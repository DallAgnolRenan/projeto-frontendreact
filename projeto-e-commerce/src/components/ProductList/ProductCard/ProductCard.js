import {
  ProductCardWrapper,
  ProductImage,
  ProductName,
  ProductValue,
  AddToCartButton,
} from "./ProductStyle";

const ProductCard = ({ id, name, value, imageUrl, addToCart }) => {
  const handleAddToCart = () => {
    addToCart({ id, name, value });
  };

  return (
    <ProductCardWrapper>
      <ProductImage src={imageUrl} alt={name} />
      <ProductName>{name}</ProductName>
      <ProductValue>US${value.toFixed(2)}</ProductValue>
      <AddToCartButton onClick={handleAddToCart}>
        Adicionar ao carrinho
      </AddToCartButton>
    </ProductCardWrapper>
  );
};

export default ProductCard;
