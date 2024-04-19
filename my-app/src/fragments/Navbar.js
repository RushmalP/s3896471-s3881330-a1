import React, { useState, useEffect } from 'react';
 import { Link, useNavigate , useLocation} from 'react-router-dom';
 import LogoutModal from '../fragments/LogoutAlert'; 
 import 'bootstrap/dist/css/bootstrap.min.css';
 import './Navbar.css';

 function Navbar({ username, logoutUser }) {
   const navigate = useNavigate();
   const location = useLocation();
   const [showLogoutModal, setShowLogoutModal] = useState(false);

   const handleLogout = () => {
    logoutUser();
    console.log("Logout clicked");
    setShowLogoutModal(true);
    };

   const handleCloseModal = () => {
     setShowLogoutModal(false);
     navigate('/');
    };

    useEffect(() => {
      window.scrollTo(0, 0); // Scroll to the top of the page on route change
    }, [location.pathname]);

   return (
     <>
       <nav className="navbar navbar-expand-lg navbar-dark bg-custom">
         <div className="container-fluid">
           <Link className="navbar-brand" to="/">
             <div className="logo">
               <img src="/tree.jpg" alt="SOIL" />
             </div>
           </Link>
           <button
             className="navbar-toggler"
             type="button"
             data-bs-toggle="collapse"
             data-bs-target="#navbarNav"
             aria-controls="navbarNav"
             aria-expanded="false"
             aria-label="Toggle navigation"
           >
             <span className="navbar-toggler-icon"></span>
           </button>
           <div className="collapse navbar-collapse" id="navbarNav">
             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
               <li className="nav-item">
                 <Link className="nav-link" to="/">Home</Link>
               </li>
               <li className="nav-item">
                 <Link className="nav-link" to="/specials">Specials</Link>
               </li>
               {username && (
                 <>
                   <li className="nav-item">
                     <Link className="nav-link" to="/dietplan">Diet Plan</Link>
                   </li>
                   <li className="nav-item">
                     <Link className="nav-link" to="/cart">Cart</Link>
                   </li>
                 </>
               )}
             </ul>
             {username ? (
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/profile">Profile</Link>
                </li>
                <li className="nav-item">
                <button
                  className="btn btn-outline-dark logout-button-class"
                  onClick={handleLogout}
                  style={{ color: '#725d4c', fontSize: '18px', fontFamily: '"Times New Roman", Times, serif', margin: 'auto' 
                  }} >
                  Logout
                </button>
                </li>
              </ul>
            ) : (
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/signin">Sign In</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
              </ul>
            )}
           </div>
         </div>
       </nav>
       <LogoutModal show={showLogoutModal} onClose={handleCloseModal} />
     </>
   );
 }

export default Navbar;
