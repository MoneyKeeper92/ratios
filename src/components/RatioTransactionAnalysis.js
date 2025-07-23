// src/components/RatioTransactionAnalysis.js
import React, { useState } from 'react';
import '../styles/RatioTransactionAnalysis.css';

function RatioTransactionAnalysis({ scenario, onSubmit, isCorrect, showFeedback, showSolution, toggleSolution }) {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!selectedOption) {
      alert('Please select an answer');
      return;
    }
    
    onSubmit(selectedOption);
  };

  const { options } = scenario;

  return (
    <div className="component-container">
      <h3>{scenario.task}</h3>

      <form onSubmit={handleSubmit} className="multiple-choice-form">
        <div className="options-list">
          {options.map((option) => (
            <label key={option.id} className={`option-label ${selectedOption === option.id ? 'selected' : ''}`}>
              <input 
                type="radio" 
                name="transaction-option" 
                value={option.id} 
                checked={selectedOption === option.id} 
                onChange={() => setSelectedOption(option.id)}
                data-testid={`mcq-option-${option.id}`}
              />
              <span className="option-id">{option.id}</span>
              <span className="option-text">{option.text}</span>
            </label>
          ))}
        </div>
        
        <div className="component-footer">
            {!showFeedback && (
                <button type="button" onClick={toggleSolution} className="solution-button">
                    {showSolution ? 'Hide Solution' : 'Show Solution'}
                </button>
            )}
            <div className="submit-section">
                <button
                type="submit"
                className="submit-button"
                disabled={!selectedOption || (showFeedback && isCorrect)}
                >
                Submit Answer
                </button>
            </div>
        </div>
      </form>
    </div>
  );
}

export default RatioTransactionAnalysis; 