
import { Link } from "react-router-dom";
import { regionStyle } from "../data/theme.js";
import FavoriteButton from "./FavoriteButton.jsx";

export default function PlaceCard({ place }) {
  const r = regionStyle[place.region];

  return (
    <Link
      to={`/places/${place.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
    >
      <div className="relative h-48 overflow-hidden">
        {place.images?.card ? (
          <img
            src={place.images.card}
            alt={place.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div
            className={`grid h-full w-full place-items-center ${r.bg} transition-transform duration-500 group-hover:scale-105`}
          >
            <span
              aria-hidden="true"
              className="select-none font-display text-8xl font-extrabold text-white/25"
            >
              {place.name[0]}
            </span>
          </div>
        )}

        <span className="absolute left-3 top-3 rounded-full bg-black/55 px-3 py-1 text-xs font-medium text-white backdrop-blur">
          {place.type}
        </span>

        <FavoriteButton
          slug={place.slug}
          className="absolute right-3 top-3 border-white/40 bg-black/35 shadow-lg"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className={`text-sm font-semibold ${r.text}`}>
          {place.region}, {place.area}
        </p>

        <h3 className="mt-1 font-display text-xl font-bold leading-tight">
          {place.name}
        </h3>

        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          {place.summary}
        </p>
      </div>

      <span
        className={`h-1 w-full origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${r.bg}`}
      />
    </Link>
  );
}
