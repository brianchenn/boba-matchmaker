import { useState, useMemo } from "react";
import { AnimatePresence } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";
import { drinks, questions } from "./data";
import type { Drink } from "./data";
import { StartScreen } from "./components/StartScreen";
import { QuestionScreen } from "./components/QuestionScreen";
import { ResultsScreen } from "./components/ResultsScreen";
import { DrinkMenu } from "./components/DrinkMenu";

type GameState = "start" | "quiz" | "results" | "menu";

function App() {
  const [gameState, setGameState] = useState<GameState>("start");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>(() =>
    Object.fromEntries(drinks.map((d) => [d.id, 0]))
  );
  const [answerHistory, setAnswerHistory] = useState<number[]>([]);
  const [menuReturnTo, setMenuReturnTo] = useState<"start" | "results">("start");

  const initializeScores = () => {
    return Object.fromEntries(drinks.map((d) => [d.id, 0]));
  };

  const handleStart = () => {
    setGameState("quiz");
    setCurrentQuestionIndex(0);
    setScores(initializeScores());
    setAnswerHistory([]);
  };

  const handleAnswer = (optionIndex: number) => {
    const currentQuestion = questions[currentQuestionIndex];
    const selectedOption = currentQuestion.options[optionIndex];

    if (selectedOption) {
      setScores((prev) => {
        const newScores = { ...prev };
        Object.entries(selectedOption.scores).forEach(([drinkId, points]) => {
          newScores[drinkId] = (newScores[drinkId] || 0) + points;
        });
        return newScores;
      });
      setAnswerHistory((prev) => [...prev, optionIndex]);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setGameState("results");
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0 && answerHistory.length > 0) {
      const prevQuestionIndex = currentQuestionIndex - 1;
      const prevAnswerIndex = answerHistory[answerHistory.length - 1];
      const prevQuestion = questions[prevQuestionIndex];
      const prevOption = prevQuestion.options[prevAnswerIndex];

      if (prevOption) {
        setScores((prev) => {
          const newScores = { ...prev };
          Object.entries(prevOption.scores).forEach(([drinkId, points]) => {
            newScores[drinkId] = (newScores[drinkId] || 0) - points;
          });
          return newScores;
        });
      }

      setAnswerHistory((prev) => prev.slice(0, -1));
      setCurrentQuestionIndex(prevQuestionIndex);
    }
  };

  const winningDrink: Drink = useMemo(() => {
    const maxScore = Math.max(...Object.values(scores));
    const tiedDrinks = drinks.filter((d) => scores[d.id] === maxScore);
    return tiedDrinks[Math.floor(Math.random() * tiedDrinks.length)];
  }, [scores, gameState]);

  const handleRetake = () => {
    setGameState("start");
    setCurrentQuestionIndex(0);
    setScores(initializeScores());
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-stone-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <AnimatePresence mode="wait">
          {gameState === "start" && (
            <StartScreen
              onStart={handleStart}
              onViewMenu={() => {
                setMenuReturnTo("start");
                setGameState("menu");
              }}
            />
          )}

          {gameState === "quiz" && (
            <QuestionScreen
              key={currentQuestionIndex}
              question={questions[currentQuestionIndex]}
              currentIndex={currentQuestionIndex}
              totalQuestions={questions.length}
              onAnswer={handleAnswer}
              onBack={handleBack}
              onHome={() => setGameState("start")}
              canGoBack={currentQuestionIndex > 0}
            />
          )}

          {gameState === "results" && (
            <ResultsScreen
              drink={winningDrink}
              onRetake={handleRetake}
              onViewMenu={() => {
                setMenuReturnTo("results");
                setGameState("menu");
              }}
            />
          )}

          {gameState === "menu" && (
            <DrinkMenu onBack={() => setGameState(menuReturnTo)} />
          )}
        </AnimatePresence>
      </div>
      <Analytics />
    </div>
  );
}

export default App;
