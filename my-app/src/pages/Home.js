import React from 'react';
import './Home.css';


function Home() {
  return (
    <div className="home">
      <section className="image">
        <div className="image-background"></div> {/* Background overlay */}
        <div className="image-content"> {/* Content overlay */}
          <h1>SOIL: Your Organic Food Partner</h1>
          <p1>Welcome to SOIL, the home of Organic Food and Products</p1>
        </div>
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
