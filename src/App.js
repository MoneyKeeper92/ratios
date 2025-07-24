import React, { useState, useEffect } from 'react';
import './styles/App.css';
import Header from './components/Header';
import ScenarioDetails from './components/ScenarioDetails';
import SolutionComponent from './components/SolutionComponent';
import { getCookie, setCookie, clearAllCookies } from './utils/cookieManager';
import ratioScenarios from './data/ratioScenarios';
import { componentRouter } from './utils/componentRouter';

function App() {
  const [scenarios] = useState(ratioScenarios);
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(() => {
    const savedIndex = getCookie('currentScenarioIndex');
    const parsedIndex = savedIndex ? parseInt(savedIndex, 10) : 0;
    return parsedIndex >= 0 && parsedIndex < ratioScenarios.length ? parsedIndex : 0;
  });
  const [completedScenarios, setCompletedScenarios] = useState(() => {
    const saved = getCookie('completedScenarios');
    try {
      const parsed = saved ? JSON.parse(saved) : [];
      return new Set(parsed);
    } catch {
      return new Set();
    }
  });

  const [showSolution, setShowSolution] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [allScenariosCompleted, setAllScenariosCompleted] = useState(false);

  const scenario = scenarios[currentScenarioIndex];
  const InputComponent = componentRouter(scenario.level);

  useEffect(() => {
    setCookie('currentScenarioIndex', currentScenarioIndex.toString(), 30);
  }, [currentScenarioIndex]);

  useEffect(() => {
    setCookie('completedScenarios', JSON.stringify(Array.from(completedScenarios)), 30);
    if (scenarios.length > 0 && completedScenarios.size === scenarios.length) {
      setAllScenariosCompleted(true);
    }
  }, [completedScenarios, scenarios.length]);
  
  const checkAnswer = (userAnswer, scenario) => {
    const { solution } = scenario;
  
    if (solution.type === "numeric") {
      const difference = Math.abs(userAnswer - solution.value);
      return difference <= solution.tolerance;
    }
  
    if (solution.type === "multiple_choice") {
      return userAnswer === solution.correct;
    }
  
    return false;
  };

  const handleSubmission = (userAnswer) => {
    const isAnswerCorrect = checkAnswer(userAnswer, scenario);
    setIsCorrect(isAnswerCorrect);
    
    if (isAnswerCorrect) {
      setCompletedScenarios(prev => new Set(prev).add(scenario.id));
      setFeedbackMessage(scenario.successMessage || 'Correct! Well done.');
      setShowSolution(true);
      setShowExplanation(true); // Automatically show explanation on correct answer
    } else {
      setFeedbackMessage('That\'s not quite right. Please review and try again.');
      setShowSolution(false); // Ensure solution can be shown after incorrect attempt
    }
    setShowFeedback(true);
  };
  
  const resetFeedback = () => {
    setShowFeedback(false);
    setIsCorrect(null);
    setFeedbackMessage('');
    setShowSolution(false);
    setShowExplanation(false);
  };

  const navigateTo = (index) => {
    if (index >= 0 && index < scenarios.length) {
      setCurrentScenarioIndex(index);
      resetFeedback();
    }
  };

  const nextScenario = () => navigateTo(currentScenarioIndex + 1);
  const previousScenario = () => navigateTo(currentScenarioIndex - 1);

  const toggleSolution = () => {
    const newShowSolution = !showSolution;
    setShowSolution(newShowSolution);
    setShowExplanation(newShowSolution);
  };

  const resetProgress = () => {
    if (window.confirm('Are you sure you want to reset your progress? This cannot be undone.')) {
      clearAllCookies();
      setCompletedScenarios(new Set());
      setCurrentScenarioIndex(0);
      resetFeedback();
      setAllScenariosCompleted(false);
    }
  };

  const handleFinish = () => {
    setAllScenariosCompleted(true);
  };

  const completedCount = completedScenarios.size;
  const progressPercentage = scenarios.length > 0 ? Math.round((completedCount / scenarios.length) * 100) : 0;

  if (!scenario) {
    return <div>Loading scenario...</div>;
  }

  return (
    <div className="app-container">
      <Header
        title="Ratio Analysis Practice"
        currentIndex={currentScenarioIndex}
        totalScenarios={scenarios.length}
        progressPercentage={progressPercentage}
        completedCount={completedCount}
        onReset={resetProgress}
      />
      <div className="container">
        {allScenariosCompleted ? (
          <div className="completion-dialog">
            <h2>Congratulations!</h2>
            <p>You have successfully completed all the ratio scenarios.</p>
            <button onClick={resetProgress} className="btn-primary">
              Start Over
            </button>
          </div>
        ) : (
          <>
            {scenario.level !== 2 && <ScenarioDetails scenario={scenario} />}
            
            <InputComponent
              scenario={scenario}
              onSubmit={handleSubmission}
              isCorrect={isCorrect}
              showFeedback={showFeedback}
              key={scenario.id}
              showSolution={showSolution}
              toggleSolution={toggleSolution}
            />

            <div className="navigation-controls">
              <button onClick={previousScenario} disabled={currentScenarioIndex === 0} className="btn-secondary">
                Previous
              </button>
              {currentScenarioIndex === scenarios.length - 1 ? (
                <button onClick={handleFinish} className="btn-primary">
                  Finish
                </button>
              ) : (
                <button onClick={nextScenario} disabled={currentScenarioIndex >= scenarios.length - 1} className="btn-primary">
                  Next
                </button>
              )}
            </div>

            {showSolution && <SolutionComponent scenario={scenario} showExplanation={showExplanation} />}

            {showFeedback && (
              <div className={`feedback ${isCorrect ? 'correct' : 'incorrect'}`}>
                <p className={isCorrect ? 'success' : 'error'}>{feedbackMessage}</p>
                {isCorrect && (
                  <button 
                    onClick={currentScenarioIndex === scenarios.length - 1 ? handleFinish : nextScenario} 
                    className="btn-primary"
                  >
                    {currentScenarioIndex === scenarios.length - 1 ? 'Finish' : 'Continue'}
                  </button>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default App;