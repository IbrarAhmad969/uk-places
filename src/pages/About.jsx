import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="wrap page prose">
      <h1>About this site</h1>
      <p>This is a small guide to thirty of the best places in the UK, covering England, Scotland, Wales and Northern Ireland. Each place has a short summary, the best time to go and a few things to do.</p>
      <p>The list is a starting point, not a ranking. Your own top 30 will look different, and that's the point of travelling.</p>
      <h2>Add or change places</h2>
      <p>All the content lives in <code>src/data/places.js</code>. Edit an entry, or add an <code>image</code> link to show a photo on its card and page.</p>
      <Link to="/places" className="btn">See all places</Link>
    </section>
  );
}
