// src/components/RatioCalc.js
import React, { useState } from 'react';
import '../styles/RatioCalc.css';

function RatioCalc({ scenario, onSubmit, isCorrect, showFeedback, showSolution, toggleSolution }) {
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
    <div className="component-container">
      <form onSubmit={handleSubmit} className="calc-form">
        <div className="input-group">
          <input
            id="ratio-answer"
            type="number"
            step="0.001"
            value={userAnswer}
            onChange={handleInputChange}
            placeholder="Enter calculated ratio"
            className="numeric-input"
            data-testid="numeric-input"
          />
        </div>
        
        <div className="component-footer">
            <button type="button" onClick={toggleSolution} className="solution-button">
                {showSolution ? 'Hide Solution' : 'Show Solution'}
            </button>
            <div className="submit-section">
                <button
                type="submit"
                className="submit-button"
                disabled={!userAnswer || (showFeedback && isCorrect)}
                >
                Submit Answer
                </button>
            </div>
        </div>
      </form>
    </div>
  );
}

export default RatioCalc; 