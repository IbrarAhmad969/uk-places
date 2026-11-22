import { Link } from "react-router-dom";
import { motion } from "motion/react";

const principles = [
  {
    number: "01",
    title: "Curiosity over checklists",
    text: "Travel isn't about ticking off landmarks. It's about finding the places that make you stop, look around and want to stay a little longer.",
  },
  {
    number: "02",
    title: "Every corner has a story",
    text: "From well-known cities to quieter corners of the countryside, every destination has something worth discovering.",
  },
  {
    number: "03",
    title: "A guide, not a ranking",
    text: "Our thirty places are here to inspire, not dictate. The best destination is always the one that means something to you.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <div className="overflow-hidden">
      {/* INTRO */}
      <section className="relative bg-[#172b28] text-[#f5f1e8]">
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
          <div className="absolute -right-24 -top-32 h-[500px] w-[500px] rounded-full border border-white" />
          <div className="absolute -right-12 -top-20 h-[400px] w-[400px] rounded-full border border-white" />
          <div className="absolute right-0 top-0 h-[300px] w-[300px] rounded-full border border-white" />
        </div>

        <div className="wrap relative py-24 md:py-36">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <p className="mb-7 text-xs font-bold uppercase tracking-[0.28em] text-[#d5b982]">
              The story behind UK Places
            </p>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.04] tracking-tight md:text-7xl lg:text-8xl">
              There's more to the UK than you think.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
              Thirty destinations. Four nations. Countless reasons to take
              the longer way round.
            </p>
          </motion.div>

          <div className="mt-16 flex flex-wrap gap-x-12 gap-y-6 border-t border-white/15 pt-8">
            {[
              ["30", "Places to discover"],
              ["4", "Nations to explore"],
              ["1", "Island full of stories"],
            ].map(([number, label]) => (
              <div key={label}>
                <p className="text-3xl font-semibold text-[#d5b982]">
                  {number}
                </p>
                <p className="mt-1 text-sm text-white/55">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BRAND STORY */}
      <section className="wrap py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#a17d49]">
              Why we exist
            </p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              A little inspiration for the road ahead.
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="space-y-6 text-lg leading-relaxed text-[#555]"
          >
            <p>
              The UK is full of places that deserve more than a passing glance.
              Ancient streets, open landscapes, unexpected coastlines and
              small towns with stories around every corner.
            </p>
            <p>
              UK Places was created to bring some of those destinations
              together in one thoughtful, easy-to-explore guide. It covers
              England, Scotland, Wales and Northern Ireland, with thirty
              places chosen to spark ideas and encourage a little adventure.
            </p>
            <p>
              Think of it as the beginning of a journey, rather than a
              definitive list. There are always more places to find, more
              paths to follow and more reasons to explore.
            </p>
          </motion.div>
        </div>
      </section>

      {/* PRINCIPLES */}
      {/* PRINCIPLES */}
      <section className="bg-[#f0ede5] py-24 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white md:py-32">
        <div className="wrap">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mb-14 max-w-2xl"
          >
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#a17d49]">
              What guides us
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              A few things we believe.
            </h2>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-3">
            {principles.map((item, index) => (
              <motion.article
                key={item.number}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                transition={{ duration: 0.55, delay: index * 0.1 }}
                className="flex min-h-[280px] flex-col rounded-2xl border border-black/5 bg-white p-8 transition-colors duration-300 dark:border-white/10 dark:bg-slate-900 md:p-9"
              >
                <span className="text-sm font-semibold tracking-widest text-[#a17d49]">
                  {item.number}
                </span>

                <h3 className="mt-10 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-300">
                  {item.text}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="wrap py-24 md:py-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
          transition={{ duration: 0.65 }}
          className="relative overflow-hidden rounded-3xl bg-[#172b28] px-8 py-16 text-center text-[#f5f1e8] md:px-16 md:py-24"
        >
          <div className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -right-8 -top-20 h-56 w-56 rounded-full border border-white/10" />

          <p className="relative text-xs font-bold uppercase tracking-[0.25em] text-[#d5b982]">
            Your next adventure starts here
          </p>

          <h2 className="relative mx-auto mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            The best places are still waiting to be found.
          </h2>

          <p className="relative mx-auto mt-6 max-w-xl leading-relaxed text-white/65">
            Browse the collection, find somewhere new and start imagining
            where the road might take you.
          </p>

          <div className="relative mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/places"
              className="inline-flex items-center justify-center rounded-full bg-[#e4c99a] px-7 py-3.5 text-sm font-semibold text-[#172b28] transition hover:bg-white"
            >
              Explore all 30 places <span className="ml-3">↗</span>
            </Link>

            <Link
              to="/regions"
              className="inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              Discover the nations
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}