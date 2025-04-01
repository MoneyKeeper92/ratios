// src/components/Tips.js
import React from 'react';
import '../styles/Tips.css';

const Tips = ({ leaseType }) => {
  return (
    <div className="tips-container">
      <p className="tips-heading">Tips:</p>
      <p className="tips-item">For each account, enter either a debit or a credit amount, not both.</p>
      
      <div className="tips-accounts">
        <p className="tips-accounts-heading">Finance lease accounts:</p>
        <p>Interest Expense, Lease Liability, Cash, Amortization Expense (ROU Asset), Accumulated Amortization - ROU Asset</p>
      </div>
      
      <div className="tips-accounts">
        <p className="tips-accounts-heading">Operating lease accounts:</p>
        <p>Lease Expense, Cash, Right-of-Use Asset, Lease Liability</p>
      </div>
      
      {leaseType === 'operating' && (
        <p className="tips-item">
          <strong>Remember:</strong> For operating leases, record the lease expense as a single line item, and update both the ROU asset and lease liability.
        </p>
      )}
      
      {leaseType === 'finance' && (
        <p className="tips-item">
          <strong>Remember:</strong> For finance leases, record interest expense separately from principal reduction, and record amortization separately.
        </p>
      )}
    </div>
  );
};

export default Tips;