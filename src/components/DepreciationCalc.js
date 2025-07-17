import React, { useState } from 'react';
import '../styles/DepreciationCalc.css';

const DepreciationCalc = ({ scenario, onSubmit, isCorrect, onAdvance }) => {
  const [depreciationAnswer, setDepreciationAnswer] = useState('');
  const [error, setError] = useState('');
  
  const { 
    assetDescription, 
    acquisitionCost, 
    salvageValue, 
    usefulLife, 
    dateAcquired, 
    currentYear,
    depreciationMethod,
    totalEstimatedMileage,
    milesDriven2024,
    totalEstimatedProduction,
    productionUnits2024
  } = scenario.data;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!depreciationAnswer) {
      setError('Please enter your calculated depreciation amount');
      return;
    }
    
    const userAmount = parseFloat(depreciationAnswer);
    if (isNaN(userAmount)) {
      setError('Please enter a valid number');
      return;
    }
    
    onSubmit(userAmount);
  };

  return (
    <div className="depreciation-calc-container">
      <h3>Calculate Depreciation</h3>
      <div className="depreciation-info-grid">
        <div className="depreciation-info-card">
          <div className="info-label">ASSET:</div>
          <div className="info-value asset-name">{assetDescription}</div>
        </div>
        <div className="depreciation-info-card">
          <div className="info-label">COST:</div>
          <div className="info-value cost-value">${acquisitionCost.toLocaleString()}</div>
        </div>
        <div className="depreciation-info-card">
          <div className="info-label">SALVAGE VALUE:</div>
          <div className="info-value salvage-value">${salvageValue.toLocaleString()}</div>
        </div>

        {depreciationMethod === "Units of Production" ? (
          <>
            {totalEstimatedMileage && (
              <div className="depreciation-info-card">
                <div className="info-label">TOTAL ESTIMATED MILEAGE:</div>
                <div className="info-value estimated-production-value">{totalEstimatedMileage.toLocaleString()} miles</div>
              </div>
            )}
            {milesDriven2024 && (
              <div className="depreciation-info-card">
                <div className="info-label">MILES DRIVEN IN {currentYear}:</div>
                <div className="info-value actual-production-value">{milesDriven2024.toLocaleString()} miles</div>
              </div>
            )}
            {totalEstimatedProduction && (
              <div className="depreciation-info-card">
                <div className="info-label">TOTAL ESTIMATED PRODUCTION:</div>
                <div className="info-value estimated-production-value">{totalEstimatedProduction.toLocaleString()} units</div>
              </div>
            )}
            {productionUnits2024 && (
              <div className="depreciation-info-card">
                <div className="info-label">PRODUCTION IN {currentYear}:</div>
                <div className="info-value actual-production-value">{productionUnits2024.toLocaleString()} units</div>
              </div>
            )}
          </>
        ) : (
          <div className="depreciation-info-card">
            <div className="info-label">USEFUL LIFE:</div>
            <div className="info-value useful-life">{usefulLife} years</div>
          </div>
        )}

        <div className="depreciation-info-card">
          <div className="info-label">DATE ACQUIRED:</div>
          <div className="info-value date-acquired">{dateAcquired}</div>
        </div>
        <div className="depreciation-info-card">
          <div className="info-label">CURRENT YEAR:</div>
          <div className="info-value current-year">{currentYear}</div>
        </div>
        <div className="depreciation-info-card">
          <div className="info-label">METHOD:</div>
          <div className="info-value method-value">{depreciationMethod}</div>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="depreciation-amount">Depreciation Expense for {currentYear}:</label>
          <input
            id="depreciation-amount"
            type="number"
            value={depreciationAnswer}
            onChange={(e) => setDepreciationAnswer(e.target.value)}
            placeholder="Enter depreciation amount"
          />
        </div>
        {error && <div className="error-message">{error}</div>}
        {isCorrect === null && (
          <button type="submit" className="submit-button">Submit Answer</button>
        )}
        {isCorrect === true && (
          <button type="button" onClick={onAdvance} className="next-button">
            Next Question
          </button>
        )}
      </form>
    </div>
  );
};

export default DepreciationCalc; 