import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = ({ loginUser }) => {
    const [userDetails, setUserDetails] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!userDetails.name || !userDetails.email || !userDetails.password) {
            setError('All fields are required');
            return;
        }

        if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(userDetails.email)) {
            setError('Invalid email format');
            return;
        }

        if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}/.test(userDetails.password)) {
            setError('Password must be strong: At least 8 characters, including a number, uppercase, lowercase, and special character');
            return;
        }

        localStorage.setItem('userDetails', JSON.stringify(userDetails));
        loginUser(userDetails.email);  // Set the global username state
        navigate('/');  // Redirect to the home page where additional navbar buttons are visible
        setError('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" value={userDetails.name} onChange={handleChange} />
                <input type="email" name="email" placeholder="Email" value={userDetails.email} onChange={handleChange} />
                <input type="password" name="password" placeholder="Password" value={userDetails.password} onChange={handleChange} />
                <button type="submit">Sign Up</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default SignIn;
