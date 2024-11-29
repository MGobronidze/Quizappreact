import React, { useState } from "react";
import Quiz from "./components/Quiz";
import questions from "./data/questions";

function App() {
  const [isQuizStarted, setIsQuizStarted] = useState(false);

  return (
    <div className="App">
      <h1>React Quiz App</h1>
      {!isQuizStarted ? (
        <button onClick={() => setIsQuizStarted(true)}>Start Quiz</button>
      ) : (
        <Quiz questions={questions} />
      )}
    </div>
  );
}

export default App;
