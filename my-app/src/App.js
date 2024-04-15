import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./fragments/Navbar";
import Footer from "./fragments/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Specials from './pages/Specials';
import SignIn from './pages/SignIn';
import DietPlan from './pages/DietPlan';
import Cart from './pages/Cart';
import { getUser, removeUser } from "./data/userPass";
import { initUsers } from "./data/userPass";


function App() {
  const [username, setUsername] = useState(getUser());
  useEffect(() => {
    initUsers();  
  }, []);

  useEffect(() => {
    const specials = [
      { name: 'Organic Apples', description: 'Fresh and juicy organic apples.', price: 3.99 },
      { name: 'Whole Grain Bread', description: 'Healthy whole grain bread.', price: 2.49 },
      { name: 'Gardening Gloves', description: 'Durable gloves perfect for planting and weeding.', price: 5.99 },
      { name: 'Compost Mix', description: 'Rich, nutritious compost to enrich your soil.', price: 7.50 },
      { name: 'Cherry Tomato Plant', description: 'Young plants ready for transplantation.', price: 4.25 },
      { name: 'Herb Garden Kit', description: 'Everything you need to start your own herb garden.', price: 9.99 },
      { name: 'Bee-friendly Flower Seeds', description: 'Attract bees and butterflies with these seeds.', price: 3.45 },
      { name: 'Organic Fertilizer', description: 'Boost your garden growth with organic fertilizer.', price: 6.75 },
      { name: 'Watering Can', description: 'Stylish and practical, perfect for your gardening needs.', price: 12.99 },
      { name: 'Leaf Rake', description: 'Lightweight and easy to use, ideal for gathering leaves.', price: 8.50 }
      // Add more specials here
    ];
    localStorage.setItem('specials', JSON.stringify(specials));
  }, []);


  const loginUser = (username) => {
    setUsername(username);
  }

  const logoutUser = () => {
    removeUser();
    setUsername(null);
  }

  return (
    <div className="d-flex flex-column min-vh-100">
      <Router>
        <Navbar username={username} logoutUser={logoutUser} />
        <main role="main">
          <div className="container my-3">
            <Routes>
              <Route path="/" element={<Home username={username} />} />
              <Route path="/login" element={<Login loginUser={loginUser} />} />
              <Route path="/profile" element={<Profile username={username} />} />
              <Route path="/specials" element={<Specials />} />
              <Route path="/signIn" element={<SignIn />} />
              <Route path="/dietplan" element={<DietPlan />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
