import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './ForgotPassword.css';

const ForgotPassword = () => {
  const { token } = useParams(); // Get the token from the URL parameters
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleForgotPassword = async () => {
    try {
      // Send a request to the backend to initiate the password reset process
      const response = await fetch('http://localhost:4000/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      // Handle the response and provide appropriate feedback to the user
      if (data.success) {
        alert(data.message); // You can replace this with more user-friendly feedback
      } else {
        alert('Failed to initiate password reset. Please try again.');
      }
    } catch (error) {
      console.error(error);
      alert('An unexpected error occurred. Please try again later.');
    }
  };

  const handleResetPassword = async () => {
    try {
      // Send a request to the backend to update the user's password
      const response = await fetch(`http://localhost:4000/reset-password/${token}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ newPassword }),
      });

      const data = await response.json();

      // Handle the response and provide appropriate feedback to the user
      if (data.success) {
        alert(data.message); // You can replace this with more user-friendly feedback
      } else {
        alert('Failed to reset password. Please try again.');
      }
    } catch (error) {
      console.error(error);
      alert('An unexpected error occurred. Please try again later.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // If a token exists in the URL, call the reset password function
    if (token) {
      handleResetPassword();
    } else {
      // Otherwise, initiate the forgot password process
      handleForgotPassword();
    }
  };

  return (
    <div>
      <h2>{token ? 'Reset Password' : 'Forgot Password'}</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Enter your email address:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />

        {!token && (
          <div>
            <label htmlFor="newPassword">Enter your new password:</label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={handleNewPasswordChange}
            />
          </div>
        )}

        <button type="submit">
          {token ? 'Reset Password' : 'Send Reset Email'}
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
