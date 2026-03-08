import { motion, AnimatePresence } from "framer-motion";
import type { Drink } from "../data";

interface DrinkModalProps {
  drink: Drink | null;
  onClose: () => void;
}

export function DrinkModal({ drink, onClose }: DrinkModalProps) {
  if (!drink) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", bounce: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-sm bg-white rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="relative">
            <img
              src={drink.imagePath}
              alt={drink.name}
              className="w-full h-64 object-cover"
              onError={(e) => {
                e.currentTarget.src = "https://placehold.co/400x256/fef3c7/92400e?text=🧋";
              }}
            />
            <button
              onClick={onClose}
              className="absolute top-3 right-3 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-colors cursor-pointer"
            >
              <svg
                className="w-5 h-5 text-stone-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="p-5">
            <h2 className="text-xl font-bold text-stone-800 mb-1">
              {drink.name}
            </h2>
            <p className="text-sm font-medium text-amber-700 mb-4">
              {drink.shop}
            </p>
            <p className="text-stone-600 text-sm leading-relaxed italic">
              "{drink.diagnosis}"
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
