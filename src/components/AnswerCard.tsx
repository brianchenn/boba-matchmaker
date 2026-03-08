import type { AnswerOption } from "../data";

interface AnswerCardProps {
  option: AnswerOption;
  onSelect: () => void;
  isSelected: boolean;
}

export function AnswerCard({
  option,
  onSelect,
  isSelected,
}: AnswerCardProps) {
  return (
    <button
      onClick={onSelect}
      className={`
        relative w-full p-4 rounded-2xl border-2 text-left
        transition-all duration-200 cursor-pointer
        min-h-[72px] flex items-center gap-3
        ${
          isSelected
            ? "border-amber-600 bg-amber-50 shadow-lg shadow-amber-200"
            : "border-stone-200 bg-white hover:border-amber-400 hover:shadow-md"
        }
      `}
    >
      <span className="text-2xl flex-shrink-0">{option.emoji}</span>
      <span
        className={`text-sm font-medium leading-snug ${isSelected ? "text-amber-800" : "text-stone-700"}`}
      >
        {option.text}
      </span>
      {isSelected && (
        <div className="absolute top-2 right-2 w-5 h-5 bg-amber-600 rounded-full flex items-center justify-center">
          <svg
            className="w-3 h-3 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
      )}
    </button>
  );
}
