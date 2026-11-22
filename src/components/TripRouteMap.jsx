
import { Link } from "react-router-dom";
import { regionStyle } from "../data/theme.js";

const locations = {
  orkney: [47, 5],
  "isle-of-skye": [37, 19],
  cairngorms: [55, 22],
  "loch-ness": [43, 25],
  glencoe: [39, 32],
  "edinburgh-castle": [59, 35],
  "st-andrews": [66, 31],
  glasgow: [47, 38],
  "giants-causeway": [15, 39],
  "titanic-belfast": [20, 47],
  "mourne-mountains": [22, 54],
  "lake-district": [43, 46],
  "hadrians-wall": [57, 43],
  york: [66, 49],
  "conwy-castle": [33, 51],
  "peak-district": [54, 56],
  "albert-dock": [41, 56],
  snowdonia: [32, 59],
  cotswolds: [48, 65],
  cambridge: [70, 66],
  oxford: [56, 69],
  "brecon-beacons": [35, 73],
  "gower-peninsula": [27, 76],
  "pembrokeshire-coast": [22, 79],
  "tower-of-london": [68, 75],
  bath: [45, 77],
  stonehenge: [42, 81],
  "jurassic-coast": [57, 86],
  "seven-sisters": [72, 81],
  "st-ives": [22, 92],
};

export default function TripRouteMap({ places }) {
  const routePlaces = places.filter((place) => locations[place.slug]);

  const routePoints = routePlaces
    .map((place) => {
      const [x, y] = locations[place.slug];
      return `${(x / 100) * 420},${(y / 100) * 520}`;
    })
    .join(" ");

  return (
    <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
      <div className="flex flex-wrap items-end justify-between gap-3 border-b border-slate-200 px-6 py-5 dark:border-slate-800">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700 dark:text-teal-400">
            Your route
          </p>
          <h3 className="mt-2 font-display text-2xl font-bold text-slate-950 dark:text-white">
            Your journey on the map.
          </h3>
        </div>

        <p className="text-sm text-slate-500 dark:text-slate-400">
          {routePlaces.length} mapped stops
        </p>
      </div>

      <div className="grid gap-6 p-4 sm:p-6 lg:grid-cols-[minmax(0,1fr)_240px]">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-[560px] overflow-hidden rounded-2xl bg-[#e9f0ef] dark:bg-[#172b32]">
          <div
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
            aria-label="Map showing the order of your trip destinations"
            role="img"
          >
            {/* Ireland */}
            <path
              d="M67 190 L82 174 105 179 119 195 114 216 125 235 116 260 122 281 110 302 113 326 98 344 82 337 72 316 61 300 57 278 49 260 53 237 47 219 55 200 Z"
              fill="#c8d8ce"
              stroke="#a9c1b2"
              strokeWidth="1.5"
            />

            {/* Great Britain */}
            <path
              d="M220 28 L237 34 248 49 244 65 257 79 252 96 266 110 257 128 270 143 263 159 275 176 267 194 280 210 270 226 281 242 269 260 279 276 266 294 272 310 258 327 265 343 251 360 259 376 247 393 249 408 232 420 225 438 209 450 196 440 185 425 177 408 161 394 158 377 147 360 152 342 141 324 151 307 142 290 153 274 147 257 160 241 155 223 169 206 164 188 177 172 173 153 187 137 183 119 197 104 194 86 207 70 202 52 Z"
              fill="#c8d8ce"
              stroke="#a9c1b2"
              strokeWidth="1.5"
            />

            {/* Northern Scotland */}
            <path
              d="M197 105 L183 87 188 65 204 48 220 28 231 16 246 23 248 41 239 56 244 72 230 91 218 108 Z"
              fill="#c8d8ce"
              stroke="#a9c1b2"
              strokeWidth="1.5"
            />

            <path
              d="M155 70 l-8 -8 3 -14 10 5 3 10 Z"
              fill="#c8d8ce"
            />
            <path
              d="M128 126 l-7 -7 3 -11 8 4 2 8 Z"
              fill="#c8d8ce"
            />

            {/* Route line */}
            {routePlaces.length > 1 && (
              <>
                <polyline
                  points={routePoints}
                  fill="none"
                  stroke="#0f766e"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.25"
                />
                <polyline
                  points={routePoints}
                  fill="none"
                  stroke="#0f766e"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="7 7"
                />
              </>
            )}
          </svg>

          {/* Numbered destination markers */}
          {routePlaces.map((place, index) => {
            const [x, y] = locations[place.slug];
            const style = regionStyle[place.region];

            return (
              <Link
                key={place.slug}
                to={`/places/${place.slug}`}
                title={`${index + 1}. ${place.name}`}
                aria-label={`Stop ${index + 1}: ${place.name}. Open destination guide`}
                className="group absolute z-10 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[3px] border-white text-xs font-extrabold text-white shadow-lg transition hover:z-20 hover:scale-125 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-teal-400/50 dark:border-slate-950"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  backgroundColor: style.hex,
                }}
              >
                {index + 1}
                <span className="pointer-events-none absolute bottom-full left-1/2 mb-2 hidden -translate-x-1/2 whitespace-nowrap rounded-lg bg-slate-950 px-3 py-2 text-[10px] font-semibold text-white shadow-xl group-hover:block group-focus-visible:block">
                  {place.name}
                </span>
              </Link>
            );
          })}

          <span className="absolute bottom-3 left-3 text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500/70 dark:text-slate-300/60">
            United Kingdom & Ireland
          </span>
        </div>

        {/* Route stop list */}
        <aside>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
            Stops in order
          </p>

          <ol className="mt-4 space-y-3">
            {routePlaces.map((place, index) => (
              <li key={place.slug}>
                <Link
                  to={`/places/${place.slug}`}
                  className="group flex items-center gap-3 rounded-xl p-2 transition hover:bg-slate-50 dark:hover:bg-slate-800"
                >
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-extrabold text-white"
                    style={{
                      backgroundColor: regionStyle[place.region].hex,
                    }}
                  >
                    {index + 1}
                  </span>

                  <span className="min-w-0">
                    <span className="block truncate text-sm font-bold text-slate-800 group-hover:text-teal-700 dark:text-slate-100 dark:group-hover:text-teal-400">
                      {place.name}
                    </span>
                    <span className="block truncate text-xs text-slate-500 dark:text-slate-400">
                      {place.region}
                    </span>
                  </span>

                  <span className="ml-auto text-slate-400 transition group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ol>

          {routePlaces.length === 0 && (
            <p className="mt-4 text-sm leading-6 text-slate-500 dark:text-slate-400">
              Add destinations to see your route here.
            </p>
          )}

          <p className="mt-5 rounded-xl bg-teal-50 p-4 text-xs leading-5 text-teal-900 dark:bg-teal-950/50 dark:text-teal-200">
            Your numbered route follows the order of your itinerary. Use the
            arrows on your stops to change the route.
          </p>
        </aside>
      </div>
    </section>
  );
}
