import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { places, regions } from "../data/places.js";
import { regionStyle } from "../data/theme.js";
import PlaceCard from "../components/PlaceCard.jsx";

const nationNumbers = ["01", "02", "03", "04"];

const nationIntro = {
  England:
    "Historic cities, storybook villages, dramatic coastlines and landscapes shaped by centuries of history.",

  Scotland:
    "Wild mountains, mysterious lochs, remote islands and extraordinary landscapes stretching towards the horizon.",

  Wales:
    "Ancient castles, rugged mountain ranges, beautiful beaches and winding valleys made for adventure.",

  "Northern Ireland":
    "A spectacular coastline, legendary landscapes, welcoming cities and natural wonders waiting to be explored.",
};

const nationHighlights = {
  England: ["Historic towns", "Coastal escapes", "National parks"],
  Scotland: ["Highland scenery", "Castles & lochs", "Island adventures"],
  Wales: ["Mountain walks", "Ancient castles", "Wild coastline"],
  "Northern Ireland": ["Atlantic coast", "Natural wonders", "Living history"],
};

const reveal = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Regions() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Page hero */}
      <section className="relative overflow-hidden border-b border-slate-200 dark:border-slate-800">
        <div
          aria-hidden="true"
          className="
            absolute -right-32 -top-40
            h-[450px] w-[450px]
            rounded-full bg-sky-100/70
            blur-3xl
            dark:bg-sky-900/10
          "
        />

        <div className="relative mx-auto max-w-[1200px] px-5 pb-16 pt-20 sm:pb-24 sm:pt-28 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-slate-400 dark:bg-slate-600" />

              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
                Four nations, one remarkable journey
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
              Discover the
              <span className="block text-slate-400 dark:text-slate-600">
                nations of the UK.
              </span>
            </h1>

            <div className="mt-7 flex flex-col justify-between gap-7 sm:flex-row sm:items-end">
              <p className="max-w-[55ch] text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 dark:text-slate-400">
                Each nation has its own landscapes, traditions and stories.
                Explore four distinctive corners of the United Kingdom and
                find the places that make each one unforgettable.
              </p>

              <div className="flex shrink-0 items-center gap-3">
                {regions.map((r) => (
                  <span
                    key={r.name}
                    title={r.name}
                    className={`
                      h-2.5 w-10 rounded-full
                      ${regionStyle[r.name].bg}
                    `}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Nation navigation */}
      <section className="mx-auto max-w-[1200px] px-5 py-12 lg:px-8">
        <div className="mb-6 flex items-center justify-between">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
            Choose your journey
          </p>

          <span className="text-xs text-slate-400">
            {regions.length} nations
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {regions.map((r, index) => {
            const style = regionStyle[r.name];
            const count = places.filter(
              (p) => p.region === r.name
            ).length;

            return (
              <a
                key={r.name}
                href={`#${r.name.toLowerCase().replaceAll(" ", "-")}`}
                className={`
                  group relative overflow-hidden
                  rounded-2xl p-5
                  text-white
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                  ${style.bg}
                `}
              >
                <span className="text-[10px] font-bold tracking-[0.2em] text-white/60">
                  {nationNumbers[index]}
                </span>

                <h2 className="mt-5 font-display text-xl font-extrabold sm:text-2xl">
                  {r.name}
                </h2>

                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs text-white/75">
                    {count} places
                  </span>

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* Individual nation sections */}
      <div className="mx-auto max-w-[1200px] px-5 pb-20 lg:px-8">
        {regions.map((r, index) => {
          const nationPlaces = places.filter(
            (p) => p.region === r.name
          );

          const style = regionStyle[r.name];

          return (
            <motion.section
              key={r.name}
              id={r.name.toLowerCase().replaceAll(" ", "-")}
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
                margin: "-70px",
              }}
              className="
                scroll-mt-24
                border-t border-slate-200
                py-14
                sm:py-20
                dark:border-slate-800
              "
            >
              {/* Nation heading */}
              <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
                <div>
                  <div className="flex items-center gap-3">
                    <span
                      className={`h-2.5 w-2.5 rounded-full ${style.bg}`}
                    />

                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                      Nation {nationNumbers[index]}
                    </span>
                  </div>

                  <h2 className="mt-5 font-display text-4xl font-extrabold tracking-tight text-slate-950 sm:text-6xl dark:text-white">
                    {r.name}
                    <span
                      className={`
                        ml-2 inline-block
                        h-3 w-3 rounded-full
                        align-middle
                        ${style.bg}
                      `}
                    />
                  </h2>

                  <p className="mt-3 text-sm font-medium text-slate-500 dark:text-slate-400">
                    {nationPlaces.length} destinations to discover
                  </p>
                </div>

                <div>
                  <p className="max-w-[60ch] text-base leading-8 text-slate-600 dark:text-slate-400">
                    {nationIntro[r.name] || r.blurb}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {(nationHighlights[r.name] || []).map((highlight) => (
                      <span
                        key={highlight}
                        className="
                          rounded-full
                          border border-slate-200
                          px-3 py-1.5
                          text-[10px] font-semibold
                          text-slate-600
                          dark:border-slate-800
                          dark:text-slate-400
                        "
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Destination cards */}
              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {nationPlaces.map((p) => (
                  <PlaceCard key={p.slug} place={p} />
                ))}
              </div>

              {/* Nation footer */}
              <div className="mt-8 flex items-center justify-between">
                <span className="text-xs text-slate-400">
                  {nationPlaces.length} places in {r.name}
                </span>

                <Link
                  to="/places"
                  className="
                    inline-flex items-center gap-2
                    text-xs font-bold
                    text-slate-700
                    transition-all duration-300
                    hover:translate-x-1
                    dark:text-slate-300
                  "
                >
                  View all destinations
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </motion.section>
          );
        })}
      </div>

      {/* Closing section */}
      <section className="px-5 pb-20">
        <div className="mx-auto max-w-[1200px] overflow-hidden rounded-[1.75rem] bg-slate-950 px-7 py-10 text-white sm:px-12 sm:py-14 dark:bg-slate-900">
          <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-center">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/45">
                Your next destination awaits
              </p>

              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
                The UK is yours to explore.
              </h2>

              <p className="mt-3 max-w-[48ch] text-sm leading-7 text-slate-300">
                Find a place that speaks to you, start planning and see where
                the journey takes you.
              </p>
            </div>

            <Link
              to="/places"
              className="
                inline-flex shrink-0
                items-center justify-center gap-3
                rounded-full bg-white
                px-6 py-3.5
                text-sm font-bold text-slate-950
                transition-all duration-300
                hover:-translate-y-1
                hover:bg-slate-200
                active:scale-95
              "
            >
              Browse all places
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}