import { Link } from "react-router-dom";
import { motion } from "motion/react";
import Hero from "../components/Hero.jsx";
import NationStrip from "../components/NationStrip.jsx";
import Marquee from "../components/Marquee.jsx";
import PlaceCard from "../components/PlaceCard.jsx";
import { places } from "../data/places.js";
import { regionStyle } from "../data/theme.js";

const list = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const item = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };

export default function Home() {
  const featured = places.filter((p) => p.featured);

  return (
    <>
      <Hero />
      <NationStrip />
      <Marquee />

      <section className="mx-auto max-w-[1080px] px-5 py-16">
        <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">Featured places</h2>
        <p className="mt-2 max-w-[52ch] text-slate-600 dark:text-slate-400">A few places to start with.</p>
        <motion.div
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {featured.map((p) => (
            <motion.div key={p.slug} variants={item}>
              <PlaceCard place={p} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="px-5 pb-20">
        <div className="mx-auto max-w-[1080px] overflow-hidden rounded-3xl bg-slate-900 text-white dark:ring-1 dark:ring-slate-800">
          <div className="flex h-1.5">
            {Object.values(regionStyle).map((s) => (
              <span key={s.hex} className={`flex-1 ${s.bg}`} />
            ))}
          </div>
          <div className="flex flex-col items-start justify-between gap-6 p-8 sm:p-12 md:flex-row md:items-center">
            <div>
              <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">Not sure where to start?</h2>
              <p className="mt-2 max-w-[44ch] text-slate-300">Pick a nation and see what's there.</p>
            </div>
            <Link to="/regions" className="rounded-full bg-white px-6 py-3 font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:bg-slate-200 active:scale-95">
              Explore the nations
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}