// src/utils/scenarioUtils.js

// A mapping of ratio types to the financial data keys they require.
const relevantFinancialsMap = {
  // Liquidity
  current: ['currentAssets', 'currentLiabilities'],
  quick: ['cash', 'shortTermInvestments', 'accountsReceivable', 'currentLiabilities'],
  
  // Profitability
  gross_profit_margin: ['netSales', 'costOfGoodsSold'],
  net_profit_margin: ['netIncome', 'netSales'],
  
  // Solvency
  debt_to_assets: ['totalDebt', 'totalAssets'],
  
  // DuPont Analysis (Advanced)
  comprehensive: ['netIncome', 'netSales', 'averageAssets', 'averageEquity'],
};

/**
 * Returns an array of the financial keys that are relevant for a given ratio type.
 * @param {string} ratioType - The type of ratio from the scenario object.
 * @returns {string[]} - An array of relevant financial data keys.
 */
export const getRelevantFinancialKeys = (ratioType) => {
  return relevantFinancialsMap[ratioType] || [];
}; 