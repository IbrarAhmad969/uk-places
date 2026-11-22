import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "motion/react";

const words = "Thirty places worth planning a trip around.".split(" ");

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } } };
const word = { hidden: { y: "110%" }, show: { y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } };
const fade = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const far = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const mid = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const near = useTransform(scrollYProgress, [0, 1], [0, 25]);
  const sun = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section
      ref={ref}
      className="relative isolate flex min-h-[80vh] items-center overflow-hidden bg-gradient-to-b from-sky-100 via-sky-50 to-white dark:from-slate-900 dark:via-slate-950 dark:to-slate-950"
    >
      {/* Sun by day, moon by night */}
      <motion.div style={{ y: sun }} className="absolute right-[10%] top-[14%] -z-10">
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="h-24 w-24 rounded-full bg-[#b23a48] shadow-[0_0_90px_24px_rgba(178,58,72,0.35)] sm:h-32 sm:w-32 dark:bg-slate-200 dark:shadow-[0_0_90px_24px_rgba(226,232,240,0.2)]"
        />
      </motion.div>

      {/* Ridges: heather, teal and green */}
      <motion.svg style={{ y: far }} viewBox="0 0 1440 260" preserveAspectRatio="none" aria-hidden="true"
        className="absolute bottom-0 left-0 -z-10 h-56 w-full sm:h-72 md:h-96">
        <path className="fill-[#6b4e8a]/60 dark:fill-[#6b4e8a]/45"
          d="M0 160 L120 110 L220 150 L360 80 L480 140 L620 90 L760 150 L900 70 L1040 130 L1180 95 L1320 140 L1440 100 V260 H0Z" />
      </motion.svg>
      <motion.svg style={{ y: mid }} viewBox="0 0 1440 260" preserveAspectRatio="none" aria-hidden="true"
        className="absolute bottom-0 left-0 -z-10 h-44 w-full sm:h-56 md:h-72">
        <path className="fill-[#1e6f78]/75 dark:fill-[#1e6f78]/55"
          d="M0 190 C180 130 320 150 480 175 C640 200 760 120 960 140 C1140 160 1280 200 1440 150 V260 H0Z" />
      </motion.svg>
      <motion.svg style={{ y: near }} viewBox="0 0 1440 260" preserveAspectRatio="none" aria-hidden="true"
        className="absolute bottom-0 left-0 -z-10 h-32 w-full sm:h-40 md:h-52">
        <path className="fill-[#3f7d4e] dark:fill-[#2f5c3a]"
          d="M0 220 C200 190 380 215 600 205 C820 195 1000 170 1220 195 C1320 207 1390 205 1440 195 V260 H0Z" />
      </motion.svg>

      <div className="mx-auto w-full max-w-[1080px] px-5 pb-40 pt-16">
        <motion.h1
          variants={container}
          initial="hidden"
          animate="show"
          aria-label={words.join(" ")}
          className="max-w-[16ch] font-display text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl"
        >
          {words.map((w, i) => (
            <span key={i} aria-hidden="true" className="mr-[0.25em] inline-block overflow-hidden pb-1 align-bottom">
              <motion.span variants={word} className="inline-block">{w}</motion.span>
            </span>
          ))}
        </motion.h1>

        <motion.div variants={{ show: { transition: { staggerChildren: 0.12, delayChildren: 1.1 } } }} initial="hidden" animate="show">
          <motion.p variants={fade} className="mt-6 max-w-[48ch] text-lg text-slate-700 dark:text-slate-300">
            From Cornish harbours to Highland glens, these are the castles, coasts and mountains that earn their reputation.
          </motion.p>
          <motion.div variants={fade} className="mt-8 flex flex-wrap gap-3">
            <Link to="/places" className="rounded-full bg-slate-900 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-700 active:scale-95 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200">
              Browse all 30 places
            </Link>
            <Link to="/regions" className="rounded-full border border-slate-900/20 bg-white/60 px-6 py-3 font-semibold backdrop-blur transition hover:-translate-y-0.5 hover:bg-white active:scale-95 dark:border-white/20 dark:bg-white/5 dark:hover:bg-white/10">
              Explore by nation
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}