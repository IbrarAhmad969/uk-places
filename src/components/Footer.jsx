import { Link } from "react-router-dom";

const footerLinks = [
  { label: "Home", to: "/" },
  { label: "Explore places", to: "/places" },
  { label: "The nations", to: "/regions" },
  { label: "Our story", to: "/about" },
];

export default function Footer() {
  return (
    <footer className="bg-[#172b28] text-[#f5f1e8]">
      <div className="wrap">
        {/* Main footer */}
        <div className="grid gap-14 py-16 md:grid-cols-[1.4fr_0.6fr] md:py-20">
          <div className="max-w-xl">
            <Link to="/" className="inline-block">
              <span className="text-3xl font-semibold tracking-tight">
                UK<span className="text-[#d5b982]"> Places.</span>
              </span>
            </Link>

            <p className="mt-6 max-w-md text-base leading-relaxed text-white/60">
              Thirty places worth crossing the country for. Discover
              extraordinary landscapes, characterful towns and the stories
              that make the UK worth exploring.
            </p>

            <p className="mt-8 text-xs font-bold uppercase tracking-[0.22em] text-[#d5b982]">
              England · Scotland · Wales · Northern Ireland
            </p>
          </div>

          <div>
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.22em] text-[#d5b982]">
              Explore
            </p>

            <nav className="flex flex-col items-start gap-4">
              {footerLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-base text-white/70 transition hover:translate-x-1 hover:text-white"
                >
                  {link.label}
                  <span className="ml-2 text-[#d5b982]">↗</span>
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 border-t border-white/15 py-7 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} UK Places. Made for the love of
            exploring.
          </p>

          <a
            href="#top"
            className="transition hover:text-white"
            onClick={(event) => {
              event.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}