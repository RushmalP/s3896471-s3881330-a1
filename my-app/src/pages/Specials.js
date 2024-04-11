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
        </div>
    );
};

export default Specials;
