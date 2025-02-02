import { useState, useEffect } from "react";

function Question({ question, onAnswered }) {
  // Step 2: Initialize State
  const [timeRemaining, setTimeRemaining] = useState(10);

  // Step 3: Implement useEffect for Countdown Timer
  useEffect(() => {
    if (timeRemaining === 0) {
      setTimeRemaining(10);   // Reset timer for the next question
      onAnswered(false);      // Notify parent component that time ran out
      return;                 // Exit early to avoid setting another timeout
    }

    // Decrease timeRemaining by 1 every second
    const timeoutId = setTimeout(() => {
      setTimeRemaining(timeRemaining - 1);
    }, 1000);

    // Cleanup function to clear timeout
    return () => clearTimeout(timeoutId);
  }, [timeRemaining, onAnswered]);

  return (
    <div>
      <h1>{question.prompt}</h1>
      <p>Time Remaining: {timeRemaining}</p>  {/* Step 4: Display Timer */}
      <ul>
        {question.answers.map((answer, index) => (
          <li key={index}>{answer}</li>
        ))}
      </ul>
    </div>
  );
}

export default Question;
