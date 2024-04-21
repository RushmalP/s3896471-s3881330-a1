import React from 'react';
import './Home.css';
import Carousel from '../fragments/Carousel';

function Home() {

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
      <div className="info-box">
          <h2>Nutritional Advice</h2>
          <p>Learn about balanced diets, the importance of nutrients, and how to make informed choices for your health and well-being.</p>
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
      <Carousel />
    </div>
  );
}

export default Home;