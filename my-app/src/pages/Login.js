import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';

function Login(props) {
  const [fields, setFields] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  // Handle field changes.
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFields(prevFields => ({ ...prevFields, [name]: value }));
  };

  // Function to verify user credentials.
  const verifyUser = (email, password) => {
    const userDetails = JSON.parse(localStorage.getItem('userDetails'));
    return userDetails && userDetails.email === email && userDetails.password === password;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const verified = verifyUser(fields.email, fields.password);

    if (verified) {
      props.loginUser(fields.email); // Log the user in using their email.
      navigate("/"); // Navigate to the home page.
    } else {
      // Reset password field and set error message on failure.
      setFields({ ...fields, password: "" });
      setErrorMessage("Email and / or password invalid, please try again.");
    }
  };

  return (
    <div className="loginContainer">
      <div className="loginBox">
        <h1>Login</h1>
        <hr />
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email" className="control-label">Email</label>
            <input name="email" id="email" className="form-control"
              value={fields.email} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="control-label">Password</label>
            <input type="password" name="password" id="password" className="form-control"
              value={fields.password} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <input type="submit" className="btn btn-primary" value="Login" />
          </div>
          {errorMessage && (
            <div className="form-group">
              <span className="text-danger">{errorMessage}</span>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default Login;
