
import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useScroll,
  useTransform,
} from "motion/react";

const words =
  "Thirty places worth crossing the country for.".split(" ");

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
};

const word = {
  hidden: {
    y: "115%",
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fade = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Hero() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const far = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const mid = useTransform(scrollYProgress, [0, 1], [0, 85]);
  const near = useTransform(scrollYProgress, [0, 1], [0, 35]);
  const sun = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 45]);

  return (
    <section
      ref={ref}
      className="
        relative isolate flex
        min-h-[88vh]
        overflow-hidden
        bg-gradient-to-b
        from-sky-100
        via-sky-50
        to-white
        dark:from-[#101b2b]
        dark:via-[#101827]
        dark:to-[#111827]
      "
    >
      {/* Atmosphere */}
      <div
        aria-hidden="true"
        className="
          absolute inset-0 -z-20
          bg-[radial-gradient(circle_at_70%_25%,rgba(255,255,255,0.8),transparent_32%)]
          dark:bg-[radial-gradient(circle_at_70%_25%,rgba(148,163,184,0.12),transparent_35%)]
        "
      />

      {/* Sun / moon */}
      <motion.div
        style={{ y: sun }}
        className="absolute right-[9%] top-[13%] -z-10"
      >
        <motion.div
          initial={{
            y: 100,
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            y: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.25,
          }}
          className="
            h-24 w-24
            rounded-full
            bg-[#b23a48]
            shadow-[0_0_100px_28px_rgba(178,58,72,0.32)]
            sm:h-32 sm:w-32
            dark:bg-[#e2e8f0]
            dark:shadow-[0_0_110px_35px_rgba(226,232,240,0.18)]
          "
        />
      </motion.div>

      {/* Distant hills */}
      <motion.svg
        style={{ y: far }}
        viewBox="0 0 1440 260"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="
          absolute bottom-0 left-0 -z-10
          h-56 w-full
          sm:h-72
          md:h-96
        "
      >
        <path
          className="fill-[#6b4e8a]/55 dark:fill-[#8170a0]/35"
          d="
            M0 160
            L120 110
            L220 150
            L360 80
            L480 140
            L620 90
            L760 150
            L900 70
            L1040 130
            L1180 95
            L1320 140
            L1440 100
            V260
            H0Z
          "
        />
      </motion.svg>

      {/* Middle hills */}
      <motion.svg
        style={{ y: mid }}
        viewBox="0 0 1440 260"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="
          absolute bottom-0 left-0 -z-10
          h-44 w-full
          sm:h-56
          md:h-72
        "
      >
        <path
          className="fill-[#1e6f78]/70 dark:fill-[#28717a]/55"
          d="
            M0 190
            C180 130 320 150 480 175
            C640 200 760 120 960 140
            C1140 160 1280 200 1440 150
            V260
            H0Z
          "
        />
      </motion.svg>

      {/* Foreground landscape */}
      <motion.svg
        style={{ y: near }}
        viewBox="0 0 1440 260"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="
          absolute bottom-0 left-0 -z-10
          h-32 w-full
          sm:h-40
          md:h-52
        "
      >
        <path
          className="fill-[#3f7d4e] dark:fill-[#244d37]"
          d="
            M0 220
            C200 190 380 215 600 205
            C820 195 1000 170 1220 195
            C1320 207 1390 205 1440 195
            V260
            H0Z
          "
        />
      </motion.svg>

      {/* Main content */}
      <motion.div
        style={{ y: contentY }}
        className="
          relative mx-auto
          flex w-full max-w-[1200px]
          flex-col justify-center
          px-5
          pb-48 pt-20
          sm:pb-52
          sm:pt-28
          lg:px-8
        "
      >
        {/* Eyebrow */}
        <motion.div
          initial={{
            opacity: 0,
            y: 18,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.05,
          }}
          className="
            mb-7 flex items-center gap-3
            text-xs font-bold uppercase
            tracking-[0.22em]
            text-slate-600
            dark:text-slate-300
          "
        >
          <span
            className="
              h-px w-8
              bg-slate-500/60
              dark:bg-slate-300/60
            "
          />

          <span>
            UK Places · England · Scotland · Wales · Northern Ireland
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          variants={container}
          initial="hidden"
          animate="show"
          aria-label={words.join(" ")}
          className="
            max-w-[11ch]
            font-display
            text-[3.4rem]
            font-extrabold
            leading-[0.94]
            tracking-[-0.045em]
            text-slate-950
            sm:text-7xl
            md:text-8xl
            lg:text-[7rem]
            dark:text-white
          "
        >
          {words.map((w, i) => (
            <span
              key={i}
              aria-hidden="true"
              className="
                mr-[0.22em]
                inline-block
                overflow-hidden
                pb-2
                align-bottom
              "
            >
              <motion.span
                variants={word}
                className="inline-block"
              >
                {w}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        {/* Supporting copy */}
        <motion.div
          variants={{
            show: {
              transition: {
                staggerChildren: 0.12,
                delayChildren: 1.05,
              },
            },
          }}
          initial="hidden"
          animate="show"
          className="mt-7"
        >
          <motion.p
            variants={fade}
            className="
              max-w-[56ch]
              text-base leading-7
              text-slate-700
              sm:text-lg sm:leading-8
              dark:text-slate-300
            "
          >
            From windswept Atlantic cliffs and quiet Cornish harbours to
            Highland valleys, medieval cities and ancient monuments, discover
            the places that give Britain its character.
          </motion.p>

          {/* Actions */}
          <motion.div
            variants={fade}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link
              to="/places"
              className="
                group inline-flex items-center gap-3
                rounded-full
                bg-slate-950
                px-6 py-3.5
                font-semibold text-white
                shadow-[0_15px_40px_-18px_rgba(15,23,42,0.7)]
                transition-all duration-300
                hover:-translate-y-1
                hover:bg-slate-800
                hover:shadow-[0_20px_45px_-18px_rgba(15,23,42,0.8)]
                active:scale-95
                dark:bg-white
                dark:text-slate-950
                dark:hover:bg-slate-100
              "
            >
              Discover all 30 places

              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>

            <Link
              to="/regions"
              className="
                group inline-flex items-center gap-3
                rounded-full
                border border-slate-900/15
                bg-white/60
                px-6 py-3.5
                font-semibold text-slate-900
                backdrop-blur-xl
                transition-all duration-300
                hover:-translate-y-1
                hover:bg-white
                active:scale-95
                dark:border-white/25
                dark:bg-white/10
                dark:text-white
                dark:hover:bg-white/15
              "
            >
              Explore the nations

              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Bottom statistics */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 1.5,
          }}
          className="
            mt-12
            flex flex-wrap
            items-center gap-x-8 gap-y-4
            border-t border-slate-900/10
            pt-5
            dark:border-white/15
          "
        >
          <div>
            <p className="font-display text-xl font-extrabold text-slate-950 dark:text-white">
              30
            </p>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
              Places
            </p>
          </div>

          <div className="h-8 w-px bg-slate-900/10 dark:bg-white/15" />

          <div>
            <p className="font-display text-xl font-extrabold text-slate-950 dark:text-white">
              4
            </p>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
              Nations
            </p>
          </div>

          <div className="h-8 w-px bg-slate-900/10 dark:bg-white/15" />

          <div>
            <p className="font-display text-xl font-extrabold text-slate-950 dark:text-white">
              ∞
            </p>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
              Stories
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.8,
          duration: 0.8,
        }}
        className="
          absolute
          bottom-7 left-1/2
          hidden -translate-x-1/2
          flex-col items-center gap-2
          sm:flex
        "
      >
        <span
          className="
            text-[9px] font-bold uppercase
            tracking-[0.25em]
            text-slate-500
            dark:text-slate-400
          "
        >
          Explore
        </span>

        <motion.span
          animate={{
            y: [0, 6, 0],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            h-8 w-px
            bg-slate-400/70
            dark:bg-slate-400/70
            motion-reduce:animate-none
          "
        />
      </motion.div>
    </section>
  );
}
