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


function App() {
  const [username, setUsername] = useState(getUser());

  useEffect(() => {
    const specials = [
      { name: 'Organic Apples', description: 'Fresh and juicy organic apples.', price: 3.99 },
      { name: 'Whole Grain Bread', description: 'Healthy whole grain bread.', price: 2.49 },
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
