// src/App.js
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ScenarioDetails from './components/ScenarioDetails';
import JournalEntryForm from './components/JournalEntryForm';
import Solution from './components/solution';
import scenarios from './data/scenarios';
import { getCookie, setCookie, clearAllCookies } from './utils/cookieManager';
import './styles/App.css';

// Filter scenarios by difficulty level
const filterScenariosByDifficulty = (scenarios, currentDifficulty) => {
  return scenarios.filter(scenario => scenario.difficulty === currentDifficulty);
};

// Calculate mastery level based on completed scenarios
const calculateMasteryLevel = (completedScenarios) => {
  const totalScenarios = scenarios.length;
  const correctlyCompletedScenarios = Object.entries(completedScenarios)
    .filter(([_, isCorrect]) => isCorrect)
    .length;
  return correctlyCompletedScenarios / totalScenarios; // Return decimal instead of percentage
};

// Check if all scenarios of current difficulty are completed
const checkLevelCompletion = (completedScenarios, currentDifficulty) => {
  const scenariosOfCurrentDifficulty = scenarios.filter(s => s.difficulty === currentDifficulty);
  return scenariosOfCurrentDifficulty.every(scenario => completedScenarios[scenario.id]);
};

function App() {
  // Performance tracking
  const [performance, setPerformance] = useState(() => {
    const saved = getCookie('performance');
    return saved ? JSON.parse(saved) : {
      attempts: {},
      masteryLevel: 0,
      currentDifficulty: 1
    };
  });

  // Filter scenarios based on current difficulty
  const [filteredScenarios, setFilteredScenarios] = useState(() => {
    return filterScenariosByDifficulty(scenarios, performance.currentDifficulty);
  });

  // Current scenario index
  const [currentIndex, setCurrentIndex] = useState(() => {
    const savedIndex = getCookie('currentScenarioIndex');
    return savedIndex ? parseInt(savedIndex, 10) : 0;
  });

  // Completed scenarios tracking with attempts
  const [completedScenarios, setCompletedScenarios] = useState(() => {
    const saved = getCookie('completedScenarios');
    return saved ? JSON.parse(saved) : {};
  });

  // UI states
  const [showSolution, setShowSolution] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [showLevelComplete, setShowLevelComplete] = useState(false);

  // Current scenario based on index
  const currentScenario = filteredScenarios[currentIndex];
  
  // Update filtered scenarios when difficulty changes
  useEffect(() => {
    setFilteredScenarios(filterScenariosByDifficulty(scenarios, performance.currentDifficulty));
    setCurrentIndex(0); // Reset to first scenario of new difficulty
  }, [performance.currentDifficulty]);

  // Save current index to cookie when it changes
  useEffect(() => {
    setCookie('currentScenarioIndex', currentIndex.toString(), 30);
  }, [currentIndex]);

  // Save completed scenarios to cookie when they change
  useEffect(() => {
    setCookie('completedScenarios', JSON.stringify(completedScenarios), 30);
  }, [completedScenarios]);

  // Save performance data to cookie when it changes
  useEffect(() => {
    setCookie('performance', JSON.stringify(performance), 30);
  }, [performance]);

  // Check for level completion
  useEffect(() => {
    if (checkLevelCompletion(completedScenarios, performance.currentDifficulty)) {
      setShowLevelComplete(true);
      setTimeout(() => {
        setShowLevelComplete(false);
      }, 5000); // Hide after 5 seconds
    }
  }, [completedScenarios, performance.currentDifficulty]);

  // Navigation functions
  const nextScenario = () => {
    if (currentIndex < filteredScenarios.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setShowSolution(false);
      setIsCorrect(null);
      setShowFeedback(false);
    }
  };

  const previousScenario = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setShowSolution(false);
      setIsCorrect(null);
      setShowFeedback(false);
    }
  };

  // Mark current scenario as completed and update performance
  const markCompleted = (isCorrect = true) => {
    const scenarioId = currentScenario.id;
    
    // Update completed scenarios
    setCompletedScenarios(prev => ({
      ...prev,
      [scenarioId]: isCorrect
    }));

    // Update performance tracking
    setPerformance(prev => {
      const attempts = {
        ...prev.attempts,
        [scenarioId]: (prev.attempts[scenarioId] || 0) + 1
      };
      
      const masteryLevel = calculateMasteryLevel(completedScenarios);

      return {
        attempts,
        masteryLevel,
        currentDifficulty: prev.currentDifficulty
      };
    });

    // Provide feedback based on performance
    if (isCorrect) {
      setFeedbackMessage('Great job! You\'re making progress!');
      // Add a small delay before advancing to the next scenario
      // This allows the user to see the success message
      setTimeout(() => {
        nextScenario();
      }, 1500);
    } else {
      setFeedbackMessage('Keep practicing! You\'ll get better with each attempt.');
    }
    setShowFeedback(true);
  };

  // Toggle solution visibility
  const toggleSolution = () => {
    setShowSolution(!showSolution);
  };

  // Reset progress (clear cookies)
  const resetProgress = () => {
    if (window.confirm('Are you sure you want to reset your progress? This cannot be undone.')) {
      clearAllCookies();
      setCompletedScenarios({});
      setCurrentIndex(0);
      setShowSolution(false);
      setIsCorrect(null);
      setShowFeedback(false);
      setShowLevelComplete(false);
      setPerformance({
        attempts: {},
        masteryLevel: 0,
        currentDifficulty: 1
      });
      setFilteredScenarios(filterScenariosByDifficulty(scenarios, 1));
    }
  };

  // Calculate progress percentage
  const progressPercentage = Math.round((Object.keys(completedScenarios).length / scenarios.length) * 100);

  return (
    <div className="app-container">
      <Header 
        currentIndex={currentIndex}
        totalScenarios={filteredScenarios.length}
        nextScenario={nextScenario}
        previousScenario={previousScenario}
        progressPercentage={progressPercentage}
        completedCount={Object.keys(completedScenarios).length}
        resetProgress={resetProgress}
        masteryLevel={calculateMasteryLevel(completedScenarios)}
      />
      
      <div className="container">
        {currentScenario && (
          <>
            <ScenarioDetails 
              scenario={currentScenario}
              attempts={performance.attempts[currentScenario.id] || 0}
            />
            
            <JournalEntryForm
              scenario={currentScenario}
              onCheck={(result) => {
                setIsCorrect(result);
                if (result) {
                  markCompleted(true);
                }
              }}
              toggleSolution={toggleSolution}
              showSolution={showSolution}
              isCorrect={isCorrect}
              onAdvance={nextScenario}
            />
            
            {showSolution && (
              <Solution scenario={currentScenario} />
            )}

            {showFeedback && (
              <div className={`feedback-message ${isCorrect ? 'success' : 'error'}`}>
                {feedbackMessage}
              </div>
            )}

            {showLevelComplete && (
              <div className="level-complete-message">
                {performance.currentDifficulty === 1 && "Congratulations! You've completed the Easy Level!"}
                {performance.currentDifficulty === 2 && "Amazing! You've completed the Medium Level!"}
                {performance.currentDifficulty === 3 && "Outstanding! You've completed the Hard Level!"}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default App;