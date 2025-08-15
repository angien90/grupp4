import React from 'react';
import '../CarouselArrows.css';

interface Props {
  direction: 'left' | 'right';
  onClick: () => void;
}

const CarouselArrows: React.FC<Props> = ({ direction, onClick }) => {
  return (
    <button className={`carousel-arrow ${direction}`} onClick={onClick}>
      {direction === 'left' ? '◀' : '▶'}
    </button>
  );
};

export default CarouselArrows;
