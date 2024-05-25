import './carousel.scss';
import { useState, useEffect } from 'react';

const Carousel = ({ items, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, interval);

    return () => clearInterval(slideInterval);
  }, [items.length, interval]);

  return (
    <div className="carousel">
      <div className="carousel__slide">
        {items.map((item, index) => (
          <div
            key={index}
            className={`carousel__item ${index === currentIndex ? 'carousel__item--active' : ''}`}
          >
            <img src={item.imgUrl} alt={item.imgName} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
