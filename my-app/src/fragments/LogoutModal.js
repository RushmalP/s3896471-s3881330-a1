import React from 'react';
import './LogoutModal.css'; // Make sure the path is correct

 function LogoutModal({ show, onClose }) {
   if (!show) return null;

   return (
     <div className="modal">
       <div className="modal-content">
         <div className="modal-body">
           <p>You are logged out. Log back in to purchase any Products or to use your custom Diet Plan.</p>
           <button onClick={onClose}>OK</button>
         </div>
       </div>
     </div>
   );
 }

 export default LogoutModal;