import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import './register.css';

const Register = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    email:""
  });
  const [error, setError] = useState("");
  const navigate = useNavigate()

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/auth/register", credentials);
      console.log(response.data); // You can display a success message or handle it as desired
      navigate("/"); // Navigate back to the home page
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("An error occurred"); // You can customize the error message based on the specific error condition
      }
    }
  };

  return (
    <div className="register">
      <div className="rContainer">
        <h2 className="regs_h">Register</h2>
        
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={credentials.username}
              onChange={handleChange}
              required
              className="rInput"
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              required
              className="rInput"
            />
          </div>
          <div>
            <label htmlFor="password">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              required
              className="rInput"
            />
          </div>
          <div>
            <button className="rButton" onClick={handleSubmit}>Register</button>
          </div>
        
        
        {error && <span>{error}</span>}
        <div className="login_r">
            <h2 className="or">OR</h2>            
            <Link to="/login">
                <button className="login_btn" type="submit">Login</button>
              </Link>             
          </div>
      </div>
    </div>
  );
};

export default Register;
