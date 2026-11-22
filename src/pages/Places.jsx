import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import PlaceCard from "../components/PlaceCard.jsx";
import { places, regions } from "../data/places.js";
import UKMap from "../components/UKMap.jsx";
import { regionStyle } from "../data/theme.js";

const filters = ["All", ...regions.map((r) => r.name)];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    y: 12,
    transition: {
      duration: 0.2,
    },
  },
};

export default function Places() {
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("All");

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase();

    return places.filter((p) => {
      const matchesRegion =
        region === "All" || p.region === region;

      const searchable = [
        p.name,
        p.area,
        p.type,
        p.region,
        p.summary,
        ...(p.highlights || []),
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return matchesRegion && (!q || searchable.includes(q));
    });
  }, [query, region]);

  const reset = () => {
    setQuery("");
    setRegion("All");
  };

  const hasFilters = query.trim() !== "" || region !== "All";

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Page introduction */}
      <section className="relative overflow-hidden border-b border-slate-200/80 dark:border-slate-800">
        <div
          aria-hidden="true"
          className="
            absolute -right-32 -top-40
            h-[450px] w-[450px]
            rounded-full
            bg-sky-100/70
            blur-3xl
            dark:bg-sky-900/10
          "
        />

        <div className="relative mx-auto max-w-[1200px] px-5 pb-14 pt-20 sm:pb-20 sm:pt-28 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-slate-400 dark:bg-slate-600" />
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
                The destination collection
              </p>
            </div>

            <h1
              className="
                mt-6 max-w-[850px]
                font-display text-5xl
                font-extrabold leading-[0.98]
                tracking-[-0.045em]
                text-slate-950
                sm:text-7xl
                lg:text-8xl
                dark:text-white
              "
            >
              Find somewhere
              <span className="block text-slate-400 dark:text-slate-600">
                worth going.
              </span>
            </h1>

            <div className="mt-7 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <p className="max-w-[55ch] text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 dark:text-slate-400">
                Thirty remarkable places, four nations and countless reasons
                to explore. Find your next escape, from wild landscapes to
                historic streets and unforgettable coastlines.
              </p>

              <div className="flex shrink-0 gap-6">
                <div>
                  <p className="font-display text-3xl font-extrabold text-slate-950 dark:text-white">
                    30
                  </p>
                  <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.18em] text-slate-500">
                    Destinations
                  </p>
                </div>

                <div className="h-12 w-px bg-slate-200 dark:bg-slate-800" />

                <div>
                  <p className="font-display text-3xl font-extrabold text-slate-950 dark:text-white">
                    04
                  </p>
                  <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.18em] text-slate-500">
                    Nations
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Discovery area */}
      <section className="mx-auto max-w-[1200px] px-5 py-12 sm:py-16 lg:px-8">
        {/* Search and filters */}
        <div className="flex flex-col gap-7">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                Explore the collection
              </p>

              <h2 className="mt-2 font-display text-2xl font-extrabold tracking-tight text-slate-950 dark:text-white">
                Every place has a story.
              </h2>
            </div>

            <label className="relative block w-full sm:max-w-[360px]">
              <span className="visually-hidden">
                Search places
              </span>

              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                className="
                  absolute left-4 top-1/2
                  h-5 w-5 -translate-y-1/2
                  text-slate-400
                "
              >
                <circle
                  cx="11"
                  cy="11"
                  r="7"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
                <path
                  d="m16 16 4 4"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>

              <input
                type="search"
                placeholder="Search places, areas or interests..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="
                  w-full rounded-full
                  border border-slate-200
                  bg-slate-50
                  py-3.5 pl-12 pr-5
                  text-sm text-slate-900
                  outline-none
                  transition-all duration-300
                  placeholder:text-slate-400
                  focus:border-slate-400
                  focus:bg-white
                  focus:ring-4 focus:ring-slate-100
                  dark:border-slate-800
                  dark:bg-slate-900
                  dark:text-white
                  dark:focus:border-slate-600
                  dark:focus:bg-slate-900
                  dark:focus:ring-slate-800/60
                "
              />
            </label>
          </div>

          {/* Nation filters */}
          <div className="flex flex-wrap items-center gap-2">
            {filters.map((r) => {
              const active = region === r;

              return (
                <button
                  key={r}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setRegion(r)}
                  className={`
                    rounded-full
                    border px-4 py-2.5
                    text-xs font-semibold
                    transition-all duration-300
                    active:scale-95
                    ${active
                      ? "border-slate-950 bg-slate-950 text-white shadow-md dark:border-white dark:bg-white dark:text-slate-950"
                      : "border-slate-200 bg-white text-slate-600 hover:border-slate-400 hover:text-slate-950 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400 dark:hover:border-slate-600 dark:hover:text-white"
                    }
                  `}
                >
                  {r !== "All" && (
                    <span
                      className={`
                        mr-2 inline-block
                        h-2 w-2 rounded-full
                        ${regionStyle[r].bg}
                      `}
                    />
                  )}
                  {r}
                </button>
              );
            })}

            {hasFilters && (
              <button
                type="button"
                onClick={reset}
                className="
                  ml-1 px-2 py-2
                  text-xs font-semibold
                  text-slate-500
                  underline-offset-4
                  transition hover:text-slate-950
                  hover:underline
                  dark:text-slate-400
                  dark:hover:text-white
                "
              >
                Clear filters
              </button>
            )}
          </div>
        </div>
        <div className="mt-10">
          <UKMap places={shown} />
        </div>
        {/* Results information */}
        <div className="mt-10 flex items-center justify-between border-b border-slate-200 pb-4 dark:border-slate-800">
          <p
            className="text-sm text-slate-500 dark:text-slate-400"
            aria-live="polite"
          >
            Showing{" "}
            <strong className="text-slate-950 dark:text-white">
              {shown.length}
            </strong>{" "}
            of {places.length} places
          </p>

          <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
            {region === "All" ? "All nations" : region}
          </span>
        </div>

        {/* Place cards */}
        <AnimatePresence mode="wait">
          {shown.length > 0 ? (
            <motion.div
              key={`${region}-${query}`}
              initial="hidden"
              animate="show"
              exit="exit"
              className="
                mt-8 grid gap-6
                sm:grid-cols-2
                lg:grid-cols-3
              "
            >
              {shown.map((p, index) => (
                <motion.div
                  key={p.slug}
                  variants={cardVariants}
                  custom={index}
                >
                  <PlaceCard place={p} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="
                mt-10 flex min-h-[340px]
                flex-col items-center
                justify-center rounded-3xl
                border border-dashed
                border-slate-300
                bg-slate-50/70
                px-6 py-16 text-center
                dark:border-slate-800
                dark:bg-slate-900/40
              "
            >
              <span
                className="
                  flex h-14 w-14
                  items-center justify-center
                  rounded-full
                  bg-white
                  text-2xl
                  shadow-sm
                  dark:bg-slate-800
                "
                aria-hidden="true"
              >
                ⌕
              </span>

              <h3 className="mt-5 font-display text-2xl font-extrabold text-slate-950 dark:text-white">
                No places found.
              </h3>

              <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500 dark:text-slate-400">
                We couldn't find a destination matching that search.
                Try another name, area or nation.
              </p>

              <button
                type="button"
                onClick={reset}
                className="
                  mt-7 rounded-full
                  bg-slate-950
                  px-6 py-3
                  text-sm font-semibold
                  text-white
                  transition
                  hover:-translate-y-0.5
                  hover:bg-slate-700
                  active:scale-95
                  dark:bg-white
                  dark:text-slate-950
                  dark:hover:bg-slate-200
                "
              >
                Show all places
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Bottom discovery link */}
      <section className="px-5 pb-20">
        <div
          className="
            mx-auto max-w-[1200px]
            rounded-[1.75rem]
            bg-slate-950
            px-7 py-9
            text-white
            sm:flex sm:items-center
            sm:justify-between
            sm:gap-8 sm:px-10
            dark:bg-slate-900
          "
        >
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/45">
              A different way to explore
            </p>

            <h2 className="mt-3 font-display text-2xl font-extrabold tracking-tight sm:text-3xl">
              Not sure which nation to visit?
            </h2>

            <p className="mt-2 max-w-[48ch] text-sm leading-6 text-slate-300">
              Discover the character of England, Scotland, Wales and
              Northern Ireland.
            </p>
          </div>

          <Link
            to="/regions"
            className="
              mt-6 inline-flex shrink-0
              items-center gap-3
              rounded-full bg-white
              px-6 py-3.5
              text-sm font-bold
              text-slate-950
              transition-all duration-300
              hover:-translate-y-1
              hover:bg-slate-200
              active:scale-95
              sm:mt-0
            "
          >
            Explore the nations
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}