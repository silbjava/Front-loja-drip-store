import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div.attrs(() => ({
  className: 'flex flex-column align-items-start p-2',
}))`
  width: 292px;
  font-family: 'Inter, sans-serif';
  background-color: #FFFFFF;
  border-radius: 4px;
  position: relative;
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
  }
`;

const Badge = styled.span`
  position: absolute;
  top: 12px;
  left: 12px;
  background-color: #E7FF86;
  color: #474747;
  font-size: 14px;
  font-weight: bold;
  padding: 5px 15px;
  border-radius: 29px;
  z-index: 1;
`;

const ProductImage = styled.img`
  width: 292px;
  height: 321px;
  object-fit: contain;
`;
const ProductType = styled.h4`
  color: #8F8F8F;
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 1.5rem;
  letter-spacing: 0.75px;
  margin: 0 0;
`
const ProductName = styled.h3`
  font-size: 16px;
  color: #474747;
  margin: 8px 0 4px 0;
  font-weight: normal;
`;

const PriceRow = styled.div.attrs(() => ({
  className: 'flex align-items-center gap-2',
}))``;

const OldPrice = styled.span`
  font-size: 24px;
  color: #8f8f8f;
  text-decoration: line-through;
`;

const DiscountPrice = styled.span`
  font-size: 24px;
  color: #474747;
  font-weight: bold;
`;

const RegularPrice = styled.span`
  font-size: 24px;
  color: #474747;
  font-weight: bold;
`;

const ProductCard = ({ image, type, name, price, priceDiscount, badge, showBadge = false }) => {
  return (
    <CardContainer>
      {showBadge && badge && <Badge>{badge}</Badge>}
      <ProductImage src={image} alt={name} />
      <ProductType>{type}</ProductType>
      <ProductName>{name}</ProductName>
      <PriceRow>
        {priceDiscount ? (
          <>
            <OldPrice>R$ {price.toFixed(2)}</OldPrice>
            <DiscountPrice>R$ {priceDiscount.toFixed(2)}</DiscountPrice>
          </>
        ) : (
          <RegularPrice>R$ {price.toFixed(2)}</RegularPrice>
        )}
      </PriceRow>
    </CardContainer>
  );
};

export default ProductCard;
