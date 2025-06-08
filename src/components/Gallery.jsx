import React, { useState } from 'react';
import styled from 'styled-components';
import arrowLeft from "../assets/arrow-left.svg";
import arrowRight from "../assets/arrow-right.svg";

const GalleryWrapper = styled.div`
  position: relative;
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || 'auto'};
  overflow: hidden;
`;

const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${({ radius }) => radius || '0px'};
  transition: all 0.3s ease;
`;

const Arrow = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  width: 32px;
  height: 32px;
  opacity: ${({ disabled }) => (disabled ? 0.3 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  z-index: 2;
`;

const ArrowLeft = styled(Arrow)`
  left: 12px;
`;

const ArrowRight = styled(Arrow)`
  right: 12px;
`;

const ThumbsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
  gap: 12px;
  flex-wrap: wrap;
`;

const Thumbnail = styled.img`
  width: 117px;
  height: 95px;
  object-fit: cover;
  border-radius: ${({ radius }) => radius || '0px'};
  border: ${({ selected }) => (selected ? '2px solid #C92071' : '2px solid transparent')};
  cursor: pointer;
  transition: border 0.2s;
`;

const Gallery = ({ images = [], className, width, height, radius, showThumbs }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleThumbClick = (index) => {
    setCurrentIndex(index);
  };

  const currentImage = images[currentIndex]?.src;

  return (
    <div className={className}>
      <GalleryWrapper width={width} height={height}>
        <ArrowLeft
          src={arrowLeft}
          onClick={handlePrev}
          disabled={currentIndex === 0}
          alt="Anterior"
        />
        <SlideImage src={currentImage} alt={`Imagem ${currentIndex + 1}`} radius={radius} />
        <ArrowRight
          src={arrowRight}
          onClick={handleNext}
          disabled={currentIndex === images.length - 1}
          alt="Próximo"
        />
      </GalleryWrapper>

      {showThumbs && (
        <ThumbsContainer>
          {images.map((img, index) => (
            <Thumbnail
              key={index}
              src={img.src}
              radius={radius}
              selected={index === currentIndex}
              onClick={() => handleThumbClick(index)}
              alt={`Miniatura ${index + 1}`}
            />
          ))}
        </ThumbsContainer>
      )}
    </div>
  );
};

export default Gallery;
