// src/components/RatioCalc.js
import React, { useState } from 'react';

function RatioCalc({ scenario, onSubmit, isCorrect, showFeedback }) {
  const [userAnswer, setUserAnswer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const numericAnswer = parseFloat(userAnswer);
    
    if (isNaN(numericAnswer)) {
      alert('Please enter a valid number');
      return;
    }
    
    onSubmit(numericAnswer);
  };

  const handleInputChange = (e) => {
    setUserAnswer(e.target.value);
  };

  return (
    <div className="ratio-calc">
      <form onSubmit={handleSubmit} className="calc-form">
        <div className="input-group">
          <label htmlFor="ratio-answer">Your Answer:</label>
          <input
            id="ratio-answer"
            type="number"
            step="0.01"
            value={userAnswer}
            onChange={handleInputChange}
            placeholder="Enter calculated ratio"
            className="ratio-input"
          />
        </div>
        
        <button 
          type="submit" 
          className="btn-submit"
          disabled={!userAnswer || showFeedback && isCorrect}
        >
          Submit Answer
        </button>
      </form>
    </div>
  );
}

export default RatioCalc;