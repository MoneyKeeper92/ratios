// src/components/RatioTransactionAnalysis.js
import React, { useState } from 'react';

function RatioTransactionAnalysis({ scenario, onSubmit, isCorrect, showFeedback }) {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!selectedOption) {
      alert('Please select an answer');
      return;
    }
    
    onSubmit(selectedOption);
  };

  const handleOptionChange = (optionId) => {
    setSelectedOption(optionId);
  };

  const { scenarioData, options } = scenario;

  return (
    <div className="ratio-transaction-analysis">
      <div className="scenario-summary">
        <h3>Ratio Change Analysis</h3>
        <div className="ratio-change-display">
          <div className="company-name">{scenarioData.companyName}</div>
          <div className="ratio-info">
            <span className="ratio-name">{scenarioData.ratioName}</span>
            <div className="ratio-change">
              <span className="initial-ratio">{scenarioData.initialRatio}</span>
              <span className="arrow">→</span>
              <span className="final-ratio">{scenarioData.finalRatio}</span>
            </div>
            <span className="timeframe">{scenarioData.timeframe}</span>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="multiple-choice-form">
        <div className="question">
          <p>{scenario.task}</p>
        </div>
        
        <div className="options">
          {options.map((option) => (
            <label key={option.id} className={`option ${selectedOption === option.id ? 'selected' : ''}`}>
              <input
                type="radio"
                name="answer"
                value={option.id}
                checked={selectedOption === option.id}
                onChange={() => handleOptionChange(option.id)}
              />
              <div className="option-content">
                <span className="option-letter">{option.id}</span>
                <span className="option-text">{option.text}</span>
              </div>
            </label>
          ))}
        </div>
        
        <button 
          type="submit" 
          className="btn-submit"
          disabled={!selectedOption || (showFeedback && isCorrect)}
        >
          Submit Answer
        </button>
      </form>
    </div>
  );
}

export default RatioTransactionAnalysis;