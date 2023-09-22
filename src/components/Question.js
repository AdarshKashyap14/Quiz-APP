import React, { useState } from "react";

function Question({ question, onAnswer, questionNumber }) {
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const handleSelectAnswer = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleSubmitAnswer = () => {
    onAnswer(selectedAnswer);
  };

  return (
    <div>
      <h2>
        Question {questionNumber + 1}: {question.question}
      </h2>
      <div className="quiz-ques">
        {question.incorrect_answers.map((answer) => (
          <button
            key={answer}
            onClick={() => handleSelectAnswer(answer)}
            className={`answer-button ${
              selectedAnswer === answer ? "selected" : ""
            }`}
          >
            {answer}
          </button>
        ))}
        <button className="submit-button" onClick={handleSubmitAnswer}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default Question;
