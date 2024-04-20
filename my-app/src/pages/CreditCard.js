export function validateCard(cardNumber, expiryDate) {
    const cardNumberRegex = /^\d{16}$/; // Simple validation for 16 digit card number
    const expiryDateRegex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/; // MM/YY format
    return cardNumberRegex.test(cardNumber) && expiryDateRegex.test(expiryDate);
  }
  
  export const handlePurchase = (cardNumber, expiryDate, onSuccess, onError) => {
    if (validateCard(cardNumber, expiryDate)) {
      // Simulate successful purchase
      onSuccess(); // Callback for successful purchase
    } else {
      onError('Invalid card details. Please check and try again.'); // Callback for error handling
    }
  };
  