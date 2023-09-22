import React, { useState, useEffect } from "react";
import axios from "axios";
import Question from "./Question";
import Result from "./Result"; // Import the Result component

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [quizEnded, setQuizEnded] = useState(false);
  const [timer, setTimer] = useState(30 * 60); // 30 minutes in seconds
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [finishQuiz, setFinishQuiz] = useState(false); // New state for finish button

  useEffect(() => {
    // Fetch questions from the API
    axios
      .get("https://opentdb.com/api.php?amount=15")
      .then((response) => {
        const modifiedQuestions = response.data.results.map((question) => {
          question.incorrect_answers.push(question.correct_answer);
          question.incorrect_answers = shuffleArray(question.incorrect_answers);
          return question;
        });
        setQuestions(modifiedQuestions);
      })
      .catch((error) => {
        console.error("Error fetching questions:", error);
      });
  }, []);

  function shuffleArray(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  }

  const handleAnswer = (answer) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentIndex] = answer;
    setUserAnswers(updatedAnswers);
    if (!answeredQuestions.includes(currentIndex)) {
      setAnsweredQuestions([...answeredQuestions, currentIndex]);
    }
    // Move to the next question or end the quiz
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Quiz ended
      
    }
  };

  useEffect(() => {
    // Countdown timer
    const timerInterval = setInterval(() => {
      if (timer > 0 && !quizEnded) { // Check if the quiz is not finished
        setTimer(timer - 1);
      } else {
        // Auto-submit the quiz or do nothing if the quiz is finished
        clearInterval(timerInterval);
        if (!quizEnded) {
          setQuizEnded(true);
        }
      }
    }, 1000);
  
    return () => {
      clearInterval(timerInterval);
    };
  }, [timer, quizEnded]);
  

  const handleFinish = () => {
    // Mark the quiz as finished when the user clicks the "Finish" button
    setQuizEnded(true);
    setFinishQuiz(true);
    
  };

  const handleQuestionNavigation = (index) => {
    if (index >= 0 && index < questions.length) {
      setCurrentIndex(index);
    }
  };

  const restartQuiz = () => {
    // Reset quiz state
    setFinishQuiz(false); // Reset the finishQuiz state
    setQuizEnded(false);
    setCurrentIndex(0);
    setUserAnswers([]);
    setTimer(30 * 60);
    window.location.reload();
  };

  return (
    <div className="quiz-container">
      <div>
        Time Remaining: {String(Math.floor(timer / 60)).padStart(2, "0")}:
        {String(timer % 60).padStart(2, "0")}
      </div>
      {quizEnded || finishQuiz ? ( // Display the result when the quiz ends or finishQuiz is true
        <Result
          questions={questions}
          userAnswers={userAnswers}
          onRestart={restartQuiz}
        />
      ) : (
        <div className="quiz-content">
          <div className="quiz-questions">
            {questions.length > 0 && currentIndex < questions.length ? (
              <Question
                question={questions[currentIndex]}
                onAnswer={handleAnswer}
                questionNumber={currentIndex}
              />
            ) : (
              <p>Loading questions...</p>
            )}
          </div>
          <div className="quiz-navigation">
            <h3>Question Navigation</h3>
            <ul className="quiz-grid">
              {questions.map((_, index) => (
                <li
                  key={index}
                  className={
                    answeredQuestions.includes(index) ? "answered" : ""
                  }
                >
                  <button onClick={() => handleQuestionNavigation(index)}>
                    {index + 1}
                  </button>
                </li>
              ))}
            </ul>
            <button onClick={handleFinish}>Finish</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Quiz;
