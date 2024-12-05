import React, { useState } from "react";
import Login from "./components/Login";
import Quiz from "./components/Quiz";
import questions from "./data/questions";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
  const [username, setUsername] = useState(""); // Track the username

  return (
    <div className="App">
      <h1>React Quiz App</h1>
      {!isLoggedIn ? (
        // Show the Login component if the user is not logged in
        <Login onLogin={(name) => { setUsername(name); setIsLoggedIn(true); }} />
      ) : (
        // Show the Quiz component if the user is logged in
        <Quiz questions={questions} username={username} />
      )}
    </div>
  );
}

export default App;
