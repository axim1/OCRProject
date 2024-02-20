// src/components/Login.js
// Add this line at the top of your src/components/Login.js
import './Login.css';

import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement your authentication logic here
    // For demo, we'll just call the onLogin function
    onLogin(username, password);
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h2>MikroKI Webportal</h2>
        <div>
          <input
            type="text"
            placeholder="Kennung"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Passwort"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Einloggen</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
