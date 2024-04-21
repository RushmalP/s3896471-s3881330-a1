import React, { useState, useEffect } from 'react';
import './Carousel.css';

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselItems = [
    {
      title: 'Box 1',
      description: 'In the quaint village nestled among rolling hills, the annual harvest festival was a time of joy and celebration. Families gathered from near and far, bringing with them the fruits of their labor to share and exchange. The air was filled with the aroma of freshly baked pies and the sound of lively music, as children ran through the fields, their laughter echoing across the valley. The festival was not just a time to reap the harvest, but also to weave tighter the bonds of community and friendship.'
    },
    {
        title: 'Box 2',
        description: 'In the quaint village nestled among rolling hills, the annual harvest festival was a time of joy and celebration. Families gathered from near and far, bringing with them the fruits of their labor to share and exchange. The air was filled with the aroma of freshly baked pies and the sound of lively music, as children ran through the fields, their laughter echoing across the valley. The festival was not just a time to reap the harvest, but also to weave tighter the bonds of community and friendship.'
      },
      {
        title: 'Box 3',
        description: 'In the quaint village nestled among rolling hills, the annual harvest festival was a time of joy and celebration. Families gathered from near and far, bringing with them the fruits of their labor to share and exchange. The air was filled with the aroma of freshly baked pies and the sound of lively music, as children ran through the fields, their laughter echoing across the valley. The festival was not just a time to reap the harvest, but also to weave tighter the bonds of community and friendship.'
      },
      {
        title: 'Box 4',
        description: 'In the quaint village nestled among rolling hills, the annual harvest festival was a time of joy and celebration. Families gathered from near and far, bringing with them the fruits of their labor to share and exchange. The air was filled with the aroma of freshly baked pies and the sound of lively music, as children ran through the fields, their laughter echoing across the valley. The festival was not just a time to reap the harvest, but also to weave tighter the bonds of community and friendship.'
      },
      {
        title: 'Box 5',
        description: 'In the quaint village nestled among rolling hills, the annual harvest festival was a time of joy and celebration. Families gathered from near and far, bringing with them the fruits of their labor to share and exchange. The air was filled with the aroma of freshly baked pies and the sound of lively music, as children ran through the fields, their laughter echoing across the valley. The festival was not just a time to reap the harvest, but also to weave tighter the bonds of community and friendship.'
      },
      {
        title: 'Box 6',
        description: 'In the quaint village nestled among rolling hills, the annual harvest festival was a time of joy and celebration. Families gathered from near and far, bringing with them the fruits of their labor to share and exchange. The air was filled with the aroma of freshly baked pies and the sound of lively music, as children ran through the fields, their laughter echoing across the valley. The festival was not just a time to reap the harvest, but also to weave tighter the bonds of community and friendship.'
      },
    {
      title: 'Box 7',
      description: 'In a small town library, a secret meeting was held each week by a society of amateur historians. They delved into old archives and shared tales of forgotten heroes and lost civilizations. Each member brought a piece of the puzzle, and together they reconstructed histories that time had erased. Their dedication was a quiet rebellion against the passage of time, an effort to keep the past alive and relevant for future generations.'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((currentActiveIndex) => (currentActiveIndex + 1) % carouselItems.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [carouselItems.length]);

  const goToPrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel-container">
      <button className="carousel-control left" onClick={goToPrev}>
        &#10094;
      </button>
      <div className="carousel-content">
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${activeIndex === index ? 'active' : ''}`}
          >
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      <button className="carousel-control right" onClick={goToNext}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
