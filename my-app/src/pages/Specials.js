import React, { useState, useEffect } from 'react';
import './Special.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Specials = () => {
    const [specials, setSpecials] = useState([]);

    useEffect(() => {
        const storedSpecials = localStorage.getItem('specials');
        if (storedSpecials) {
            setSpecials(JSON.parse(storedSpecials));
        }
    }, []);

    return (
        <div className="s-container">
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
                    <h3>Watering</h3>
                    <p>Vegetables need consistent moisture. Water deeply a few times a week rather than a little every day to encourage deep root growth.</p>
                    <img src="gardening5.jpg" alt="Watering" />
                </div>
            </div>
        </div>
    );
};

export default Specials;
