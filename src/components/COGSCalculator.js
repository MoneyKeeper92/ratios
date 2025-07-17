// src/components/COGSCalculator.js
import React, { useState, useEffect } from 'react';
import { formatCurrency } from '../utils/formatUtils';
import '../styles/COGSCalculator.css';
// We might not need cogsCalculatorUtil imports here anymore if SolutionComponent handles it,
// but let's keep them for now in case they are needed for providing feedback/hints later.
import {
  calculateFifoPerpetualCogs,
  calculateLifoPerpetualCogs,
  calculateMovingAverageCogs,
  calculateFifoPeriodicCogs,
  calculateLifoPeriodicCogs,
  calculateWeightedAveragePeriodicCogs
} from '../utils/cogsCalculatorUtil';

const COGSCalculator = ({
  scenario,
  onSubmit,
  toggleSolution,
  showSolution,
  isCorrect,
  onAdvance
}) => {
  // State for the single COGS input field
  const [cogsValue, setCogsValue] = useState('');
  // State for local validation messages (e.g., non-numeric input)
  const [validationMessage, setValidationMessage] = useState('');
  const [lastScenarioId, setLastScenarioId] = useState(scenario.id);

  // Reset form when scenario changes
  useEffect(() => {
    if (scenario.id !== lastScenarioId) {
      setCogsValue(''); // Reset input field
      setValidationMessage(''); // Clear validation message
      setLastScenarioId(scenario.id);
    }
  }, [scenario.id, lastScenarioId]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    // Basic validation: Allow numbers, decimal point.
    if (/^\d*\.?\d*$/.test(value)) {
        setCogsValue(value);
        setValidationMessage(''); // Clear validation message on valid input
    } else {
        setValidationMessage('Please enter a valid number.');
    }
  };

  // Renamed from checkAnswer and handleSubmitInternal back to handleSubmit
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    console.log("Submit button clicked");

    const numericValue = parseFloat(cogsValue);

    if (cogsValue === '' || isNaN(numericValue)) {
      console.log("Invalid or empty input");
      setValidationMessage('Please enter a valid number for COGS.');
      // Optionally, we could call onSubmit(NaN) to let App.js handle the feedback for empty/invalid.
      // App.js handleSubmission already checks for NaN.
      return;
    }

    setValidationMessage(''); // Clear validation message on successful submission
    console.log("Submitting COGS value:", numericValue);
    onSubmit(numericValue); // Call the handler passed from App.js
  };

  // Function to render the transaction table
  const renderTransactionTable = () => {
    const { beginningInventory, transactions } = scenario.data;
    const allEntries = [];
    if (beginningInventory && beginningInventory.units > 0) {
        allEntries.push({
            date: 'Beginning',
            type: 'balance',
            units: beginningInventory.units,
            costPerUnit: beginningInventory.costPerUnit,
            totalCost: beginningInventory.units * beginningInventory.costPerUnit
        });
    }
    if (transactions) {
        transactions.forEach(t => {
            allEntries.push({
                ...t,
                totalCost: t.type === 'purchase' ? t.units * t.costPerUnit : null
            });
        });
    }

    return (
      <div className="transaction-history">
        <h3>Transaction History</h3>
        <table className="transaction-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Type</th>
              <th>Units</th>
              <th>Cost Per Unit</th>
              <th>Total Cost</th>
            </tr>
          </thead>
          <tbody>
            {allEntries.map((entry, index) => (
              <tr key={index} className={`transaction-row transaction-${entry.type}`}>
                <td>{entry.date}</td>
                <td>{entry.type}</td>
                <td>{entry.units}</td>
                <td>
                  {entry.type !== 'sale' && entry.costPerUnit !== undefined 
                    ? formatCurrency(entry.costPerUnit)
                    : ''} 
                </td>
                 <td>
                   {entry.type !== 'sale' && entry.totalCost !== null 
                    ? formatCurrency(entry.totalCost)
                    : ''} 
                 </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="cogs-calculator-container">
      {renderTransactionTable()}

      <form onSubmit={handleSubmit} className="cogs-form">
        <div className="cogs-input-group">
           <input
             id="cogsInput"
             type="text" // Using text to allow decimal, pattern for numeric
             inputMode="decimal" // Helps mobile keyboards
             value={cogsValue}
             onChange={handleInputChange}
             placeholder="Enter Cost of Goods Sold"
             aria-describedby="validationMessage"
             aria-label="Cost of Goods Sold Input"
             className={validationMessage ? 'input-error' : ''}
            />
            {validationMessage && <div id="validationMessage" className="validation-message error">{validationMessage}</div>}
        </div>
        
        <div className="calculator-button-container">
          <button
            className="check-answer-button"
            type="submit"
            disabled={isCorrect === true} // Disable if already correct
          >
            Check My Answer 
          </button>

          <button
            className="toggle-solution-button"
            onClick={toggleSolution}
            type="button"
          >
            {showSolution ? 'Hide Solution' : 'Show Solution'}
          </button>

           <button
              className="skip-button"
              onClick={onAdvance}
              type="button"
            >
              {isCorrect === true ? 'Next Question' : 'Skip Question'}
            </button>
        </div>
      </form>
    </div>
  );
};

export default COGSCalculator;