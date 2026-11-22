import { useState } from "react";
import PlaceCard from "../components/PlaceCard.jsx";
import { places, regions } from "../data/places.js";

export default function Places() {
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("All");

  const q = query.trim().toLowerCase();
  const shown = places.filter(
    (p) =>
      (region === "All" || p.region === region) &&
      (!q || `${p.name} ${p.area} ${p.type}`.toLowerCase().includes(q))
  );

  const reset = () => { setQuery(""); setRegion("All"); };

  return (
    <section className="wrap page">
      <h1>All places</h1>
      <div className="filters">
        <label className="visually-hidden" htmlFor="search">Search places</label>
        <input id="search" type="search" placeholder="Search by name, area or type" value={query} onChange={(e) => setQuery(e.target.value)} />
        <div className="chips">
          {["All", ...regions.map((r) => r.name)].map((r) => (
            <button key={r} className={`chip ${region === r ? "active" : ""}`} data-region={r} aria-pressed={region === r} onClick={() => setRegion(r)}>{r}</button>
          ))}
        </div>
      </div>

      <p className="count">Showing {shown.length} of {places.length} places</p>

      {shown.length ? (
        <div className="grid">{shown.map((p) => <PlaceCard key={p.slug} place={p} />)}</div>
      ) : (
        <div className="empty">
          <p>No places match your search. Clear the search or pick another region.</p>
          <button className="btn" onClick={reset}>Clear filters</button>
        </div>
      )}
    </section>
  );
}
