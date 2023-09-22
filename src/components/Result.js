import React from 'react';

function Result({ questions, userAnswers, onRestart }) {
  const score = questions.reduce((totalScore, question, index) => {
    const userAnswer = userAnswers[index];
    const correctAnswer = question.correct_answer;
    return userAnswer === correctAnswer ? totalScore + 1 : totalScore;
  }, 0);

  return (
    <div className='result-display'>
      <h2>Quiz Results</h2>
      <p>Your Score: {score}/{questions.length}</p>
      <ul>
        {questions.map((question, index) => {
          const userAnswer = userAnswers[index];
          const isCorrect = userAnswer === question.correct_answer;
          const answerClass = isCorrect ? 'correct-answer' : 'incorrect-answer';

          return (
            <li key={index}>
              <strong>Question {index + 1}:</strong> {question.question}
              <br />
              <strong>Your Answer:</strong>{" "}
              <span className={answerClass}>{userAnswer}</span>
              <br />
              <strong>Correct Answer:</strong>{" "}
              <span className="correct-answer">{question.correct_answer}</span>
            </li>
          );
        })}
      </ul>
     
      <button onClick={onRestart} className="restart-button">Restart Quiz</button>
    </div>
  );
}

export default Result;
