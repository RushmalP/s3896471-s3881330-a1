import React from 'react';
import '../fragments/LogoutAlert.css'; 

function LogoutAlert({ show, onClose }) {
  if (!show) return null;

  return (
    <div className="lm">
      <div className="lm-content">
        <p>You are logged out. Log back in to purchase any Products or to use your custom Diet Plan.</p>
        <button1 onClick={onClose}>Close</button1>
      </div>
    </div>
  );
}

export default LogoutAlert;