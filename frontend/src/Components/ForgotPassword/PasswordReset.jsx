import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const PasswordReset = () => {
  const { email, token } = useParams();
  const [newPassword, setNewPassword] = useState('');

  const handlePasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a request to the backend to update the user's password
      const response = await fetch('http://localhost:4000/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, token, newPassword }),
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

  return (
    <div>
      <h2>Password Reset</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="newPassword">Enter your new password:</label>
        <input
          type="password"
          id="newPassword"
          value={newPassword}
          onChange={handlePasswordChange}
        />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default PasswordReset;
