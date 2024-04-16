import React, { useState, useRef } from 'react';
import './Home.css';

function Home() {
  const [currentBox, setCurrentBox] = useState(0);
  const infoBoxRef = useRef(null); 

  const textBoxes = [
    {
      title: 'Organic Foods',
      content: 'Discover the benefits of organic foods and how they contribute to a healthier lifestyle and a sustainable environment.'
    },
    {
      title: 'What is Organic Food?',
      content: 'Farmers and food producers that organically farm food without the use of synthetic chemicals like artificial fertilisers and pesticides. They also avoid exposing food to radiation or using genetically modified ingredients.For organic farms, sustainability of the environment and animal welfare are critical concerns. Animal products can also be categorised as "organic." For instance, eggs that have the organic certification come from free-range hens, not from caged hens.'
    },
    {
      title: 'Sustainable Farming',
      content: 'Organic farming prioritises healthy soils, healthy plants, and healthy habitats. To enhance soil quality and increase the amount of organic soil matter in the soil, organic farmers employ crop rotation as well as biological fertiliser inputs. Farmers lessen the effects of drought and flooding by improving the soils capacity to absorb water by adding more organic matter to the soil. Enhancing soil matter also aids in the soils ability to retain nutrients necessary for the growth of crops that are more resistant to pests and illnesses.'
    },
    {
      title: 'Overall Health',
      content: 'Growing research, such as a report from the Presidents Cancer Panel, indicates that eating organic food can significantly lower exposure to harmful pesticides. Additionally, an increasing amount of studies demonstrates that eating organic food is a great way to get nutrients like iron, magnesium, and vitamin C, all of which are essential for overall health.'
    }
  ];

  const nextBox = () => {
    setCurrentBox((prevBox) => (prevBox + 1) % textBoxes.length);
    if(infoBoxRef.current){
      infoBoxRef.current.scrollTo(0, 0);
    }
  };

  return (
    <div className="home">
      <section className="image">
        <div className="image-background"></div>
        <div className="image-content">
          <h1>SOIL: Your Organic Food Partner</h1>
          <p className="intro-text">Welcome to SOIL, the home of Organic Food and Products</p>
        </div>
      </section>
      <section className="info-boxes">
      <div className="info-box" ref={infoBoxRef}>
          <h2>{textBoxes[currentBox].title}</h2>
          <p>{textBoxes[currentBox].content}</p>
          <button className="arrow-btn" onClick={nextBox}>&rarr;</button>
        </div>
        <div className="info-box">
          <h2>Nutritional Advice</h2>
          <p>Learn about balanced diets, the importance of nutrients, and how to make informed choices for your health and well-being.</p>
        </div>
        <div className="info-box">
          <h2>Online Store</h2>
          <p>Explore our online store for a wide range of organic products, including fruits, vegetables, grains, and more, all available for convenient home delivery.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
