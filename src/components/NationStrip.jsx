import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { animate, motion, useInView } from "motion/react";
import { places, regions } from "../data/places.js";
import { regionStyle } from "../data/theme.js";

function CountUp({ to }) {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: "-10% 0px",
  });

  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const controls = animate(0, to, {
      duration: 1.2,
      ease: "easeOut",
      onUpdate: (value) => setN(Math.round(value)),
    });

    return () => controls.stop();
  }, [inView, to]);

  return <span ref={ref}>{n}</span>;
}

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  show: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: index * 0.08,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function NationStrip() {
  return (
    <section
      className="
        relative z-10
        mx-auto -mt-16
        max-w-[1200px]
        px-5
        sm:-mt-20
        lg:px-8
      "
    >
      {/* Section intro */}
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          margin: "-80px",
        }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          mb-4
          flex items-end justify-between
          gap-4
        "
      >
        <div>
          <p
            className="
              text-[10px]
              font-bold uppercase
              tracking-[0.22em]
              text-slate-500
              dark:text-slate-400
            "
          >
            Explore by nation
          </p>
        </div>

        <Link
          to="/regions"
          className="
            hidden items-center gap-2
            text-xs font-bold
            text-slate-600
            transition-all duration-300
            hover:translate-x-1
            sm:inline-flex
            dark:text-slate-400
          "
        >
          View all regions
          <span aria-hidden="true">→</span>
        </Link>
      </motion.div>

      {/* Nation cards */}
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {regions.map((r, index) => {
          const style = regionStyle[r.name];
          const count = places.filter(
            (p) => p.region === r.name
          ).length;

          return (
            <motion.div
              key={r.name}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
                margin: "-60px",
              }}
              whileHover={{
                y: -8,
              }}
              transition={{
                type: "spring",
                stiffness: 350,
                damping: 24,
              }}
            >
              <Link
                to="/regions"
                className={`
                  group relative flex h-full
                  min-h-[190px]
                  overflow-hidden
                  rounded-[1.35rem]
                  p-5
                  text-white
                  shadow-[0_20px_50px_-25px_rgba(15,23,42,0.55)]
                  transition-all duration-500
                  hover:shadow-[0_30px_70px_-25px_rgba(15,23,42,0.7)]
                  sm:min-h-[215px]
                  sm:p-6
                  ${style.bg}
                `}
              >
                {/* Soft radial highlight */}
                <span
                  aria-hidden="true"
                  className="
                    absolute -right-16 -top-16
                    h-36 w-36
                    rounded-full
                    bg-white/10
                    blur-2xl
                    transition-transform duration-700
                    group-hover:scale-150
                  "
                />

                {/* Decorative border */}
                <span
                  aria-hidden="true"
                  className="
                    absolute inset-0
                    rounded-[1.35rem]
                    border border-white/10
                  "
                />

                {/* Large background number */}
                <span
                  aria-hidden="true"
                  className="
                    absolute -bottom-5 -right-2
                    font-display
                    text-[7rem]
                    font-black
                    leading-none
                    text-white/[0.08]
                    transition-all duration-700
                    group-hover:translate-x-2
                    group-hover:text-white/[0.13]
                  "
                >
                  {count}
                </span>

                {/* Content */}
                <div
                  className="
                    relative z-10
                    flex w-full
                    flex-col
                    justify-between
                  "
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p
                        className="
                          text-[10px]
                          font-bold uppercase
                          tracking-[0.2em]
                          text-white/60
                        "
                      >
                        {index + 1 < 10
                          ? `0${index + 1}`
                          : index + 1}
                      </p>

                      <strong
                        className="
                          mt-2 block
                          font-display
                          text-4xl
                          font-extrabold
                          leading-none
                          tracking-tight
                          sm:text-5xl
                        "
                      >
                        <CountUp to={count} />
                      </strong>
                    </div>

                    {/* Arrow */}
                    <span
                      className="
                        flex h-9 w-9
                        shrink-0 items-center justify-center
                        rounded-full
                        border border-white/20
                        bg-white/10
                        text-sm
                        transition-all duration-300
                        group-hover:translate-x-1
                        group-hover:bg-white
                        group-hover:text-slate-900
                      "
                    >
                      →
                    </span>
                  </div>

                  <div className="mt-8">
                    <h3
                      className="
                        font-display
                        text-xl font-extrabold
                        tracking-tight
                        sm:text-2xl
                      "
                    >
                      {r.name}
                    </h3>

                    <p
                      className="
                        mt-1
                        max-w-[28ch]
                        text-xs leading-5
                        text-white/75
                        sm:text-sm
                      "
                    >
                      {r.blurb}
                    </p>

                    <span
                      className="
                        mt-4 inline-flex
                        items-center gap-2
                        text-[10px]
                        font-bold uppercase
                        tracking-[0.16em]
                        text-white/60
                        transition-all duration-300
                        group-hover:gap-3
                        group-hover:text-white
                      "
                    >
                      Explore
                      <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>

      {/* Mobile view-all */}
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        className="mt-4 sm:hidden"
      >
        <Link
          to="/regions"
          className="
            flex items-center justify-between
            rounded-xl
            border border-slate-200
            bg-white/70
            px-4 py-3
            text-xs font-bold
            text-slate-700
            backdrop-blur
            transition
            hover:bg-white
            dark:border-slate-800
            dark:bg-slate-900/60
            dark:text-slate-300
            dark:hover:bg-slate-900
          "
        >
          <span>Explore all regions</span>
          <span aria-hidden="true">→</span>
        </Link>
      </motion.div>
    </section>
  );
}