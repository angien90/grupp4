import React from 'react';
import '../CarouselDots.css';

interface Props {
  current: number;
  total: number;
}

const CarouselDots: React.FC<Props> = ({ current, total }) => {
  return (
    <div className="carousel-dots">
      {Array.from({ length: total }).map((_, index) => (
        <span
          key={index}
          className={`dot ${index === current ? 'active' : ''}`}
        />
      ))}
    </div>
  );
};

export default CarouselDots;
