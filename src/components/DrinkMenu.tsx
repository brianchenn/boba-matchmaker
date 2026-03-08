import { useState } from "react";
import { motion } from "framer-motion";
import { drinks } from "../data";
import type { Drink } from "../data";
import { DrinkModal } from "./DrinkModal";

interface DrinkMenuProps {
  onBack: () => void;
}

export function DrinkMenu({ onBack }: DrinkMenuProps) {
  const [selectedDrink, setSelectedDrink] = useState<Drink | null>(null);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-stone-100 overflow-y-auto"
      >
        <div className="w-full max-w-2xl mx-auto p-4 pb-8">
          <div className="flex items-center gap-3 mb-6">
            <button
              onClick={onBack}
              className="p-2 hover:bg-white/60 rounded-full transition-colors cursor-pointer"
            >
              <svg
                className="w-6 h-6 text-stone-600"
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
            </button>
            <h1 className="text-2xl font-bold text-stone-800">Drink Menu</h1>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {drinks.map((drink) => (
              <button
                key={drink.id}
                onClick={() => setSelectedDrink(drink)}
                className="bg-white/70 hover:bg-white rounded-2xl p-3 border border-stone-200 hover:border-amber-300 shadow-sm hover:shadow-md transition-all cursor-pointer text-left"
              >
                <div className="aspect-square mb-2 rounded-xl overflow-hidden bg-stone-100">
                  <img
                    src={drink.imagePath}
                    alt={drink.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "https://placehold.co/200x200/fef3c7/92400e?text=🧋";
                    }}
                  />
                </div>
                <h3 className="font-semibold text-stone-800 text-sm leading-tight mb-1">
                  {drink.name}
                </h3>
                <p className="text-xs text-stone-500">{drink.shop}</p>
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {selectedDrink && (
        <DrinkModal
          drink={selectedDrink}
          onClose={() => setSelectedDrink(null)}
        />
      )}
    </>
  );
}
