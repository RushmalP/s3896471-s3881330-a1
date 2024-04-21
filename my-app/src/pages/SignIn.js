import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignIn.css';

const SignIn = ({ loginUser }) => {
    const [userDetails, setUserDetails] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''  // Added field for password confirmation
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!userDetails.name || !userDetails.email || !userDetails.password || !userDetails.confirmPassword) {
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

        if (userDetails.password !== userDetails.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        // All validations passed, proceed with user registration
        const dateOfJoining = new Date().toLocaleDateString();
        const newUserDetails = { ...userDetails, joiningDate: dateOfJoining };
        localStorage.setItem('userDetails', JSON.stringify(newUserDetails));
        loginUser(newUserDetails);  
        navigate('/');
        setError('');
    };

      return (
              <div className="centered-container">
              <div className="signIn-container">
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Name" value={userDetails.name} onChange={handleChange} />
                    <input type="email" name="email" placeholder="Email" value={userDetails.email} onChange={handleChange} />
                    <input type="password" name="password" placeholder="Password" value={userDetails.password} onChange={handleChange} />
                    <input type="password" name="confirmPassword" placeholder="Confirm Password" value={userDetails.confirmPassword} onChange={handleChange} />
                    <button type="submit" className="sign-in-button">Sign Up</button>
                </form>
                {error && <p className="error-message">{error}</p>}
            </div>
        </div>
    );
};

export default SignIn;
