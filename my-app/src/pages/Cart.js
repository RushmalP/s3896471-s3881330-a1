import React, { useState, useEffect } from 'react';
import { handlePurchase } from './CreditCard'; // Import the credit card functions

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [error, setError] = useState('');
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(items);
    calculateTotal(items);
  }, []);

  const calculateTotal = (items) => {
    const totalAmount = items.reduce((acc, item) => acc + item.price, 0);
    setTotal(totalAmount);
  };

  const removeFromCart = (itemId) => {
    const updatedItems = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedItems);
    localStorage.setItem('cart', JSON.stringify(updatedItems));
    calculateTotal(updatedItems);
  };
  

  const onPurchaseSuccess = () => {
    alert('Purchase successful!');
    localStorage.removeItem('cart'); // Clear cart
    setCartItems([]); // Clear the state
    setTotal(0); // Reset total to 0
  };

  const onPurchaseError = (errorMessage) => {
    setError(errorMessage);
  };

  const handleCheckout = () => {
    handlePurchase(cardNumber, expiryDate, onPurchaseSuccess, onPurchaseError);
  };

  return (
    <div>
      <h1>Cart</h1>
      {cartItems.length > 0 ? (
        <div>
          {cartItems.map((item, index) => (
            <div key={index} style={{ marginBottom: '10px' }}>
              <p>{item.name} - ${item.price.toFixed(2)}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button> {/* Use item.id here */}
            </div>
          ))}
          <div style={{ marginTop: '20px' }}>
            <p>Total: ${total.toFixed(2)}</p>
            <input 
              type="text" 
              placeholder="Card Number" 
              value={cardNumber} 
              onChange={(e) => setCardNumber(e.target.value)} 
              style={{ marginRight: '10px' }}
            />
            <input 
              type="text" 
              placeholder="Expiry Date (MM/YY)" 
              value={expiryDate} 
              onChange={(e) => setExpiryDate(e.target.value)}
            />
            <button onClick={handleCheckout} disabled={cartItems.length === 0}>Checkout</button>
          </div>
          {error && <p className="error-message" style={{ color: 'red' }}>{error}</p>}
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}

export default Cart;
