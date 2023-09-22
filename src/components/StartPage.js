import React, { useState } from "react";

function StartPage({ onStartQuiz }) {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() !== "") {
      onStartQuiz(email);
    }
  };

  return (
    <div className="start-page">
      <h2>Welcome to the Quiz App!</h2>
      <p>Please enter your email address to start the quiz:</p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
        />
        <button type="submit">Start Quiz</button>
      </form>
    </div>
  );
}

export default StartPage;
