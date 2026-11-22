import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { animate, motion, useInView } from "motion/react";
import { places, regions } from "../data/places.js";
import { regionStyle } from "../data/theme.js";

function CountUp({ to }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, { duration: 1.2, ease: "easeOut", onUpdate: (v) => setN(Math.round(v)) });
    return () => controls.stop();
  }, [inView, to]);

  return <span ref={ref}>{n}</span>;
}

export default function NationStrip() {
  return (
    <section className="relative z-10 mx-auto -mt-14 max-w-[1080px] px-5">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {regions.map((r) => (
          <motion.div key={r.name} whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 400, damping: 22 }}>
            <Link to="/regions" className={`flex h-full flex-col rounded-2xl p-5 text-white shadow-lg ${regionStyle[r.name].bg}`}>
              <strong className="font-display text-5xl font-extrabold leading-none">
                <CountUp to={places.filter((p) => p.region === r.name).length} />
              </strong>
              <span className="mt-2 font-semibold">{r.name}</span>
              <span className="mt-1 hidden text-sm text-white/85 md:block">{r.blurb}</span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}