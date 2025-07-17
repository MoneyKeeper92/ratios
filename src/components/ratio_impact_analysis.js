// src/components/RatioImpactAnalysis.js
import React, { useState } from 'react';

function RatioImpactAnalysis({ scenario, onSubmit, isCorrect, showFeedback }) {
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
    <div className="ratio-impact-analysis">
      <div className="scenario-summary">
        <h3>One-Metric Effect Drill</h3>
        <div className="impact-scenario-display">
          <div className="company-info">
            <div className="company-name">{scenarioData.companyName}</div>
            <div className="current-ratio-info">
              <span className="target-ratio">{scenarioData.targetRatio}</span>
              <span className="current-value">{scenarioData.currentRatio || scenarioData.roa || scenarioData.debtToEquity || scenarioData.quickRatio || scenarioData.inventoryTurnover || scenarioData.timesInterestEarned}</span>
            </div>
          </div>
          <div className="transaction-info">
            <div className="transaction-label">Transaction:</div>
            <div className="transaction-description">{scenarioData.transaction}</div>
          </div>
          <div className="impact-question">
            <div className="question-label">Impact on {scenarioData.targetRatio}:</div>
            <div className="question-emphasis">Increase, Decrease, or No Impact?</div>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="impact-choice-form">
        <div className="question">
          <p>{scenario.task}</p>
        </div>
        
        <div className="impact-options">
          {options.map((option) => (
            <label key={option.id} className={`impact-option ${selectedOption === option.id ? 'selected' : ''} ${option.text.toLowerCase()}`}>
              <input
                type="radio"
                name="answer"
                value={option.id}
                checked={selectedOption === option.id}
                onChange={() => handleOptionChange(option.id)}
              />
              <div className="impact-content">
                <span className="impact-icon">
                  {option.text === 'Increase' && '📈'}
                  {option.text === 'Decrease' && '📉'}
                  {option.text === 'No Impact' && '➖'}
                </span>
                <span className="impact-text">{option.text}</span>
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

export default RatioImpactAnalysis;