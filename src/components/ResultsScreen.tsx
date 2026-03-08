import { motion } from "framer-motion";
import type { Drink } from "../data";

interface ResultsScreenProps {
  drink: Drink;
  onRetake: () => void;
  onViewMenu: () => void;
}

export function ResultsScreen({ drink, onRetake, onViewMenu }: ResultsScreenProps) {
  const handleShare = async () => {
    const message = `I'm craving a ${drink.name} from ${drink.shop}. What about you? 🧋`;
    const url = "https://boba-matchmaker.vercel.app";
    
    // Try native share first (works better on mobile)
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Boba Matchmaker",
          text: message,
          url: url,
        });
        return;
      } catch {
        // User cancelled or share failed, fall through to SMS
      }
    }
    
    // Fallback to SMS
    const smsMessage = `${message}\n\n${url}`;
    window.open(`sms:?&body=${encodeURIComponent(smsMessage)}`, '_self');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-stone-100 flex flex-col items-center justify-center p-6 overflow-y-auto"
    >
      <div className="w-full max-w-md flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-stone-800 tracking-wide mb-6 text-center">
          IT'S A MATCH!
        </h1>

        <div className="w-64 h-64 md:w-72 md:h-72 mb-6 rounded-3xl overflow-hidden shadow-2xl shadow-stone-400/50 bg-white">
          <img
            src={drink.imagePath}
            alt={drink.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = "https://placehold.co/288x288/fef3c7/92400e?text=🧋";
            }}
          />
        </div>

        <div className="w-full bg-white/60 backdrop-blur-md rounded-3xl p-6 border border-stone-200 shadow-xl mb-6">
          <h2 className="text-2xl font-bold text-stone-800 mb-1">{drink.name}</h2>
          <p className="text-lg font-medium text-stone-500 mb-4">{drink.shop}</p>
          <p className="text-stone-700 leading-relaxed text-sm italic">
            "{drink.diagnosis}"
          </p>
        </div>

        <div className="w-full flex flex-col gap-3">
          <button
            onClick={handleShare}
            className="w-full py-4 px-6 bg-stone-800 hover:bg-stone-700 text-white font-bold text-base rounded-2xl shadow-lg shadow-stone-300 transition-all cursor-pointer"
          >
            Share with Friends
          </button>
          <button
            onClick={onViewMenu}
            className="w-full py-3 px-6 bg-transparent hover:bg-white/40 text-stone-600 font-medium text-sm rounded-2xl border border-stone-300 hover:border-stone-400 transition-all cursor-pointer"
          >
            View Drink Menu
          </button>
          <button
            onClick={onRetake}
            className="w-full py-3 px-6 text-stone-500 hover:text-stone-700 font-medium text-sm transition-all cursor-pointer"
          >
            Unmatch & Retake
          </button>
        </div>

        <p className="mt-6 text-stone-400 text-xs">
          ♥ vibe coded by{" "}
          <a
            href="https://github.com/brianchenn/boba-matchmaker"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-stone-600 transition-colors"
          >
            brian
          </a>
        </p>
      </div>
    </motion.div>
  );
}
