import React from 'react';
import '../fragments/LoginAlert.css';  

function LoginAlert({ show, onClose }) {
  if (!show) return null;

  return (
    <div className="login-modal">
      <div className="login-modal-content">
        <p>Welcome! You are now logged in. Explore our Exclusive Features.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default LoginAlert;
