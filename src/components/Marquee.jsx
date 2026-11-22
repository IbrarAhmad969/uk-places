import { Link } from "react-router-dom";
import { places } from "../data/places.js";
import { regionStyle } from "../data/theme.js";

function Row({ hidden = false }) {
  return (
    <ul
      className="
        flex shrink-0
        items-center
        gap-8
        pr-8
        sm:gap-12
        sm:pr-12
      "
      aria-hidden={hidden || undefined}
    >
      {places.map((p) => (
        <li key={p.slug}>
          <Link
            to={`/places/${p.slug}`}
            tabIndex={hidden ? -1 : undefined}
            className="
              group flex
              items-center gap-3
              whitespace-nowrap
              font-display
              text-[1.35rem]
              font-extrabold
              tracking-tight
              text-slate-400
              transition-all duration-300
              hover:text-slate-950
              dark:text-slate-600
              dark:hover:text-white
              sm:text-2xl
            "
          >
            {/* Region marker */}
            <span
              aria-hidden="true"
              className={`
                h-2 w-2
                rounded-full
                transition-all duration-300
                group-hover:scale-150
                ${regionStyle[p.region].bg}
              `}
            />

            {p.name}

            {/* Subtle hover arrow */}
            <span
              aria-hidden="true"
              className="
                -ml-1
                text-sm
                opacity-0
                transition-all duration-300
                group-hover:translate-x-1
                group-hover:opacity-60
              "
            >
              →
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function Marquee() {
  return (
    <section
      aria-label="Explore places"
      className="
        relative
        mt-16
        overflow-hidden
        border-y
        border-slate-200/80
        bg-white/40
        py-5
        dark:border-slate-800/80
        dark:bg-slate-950/30
      "
    >
      {/* Top editorial label */}
      <div
        className="
          pointer-events-none
          absolute left-5 top-1/2 z-10
          hidden -translate-y-1/2
          items-center gap-3
          xl:flex
        "
      >
        <span
          className="
            rounded-full
            border border-slate-200
            bg-white/90
            px-3 py-1.5
            text-[9px]
            font-bold uppercase
            tracking-[0.2em]
            text-slate-500
            shadow-sm
            backdrop-blur
            dark:border-slate-800
            dark:bg-slate-950/90
            dark:text-slate-500
          "
        >
          Places to know
        </span>
      </div>

      {/* Fade edges */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-y-0 left-0 z-10
          w-20
          bg-gradient-to-r
          from-white
          to-transparent
          dark:from-slate-950
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-y-0 right-0 z-10
          w-20
          bg-gradient-to-l
          from-white
          to-transparent
          dark:from-slate-950
        "
      />

      {/* Moving track */}
      <div
        className="
          flex w-max
          animate-marquee
          hover:[animation-play-state:paused]
          motion-reduce:animate-none
        "
      >
        <Row />
        <Row hidden />
      </div>
    </section>
  );
}