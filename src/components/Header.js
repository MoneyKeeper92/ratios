// src/components/Header.js
import React from 'react';
import '../styles/Header.css';

function Header({ title, currentIndex, totalScenarios, progressPercentage, completedCount, onReset }) {
  const masteryLevel = progressPercentage; // Using progressPercentage for Mastery for now

  return (
    <header className="header">
      <div className="header-content">
        <div className="progress-info">
          <div className="progress-text">Progress: {completedCount}/{totalScenarios} Scenarios</div>
          <div className="progress-container">
            <div className="milestone-markers">
              <div className="milestone-marker" style={{ left: '25%' }}>
                <div className="milestone-label">25%</div>
              </div>
              <div className="milestone-marker" style={{ left: '50%' }}>
                <div className="milestone-label">50%</div>
              </div>
              <div className="milestone-marker" style={{ left: '75%' }}>
                <div className="milestone-label">75%</div>
              </div>
              <div className="milestone-marker" style={{ left: '100%' }}>
                <div className="milestone-label">100%</div>
              </div>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${progressPercentage}%` }}></div>
            </div>
          </div>
        </div>
        <div className="performance-metrics">
          <div className="mastery-level">Mastery: {masteryLevel.toFixed(1)}%</div>
          <button onClick={onReset} className="reset-button">Reset Progress</button>
        </div>
      </div>
    </header>
  );
}

export default Header;