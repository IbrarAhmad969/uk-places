import { Link, useParams } from "react-router-dom";
import { getPlace } from "../data/places.js";

export default function PlaceDetails() {
  const { slug } = useParams();
  const place = getPlace(slug);

  if (!place) {
    return (
      <section className="wrap page">
        <h1>Place not found</h1>
        <p>We couldn't find that place. Try the full list instead.</p>
        <Link to="/places" className="btn">Back to all places</Link>
      </section>
    );
  }

  return (
    <article className="detail" data-region={place.region}>
      <div className="detail-head">
        {place.image && <img src={place.image} alt={place.name} />}
        <div className="wrap">
          <Link to="/places" className="back">Back to all places</Link>
          <p className="card-meta">{place.region}, {place.area}</p>
          <h1>{place.name}</h1>
          <p className="lead">{place.summary}</p>
        </div>
      </div>

      <div className="wrap page detail-body">
        <dl className="facts">
          <div><dt>Type</dt><dd>{place.type}</dd></div>
          <div><dt>Best time to visit</dt><dd>{place.bestTime}</dd></div>
          <div><dt>Where</dt><dd>{place.area}</dd></div>
        </dl>
        <h2>What to do</h2>
        <ul className="highlights">
          {place.highlights.map((h) => <li key={h}>{h}</li>)}
        </ul>
      </div>
    </article>
  );
}
