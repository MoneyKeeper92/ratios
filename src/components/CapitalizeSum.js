import React, { useState } from 'react';
import '../styles/CapitalizeSum.css';

const CapitalizeSum = ({ scenario, onSubmit, isCorrect, onAdvance }) => {
  const [selectedCosts, setSelectedCosts] = useState({});
  const [error, setError] = useState('');
  
  const { costs } = scenario.data;

  const handleCostSelection = (index, isSelected) => {
    setSelectedCosts({
      ...selectedCosts,
      [index]: isSelected
    });
  };
  
  const calculateSelectedTotal = () => {
    return costs
      .filter((_, index) => selectedCosts[index])
      .reduce((sum, cost) => sum + cost.amount, 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const selectedTotal = calculateSelectedTotal();
    if (selectedTotal === 0) {
      setError('Please select at least one cost to capitalize');
      return;
    }
    
    onSubmit(selectedTotal);
  };

  return (
    <div className="capitalize-sum-container">
      <h3>Identify Capitalizable Costs</h3>
      
      <div className="costs-list">
        <table>
          <thead>
            <tr>
              <th>Include?</th>
              <th>Description</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {costs.map((cost, index) => (
              <tr key={index}>
                <td>
                  <input 
                    type="checkbox" 
                    checked={!!selectedCosts[index]} 
                    onChange={(e) => handleCostSelection(index, e.target.checked)}
                  />
                </td>
                <td>{cost.description}</td>
                <td className="amount">${cost.amount.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="calculate-section">
        <div className="running-total">
          Selected Total: ${calculateSelectedTotal().toLocaleString()}
        </div>
        
        <form onSubmit={handleSubmit}>
          {error && <div className="error-message">{error}</div>}
          {isCorrect === true ? (
            <button type="button" onClick={onAdvance} className="next-button">
              Next Question
            </button>
          ) : (
            <button type="submit" className="submit-button">
              Submit Answer
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default CapitalizeSum; 