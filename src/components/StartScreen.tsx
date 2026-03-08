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
      className="w-full text-center"
    >
      <motion.button
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={onViewMenu}
        className="cursor-pointer"
      >
        <span className="text-7xl mb-2 block">🧋</span>
      </motion.button>

      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-4xl font-bold mb-1 text-stone-800"
      >
        Boba Matchmaker
      </motion.h1>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-stone-500 text-base mb-6"
      >
        Find your true (beverage) love.
      </motion.p>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="bg-white/60 rounded-2xl p-5 mb-6 border border-stone-200"
      >
        <p className="text-stone-600 text-sm leading-relaxed">
          Answer <span className="font-semibold text-amber-700">8 chaotic questions</span>{" "}
          to discover which iconic Bay Area boba drink is your absolute soulmate today.
          <span className="block mt-2 text-xs text-stone-400">
            It's like a dating app, but better because the boba won't ghost you.
          </span>
        </p>
      </motion.div>

      <motion.button
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onStart}
        className="w-full py-4 px-6 bg-stone-800 text-white font-bold text-base rounded-2xl shadow-lg shadow-stone-300 hover:bg-stone-700 hover:shadow-xl transition-all cursor-pointer"
      >
        Find My Match
      </motion.button>

    </motion.div>
  );
}
