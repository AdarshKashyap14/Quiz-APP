import React, { useState } from "react";
import "./App.css";
import StartPage from "./components/StartPage"; 
import Quiz from "./components/Quiz"; 

function App() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const handleStartQuiz = (email) => {
    setUserEmail(email);
    setQuizStarted(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Quiz App</h1>
        {quizStarted ? (
          <Quiz userEmail={userEmail} />
        ) : (
          <StartPage onStartQuiz={handleStartQuiz} />
        )}
      </header>
    </div>
  );
}

export default App;
