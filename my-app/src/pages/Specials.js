import 'bootstrap/dist/css/bootstrap.min.css';
// Special.js
import React, { useState, useEffect } from 'react';
import './Special.css';

const Specials = () => {
    const [specials, setSpecials] = useState([]);

    useEffect(() => {
        // Retrieve specials from localStorage
        const storedSpecials = localStorage.getItem('specials');
        if (storedSpecials) {
            setSpecials(JSON.parse(storedSpecials));
        }
    }, []);

    return (
        <div className="specials-container">
            <h2>Weekly Specials</h2>
            <ul>
                {specials.map((special, index) => (
                    <li key={index}>
                        <div className="special">
                            <h3>{special.name}</h3>
                            <p>{special.description}</p>
                            <p className="price">${special.price}</p>
                        </div>
                    </li>
                ))}
            </ul>

                        {/* Gardening Tips Section */}
                        <div className="gardening-tips">
                <h2>Backyard Gardening Tips</h2>
                <div className="tip">
                    <h3>Starting Your Garden</h3>
                    <p>Start small, with easy-to-grow vegetables such as lettuce, radishes, or cherry tomatoes.</p>
                </div>
                <div className="tip">
                    <h3>Choosing the Right Spot</h3>
                    <p>Most vegetables need at least 6 hours of direct sunlight per day. Pick a spot that meets these requirements.</p>
                </div>
                <div className="tip">
                    <h3>Soil Matters</h3>
                    <p>Use well-draining soil rich in organic matter. Consider getting your soil tested to adjust pH and nutrient levels appropriately.</p>
                </div>
                <div className="tip">
                    <h3>Watering</h3>
                    <p>Vegetables need consistent moisture. Water deeply a few times a week rather than a little every day to encourage deep root growth.</p>
                </div>
            </div>
        </div>
    );
};

export default Specials;
