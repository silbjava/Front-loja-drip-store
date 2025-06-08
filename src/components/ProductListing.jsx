import React from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';

// Container com grid do PrimeFlex e margem esquerda
const ListingWrapper = styled.div.attrs(() => ({
  className: 'grid gap-3',
}))`
  width: 100%;
  margin-left: 5.2vw;
`;

const GridItem = styled.div.attrs(() => ({
  className: 'col-12 sm:col-6 md:col-4 lg:col-3',
}))``;

const ProductListing = ({ products }) => {
  if (!products || products.length === 0) {
    return <p className="ml-5">Nenhum produto encontrado.</p>;
  }

  return (
    <ListingWrapper>
      {products.map((product, index) => (
        <GridItem key={index}>
          <ProductCard
            image={product.image}
            type={product.type}
            name={product.name}
            price={product.price}
            priceDiscount={product.priceDiscount}
            badge={product.badge}
            showBadge={product.showBadge}
          />
        </GridItem>
      ))}
    </ListingWrapper>
  );
};

export default ProductListing;
