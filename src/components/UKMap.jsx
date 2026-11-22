
import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { regionStyle } from "../data/theme.js";

const locations = {
  "orkney": [47, 5],
  "isle-of-skye": [37, 19],
  "cairngorms": [55, 22],
  "loch-ness": [43, 25],
  "glencoe": [39, 32],
  "edinburgh-castle": [59, 35],
  "st-andrews": [66, 31],
  "glasgow": [47, 38],
  "giants-causeway": [15, 39],
  "titanic-belfast": [20, 47],
  "mourne-mountains": [22, 54],
  "lake-district": [43, 46],
  "hadrians-wall": [57, 43],
  "york": [66, 49],
  "conwy-castle": [33, 51],
  "peak-district": [54, 56],
  "albert-dock": [41, 56],
  "snowdonia": [32, 59],
  "cotswolds": [48, 65],
  "cambridge": [70, 66],
  "oxford": [56, 69],
  "brecon-beacons": [35, 73],
  "gower-peninsula": [27, 76],
  "pembrokeshire-coast": [22, 79],
  "tower-of-london": [68, 75],
  "bath": [45, 77],
  "stonehenge": [42, 81],
  "jurassic-coast": [57, 86],
  "seven-sisters": [72, 81],
  "st-ives": [22, 92],
};

const nations = ["England", "Scotland", "Wales", "Northern Ireland"];

