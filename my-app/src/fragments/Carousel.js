import React, { useState, useEffect } from 'react';
import './Carousel.css';

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselItems = [
    {
      title: 'What is Organic Food?',
      description: 'Farmers and food producers that organically farm food without the use of synthetic chemicals like artificial fertilisers and pesticides. They also avoid exposing food to radiation or using genetically modified ingredients.For organic farms, sustainability of the environment and animal welfare are critical concerns. Animal products can also be categorised as "organic." For instance, eggs that have the organic certification come from free-range hens, not from caged hens.'
    },
    {
        title: 'Sustainable Farming',
        description: 'Organic farming prioritises healthy soils, healthy plants, and healthy habitats. To enhance soil quality and increase the amount of organic soil matter in the soil, organic farmers employ crop rotation as well as biological fertiliser inputs. Farmers lessen the effects of drought and flooding by improving the soils capacity to absorb water by adding more organic matter to the soil. Enhancing soil matter aids in the soils ability to retain nutrients necessary for the growth of crops that are more resistant to pests.'
      },
      {
        title: 'Organic Certification',
        description: 'Organic certification ensures that foods are grown without the use of prohibited substances or genetically modified seeds; however, the standards and enforcement can be different between various regions. To ensure that they meet consistent organic standards and support practices that are truly beneficial to health and the environment, consumers intending to buy organic products are encouraged to understand certification requirements and seek labels from reputable certifying bodies.'
      },
      {
        title: 'Future for Food',
        description: 'While there is an ongoing debate on the nutritional content of organic versus conventional foods, many environmentalists say that given its sustainability; organic farming is a significant practice for future food security. Inorganic inputs used in fertilizers, compatibility with natural systems, adaptability to local conditions make organic farming a resilient approach to agriculture. These types of practices may provide solutions for a long-lasting sustainable food production for the future.'
      },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((currentActiveIndex) => (currentActiveIndex + 1) % carouselItems.length);
    }, 8000);
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
