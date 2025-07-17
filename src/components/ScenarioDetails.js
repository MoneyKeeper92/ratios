import React from 'react';
import '../styles/ScenarioDetails.css';

function ScenarioDetails({ scenario }) {
  const { financials, task, level } = scenario;

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatPerShareValue = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  }

  const formatFinancialData = () => {
    if (!financials) return [];

    return financials.map(({ label, value }, index) => {
      const isShares = label.toLowerCase().includes('shares');
      const isPerShare = label.toLowerCase().includes('per share');

      const formattedValue = isPerShare
        ? formatPerShareValue(value)
        : (typeof value === 'number' && value >= 1000 && !isShares
            ? formatCurrency(value)
            : (typeof value === 'number' ? value.toLocaleString('en-US') : value.toString()));

      return (
        <li key={index} className="financial-item">
          <span className="label">{label}</span>
          <span className="value">{formattedValue}</span>
        </li>
      );
    });
  };

  return (
    <div className="scenario-details">
      {level !== 2 && (
        <div className="scenario-task styled-task-section">
          <h4>Your Task</h4>
          <p>{task}</p>
        </div>
      )}
      
      {financials && (
        <div className="financial-data">
          <h3>Financial Information:</h3>
          <ul>
            {formatFinancialData()}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ScenarioDetails;