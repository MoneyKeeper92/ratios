// src/components/JournalLine.js
import React from 'react';

const AccountDropdown = ({ value, onChange, disabled, className }) => {
  const accountOptions = [
    { value: '', label: 'Select Account...' },
    { value: 'Fixed Asset', label: 'Fixed Asset' },
    { value: 'Accumulated Depreciation', label: 'Accumulated Depreciation' },
    { value: 'Cash', label: 'Cash' },
    { value: 'Gain on Sale', label: 'Gain on Sale' },
    { value: 'Loss on Sale', label: 'Loss on Sale' },
  ];

  return (
    <select 
      value={value} 
      onChange={onChange} 
      disabled={disabled} 
      className={className}
    >
      {accountOptions.map(option => (
        <option key={option.value} value={option.value} disabled={option.value === ''}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

const JournalLine = ({ line, index, onChange, disabled }) => {
  const handleAccountChange = (e) => {
    if (disabled) return;
    onChange(index, 'account', e.target.value);
  };

  const handleDebitChange = (e) => {
    if (disabled) return;
    const value = e.target.value === '' ? null : e.target.value;
    onChange(index, 'debit', value);
    if (value !== null) {
      onChange(index, 'credit', null);
    }
  };

  const handleCreditChange = (e) => {
    if (disabled) return;
    const value = e.target.value === '' ? null : e.target.value;
    onChange(index, 'credit', value);
    if (value !== null) {
      onChange(index, 'debit', null);
    }
  };

  return (
    <tr>
      <td>
        <AccountDropdown
          value={line.account}
          onChange={handleAccountChange}
          disabled={disabled}
          className={`account-input ${disabled ? 'disabled-input' : ''}`}
        />
      </td>
      <td>
        <input
          type="number"
          value={line.debit === null ? '' : line.debit}
          onChange={handleDebitChange}
          placeholder="0.00"
          className={`amount-input ${disabled ? 'disabled-input' : ''}`}
          min="0"
          step="0.01"
          disabled={disabled}
        />
      </td>
      <td>
        <input
          type="number"
          value={line.credit === null ? '' : line.credit}
          onChange={handleCreditChange}
          placeholder="0.00"
          className={`amount-input ${disabled ? 'disabled-input' : ''}`}
          min="0"
          step="0.01"
          disabled={disabled}
        />
      </td>
    </tr>
  );
};

export default JournalLine;