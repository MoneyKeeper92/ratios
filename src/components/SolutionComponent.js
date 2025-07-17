import React from 'react';
import ReactMarkdown from 'react-markdown';
import './../styles/Solution.css';

function SolutionComponent({ scenario, showExplanation }) {
  const { solution } = scenario;
  const explanation = scenario.explanation || solution.explanation;

  const renderSolution = () => {
    if (solution.type === 'numeric') {
      return (
        <div className="correct-answer-box">
          Correct Answer: <strong>{solution.value}</strong>
        </div>
      );
    }
    if (solution.type === 'multiple_choice') {
      const correctOption = scenario.options.find(opt => opt.id === solution.correct);
      return (
        <div className="correct-answer-box">
          Correct Answer: <strong>{solution.correct} - {correctOption?.text}</strong>
        </div>
      );
    }
    return <p>Details not available.</p>;
  };

  return (
    <div className="solution-container">
      <h4>Solution</h4>
      {renderSolution()}
      {showExplanation && explanation && (
        <div className="explanation">
          <ReactMarkdown>{explanation}</ReactMarkdown>
        </div>
      )}
    </div>
  );
}

export default SolutionComponent;