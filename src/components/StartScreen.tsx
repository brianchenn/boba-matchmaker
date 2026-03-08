import { motion } from "framer-motion";

interface StartScreenProps {
  onStart: () => void;
  onViewMenu: () => void;
}

export function StartScreen({ onStart, onViewMenu }: StartScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full text-center"
    >
      <button
        onClick={onViewMenu}
        className="cursor-pointer hover:scale-110 transition-transform"
      >
        <span className="text-7xl mb-2 block">🧋</span>
      </button>

      <h1 className="text-4xl font-bold mb-1 text-stone-800">
        Boba Matchmaker
      </h1>

      <p className="text-stone-500 text-base mb-6">
        Find your true (beverage) love.
      </p>

      <div className="bg-white/60 rounded-2xl p-5 mb-6 border border-stone-200">
        <p className="text-stone-600 text-sm leading-relaxed">
          Answer <span className="font-semibold text-amber-700">8 chaotic questions</span>{" "}
          to discover which iconic Bay Area boba drink is your absolute soulmate today.
          <span className="block mt-2 text-xs text-stone-400">
            It's like a dating app, but better because the boba won't ghost you.
          </span>
        </p>
      </div>

      <button
        onClick={onStart}
        className="w-full py-4 px-6 bg-stone-800 text-white font-bold text-base rounded-2xl shadow-lg shadow-stone-300 hover:bg-stone-700 hover:shadow-xl active:scale-98 transition-all cursor-pointer"
      >
        Find My Match
      </button>

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
    </motion.div>
  );
}
