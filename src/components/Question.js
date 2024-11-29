import React from "react";

function Question({ question, handleAnswer }) {
  return (
    <div>
      <h2>{question.question}</h2>
      <div>
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option === question.answer)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;
