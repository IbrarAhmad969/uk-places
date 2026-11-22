
import { motion } from "motion/react";
import { useTravel } from "../context/TravelContext.jsx";

export default function FavoriteButton({
  slug,
  className = "",
  showLabel = false,
}) {
  const { isFavorite, toggleFavorite } = useTravel();
  const saved = isFavorite(slug);

  return (
    <motion.button
      type="button"
      whileTap={{ scale: 0.86 }}
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
        toggleFavorite(slug);
      }}
      aria-label={
        saved ? "Remove from My Travel List" : "Save to My Travel List"
      }
      aria-pressed={saved}
      title={saved ? "Remove from My Travel List" : "Save this place"}
      className={`
        group inline-flex items-center justify-center gap-2
        rounded-full border
        p-3 backdrop-blur-xl
        transition-colors duration-300
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-rose-500
        ${
          saved
            ? "border-rose-200 bg-rose-50 text-rose-600 dark:border-rose-400/30 dark:bg-rose-400/15 dark:text-rose-300"
            : "border-white/50 bg-black/20 text-white hover:bg-white hover:text-rose-600 dark:border-white/20 dark:bg-black/30 dark:hover:bg-white"
        }
        ${className}
      `}
    >
      <motion.svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill={saved ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={{
          scale: saved ? [1, 1.3, 1] : 1,
        }}
        transition={{ duration: 0.3 }}
        aria-hidden="true"
      >
        <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />
      </motion.svg>

      {showLabel && (
        <span className="text-sm font-semibold">
          {saved ? "Saved" : "Save place"}
        </span>
      )}
    </motion.button>
  );
}
