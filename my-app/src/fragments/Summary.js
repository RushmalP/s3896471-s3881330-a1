import React from 'react';
import './Summary.css'; 

const Summary = ({ cartItems, total, onResetCart }) => {
    return (
        <div className="summary">
            <h2>Confirmation of Purchase</h2>
            <p className="confirmation-message">Your transaction has been processed successfully. Thank you for your purchase!</p>
            <h3 className="order-details-title">Order Details:</h3>
            <ul>
                {cartItems.map(item => (
                    <li key={item.id}>{item.name} - Quantity: 1 - Price: ${item.price.toFixed(2)}</li>
                ))}
            </ul>
            <p className="total-paid">Total Paid: ${total.toFixed(2)}</p>
            <p className="thank-you-message">We appreciate your business and hope you'll continue shopping with us!</p>
            <button onClick={onResetCart}>OK</button>
        </div>
    );
};

export default Summary;
