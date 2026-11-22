
import { Link, useParams } from "react-router-dom";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef } from "react";
import { getPlace } from "../data/places.js";
import { regionStyle } from "../data/theme.js";
import { useTravel } from "../context/TravelContext.jsx";
import FavoriteButton from "../components/FavoriteButton.jsx";
import AddToTripButton from "../components/AddToTripButton.jsx";

export default function PlaceDetails() {
  const { slug } = useParams();
  const place = getPlace(slug);
  const { addRecentlyViewed } = useTravel();

  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);

  useEffect(() => {
    if (place) {
      addRecentlyViewed(place.slug);
    }
  }, [place, addRecentlyViewed]);

  if (!place) {
    return (
      <section className="wrap page">
        <h1>Place not found</h1>
        <p className="mt-3">
          We couldn't find the place you're looking for.
        </p>
        <Link
          to="/places"
          className="mt-6 inline-flex rounded-xl bg-slate-900 px-5 py-3 font-semibold text-white dark:bg-white dark:text-slate-900"
        >
          ← Back to places
        </Link>
      </section>
    );
  }

  const r = regionStyle[place.region];

  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section
        ref={heroRef}
        className="relative h-[78vh] min-h-[560px] overflow-hidden"
      >
        {place.images?.hero ? (
          <motion.img
            src={place.images.hero}
            alt={place.name}
            className="absolute inset-0 h-full w-full object-cover"
            style={{ y: imageY, scale: imageScale }}
            initial={{ scale: 1.12, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 1.4,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        ) : (
          <div className={`absolute inset-0 ${r.bg}`} />
        )}

        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-transparent to-transparent" />

        <motion.div
          style={{ y: contentY }}
          className="relative z-10 mx-auto flex h-full max-w-7xl items-end px-6 pb-14 lg:px-8 lg:pb-20"
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.9,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-5xl text-white"
          >
            <Link
              to="/places"
              className="mb-7 inline-flex items-center text-sm font-semibold text-white/75 transition-all duration-300 hover:-translate-x-1 hover:text-white"
            >
              ← Back to places
            </Link>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mb-5 flex flex-wrap items-center gap-3"
            >
              <span className="rounded-full border border-white/20 bg-black/30 px-4 py-1.5 text-xs font-bold uppercase tracking-wider backdrop-blur-xl">
                {place.type}
              </span>

              <span className="text-sm font-medium text-white/75">
                {place.region}
              </span>

              <span className="text-white/40">•</span>

              <span className="text-sm font-medium text-white/75">
                {place.area}
              </span>
            </motion.div>

            <div className="flex flex-wrap items-end justify-between gap-6">
              <h1 className="font-display text-5xl font-extrabold leading-[0.95] tracking-[-0.03em] sm:text-7xl lg:text-8xl">
                {place.name}
              </h1>

              <div className="flex flex-wrap items-center gap-3">
                <FavoriteButton
                  slug={place.slug}
                  showLabel
                  className="mb-1 shrink-0"
                />

                <AddToTripButton
                  slug={place.slug}
                  className="mb-1"
                />
              </div>
            </div>

            <p className="mt-6 max-w-3xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
              {place.summary}
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[1fr_340px]">
          <motion.article
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className={`text-xs font-bold uppercase tracking-[0.2em] ${r.text}`}>
              {place.region}, {place.area}
            </p>

            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Discover {place.name}
            </h2>

            <div className="mt-7 max-w-3xl text-lg leading-9 text-slate-600 dark:text-slate-400">
              <p>{place.description || place.summary}</p>
            </div>
          </motion.article>

          <motion.aside
            initial={{ x: 35, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="h-fit rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_20px_70px_-35px_rgba(15,23,42,0.45)] dark:border-slate-800 dark:bg-slate-900"
          >
            <div className={`mb-6 h-1 w-14 rounded-full ${r.bg}`} />

            <h3 className="font-display text-xl font-bold">
              Place information
            </h3>

            <div className="mt-7 space-y-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Region
                </p>
                <p className={`mt-1.5 font-semibold ${r.text}`}>
                  {place.region}
                </p>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Area
                </p>
                <p className="mt-1.5 font-semibold">{place.area}</p>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Type
                </p>
                <p className="mt-1.5 font-semibold">{place.type}</p>
              </div>

              {place.bestTime && (
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Best time to visit
                  </p>
                  <p className="mt-1.5 font-semibold">{place.bestTime}</p>
                </div>
              )}
            </div>

            <div className="mt-8 border-t border-slate-200 pt-6 dark:border-slate-700">
              <p className="mb-4 text-sm text-slate-500 dark:text-slate-400">
                Planning a visit?
              </p>
              <AddToTripButton
                slug={place.slug}
                className="w-full"
              />
            </div>
          </motion.aside>
        </div>
      </section>

      {/* FEATURE IMAGE */}
      {place.images?.card && (
        <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8 lg:pb-28">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative overflow-hidden rounded-[2rem]"
          >
            <motion.img
              src={place.images.card}
              alt={`${place.name} landscape`}
              className="h-[420px] w-full object-cover sm:h-[520px]"
              whileHover={{ scale: 1.04 }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            <div className="absolute bottom-0 left-0 p-7 sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-widest text-white/70">
                Explore the landscape
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl">
                Experience {place.name}
              </h2>
            </div>
          </motion.div>
        </section>
      )}

      {/* EXPERIENCE SECTION */}
      <section className="border-y border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <p className={`text-xs font-bold uppercase tracking-[0.2em] ${r.text}`}>
              Why visit
            </p>

            <h2 className="mt-4 font-display text-3xl font-bold sm:text-5xl">
              A place worth exploring
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
              From the character of the landscape to the history and atmosphere
              that surrounds it, {place.name} offers a distinctive experience
              within {place.region}.
            </p>
          </motion.div>
        </div>
      </section>

      {/* NAVIGATION */}
      <section className="border-t border-slate-200 dark:border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <Link
            to="/places"
            className="font-semibold transition-transform duration-300 hover:-translate-x-1"
          >
            ← All places
          </Link>

          <Link
            to="/regions"
            className={`font-semibold ${r.text} transition-transform duration-300 hover:translate-x-1`}
          >
            Explore regions →
          </Link>
        </div>
      </section>
    </main>
  );
}
