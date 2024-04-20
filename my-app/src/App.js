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
    localStorage.setItem('isLoggedIn', 'false');
    setIsLoggedIn(false);
  };

  const closeLoginAlert = () => {
    setShowLoginAlert(false);
  };

  useEffect(() => {
    const specials = [
      { name: 'Organic Apples', description: 'Half a dozen of juicy organic apples.', price: 3.99 },
      { name: 'Whole Grain Bread', description: 'Fresh and healthy whole grain bread.', price: 3.49 },
      { name: 'Greek Yogurt', description: '1 kg of delicious greek yogurt for optimal gut health.', price: 7.99 },
      { name: 'Organic Strawberries', description: '500 grams of sweet, hand-picked strawberries.', price: 5.99 },
      { name: 'Cherry Tomatoes', description: '500 grams of ripe cherry tomatoes.', price: 4.49 },
      { name: 'Avocados', description: '500 grams of nutritious avocados.', price: 4.99 },
      { name: 'Free-range Eggs', description: 'A dozen of large eggs.', price: 10.49 },
      { name: 'Mushrooms', description: '500 grams of organically grown mushrooms.', price: 8.99 },
      { name: 'Organic Oranges', description: 'Half a dozen of fresh oranges rich in vitamin C.', price: 4.99 },
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
