// Create this file at: src/components/solution.js
import React from 'react';
import { formatCurrency } from '../utils/formatUtils';
import '../styles/Solution.css';

const Solution = ({ scenario }) => {
  // Calculate totals of the solution
  const totalDebit = scenario.solution.reduce(
    (sum, line) => sum + (line.debit || 0), 0
  );
  
  const totalCredit = scenario.solution.reduce(
    (sum, line) => sum + (line.credit || 0), 0
  );
  
  return (
    <div className="solution-container">
      <h3 className="solution-heading">Solution:</h3>
      
      <table className="solution-table">
        <thead>
          <tr>
            <th>Account</th>
            <th>Debit</th>
            <th>Credit</th>
          </tr>
        </thead>
        <tbody>
          {scenario.solution.map((line, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
              <td>{line.account}</td>
              <td>{line.debit ? formatCurrency(line.debit) : ''}</td>
              <td>{line.credit ? formatCurrency(line.credit) : ''}</td>
            </tr>
          ))}
          
          {/* Totals row */}
          <tr className="solution-table-totals">
            <td>Total</td>
            <td>{formatCurrency(totalDebit)}</td>
            <td>{formatCurrency(totalCredit)}</td>
          </tr>
        </tbody>
      </table>
      
      {scenario.keyCalculations && (
        <div className="calculations-container">
          <p className="calculations-heading">Key Calculations:</p>
          {scenario.leaseType === 'operating' ? (
            <>
              {scenario.keyCalculations.interest !== undefined && (
                <p className="calculation-item">
                  Interest: {formatCurrency(scenario.initialLeaseLiability)} × {scenario.interestRate * 100}% = {formatCurrency(scenario.keyCalculations.interest)}
                </p>
              )}
              <p className="calculation-item">
                Lease expense (single line item): {formatCurrency(scenario.keyCalculations.leaseExpense)}
              </p>
              <p className="calculation-item">
                ROU Asset amortization: {formatCurrency(scenario.keyCalculations.rouAssetAmortization)}
              </p>
              <p className="calculation-item">
                Liability reduction: {formatCurrency(scenario.keyCalculations.liabilityReduction)}
              </p>
            </>
          ) : (
            <>
              {scenario.keyCalculations.interestExpense !== undefined && (
                <p className="calculation-item">
                  Interest expense: {formatCurrency(scenario.initialLeaseLiability)} × {scenario.interestRate * 100}% = {formatCurrency(scenario.keyCalculations.interestExpense)}
                </p>
              )}
              <p className="calculation-item">
                Principal reduction: {formatCurrency(scenario.keyCalculations.principalReduction)}
              </p>
              <p className="calculation-item">
                Amortization expense (ROU Asset): {formatCurrency(scenario.keyCalculations.amortizationExpense)}
              </p>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Solution;