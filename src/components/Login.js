import React, { useState } from "react";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");

  const handleLogin = () => {
    if (username.trim()) {
      onLogin(username); // Pass the username to App.js
    } else {
      alert("Please enter a valid username.");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)} // Update username state
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
