// src/utils/componentRouter.js
import RatioCalc from '../components/RatioCalc';
import RatioTransactionAnalysis from '../components/RatioTransactionAnalysis';
import RatioImpactAnalysis from '../components/RatioImpactAnalysis';
import RatioAdvanced from '../components/RatioAdvanced';

const componentMap = {
  1: RatioCalc,                    // Basic calculations
  2: RatioTransactionAnalysis,     // Transaction analysis (multiple choice)
  3: RatioImpactAnalysis,          // One-metric effect drills
  4: RatioAdvanced,                // Advanced problem-solving
};

export function getComponentForLevel(level) {
  const Component = componentMap[level];
  if (!Component) {
    throw new Error(`No component found for level ${level}`);
  }
  return Component;
}

export default componentMap;