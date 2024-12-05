import React, { useState } from "react";
import Question from "./Question";
import Timer from "./Timer";

function Quiz({ questions, username }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizOver, setIsQuizOver] = useState(false);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore(score + 1);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsQuizOver(true); // End the quiz
    }
  };

  const handlePlayAgain = () => {
    setCurrentQuestion(0);
    setScore(0);
    setIsQuizOver(false);
  };

  return (
    <div>
      <h2>Welcome, {username}!</h2>
      {isQuizOver ? (
        <div>
          <h3>Quiz Over!</h3>
          <p>Your Score: {score}/{questions.length}</p>
          <button onClick={handlePlayAgain}>Play Again</button>
        </div>
      ) : (
        <div>
          <Question
            question={questions[currentQuestion]}
            onAnswer={handleAnswer}
          />
          <Timer
            key={currentQuestion} // Reset the timer on each question
            duration={10}
            onTimeUp={() => handleAnswer(false)}
          />
        </div>
      )}
    </div>
  );
}

export default Quiz;
