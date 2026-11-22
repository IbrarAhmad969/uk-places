
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useTravel } from "../context/TravelContext.jsx";
import FavoriteButton from "../components/FavoriteButton.jsx";

function DestinationCard({ place, onRemove }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      className="
        group relative overflow-hidden rounded-2xl
        border border-slate-200/80 bg-white
        dark:border-white/10 dark:bg-slate-900
      "
    >
      <Link
        to={`/places/${place.slug}`}
        className="block"
      >
        <div className="relative aspect-[5/4] overflow-hidden">
          <img
            src={place.images.card}
            alt={place.name}
            loading="lazy"
            className="
              h-full w-full object-cover
              transition-transform duration-700
              group-hover:scale-105
            "
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

          <span className="
            absolute bottom-4 left-4
            text-xs font-bold uppercase tracking-[0.16em]
            text-white/80
          ">
            {place.region}
          </span>
        </div>

        <div className="p-4">
          <h3 className="
            font-display text-xl font-bold
            text-slate-950 dark:text-white
          ">
            {place.name}
          </h3>

          <p className="
            mt-1 text-sm text-slate-500
            dark:text-slate-400
          ">
            {place.area} · {place.type}
          </p>

          <p className="
            mt-3 line-clamp-2 text-sm leading-6
            text-slate-600 dark:text-slate-300
          ">
            {place.summary}
          </p>

          <span className="
            mt-4 inline-flex items-center gap-2
            text-sm font-semibold text-slate-900
            dark:text-white
          ">
            Explore destination <span aria-hidden="true">→</span>
          </span>
        </div>
      </Link>

      {onRemove && (
        <div className="absolute right-3 top-3">
          <FavoriteButton slug={place.slug} />
        </div>
      )}
    </motion.article>
  );
}

function EmptyState({ recent = false }) {
  return (
    <div className="
      rounded-3xl border border-dashed
      border-slate-300 bg-slate-50/80
      px-6 py-12 text-center
      dark:border-white/15 dark:bg-white/[0.03]
    ">
      <div className="
        mx-auto flex h-14 w-14 items-center justify-center
        rounded-full bg-white text-2xl shadow-sm
        dark:bg-white/10
      ">
        {recent ? "◷" : "♡"}
      </div>

      <h3 className="
        mt-5 font-display text-xl font-bold
        text-slate-950 dark:text-white
      ">
        {recent ? "Your journey starts here" : "Your list is waiting"}
      </h3>

      <p className="
        mx-auto mt-2 max-w-md text-sm leading-6
        text-slate-600 dark:text-slate-400
      ">
        {recent
          ? "Explore a few destinations and they'll appear here for easy access."
          : "Save the places that catch your eye. Your personal UK travel wish list will live here."}
      </p>

      <Link
        to="/places"
        className="
          mt-6 inline-flex rounded-full
          bg-slate-950 px-6 py-3
          text-sm font-semibold text-white
          transition hover:bg-slate-700
          dark:bg-white dark:text-slate-950
          dark:hover:bg-slate-200
        "
      >
        Explore destinations
      </Link>
    </div>
  );
}

export default function MyTravelList() {
  const {
    favoritePlaces,
    recentPlaces,
    clearFavorites,
    clearRecentlyViewed,
  } = useTravel();

  return (
    <div className="
      min-h-screen bg-white pb-24 pt-28
      dark:bg-slate-950
    ">
      <div className="mx-auto max-w-[1200px] px-5 lg:px-8">
        {/* Intro */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl"
        >
          <p className="
            text-xs font-bold uppercase tracking-[0.22em]
            text-rose-700 dark:text-rose-300
          ">
            Your personal collection
          </p>

          <h1 className="
            mt-4 font-display text-5xl font-extrabold
            tracking-tight text-slate-950
            sm:text-6xl dark:text-white
          ">
            My Travel List<span className="text-rose-500">.</span>
          </h1>

          <p className="
            mt-5 text-base leading-8 text-slate-600
            dark:text-slate-300 sm:text-lg
          ">
            The places you're dreaming about, all in one place.
            Keep your favourites close and let the next adventure take shape.
          </p>
        </motion.header>

        {/* Favourites */}
        <section className="mt-16">
          <div className="
            mb-7 flex flex-wrap items-end justify-between gap-4
          ">
            <div>
              <p className="
                text-xs font-bold uppercase tracking-[0.18em]
                text-slate-500 dark:text-slate-400
              ">
                Your collection
              </p>

              <h2 className="
                mt-2 font-display text-3xl font-bold
                text-slate-950 dark:text-white
              ">
                Saved places
                <span className="
                  ml-3 align-middle text-base font-medium
                  text-slate-400
                ">
                  {favoritePlaces.length}
                </span>
              </h2>
            </div>

            {favoritePlaces.length > 0 && (
              <button
                type="button"
                onClick={() => {
                  if (window.confirm("Remove all saved places?")) {
                    clearFavorites();
                  }
                }}
                className="
                  text-sm font-semibold text-slate-500
                  transition hover:text-rose-600
                  dark:text-slate-400 dark:hover:text-rose-300
                "
              >
                Clear list
              </button>
            )}
          </div>

          {favoritePlaces.length === 0 ? (
            <EmptyState />
          ) : (
            <motion.div
              layout
              className="
                grid gap-5 sm:grid-cols-2
                lg:grid-cols-3
              "
            >
              {favoritePlaces.map((place) => (
                <DestinationCard
                  key={place.slug}
                  place={place}
                  onRemove
                />
              ))}
            </motion.div>
          )}
        </section>

        {/* Recently viewed */}
        <section className="mt-20">
          <div className="
            mb-7 flex flex-wrap items-end justify-between gap-4
          ">
            <div>
              <p className="
                text-xs font-bold uppercase tracking-[0.18em]
                text-slate-500 dark:text-slate-400
              ">
                Pick up where you left off
              </p>

              <h2 className="
                mt-2 font-display text-3xl font-bold
                text-slate-950 dark:text-white
              ">
                Recently viewed
                <span className="
                  ml-3 align-middle text-base font-medium
                  text-slate-400
                ">
                  {recentPlaces.length}
                </span>
              </h2>
            </div>

            {recentPlaces.length > 0 && (
              <button
                type="button"
                onClick={clearRecentlyViewed}
                className="
                  text-sm font-semibold text-slate-500
                  transition hover:text-rose-600
                  dark:text-slate-400 dark:hover:text-rose-300
                "
              >
                Clear history
              </button>
            )}
          </div>

          {recentPlaces.length === 0 ? (
            <EmptyState recent />
          ) : (
            <div className="
              grid gap-5 sm:grid-cols-2
              lg:grid-cols-3
            ">
              {recentPlaces.map((place) => (
                <DestinationCard
                  key={place.slug}
                  place={place}
                />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
