
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import useTheme from "../hooks/useTheme.js";
import { useTravel } from "../context/TravelContext.jsx";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/places", label: "All places" },
  { to: "/regions", label: "Regions" },
  { to: "/about", label: "About" },
];

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" width="21" height="21" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round"
      aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" width="21" height="21" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round"
      strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" fill="none"
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
      strokeLinejoin="round" aria-hidden="true">
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />
    </svg>
  );
}

function TripIcon() {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" fill="none"
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
      strokeLinejoin="round" aria-hidden="true">
      <path d="M12 21s7-5.5 7-12a7 7 0 0 0-14 0c0 6.5 7 12 7 12Z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

function ThemeToggle({ theme, onToggle }) {
  const next = theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={`Switch to ${next} theme`}
      title={`Switch to ${next} theme`}
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ rotate: -45, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 45, opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="flex items-center justify-center"
        >
          {theme === "dark" ? <SunIcon /> : <MoonIcon />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}

function TravelListLink({ count, mobile = false, onClick }) {
  return (
    <NavLink
      to="/my-travel-list"
      onClick={onClick}
      className={({ isActive }) =>
        mobile
          ? `flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-semibold transition-colors ${
              isActive
                ? "bg-rose-50 text-rose-800 dark:bg-rose-950 dark:text-rose-200"
                : "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
            }`
          : `relative flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              isActive
                ? "bg-rose-50 text-rose-800 dark:bg-rose-950 dark:text-rose-200"
                : "text-slate-600 hover:bg-slate-50 hover:text-rose-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-rose-300"
            }`
      }
    >
      <span className="flex items-center gap-2">
        <HeartIcon />
        My Travel List
      </span>

      <span className="flex min-w-5 items-center justify-center rounded-full bg-rose-100 px-1.5 py-0.5 text-[11px] font-bold text-rose-700 dark:bg-rose-400/15 dark:text-rose-300">
        {count}
      </span>
    </NavLink>
  );
}

function MyTripLink({ count, mobile = false, onClick }) {
  return (
    <NavLink
      to="/my-trip"
      onClick={onClick}
      className={({ isActive }) =>
        mobile
          ? `flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-semibold transition-colors ${
              isActive
                ? "bg-teal-50 text-teal-900 dark:bg-teal-950 dark:text-teal-200"
                : "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
            }`
          : `relative flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              isActive
                ? "bg-teal-50 text-teal-900 dark:bg-teal-950 dark:text-teal-200"
                : "text-slate-600 hover:bg-slate-50 hover:text-teal-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-teal-300"
            }`
      }
    >
      <span className="flex items-center gap-2">
        <TripIcon />
        My Trip
      </span>

      <span className="flex min-w-5 items-center justify-center rounded-full bg-teal-100 px-1.5 py-0.5 text-[11px] font-bold text-teal-800 dark:bg-teal-400/15 dark:text-teal-300">
        {count}
      </span>
    </NavLink>
  );
}

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const { favorites, trip } = useTravel();
  const [open, setOpen] = useState(false);

  const desktopLinkClass = ({ isActive }) =>
    `relative rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
      isActive
        ? "bg-slate-100 text-slate-950 dark:bg-slate-800 dark:text-white"
        : "text-slate-600 hover:bg-slate-50 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
    }`;

  const mobileLinkClass = ({ isActive }) =>
    `block rounded-xl px-4 py-3.5 text-base font-semibold transition-colors ${
      isActive
        ? "bg-teal-50 text-teal-900 dark:bg-teal-950 dark:text-teal-200"
        : "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
    }`;

  return (
    <header className="sticky top-0 z-[100] isolate w-full border-b border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto flex min-h-[68px] w-full max-w-[1240px] items-center justify-between gap-3 px-4 sm:px-6">
        {/* Brand */}
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="flex shrink-0 items-center gap-2.5 font-display text-xl font-extrabold tracking-tight text-slate-950 dark:text-white"
        >
          <span className="flex h-5 overflow-hidden rounded-sm" aria-hidden="true">
            <span className="w-1.5 bg-[#1e6f78]" />
            <span className="w-1.5 bg-[#6b4e8a]" />
            <span className="w-1.5 bg-[#b23a48]" />
            <span className="w-1.5 bg-[#3f7d4e]" />
          </span>
          UK Places
        </Link>

        {/* Desktop links */}
        <nav aria-label="Main navigation" className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={desktopLinkClass}
            >
              {link.label}
            </NavLink>
          ))}

          <TravelListLink count={favorites.length} />
          <MyTripLink count={trip.stops.length} />
        </nav>

        {/* Right-side controls */}
        <div className="flex shrink-0 items-center gap-2">
          <ThemeToggle theme={theme} onToggle={toggle} />

          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            className="flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-[5px] rounded-full border border-slate-300 bg-white text-slate-800 shadow-sm transition-colors hover:bg-slate-100 md:hidden dark:border-slate-600 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
          >
            <span className={`block h-[2px] w-[18px] rounded-full bg-current transition-transform duration-200 ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
            <span className={`block h-[2px] w-[18px] rounded-full bg-current transition-opacity duration-200 ${open ? "opacity-0" : "opacity-100"}`} />
            <span className={`block h-[2px] w-[18px] rounded-full bg-current transition-transform duration-200 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id="mobile-navigation"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="overflow-hidden border-t border-slate-200 bg-white md:hidden dark:border-slate-800 dark:bg-slate-950"
          >
            <nav
              aria-label="Mobile navigation"
              className="mx-auto flex w-full max-w-[1240px] flex-col gap-1 px-4 py-3 sm:px-6"
            >
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.end}
                  onClick={() => setOpen(false)}
                  className={mobileLinkClass}
                >
                  {link.label}
                </NavLink>
              ))}

              <TravelListLink
                count={favorites.length}
                mobile
                onClick={() => setOpen(false)}
              />

              <MyTripLink
                count={trip.stops.length}
                mobile
                onClick={() => setOpen(false)}
              />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
