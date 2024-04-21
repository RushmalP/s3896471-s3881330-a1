import React, { useState, useEffect } from 'react';
import './Special.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Specials = ({ isLoggedIn }) => {
    const [specials, setSpecials] = useState([]);
    const [messages, setMessages] = useState({}); // This holds messages for each item
    const [showMessage, setShowMessage] = useState(false);

    useEffect(() => {
        const loadedSpecials = JSON.parse(localStorage.getItem('specials')) || [];
        setSpecials(loadedSpecials);
    }, []);

    const addToCart = (special) => {
        setShowMessage(prevShow => ({ ...prevShow, [special.id]: true }));
    
        if (!isLoggedIn) {
            setMessages(prevMessages => ({
                ...prevMessages,
                [special.id]: 'Must Log in to Use Cart'
            }));
            setTimeout(() => {
                setShowMessage(prevShow => ({ ...prevShow, [special.id]: false }));
            }, 3000);
        } else {
            // User is logged in, add the item to cart
            const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
            const itemWithId = { ...special, id: Date.now() }; // Ensure unique ID for cart items
            existingCart.push(itemWithId);
            localStorage.setItem('cart', JSON.stringify(existingCart));
    
            setMessages(prevMessages => ({
                ...prevMessages,
                [special.id]: 'Added to cart'
            }));
            setTimeout(() => {
                setMessages(prevMessages => ({ ...prevMessages, [special.id]: '' }));
                setShowMessage(prevShow => ({ ...prevShow, [special.id]: false }));
            }, 3000);
        }
    };
      
    useEffect(() => {
        const timers = {};
        Object.keys(messages).forEach((id) => {
            if (messages[id] !== '') {
                timers[id] = setTimeout(() => {
                    setMessages(prevMessages => ({
                        ...prevMessages,
                        [id]: ''
                    }));
                }, 3000);
            }
        });

        return () => {
            Object.keys(timers).forEach(timerId => clearTimeout(timers[timerId]));
        };
    }, [messages]);

    return (
        <div className="s-container">
            <h2>Weekly Specials</h2>
            <div className="specials-grid">
            {specials.map((special) => (
            <div key={special.id} className="special">
                <h3>{special.name}</h3>
                <p>{special.description}</p>
                <p className="price">${special.price.toFixed(2)}</p>
                <button onClick={() => addToCart(special)} className="add-to-cart-button">Add to Cart</button>
                <span className={`cart-message ${showMessage[special.id] ? 'show' : ''}`}>{messages[special.id]}</span>
            </div>
            ))}
        </div>

            <div className="gardening-tips">
                <h2>Backyard Gardening Tips</h2>
                <div className="tip">
                    <h3>Starting Your Garden</h3>
                    <p>Start small, with easy-to-grow vegetables such as lettuce, radishes, or cherry tomatoes.</p>
                    <img src="gardening1.jpg" alt="Starting Your Garden" />
                </div>
                <div className="tip">
                    <h3>Choosing the Right Spot</h3>
                    <p>Most vegetables need at least 6 hours of direct sunlight per day. Pick a spot that meets these requirements.</p>
                    <img src="gardening2.jpg" alt="Choosing the Right Spot" />
                </div>
                <div className="tip">
                    <h3>Soil Matters</h3>
                    <p>Use well-draining soil rich in organic matter. Consider getting your soil tested to adjust pH and nutrient levels appropriately.</p>
                    <img src="gardening3.jpg" alt="Soil Matters" />
                </div>
                <div className="tip">
                    <h3>Adding Mulch</h3>
                    <p>Adding mulch to retain moisture and suppress weeds is depicted here.</p>
                    <img src="gardening4.jpg" alt="Adding Mulch" />
                </div>
                <div className="tip">
                    <h3>Haversting/Watering</h3>
                    <p>Vegetables need consistent moisture. Water deeply a few times a week rather than a little every day to encourage deep root growth.</p>
                    <img src="gardening5.jpg" alt="Watering" />
                </div>
            </div>
        </div>
    );
};

export default Specials;
