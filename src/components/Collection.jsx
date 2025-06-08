import { useState } from 'react';
import { Button } from 'primereact/button';
import ProductCard from './ProductCard';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeflex/primeflex.css';
import styled from 'styled-components';

// Importa os ícones
import Tshirt from "../assets/tshirt.svg";
import Pants from "../assets/pants.svg";
import Headphones from "../assets/headphones.svg";
import Tenis from "../assets/tenis.svg";
import Caps from "../assets/bone.png";

// Estiliza cada item de categoria
const CategoriaItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const IconImage = styled.img.withConfig({
    shouldForwardProp: (prop) => prop !== 'active'
})`
  width: 48px;
  height: 48px;
  filter: ${({ active }) => (active ? 'invert(17%) sepia(94%) saturate(7485%) hue-rotate(312deg) brightness(96%) contrast(101%)' : 'grayscale(1)')};
  transition: filter 0.3s ease;
`;

const Label = styled.span`
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #474747;
  margin-top: 10px;
`;

const Collections = () => {
    const [ativa, setAtiva] = useState('Camisetas');

    const cards = [
        {
            title: 'Novo drop Supreme',
            image: '/collection-1.png',
        },
        {
            title: 'Coleção Adidas',
            image: '/collection-2.png',
        },
        {
            title: 'Novo Beats Bass',
            image: '/collection-3.png',
        },
    ];

    const categorias = [
        { nome: 'Camisetas', icon: Tshirt },
        { nome: 'Calças', icon: Pants },
        { nome: 'Bonés', icon: Caps },
        { nome: 'Headphones', icon: Headphones },
        { nome: 'Tênis', icon: Tenis },
    ];
    const Titulo = styled.p`
        font-family: 'Inter', sans-serif;
        font-weight: 700;
        font-size: 24px;
        line-height: 38px;
        letter-spacing: 0.75px;
        color: #474747;
    `;
    return (
        <>
            <div className="flex pl-10"
            ><Titulo>Coleções em destaque</Titulo></div >
            <div className="flex flex-wrap justify-content-center gap-3" >
                {cards.map((item, index) => (
                    <div className='flex relative lg:hmax-w-25rem' key={index}>
                        <span
                            className=" bg-yellow-200 font-bold text-sm border-round-xl"
                            style={{
                                padding: '5px 15px',
                                borderRadius: '29px',
                                position: 'absolute',
                                top: '1.5rem',
                                left: '1.875rem',
                                zIndex: 1,
                                color: '#474747'
                            }}
                        >
                            30% OFF
                        </span>
                        <Button label="Comprar" className="flex font-bold border-round-lg p-button-sm p-button-secondary absolute"
                            style={{
                                color: '#C92071',
                                background: '#F5F5F5',
                                fontFamily: 'Inter, sans-serif',
                                fontSize: '1rem',
                                lineHeight: '1.5rem',
                                top: '10.5rem',
                                left: '1.875rem',
                            }} />
                        <img src={item.image} alt={item.title} />
                    </div>
                ))}
            </div >

            <div className="w-12 flex justify-content-center align-items-center"
            ><Titulo>Coleções em destaque</Titulo></div >
            <div className="flex justify-content-center gap-8 ">
                {categorias.map((cat) => (
                    <CategoriaItem key={cat.nome} onClick={() => setAtiva(cat.nome)}>
                        <>
                            <IconImage src={cat.icon} alt={cat.nome} active={ativa === cat.nome} />
                        </>
                        <Label>{cat.nome}</Label>
                    </CategoriaItem>
                ))}
            </div>

        </>
    );
};

export default Collections;
