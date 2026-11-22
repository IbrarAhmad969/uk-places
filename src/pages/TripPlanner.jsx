import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { places } from "../data/places.js";
import { useTravel } from "../context/TravelContext.jsx";
import TripRouteMap from "../components/TripRouteMap.jsx";

function formatDate(date) {
  if (!date) return "Not set";

  return new Date(`${date}T12:00:00`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function TripPlanner() {
  const {
    trip,
    tripPlaces,
    addToTrip,
    removeFromTrip,
    moveTripStop,
    updateTrip,
    clearTrip,
  } = useTravel();

  const [search, setSearch] = useState("");
  const [showAll, setShowAll] = useState(false);

  const availablePlaces = useMemo(() => {
    const term = search.trim().toLowerCase();

    return places.filter((place) => {
      const notAdded = !trip.stops.includes(place.slug);
      const matches =
        !term ||
        place.name.toLowerCase().includes(term) ||
        place.region.toLowerCase().includes(term) ||
        place.area.toLowerCase().includes(term);

      return notAdded && matches;
    });
  }, [search, trip.stops]);

  const visiblePlaces = showAll
    ? availablePlaces
    : availablePlaces.slice(0, 6);

  const handleClear = () => {
    if (
      window.confirm(
        "Are you sure you want to clear your entire itinerary?"
      )
    ) {
      clearTrip();
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 pb-24 dark:bg-slate-950">
      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(13,148,136,0.3),transparent_55%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:px-8">
          <motion.div
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-teal-300">
              Your journey starts here
            </p>

            <h1 className="mt-5 font-display text-5xl font-extrabold tracking-tight sm:text-7xl">
              My <span className="text-teal-300">UK Trip.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Bring your favourite places together, shape your route and
              create an adventure worth remembering.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#itinerary"
                className="rounded-full bg-teal-500 px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-teal-400"
              >
                View my itinerary ↓
              </a>

              <Link
                to="/places"
                className="rounded-full border border-white/25 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Discover places
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* TRIP DETAILS */}
        <section className="relative z-10 -mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900 sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-5">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-teal-700 dark:text-teal-400">
                Trip details
              </p>

              <h2 className="mt-2 font-display text-2xl font-bold">
                Give your adventure a name
              </h2>
            </div>

            <div className="rounded-2xl bg-teal-50 px-5 py-3 text-center dark:bg-teal-950/60">
              <p className="text-2xl font-extrabold text-teal-800 dark:text-teal-300">
                {trip.stops.length}
              </p>
              <p className="text-xs font-semibold text-teal-700 dark:text-teal-400">
                Destinations
              </p>
            </div>
          </div>

          <div className="mt-7 grid gap-5 md:grid-cols-3">
            <label className="md:col-span-1">
              <span className="mb-2 block text-sm font-semibold text-slate-600 dark:text-slate-300">
                Trip name
              </span>
              <input
                type="text"
                value={trip.name}
                onChange={(event) =>
                  updateTrip({ name: event.target.value })
                }
                placeholder="My UK Adventure"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-500/15 dark:border-slate-700 dark:bg-slate-950"
              />
            </label>

            <label>
              <span className="mb-2 block text-sm font-semibold text-slate-600 dark:text-slate-300">
                Start date
              </span>
              <input
                type="date"
                value={trip.startDate}
                onChange={(event) =>
                  updateTrip({ startDate: event.target.value })
                }
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-500/15 dark:border-slate-700 dark:bg-slate-950"
              />
            </label>

            <label>
              <span className="mb-2 block text-sm font-semibold text-slate-600 dark:text-slate-300">
                End date
              </span>
              <input
                type="date"
                min={trip.startDate || undefined}
                value={trip.endDate}
                onChange={(event) =>
                  updateTrip({ endDate: event.target.value })
                }
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-500/15 dark:border-slate-700 dark:bg-slate-950"
              />
            </label>
          </div>
        </section>

        {/* ITINERARY */}
        <section id="itinerary" className="scroll-mt-28 pt-20">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700 dark:text-teal-400">
                The journey
              </p>

              <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
                Your itinerary
              </h2>

              <p className="mt-3 text-slate-500 dark:text-slate-400">
                Arrange your destinations in the order you want to visit.
              </p>
            </div>

            {tripPlaces.length > 0 && (
              <button
                type="button"
                onClick={handleClear}
                className="rounded-full border border-rose-200 px-4 py-2 text-sm font-semibold text-rose-700 transition hover:bg-rose-50 dark:border-rose-900 dark:text-rose-300 dark:hover:bg-rose-950"
              >
                Clear itinerary
              </button>
            )}
          </div>

          {tripPlaces.length === 0 ? (
            <div className="mt-9 rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center dark:border-slate-700 dark:bg-slate-900">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-50 text-3xl dark:bg-teal-950">
                🧭
              </div>

              <h3 className="mt-6 font-display text-2xl font-bold">
                Your adventure is waiting
              </h3>

              <p className="mx-auto mt-3 max-w-md leading-7 text-slate-500 dark:text-slate-400">
                You haven't added any destinations yet. Explore the UK and
                start building your perfect itinerary.
              </p>

              <Link
                to="/places"
                className="mt-7 inline-flex rounded-full bg-teal-700 px-6 py-3 font-bold text-white transition hover:bg-teal-800"
              >
                Explore destinations →
              </Link>
            </div>
          ) : (
            <>
              {/* INTERACTIVE TRIP ROUTE MAP */}
              <div className="mt-9">
                <TripRouteMap places={tripPlaces} />
              </div>

              {/* ITINERARY DESTINATION CARDS */}
              <div className="mt-9 space-y-4">
                <AnimatePresence mode="popLayout">
                  {tripPlaces.map((place, index) => (
                    <motion.article
                      key={place.slug}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -25 }}
                      transition={{ duration: 0.25 }}
                      className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 sm:flex-row"
                    >
                      <div className="relative h-52 shrink-0 overflow-hidden sm:h-auto sm:w-56">
                        {place.images?.card && (
                          <img
                            src={place.images.card}
                            alt={place.name}
                            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                          />
                        )}

                        <span className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-black/50 text-sm font-bold text-white backdrop-blur">
                          {index + 1}
                        </span>
                      </div>

                      <div className="flex flex-1 flex-wrap items-center justify-between gap-5 p-6">
                        <div className="min-w-0 flex-1">
                          <p className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">
                            {place.region} · {place.area}
                          </p>

                          <h3 className="mt-2 font-display text-2xl font-bold">
                            {place.name}
                          </h3>

                          <p className="mt-2 line-clamp-2 max-w-xl text-sm leading-6 text-slate-500 dark:text-slate-400">
                            {place.summary}
                          </p>

                          <Link
                            to={`/places/${place.slug}`}
                            className="mt-4 inline-flex text-sm font-bold text-teal-700 hover:underline dark:text-teal-400"
                          >
                            Explore destination →
                          </Link>
                        </div>

                        <div className="flex shrink-0 items-center gap-2">
                          <div className="flex flex-col gap-1">
                            <button
                              type="button"
                              disabled={index === 0}
                              onClick={() => moveTripStop(place.slug, -1)}
                              aria-label={`Move ${place.name} up`}
                              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-25 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
                            >
                              ↑
                            </button>

                            <button
                              type="button"
                              disabled={index === tripPlaces.length - 1}
                              onClick={() => moveTripStop(place.slug, 1)}
                              aria-label={`Move ${place.name} down`}
                              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-25 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
                            >
                              ↓
                            </button>
                          </div>

                          <button
                            type="button"
                            onClick={() => removeFromTrip(place.slug)}
                            aria-label={`Remove ${place.name} from trip`}
                            className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-400 transition hover:bg-rose-50 hover:text-rose-600 dark:hover:bg-rose-950 dark:hover:text-rose-300"
                          >
                            ✕
                          </button>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </AnimatePresence>
              </div>
            </>
          )}
        </section>

        {/* ADD DESTINATIONS */}
        <section className="pt-24">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700 dark:text-teal-400">
                Keep exploring
              </p>

              <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
                Add destinations
              </h2>

              <p className="mt-3 text-slate-500 dark:text-slate-400">
                Find somewhere new to add to your adventure.
              </p>
            </div>

            <Link
              to="/places"
              className="font-semibold text-teal-700 hover:underline dark:text-teal-400"
            >
              View all places →
            </Link>
          </div>

          <div className="mt-7">
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search destinations, regions or areas..."
              className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-500/15 dark:border-slate-700 dark:bg-slate-900"
            />
          </div>

          {visiblePlaces.length > 0 ? (
            <>
              <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {visiblePlaces.map((place) => (
                  <motion.article
                    layout
                    key={place.slug}
                    className="overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"
                  >
                    <Link
                      to={`/places/${place.slug}`}
                      className="group block"
                    >
                      <div className="h-48 overflow-hidden">
                        {place.images?.card && (
                          <img
                            src={place.images.card}
                            alt={place.name}
                            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                          />
                        )}
                      </div>

                      <div className="p-5 pb-2">
                        <p className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">
                          {place.region} · {place.area}
                        </p>
                        <h3 className="mt-2 font-display text-xl font-bold">
                          {place.name}
                        </h3>
                        <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                          {place.summary}
                        </p>
                      </div>
                    </Link>

                    <div className="px-5 pb-5 pt-3">
                      <button
                        type="button"
                        onClick={() => addToTrip(place.slug)}
                        className="w-full rounded-full bg-teal-700 px-4 py-3 text-sm font-bold text-white transition hover:bg-teal-800"
                      >
                        + Add to my trip
                      </button>
                    </div>
                  </motion.article>
                ))}
              </div>

              {availablePlaces.length > 6 && (
                <div className="mt-8 text-center">
                  <button
                    type="button"
                    onClick={() => setShowAll((current) => !current)}
                    className="rounded-full border border-slate-300 px-6 py-3 text-sm font-bold transition hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
                  >
                    {showAll ? "Show fewer destinations" : "Show all destinations"}
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="mt-7 rounded-2xl bg-white p-8 text-center dark:bg-slate-900">
              <p className="font-semibold">
                {search
                  ? "No destinations match your search."
                  : "You've added every destination to your trip!"}
              </p>
              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="mt-3 text-sm font-bold text-teal-700 hover:underline dark:text-teal-400"
                >
                  Clear search
                </button>
              )}
            </div>
          )}
        </section>

        {/* FOOTER NOTE */}
        <section className="mt-24 rounded-3xl bg-slate-900 px-7 py-10 text-white dark:bg-slate-900 sm:px-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-300">
            Your journey, your way
          </p>

          <h2 className="mt-3 font-display text-2xl font-bold sm:text-3xl">
            Every great adventure begins with a place.
          </h2>

          <p className="mt-3 max-w-2xl leading-7 text-slate-300">
            Your trip is saved automatically on this device. Add, remove or
            rearrange destinations whenever inspiration strikes.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-300">
            <span>📍 {tripPlaces.length} destinations</span>
            <span>·</span>
            <span>
              🗓 {formatDate(trip.startDate)} – {formatDate(trip.endDate)}
            </span>
          </div>
        </section>
      </div>
    </main>
  );
}
