import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './fragments/Navbar';
import Footer from './fragments/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Specials from './pages/Specials';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <main role="main" className="flex-shrink-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/specials" element={<Specials />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/SignIn" element={<SignIn />} />
            {/* Additional routes as needed */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
