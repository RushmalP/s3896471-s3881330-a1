import React from 'react';
import './Home.css';


function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1><center>SOIL: Your Organic Food Partner</center></h1>
        <p1><center>Welcome to SOIL, the home of Organic Food.</center></p1>
      </section>
      <section className="products">
        <h2>Our Products</h2>
        <p>Explore our carefully curated selection of organic fruits, vegetables, grains, and more.</p>
        <button>Shop Now</button>
      </section>
      <section className="seminars">
        <h2>Seminars and Workshops</h2>
        <p>Dive deeper into the world of organic living with our expert-led seminars on diet, nutrition, and small-scale organic farming.</p>
        <button>Learn More</button>
      </section>
      <section className="reviews">
        <h2>Customer Reviews</h2>
        <p>Hear what our satisfied customers have to say about their SOIL experience.</p>
        <button>Read Reviews</button>
      </section>
    </div>
  );
}

export default Home;
