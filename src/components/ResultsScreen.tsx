import { motion } from "framer-motion";
import type { Drink } from "../data";

interface ResultsScreenProps {
  drink: Drink;
  onRetake: () => void;
  onViewMenu: () => void;
}

export function ResultsScreen({ drink, onRetake, onViewMenu }: ResultsScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-stone-100 flex flex-col items-center justify-center p-6 overflow-y-auto"
    >
      <div className="w-full max-w-md flex flex-col items-center">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-extrabold text-stone-800 tracking-wide mb-6 text-center"
        >
          IT'S A MATCH!
        </motion.h1>

        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", bounce: 0.5, duration: 0.8, delay: 0.2 }}
          className="w-64 h-64 md:w-72 md:h-72 mb-6 drop-shadow-2xl"
        >
          <img
            src={drink.imagePath}
            alt={drink.name}
            className="w-full h-full object-contain rounded-3xl"
            onError={(e) => {
              e.currentTarget.src = "https://placehold.co/288x288/fef3c7/92400e?text=🧋";
            }}
          />
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full bg-white/60 backdrop-blur-md rounded-3xl p-6 border border-stone-200 shadow-xl mb-6"
        >
          <h2 className="text-2xl font-bold text-stone-800 mb-1">{drink.name}</h2>
          <p className="text-lg font-medium text-stone-500 mb-4">{drink.shop}</p>
          <p className="text-stone-700 leading-relaxed text-sm italic">
            "{drink.diagnosis}"
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="w-full flex flex-col gap-3"
        >
          <button
            onClick={onViewMenu}
            className="w-full py-4 px-6 bg-stone-800 hover:bg-stone-700 text-white font-bold text-base rounded-2xl shadow-lg shadow-stone-300 transition-all cursor-pointer"
          >
            View Drink Menu
          </button>
          <button
            onClick={onRetake}
            className="w-full py-3 px-6 bg-transparent hover:bg-white/40 text-stone-600 font-medium text-sm rounded-2xl border border-stone-300 hover:border-stone-400 transition-all cursor-pointer"
          >
            Unmatch & Retake
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}
