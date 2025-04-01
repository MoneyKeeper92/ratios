// Create this file at: src/components/tips.js
import React from 'react';
import '../styles/Tips.css';

const Tips = ({ leaseType, difficulty, performance }) => {
  const getTips = () => {
    const tips = [];
    
    // Basic tips for all scenarios
    tips.push("Remember to ensure debits equal credits.");
    
    // Lease type specific tips
    if (leaseType === "finance") {
      tips.push(
        "For finance leases, you need to record both interest expense and amortization.",
        "The interest expense is calculated on the lease liability balance.",
        "Amortization expense is typically straight-line over the lease term."
      );
    } else {
      tips.push(
        "For operating leases, record a single lease expense.",
        "The lease expense is typically straight-line over the lease term.",
        "Remember to adjust the right-of-use asset and lease liability."
      );
    }

    // Difficulty-based tips
    if (difficulty >= 4) {
      tips.push(
        "For beginning of year payments, there is no interest in the first payment.",
        "The entire payment reduces the lease liability."
      );
    }

    if (difficulty >= 6) {
      tips.push(
        "For variable lease payments, include the variable portion in the lease expense.",
        "The variable portion doesn't affect the lease liability."
      );
    }

    // Performance-based tips
    if (performance.masteryLevel < 50) {
      tips.push(
        "Take your time to understand each component of the journal entry.",
        "Double-check your calculations before submitting."
      );
    }

    if (performance.masteryLevel >= 80) {
      tips.push(
        "You're doing great! Try to understand the underlying concepts.",
        "Think about how these entries affect the financial statements."
      );
    }

    return tips;
  };

  return (
    <div className="tips-container">
      <h3>Tips</h3>
      <ul>
        {getTips().map((tip, index) => (
          <li key={index}>{tip}</li>
        ))}
      </ul>
    </div>
  );
};

export default Tips;