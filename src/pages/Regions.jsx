import { Link } from "react-router-dom";
import { places, regions } from "../data/places.js";

export default function Regions() {
  return (
    <section className="wrap page">
      <h1>Regions</h1>
      {regions.map((r) => (
        <div key={r.name} className="region" data-region={r.name}>
          <h2>{r.name}</h2>
          <p>{r.blurb}</p>
          <ul className="region-list">
            {places.filter((p) => p.region === r.name).map((p) => (
              <li key={p.slug}><Link to={`/places/${p.slug}`}>{p.name}</Link></li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
