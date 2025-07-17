import RatioCalc from '../components/RatioCalc';
import RatioTransactionAnalysis from '../components/RatioTransactionAnalysis';

export const componentRouter = (level) => {
  const componentMap = {
    1: RatioCalc,
    2: RatioTransactionAnalysis,
    3: RatioCalc,
    4: RatioCalc,
  };
  
  return componentMap[level] || RatioCalc; // Default to RatioCalc if level not found
}; 