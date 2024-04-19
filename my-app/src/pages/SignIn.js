import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignIn.css';

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

        // Capture the date of joining
        const dateOfJoining = new Date().toLocaleDateString();
        // Add the joining date to the userDetails object
        const newUserDetails = { ...userDetails, joiningDate: dateOfJoining };

        // Store the updated user details with the joining date in localStorage
        localStorage.setItem('userDetails', JSON.stringify(newUserDetails));
        
        // Pass the newUserDetails object to loginUser to update the state and login the user
        loginUser(newUserDetails);  
        
        navigate('/');  // Redirect to the home page where additional navbar buttons are visible
        setError('');
    };

    return (
      <div className="signIn-container">
          <div className="form-box">
          <h1>Sign in</h1>
              <form onSubmit={handleSubmit}>
                  <input type="text" name="name" placeholder="Name" value={userDetails.name} onChange={handleChange} />
                  <input type="email" name="email" placeholder="Email" value={userDetails.email} onChange={handleChange} />
                  <input type="password" name="password" placeholder="Password" value={userDetails.password} onChange={handleChange} />
                  <button1 type="submit">Sign Up</button1>
              </form>
              {error && <p className="error-message">{error}</p>}
          </div>
      </div>
  );
};

export default SignIn;
