# FullStack Developer Intern Quiz Application


## Objective
Quiz App Having navigation feature

## Table of Contents

- [Requirements](#requirements)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Integration](#api-integration)
- [Navigation](#navigation)
- [End of Quiz](#end-of-quiz)
- [Timer](#timer)
- [Code Quality](#code-quality)
- [License](#license)
- [Contact](#contact)

## Requirements

### Quiz Layout & Flow

- The application starts with a start page where users need to submit their email address.
- After submitting the email address, the application displays 15 quiz questions.
- A timer is displayed at the top of the page, counting down from 30 minutes. The quiz automatically submits when the timer reaches zero.

### Navigation

- Users can navigate to specific questions.
- An overview panel shows all questions and indicates:
  - Questions visited by the user.
  - Questions attempted by the user.

### End of Quiz

- After completing the quiz or when the timer ends, users are directed to a report page.
- The report displays each question with the user's answer and the correct answer side by side for easy comparison.

### Data Source

- Quiz questions are fetched from the [Open Trivia Database API](https://opentdb.com/api.php?amount=15).
- The question parameter from the API is used for displaying questions.
- Choices for each question are created by concatenating the correct_answer and incorrect_answers parameters.
- The correct answer for each question is obtained from the correct_answer parameter.

## Features

- Functional quiz application that fulfills all requirements.
- Bug-free code that runs without errors.
- Clean, well-organized code following best practices.
- Integration with the Open Trivia Database API.
- User-friendly navigation and question overview.
- Accurate timer for quiz completion.
- Detailed report page for quiz results.

## Tech Stack

- React.js
- Axios (for API requests)
- HTML/CSS (for styling)
- JavaScript (ES6+)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/AdarshKashyap14/Quiz-APP.git
