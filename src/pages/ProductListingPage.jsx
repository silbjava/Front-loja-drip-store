import React, { useState } from 'react';
import Layout from '../pages/Layout';
import ProductListing from '../components/ProductListing';
import FilterGroup from '../components/FilterGroup';
import styled from 'styled-components';

// Mock de produtos (imagem deve ser importada de assets reais)
import shoe from "../assets/K-Swiss V8-Masculino.svg";

const productsData = [
  {
    image: shoe,
    type: 'Tênis',
    name: 'K-Swiss V8 - Masculino',
    price: 200,
    priceDiscount: 149.9,
    badge: '25% OFF',
    showBadge: true,
  },
  {
    image: shoe,
    type: 'Tênis',
    name: 'Tênis Esportivo',
    price: 180,
    showBadge: false,
  },
  {
    image: shoe,
    type: 'Tênis',
    name: 'Adidas Running',
    price: 220,
    priceDiscount: 199.9,
    badge: '10% OFF',
    showBadge: true,
  },
  {
    image: shoe,
    type: 'Tênis',
    name: 'Puma Street',
    price: 150,
    showBadge: false,
  },
  {
    image: shoe,
    type: 'Tênis',
    name: 'Adidas Running',
    price: 220,
    priceDiscount: 199.9,
    badge: '10% OFF',
    showBadge: true,
  },
  {
    image: shoe,
    type: 'Tênis',
    name: 'Adidas Running',
    price: 220,
    priceDiscount: 199.9,
    badge: '10% OFF',
    showBadge: true,
  },
  {
    image: shoe,
    type: 'Tênis',
    name: 'Adidas Running',
    price: 220,
    priceDiscount: 199.9,
    badge: '10% OFF',
    showBadge: true,
  },
  {
    image: shoe,
    type: 'Tênis',
    name: 'Adidas Running',
    price: 220,
    priceDiscount: 199.9,
    badge: '10% OFF',
    showBadge: true,
  },
  {
    image: shoe,
    type: 'Tênis',
    name: 'Adidas Running',
    price: 220,
    priceDiscount: 199.9,

  },
  {
    image: shoe,
    type: 'Tênis',
    name: 'Adidas Running',
    price: 220,
    priceDiscount: 179.
  }
];

const PageContainer = styled.div`
  display: flex;
  padding: 40px;
  gap: 40px;
`;

const Sidebar = styled.aside`
  width: 308px;
`;

const SortBox = styled.div`
  margin-bottom: 40px;
`;

const Label = styled.label`
  font-size: 16px;
  color: #474747;
  display: block;
  margin-bottom: 8px;
`;

const Select = styled.select`
  width: 100%;
  height: 60px;
  padding: 12px;
  border: 1px solid #ccc;
  font-size: 14px;
  border-radius: 4px;
`;

const FilterBox = styled.div`
  background-color: white;
  padding: 20px;
  width: 308px;
  border-radius: 4px;
`;

const FilterTitle = styled.h3`
  font-size: 16px;
  color: #474747;
  margin-bottom: 8px;
`;

const Divider = styled.hr`
  border: 1px solid #ccc;
  margin-bottom: 16px;
`;

const ProductListingPage = () => {
  const [products] = useState(productsData);

  return (
    <Layout>
      <PageContainer>
        <Sidebar>
          <SortBox>
            <Label>Ordenar por</Label>
            <Select>
              <option value="low">Menor preço</option>
              <option value="high">Maior preço</option>
            </Select>
          </SortBox>

          <FilterBox>
            <FilterTitle>Filtrar por</FilterTitle>
            <Divider />
            <FilterGroup
              title="Marca"
              inputType="checkbox"
              options={[
                { text: 'Adiddas' },
                { text: 'Calenciaga' },
                { text: 'K-Swiss' },
                { text: 'Nike' },
                { text: 'Puma' },
              ]}
            />
            <FilterGroup
              title="Categoria"
              inputType="checkbox"
              options={[
                { text: 'Esporte e lazer' },
                { text: 'Casual' },
                { text: 'Utilitário' },
                { text: 'Corrida' },
              ]}
            />
            <FilterGroup
              title="Gênero"
              inputType="checkbox"
              options={[
                { text: 'Masculino' },
                { text: 'Feminino' },
                { text: 'Unisex' },
              ]}
            />
            <FilterGroup
              title="Estado"
              inputType="radio"
              options={[
                { text: 'Novo', value: 'new' },
                { text: 'Usado', value: 'used' },
              ]}
            />
          </FilterBox>
        </Sidebar>

        <main className="flex-1">
          <ProductListing products={products} />
        </main>
      </PageContainer>
    </Layout>
  );
};

export default ProductListingPage;
