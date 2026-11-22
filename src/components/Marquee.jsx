import { Link } from "react-router-dom";
import { places } from "../data/places.js";
import { regionStyle } from "../data/theme.js";

function Row({ hidden }) {
  return (
    <ul className="flex shrink-0 gap-10 pr-10" aria-hidden={hidden || undefined}>
      {places.map((p) => (
        <li key={p.slug}>
          <Link
            to={`/places/${p.slug}`}
            tabIndex={hidden ? -1 : undefined}
            className="flex items-center gap-3 whitespace-nowrap font-display text-2xl font-bold text-slate-400 transition-colors hover:text-slate-900 dark:text-slate-600 dark:hover:text-white"
          >
            <span className={`h-2.5 w-2.5 rounded-full ${regionStyle[p.region].bg}`} />
            {p.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function Marquee() {
  return (
    <div className="mt-16 overflow-hidden border-y border-slate-200 py-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] dark:border-slate-800">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] motion-reduce:animate-none">
        <Row />
        <Row hidden />
      </div>
    </div>
  );
}