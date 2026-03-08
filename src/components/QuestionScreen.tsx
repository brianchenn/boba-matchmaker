import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Question } from "../data";
import { ProgressBar } from "./ProgressBar";
import { AnswerCard } from "./AnswerCard";

interface QuestionScreenProps {
  question: Question;
  currentIndex: number;
  totalQuestions: number;
  onAnswer: (optionIndex: number) => void;
  onBack: () => void;
  onHome: () => void;
  canGoBack: boolean;
}

export function QuestionScreen({
  question,
  currentIndex,
  totalQuestions,
  onAnswer,
  onBack,
  onHome,
  canGoBack,
}: QuestionScreenProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleSelect = (index: number) => {
    if (selectedIndex !== null) return;
    setSelectedIndex(index);
    setTimeout(() => {
      onAnswer(index);
      setSelectedIndex(null);
    }, 300);
  };

  return (
    <div className="w-full">
      <ProgressBar current={currentIndex} total={totalQuestions} />

      <AnimatePresence mode="wait">
        <motion.div
          key={question.id}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mb-8 leading-tight">
            {question.prompt}
          </h2>

          <div className="flex flex-col gap-3">
            {question.options.map((option, index) => (
              <AnswerCard
                key={index}
                option={option}
                onSelect={() => handleSelect(index)}
                isSelected={selectedIndex === index}
                index={index}
              />
            ))}
          </div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            onClick={canGoBack ? onBack : onHome}
            className="mt-6 w-full py-3 text-stone-500 hover:text-stone-700 font-medium text-sm transition-colors cursor-pointer flex items-center justify-center gap-2"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            {canGoBack ? "Go Back" : "Back to Home"}
          </motion.button>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
