import React from 'react';
import Layout from '../pages/Layout';
import Gallery from '../components/Gallery';
import Section from '../components/Section';
import ProductListing from '../components/ProductListing';
import styled from 'styled-components';
import shoe from "../assets/K-Swiss V8-Masculino.svg"

// Imagens da galeria
const galleryImages = [
  { src: '/home-slide-1.jpeg' },
  { src: '/home-slide-2.jpeg' },
  { src: '/home-slide-3.jpeg' }
];

// Coleções em destaque (imagens horizontais)
const CollectionImage = styled.img`
  width: 100%;
  max-width: 440px;
  border-radius: 4px;
  object-fit: cover;
`;
// Coleções em destaque central(imagens horizontais)
const SelectionImage = styled.img`
  width: 100%;
  max-width: 64px;
  object-fit: cover;
`;

const products = [
  {
    image: shoe,
    type: "Tênis",
    name: "K-Swiss V8 - Masculino",
    price: 200,
    priceDiscount: 100,
    badge: "30% OFF",
    showBadge: true
  },
  {
    image: shoe,
    type: "Tênis",
    name: "K-Swiss V8 - Masculino",
    price: 200,
    priceDiscount: 100,
    badge: "30% OFF",
    showBadge: true
  },
  {
    image: shoe, type: "Tênis", name: "K-Swiss V8 - Masculino", price: 200,
    priceDiscount: 100, badge: "30% OFF", showBadge: false
  },
  {
    image: shoe, type: "Tênis", name: "K-Swiss V8 - Masculino", price: 200,
    priceDiscount: 100, badge: "30% OFF", showBadge: false
  },
  {
    image: shoe, type: "Tênis", name: "K-Swiss V8 - Masculino", price: 200,
    priceDiscount: 100, badge: "30% OFF", showBadge: false
  },
  {
    image: shoe, type: "Tênis", name: "K-Swiss V8 - Masculino", price: 200,
    priceDiscount: 100, badge: "30% OFF", showBadge: false
  },
];

const CollectionWrapper = styled.div.attrs(() => ({
  className: 'flex flex-wrap gap-3 justify-content-center',
}))``;

const HomePage = () => {
  return (
    <Layout>
      {/* Galeria de slides */}
      <Gallery
        images={galleryImages}
        width="1440px"
        height="681px"
        radius="4px"
      />

      {/* Coleções em destaque left*/}
      <Section title="Coleções em destaque">
        <CollectionWrapper>
          <CollectionImage src="/collection-1.png" alt="Coleção 1" />
          <CollectionImage src="/collection-2.png" alt="Coleção 2" />
          <CollectionImage src="/collection-3.png" alt="Coleção 3" />
        </CollectionWrapper>
      </Section>
      {/* Coleções em destaque center*/}
      <Section title="Coleções em destaque" titleAlign="center">
        <CollectionWrapper>
          <SelectionImage src="src/assets/tshirt.svg" alt="Coleção 1.1" />
          <SelectionImage src="src/assets/pants.svg" alt="Coleção 2.1" />
          <SelectionImage src="src/assets/bone.png" alt="Coleção 3.1" />
          <SelectionImage src="src/assets/headphones.svg" alt="Coleção 4.1" />
          <SelectionImage src="src/assets/tenis.svg" alt="Coleção 5.1" />
        </CollectionWrapper>
      </Section>

      {/* Produtos em alta */}
      <Section title="Produtos em alta" titleAlign="left">
        <ProductListing products={products} />
      </Section>
    </Layout>
  );
};

export default HomePage;