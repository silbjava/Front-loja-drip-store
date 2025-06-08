import { useState } from 'react';
import { Button } from 'primereact/button';
import WhiteSneakers from '/White-Sneakers.jpg';
import Ornament from "../assets/Ornament.svg"

const HeroBanner = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="flex flex-column md:flex-column justify-content-center align-items-center"
            style={{
                backgroundColor: '#F5F5F5',
                maxWidth: '90rem',
                margin: '0 ',
            }}
        >
            {/* Seção de conteúdo com flex row em desktop */}
            <div className="flex flex-column md:flex-row justify-content-between align-items-center">
                {/* Coluna Esquerda */}
                <div
                    className="flex flex-column align-items-start font-bold"
                    style={{ maxWidth: '510px'}}
                >
                    <span style={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 700,
                        fontSize: '1rem',
                        lineHeight: '1.5rem',
                        letterSpacing: '0.047rem',
                        color: '#F6AA1C',
                        marginBottom: '1.25rem'
                    }}>
                        Melhores ofertas personalizadas
                    </span>

                    <h1 className="flex justify-content-center md:justify-content-start align-items-center"
                        style={{
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 800,
                            fontSize: '4rem',
                            lineHeight: '4.125rem',
                            letterSpacing: '0.0625rem',
                            color: '#1F1F1F',
                            marginBottom: '1.25rem',
                        }}>
                        Queima de stoque Nike🔥
                    </h1>

                    <p style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '1.125rem',
                        lineHeight: '2.125rem',
                        letterSpacing: '0.047rem',
                        color: '#6b7280',
                        marginBottom: '2.5rem'
                    }}>
                        Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.
                    </p>

                    <Button
                        label="Ver Ofertas"
                        className="border-round-lg flex justify-content-center align-items-center"
                        style={{
                            width: '13.75rem',
                            height: '3rem',
                            backgroundColor: '#C92071',
                            color: '#F5F5F5',
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 700,
                            fontSize: '1rem',
                            lineHeight: '1.5rem',
                            letterSpacing: '0.047rem',
                            border: 'none',
                        }}
                    />
                </div>

                {/* Coluna Direita com imagem */}
                <div className="flex justify-content-center align-items-center" style={{ flex: 1 }}>
                    <img
                        src={WhiteSneakers}
                        alt="Nike Air"
                        style={{
                            width: '100%',
                            maxWidth: '31.25rem',
                            transform: 'rotate(-19deg)',
                            
                        }}
                    />
                    <img className="flex"
                        src={Ornament}
                        alt="Ornamento decorativo"
                        style={{
                            right: '2rem',
                            width: '8.75rem', // ajuste conforme o tamanho original
                            height: 'auto',
                            objectFit: 'contain'
                        }}
                    />
                </div>
            </div>

            {/* Indicadores de página */}
            <div className=" flex justify-content-center gap-2 mt-5 ">
                {[0, 1, 2, 3].map((index) => (
                    <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        style={{
                            position: 'relative',
                            width: '0.75rem',
                            height: '0.75rem',
                            marginTop: '4.875rem',
                            borderRadius: '50%',
                            backgroundColor: activeIndex === index ? '#C92071' : '#CCCCCC',
                            border: 'none',
                            cursor: 'pointer',
                            transition: 'background-color 0.3s ease',
                        }}
                        aria-label={`Slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroBanner;
