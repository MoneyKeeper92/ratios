// src/components/ScenarioDetails.js
import React from 'react';
import { formatCurrency, formatPercentage } from '../utils/formatUtils';
import '../styles/ScenarioDetails.css';

const ScenarioDetails = ({ scenario, attempts }) => {
  return (
    <div className="scenario-details">
      <div className="scenario-content">
        <div className="scenario-info">
          <p className="task">{scenario.task}</p>
          
          <div className="details-grid">
            <div className="detail-item">
              <label>Lease Type:</label>
              <span>{scenario.leaseType.charAt(0).toUpperCase() + scenario.leaseType.slice(1)} Lease</span>
            </div>

            <div className="detail-item">
              <label>Initial Lease Liability:</label>
              <span>{formatCurrency(scenario.initialLeaseLiability)}</span>
            </div>
            
            <div className="detail-item">
              <label>Annual Payment:</label>
              <span>{formatCurrency(scenario.annualPayment)}</span>
            </div>
            
            <div className="detail-item">
              <label>Interest Rate:</label>
              <span>{formatPercentage(scenario.interestRate)}</span>
            </div>
            
            <div className="detail-item">
              <label>Payment Timing:</label>
              <span>{scenario.paymentTiming}</span>
            </div>

            {scenario.leaseTerm && (
              <div className="detail-item">
                <label>Lease Term:</label>
                <span>{scenario.leaseTerm}</span>
              </div>
            )}
          </div>

          {scenario.additionalInfo && (
            <div className="additional-info">
              <h4>Additional Information:</h4>
              <p>{scenario.additionalInfo}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ScenarioDetails;