
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";

import Hero from "../components/Hero.jsx";
import NationStrip from "../components/NationStrip.jsx";
import Marquee from "../components/Marquee.jsx";
import PlaceCard from "../components/PlaceCard.jsx";

import { places } from "../data/places.js";
import { regionStyle } from "../data/theme.js";
import { useTravel } from "../context/TravelContext.jsx";

const list = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.96,
    filter: "blur(6px)",
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const sectionReveal = {
  hidden: { opacity: 0, y: 35 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const experienceDescriptions = {
  Nature: "Find wild landscapes, open spaces and unforgettable views.",
  History: "Step into centuries of stories, heritage and remarkable places.",
  Coast: "Discover dramatic cliffs, beautiful beaches and seaside escapes.",
  Coastal: "Discover dramatic cliffs, beautiful beaches and seaside escapes.",
  City: "Explore culture, architecture and the character of Britain's cities.",
  Adventure: "Find somewhere new to explore, walk and discover.",
  Heritage: "Explore historic streets, castles and timeless landmarks.",
};

const experienceIcons = {
  Nature: "✳",
  History: "⌛",
  Coast: "≈",
  Coastal: "≈",
  City: "▦",
  Adventure: "↗",
  Heritage: "◇",
};

export default function Home() {
  const featured = places.filter((p) => p.featured);
  const { recentPlaces } = useTravel();

  const [surprisePlace, setSurprisePlace] = useState(null);
  const [surpriseLabel, setSurpriseLabel] = useState("Your next adventure");
  const [surpriseKey, setSurpriseKey] = useState(0);

  const experienceTypes = [...new Set(places.map((p) => p.type))]
    .slice(0, 6);

  function pickSurprise(pool = places, label = "Your next adventure") {
    if (!pool.length) return;

    const choices =
      pool.length > 1 && surprisePlace
        ? pool.filter((p) => p.slug !== surprisePlace.slug)
        : pool;

    const selected = choices[Math.floor(Math.random() * choices.length)];

    setSurprisePlace(selected);
    setSurpriseLabel(label);
    setSurpriseKey((current) => current + 1);
  }

  return (
    <>
      {/* HERO */}
      <Hero />

      {/* NATIONS */}
      <NationStrip />

      {/* MOVING UK PLACES STRIP */}
      <Marquee />

      {/* SURPRISE ME */}
      <section className="overflow-hidden bg-[#f7f6f2] px-5 py-20 text-slate-950 dark:bg-[#111b19] dark:text-white sm:py-24">
        <div className="mx-auto max-w-[1200px]">
          <motion.div
            variants={sectionReveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-teal-700 dark:text-teal-400">
                A little inspiration
              </p>

              <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
                Somewhere unexpected.
              </h2>

              <p className="mt-4 max-w-[55ch] leading-7 text-slate-600 dark:text-slate-400">
                Not sure where to go next? Let us pick somewhere worth
                discovering. Your next favourite place might be one click away.
              </p>
            </div>

            <button
              type="button"
              onClick={() => pickSurprise()}
              className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-slate-950 px-7 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-teal-800 hover:shadow-xl active:scale-95 dark:bg-white dark:text-slate-950 dark:hover:bg-teal-200"
            >
              <span className="text-xl transition-transform duration-500 group-hover:rotate-180">
                ✳
              </span>
              Surprise me
              <span aria-hidden="true">→</span>
            </button>
          </motion.div>

          <AnimatePresence mode="wait">
            {surprisePlace ? (
              <motion.div
                key={surpriseKey}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.45 }}
                className="grid overflow-hidden rounded-[2rem] bg-white shadow-[0_25px_80px_-35px_rgba(15,23,42,0.35)] dark:bg-slate-900 lg:grid-cols-[1.15fr_0.85fr]"
              >
                <div className="relative min-h-[280px] overflow-hidden sm:min-h-[400px]">
                  {surprisePlace.images?.hero ? (
                    <motion.img
                      initial={{ scale: 1.08 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 1.1 }}
                      src={surprisePlace.images.hero}
                      alt={surprisePlace.name}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  ) : (
                    <div className={`absolute inset-0 ${regionStyle[surprisePlace.region]?.bg || "bg-slate-500"}`} />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

                  <span className="absolute bottom-6 left-6 rounded-full border border-white/30 bg-black/30 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md">
                    {surprisePlace.type}
                  </span>
                </div>

                <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-14">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700 dark:text-teal-400">
                    {surpriseLabel}
                  </p>

                  <p className="mt-5 text-sm font-semibold text-slate-500 dark:text-slate-400">
                    {surprisePlace.region} · {surprisePlace.area}
                  </p>

                  <h3 className="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
                    {surprisePlace.name}
                  </h3>

                  <p className="mt-5 leading-8 text-slate-600 dark:text-slate-400">
                    {surprisePlace.summary}
                  </p>

                  <div className="mt-9 flex flex-wrap items-center gap-3">
                    <Link
                      to={`/places/${surprisePlace.slug}`}
                      className="inline-flex items-center gap-3 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-1 hover:bg-teal-800 dark:bg-white dark:text-slate-950 dark:hover:bg-teal-200"
                    >
                      Discover this place
                      <span aria-hidden="true">→</span>
                    </Link>

                    <button
                      type="button"
                      onClick={() => pickSurprise(
                        surpriseLabel === "Your next adventure"
                          ? places
                          : places.filter((p) => p.type === surpriseLabel),
                        surpriseLabel
                      )}
                      className="rounded-full border border-slate-200 px-5 py-3.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
                    >
                      Try another ↻
                    </button>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.button
                type="button"
                onClick={() => pickSurprise()}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="group flex min-h-[230px] w-full flex-col items-center justify-center rounded-[2rem] border border-dashed border-slate-300 bg-white/60 px-6 text-center transition-all hover:border-teal-600 hover:bg-white dark:border-slate-700 dark:bg-slate-900/50 dark:hover:bg-slate-900"
              >
                <span className="text-4xl transition-transform duration-500 group-hover:rotate-45">
                  ✳
                </span>
                <span className="mt-4 font-display text-xl font-bold">
                  Your next adventure is waiting
                </span>
                <span className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                  Tap to discover somewhere unexpected
                </span>
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* EXPLORE BY EXPERIENCE */}
      <section className="bg-white px-5 py-20 text-slate-950 dark:bg-slate-950 dark:text-white sm:py-24">
        <div className="mx-auto max-w-[1200px]">
          <motion.div
            variants={sectionReveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
              Find your kind of escape
            </p>

            <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
              Explore by experience.
            </h2>

            <p className="mt-4 max-w-[55ch] leading-7 text-slate-600 dark:text-slate-400">
              Whether you're drawn to history, wild landscapes or the coast,
              find a destination that feels just right.
            </p>
          </motion.div>

          <motion.div
            variants={list}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {experienceTypes.map((type) => {
              const matchingPlaces = places.filter((p) => p.type === type);
              const description =
                experienceDescriptions[type] ||
                `Discover remarkable ${type.toLowerCase()} destinations across the UK.`;

              return (
                <motion.button
                  key={type}
                  variants={item}
                  type="button"
                  onClick={() => pickSurprise(matchingPlaces, type)}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-[#f8f8f5] p-7 text-left transition-all duration-300 hover:-translate-y-1 hover:border-teal-700 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 dark:hover:border-teal-500"
                >
                  <div className="flex items-start justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl text-teal-800 shadow-sm dark:bg-slate-800 dark:text-teal-300">
                      {experienceIcons[type] || "✳"}
                    </span>

                    <span className="text-sm font-semibold text-slate-400">
                      {String(matchingPlaces.length).padStart(2, "0")} places
                    </span>
                  </div>

                  <h3 className="mt-7 font-display text-2xl font-bold">
                    {type}
                  </h3>

                  <p className="mt-2 min-h-[48px] text-sm leading-6 text-slate-600 dark:text-slate-400">
                    {description}
                  </p>

                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-teal-800 transition-all group-hover:gap-4 dark:text-teal-300">
                    Find a destination
                    <span aria-hidden="true">→</span>
                  </span>
                </motion.button>
              );
            })}
          </motion.div>

          <p className="mt-6 text-sm text-slate-500 dark:text-slate-400">
            Choose an experience to reveal a destination. You can explore
            another suggestion whenever you like.
          </p>
        </div>
      </section>

      {/* FEATURED PLACES */}
      <section className="bg-white py-20 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white sm:py-24">
        <div className="mx-auto max-w-[1200px] px-5">
          <motion.div
            variants={sectionReveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                Start exploring
              </p>

              <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
                Featured places
              </h2>

              <p className="mt-3 max-w-[52ch] text-slate-600 dark:text-slate-400">
                A hand-picked selection of places worth putting on your UK
                itinerary.
              </p>
            </div>

            <Link
              to="/places"
              className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 transition-all duration-300 hover:translate-x-1 dark:text-white"
            >
              View all places
              <span aria-hidden="true">→</span>
            </Link>
          </motion.div>

          <motion.div
            variants={list}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {featured.map((p) => (
              <motion.div key={p.slug} variants={item}>
                <PlaceCard place={p} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* RECENTLY VIEWED */}
      {recentPlaces.length > 0 && (
        <section className="bg-[#f7f6f2] px-5 py-20 dark:bg-[#111b19] sm:py-24">
          <div className="mx-auto max-w-[1200px]">
            <motion.div
              variants={sectionReveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"
            >
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700 dark:text-teal-400">
                  Pick up where you left off
                </p>

                <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
                  Recently explored.
                </h2>

                <p className="mt-3 text-slate-600 dark:text-slate-400">
                  The places you've been discovering.
                </p>
              </div>

              <Link
                to="/my-travel-list"
                className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:translate-x-1 dark:text-white"
              >
                My Travel List →
              </Link>
            </motion.div>

            <motion.div
              variants={list}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {recentPlaces.slice(0, 3).map((p) => (
                <motion.div key={p.slug} variants={item}>
                  <PlaceCard place={p} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* DISCOVER CTA */}
      <section className="bg-white px-5 pb-24 pt-20 transition-colors duration-300 dark:bg-slate-950">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-[1200px] overflow-hidden rounded-[2rem] bg-slate-900 text-white shadow-[0_30px_100px_-40px_rgba(15,23,42,0.7)] dark:bg-[#172b28] dark:ring-1 dark:ring-white/10"
        >
          <div className="flex h-1.5">
            {Object.values(regionStyle).map((s) => (
              <span key={s.hex} className={`flex-1 ${s.bg}`} />
            ))}
          </div>

          <div className="relative overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute -right-32 -top-32 h-80 w-80 rounded-full border border-white/10"
            />

            <div
              aria-hidden="true"
              className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-white/10"
            />

            <div className="relative flex flex-col items-start justify-between gap-8 p-8 sm:p-12 md:flex-row md:items-center">
              <div className="max-w-2xl">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">
                  Your next adventure
                </p>

                <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  Not sure where to start?
                </h2>

                <p className="mt-3 max-w-[48ch] leading-7 text-slate-300">
                  Pick a nation and discover historic landmarks, dramatic
                  landscapes, coastal escapes and unforgettable places across
                  the UK.
                </p>
              </div>

              <Link
                to="/regions"
                className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-white px-6 py-3.5 font-semibold text-slate-900 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-100 hover:shadow-xl active:scale-95"
              >
                Explore the nations
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