export default function UKMap({ places }) {
  const [selectedSlug, setSelectedSlug] = useState(null);

  const visiblePlaces = places.filter((place) => locations[place.slug]);
  const selectedPlace = visiblePlaces.find(
    (place) => place.slug === selectedSlug
  );

  return (
    <section className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/60">
      <div className="flex flex-col gap-3 border-b border-slate-200 px-6 py-5 sm:flex-row sm:items-end sm:justify-between dark:border-slate-800">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
            Find your way around
          </p>
          <h2 className="mt-2 font-display text-2xl font-extrabold tracking-tight text-slate-950 dark:text-white">
            Explore by map.
          </h2>
        </div>

        <p className="text-sm text-slate-500 dark:text-slate-400">
          {visiblePlaces.length} destinations on the map
        </p>
      </div>

      <div className="grid gap-5 p-4 sm:p-6 lg:grid-cols-[1fr_240px]">
        {/* Map */}
        <div className="relative mx-auto aspect-[4/5] w-full max-w-[560px] overflow-hidden rounded-2xl bg-[#e9f0ef] dark:bg-[#172b32]">
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-50 dark:opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(#94a3b8 0.7px, transparent 0.7px)",
              backgroundSize: "14px 14px",
            }}
          />

          <svg
            viewBox="0 0 420 520"
            className="absolute inset-0 h-full w-full"
            role="img"
            aria-label="Stylised map of the United Kingdom and Ireland"
          >
            <defs>
              <filter
                id="land-shadow"
                x="-20%"
                y="-20%"
                width="140%"
                height="140%"
              >
                <feDropShadow
                  dx="0"
                  dy="3"
                  stdDeviation="4"
                  floodOpacity=".12"
                />
              </filter>
            </defs>

            {/* Ireland */}
            <path
              d="M67 190 L82 174 105 179 119 195 114 216 125 235 116 260 122 281 110 302 113 326 98 344 82 337 72 316 61 300 57 278 49 260 53 237 47 219 55 200 Z"
              fill="#c8d8ce"
              stroke="#a9c1b2"
              strokeWidth="1.5"
              filter="url(#land-shadow)"
            />

            {/* Great Britain */}
            <path
              d="M220 28 L237 34 248 49 244 65 257 79 252 96 266 110 257 128 270 143 263 159 275 176 267 194 280 210 270 226 281 242 269 260 279 276 266 294 272 310 258 327 265 343 251 360 259 376 247 393 249 408 232 420 225 438 209 450 196 440 185 425 177 408 161 394 158 377 147 360 152 342 141 324 151 307 142 290 153 274 147 257 160 241 155 223 169 206 164 188 177 172 173 153 187 137 183 119 197 104 194 86 207 70 202 52 Z"
              fill="#c8d8ce"
              stroke="#a9c1b2"
              strokeWidth="1.5"
              filter="url(#land-shadow)"
            />

            {/* Northern Scotland and island hints */}
            <path
              d="M197 105 L183 87 188 65 204 48 220 28 231 16 246 23 248 41 239 56 244 72 230 91 218 108 Z"
              fill="#c8d8ce"
              stroke="#a9c1b2"
              strokeWidth="1.5"
            />
            <path d="M155 70 l-8 -8 3 -14 10 5 3 10 Z" fill="#c8d8ce" />
            <path d="M128 126 l-7 -7 3 -11 8 4 2 8 Z" fill="#c8d8ce" />
          </svg>

          {/* Destination markers */}
          {visiblePlaces.map((place) => {
            const [x, y] = locations[place.slug];
            const style = regionStyle[place.region];
            const active = selectedSlug === place.slug;

            return (
              <button
                key={place.slug}
                type="button"
                onClick={() =>
                  setSelectedSlug(active ? null : place.slug)
                }
                aria-label={`Show preview for ${place.name}`}
                aria-pressed={active}
                title={place.name}
                className="group absolute z-10 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full p-2 outline-none focus-visible:ring-2 focus-visible:ring-slate-950 dark:focus-visible:ring-white"
                style={{ left: `${x}%`, top: `${y}%` }}
              >
                <span
                  className={`absolute h-7 w-7 rounded-full ${style.bg} opacity-20 transition-transform duration-200 group-hover:scale-[1.8] ${
                    active ? "scale-[1.9] opacity-40" : ""
                  }`}
                />
                <span
                  className={`relative h-3 w-3 rounded-full border-2 border-white shadow-md transition-all duration-200 dark:border-slate-950 ${style.bg} ${
                    active ? "scale-150 ring-2 ring-white dark:ring-slate-950" : "group-hover:scale-150"
                  }`}
                />
                <span className="pointer-events-none absolute bottom-full left-1/2 mb-2 hidden -translate-x-1/2 whitespace-nowrap rounded-md bg-slate-950 px-2.5 py-1.5 text-[10px] font-semibold text-white shadow-lg group-hover:block group-focus-visible:block">
                  {place.name}
                </span>
              </button>
            );
          })}

          <span className="absolute bottom-3 left-3 text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500/70 dark:text-slate-300/60">
            United Kingdom & Ireland
          </span>
        </div>

        {/* Nation information and selected preview */}
        <aside className="flex min-w-0 flex-col gap-4">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
              The four nations
            </p>

            <div className="mt-3 space-y-2">
              {nations.map((nation) => {
                const count = visiblePlaces.filter(
                  (place) => place.region === nation
                ).length;

                return (
                  <div
                    key={nation}
                    className="flex items-center justify-between rounded-xl bg-white px-3 py-3 dark:bg-slate-950"
                  >
                    <span className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-200">
                      <span
                        className={`h-2.5 w-2.5 rounded-full ${regionStyle[nation].bg}`}
                      />
                      {nation}
                    </span>
                    <span className="text-xs tabular-nums text-slate-400">
                      {count}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <AnimatePresence mode="wait">
            {selectedPlace ? (
              <motion.div
                key={selectedPlace.slug}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-950"
              >
                <div className="relative h-32 overflow-hidden bg-slate-200 dark:bg-slate-800">
                  {selectedPlace.images?.card ? (
                    <img
                      src={selectedPlace.images.card}
                      alt={selectedPlace.name}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="grid h-full place-items-center font-display text-5xl font-extrabold text-slate-400">
                      {selectedPlace.name[0]}
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={() => setSelectedSlug(null)}
                    aria-label="Close destination preview"
                    className="absolute right-2 top-2 grid h-8 w-8 place-items-center rounded-full bg-black/55 text-lg text-white backdrop-blur transition hover:bg-black/75"
                  >
                    ×
                  </button>
                </div>

                <div className="p-4">
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                    {selectedPlace.region} · {selectedPlace.area}
                  </p>

                  <h3 className="mt-1 font-display text-xl font-extrabold leading-tight text-slate-950 dark:text-white">
                    {selectedPlace.name}
                  </h3>

                  <p className="mt-2 line-clamp-3 text-xs leading-5 text-slate-500 dark:text-slate-400">
                    {selectedPlace.summary}
                  </p>

                  <Link
                    to={`/places/${selectedPlace.slug}`}
                    className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-4 py-3 text-xs font-bold text-white transition hover:-translate-y-0.5 hover:bg-slate-700 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
                  >
                    Explore destination
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="map-tip"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="mt-auto rounded-xl border border-slate-200/80 p-4 dark:border-slate-700"
              >
                <p className="text-xs font-semibold text-slate-800 dark:text-white">
                  Pick a destination
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
                  Select any coloured marker to preview its photo and details.
                  You can then open its full destination guide.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </aside>
      </div>
    </section>
  );
}
