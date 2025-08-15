import React, { useState, useMemo, useEffect } from 'react';
import '../Carousel.css'
import CarouselArrows from './Arrows';
import CarouselDots from './Dots';

const images = [
  { id: 1, bgColor: '#3498db', label: 'Blue' },
  { id: 2, bgColor: '#2ecc71', label: 'Green' },
  { id: 3, bgColor: '#e74c3c', label: 'Red' },
];

const ImageCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const leftIndex = useMemo(
    () => (currentIndex - 1 + images.length) % images.length,
    [currentIndex]
  );

  const rightIndex = useMemo(
    () => (currentIndex + 1) % images.length,
    [currentIndex]
  );

  const nextImage = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => setIsAnimating(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  return (
    <div className="carousel">
      <div className="carousel-inner">
        <CarouselArrows direction="left" onClick={prevImage} />

        <div className="carousel-images">
          {images.map((image, index) => {
            let position = '';
            if (index === currentIndex) position = 'center';
            else if (index === leftIndex) position = 'left';
            else if (index === rightIndex) position = 'right';
            else return null;

            return (
              <div
                key={image.id}
                className={`carousel-image ${position}`}
                style={{
                  backgroundColor: image.bgColor,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.5rem',
                }}
              >
                {image.label}
              </div>
            );
          })}
        </div>

        <CarouselArrows direction="right" onClick={nextImage} />
      </div>

      <CarouselDots current={currentIndex} total={images.length} />
    </div>
  );
};

export default ImageCarousel;
