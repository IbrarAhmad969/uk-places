
import { useTravel } from "../context/TravelContext.jsx";

export default function AddToTripButton({
  slug,
  className = "",
}) {
  const { trip, addToTrip, removeFromTrip } = useTravel();

  const isAdded = trip.stops.includes(slug);

  return (
    <button
      type="button"
      onClick={() =>
        isAdded ? removeFromTrip(slug) : addToTrip(slug)
      }
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition-all duration-300 ${
        isAdded
          ? "border border-teal-200 bg-teal-50 text-teal-800 hover:bg-teal-100 dark:border-teal-800 dark:bg-teal-950 dark:text-teal-200"
          : "bg-teal-700 text-white shadow-lg shadow-teal-900/15 hover:-translate-y-0.5 hover:bg-teal-800"
      } ${className}`}
    >
      {isAdded ? (
        <>
          <span aria-hidden="true">✓</span>
          Added to My Trip
        </>
      ) : (
        <>
          <span aria-hidden="true">＋</span>
          Add to My Trip
        </>
      )}
    </button>
  );
}
