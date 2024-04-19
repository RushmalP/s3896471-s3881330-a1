import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';

function Profile({ loginUser }) {
  const userDetailsFromStorage = JSON.parse(localStorage.getItem('userDetails')) || {};
  const [editing, setEditing] = useState(false);
  const [userDetails, setUserDetails] = useState(userDetailsFromStorage);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handleEdit = (e) => {
    e.preventDefault();
    // Insert validation checks here similar to the signup form...

    localStorage.setItem('userDetails', JSON.stringify(userDetails));
    setMessage('Profile updated successfully!');
    setEditing(false);  // Exit editing mode
  };

  const handleDelete = () => {
    localStorage.removeItem('userDetails');
    localStorage.removeItem('isLoggedIn');
    loginUser({});  // Clear user details
    navigate('/');  // Redirect to home or signup page
  };

  const enterEditMode = () => {
    setEditing(true);
  };

  const exitEditMode = () => {
    setEditing(false);
    setUserDetails(JSON.parse(localStorage.getItem('userDetails')));  // Reset any unsaved changes
  };

  if (editing) {
    return (
      <main>
        <h1>Edit Profile</h1>
        <form onSubmit={handleEdit}>
          <input type="text" name="name" placeholder="Name" value={userDetails.name} onChange={handleChange} />
          <input type="email" name="email" placeholder="Email" value={userDetails.email} onChange={handleChange} />
          <input type="password" name="password" placeholder="New Password" value={userDetails.password} onChange={handleChange} />
          <button type="submit">Save Changes</button>
          <button type="button" onClick={exitEditMode}>Cancel</button>
        </form>
        {message && <p>{message}</p>}
      </main>
    );
  }

  return (
    <main>
      <h1>Profile</h1>
      <p>Name: {userDetails.name}</p>
      <p>Email: {userDetails.email}</p>
      <p>Date of Joining: {userDetails.joiningDate}</p>
      <button onClick={enterEditMode}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
      {message && <p>{message}</p>}
    </main>
  );
}

export default Profile;
