import React, { useState } from "react";
import Question from "./Question";
import Timer from "./Timer";

function Quiz({ questions }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore(score + 1);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResults(true);
    }
  };

  return (
    <div>
      {showResults ? (
        <div>
          <h2>Your Score: {score}/{questions.length}</h2>
        </div>
      ) : (
        <div>
          <Timer key={currentQuestion} duration={10} onTimeUp={() => handleAnswer(false)} />
          <Question
            question={questions[currentQuestion]}
            handleAnswer={handleAnswer}
          />
        </div>
      )}
    </div>
  );
}

export default Quiz;
