import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./fragments/Navbar";
import Footer from "./fragments/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Specials from './pages/Specials';
import SignIn from './pages/SignIn';
import DietPlan from './pages/DietPlan';
import Cart from './pages/Cart';
import { getUser} from "./data/userPass";
import LoginAlert from './fragments/LoginAlert'; 

function App() {
  const [username, setUsername] = useState(getUser());
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
  const [showLoginAlert, setShowLoginAlert] = useState(false);
  

  const loginUser = (username) => {
    setUsername(username);
    localStorage.setItem('isLoggedIn', 'true');
    setIsLoggedIn(true);
    setShowLoginAlert(true);
  };

  const logoutUser = () => {
    setUsername(null);
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  const closeLoginAlert = () => {
    setShowLoginAlert(false);
  };

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
    ];
    localStorage.setItem('specials', JSON.stringify(specials));
  }, []);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Router>
        <Navbar username={username} logoutUser={logoutUser} isLoggedIn={isLoggedIn} />
        <main role="main">
          <div className="container my-3">
            <Routes>
              <Route path="/" element={<Home username={username} />} />
              <Route path="/login" element={<Login loginUser={loginUser} />} />
              <Route path="/profile" element={<Profile logoutUser={logoutUser} />} />
              <Route path="/specials" element={<Specials />} />
              <Route path="/signIn" element={<SignIn loginUser={loginUser} />} />
              <Route path="/dietplan" element={<DietPlan />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </div>
        </main>
        <Footer />
        <LoginAlert show={showLoginAlert} onClose={closeLoginAlert} />
      </Router>
    </div>
  );
}

export default App;
