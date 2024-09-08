import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  transform,
} from "framer-motion";

import { useRef } from "react";

export default function Staff() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Page scroll Y progress: ", latest);
  });

  return (
    <section className="flex h-screen flex-col items-start justify-center gap-8 overflow-hidden bg-white px-8 py-16 lg:flex-row lg:py-52">
      <div className="relative min-h-full w-full bg-red-400">
        <motion.img
          className="absolute left-1/2 top-1/2 w-fit origin-center border-4 border-black"
          style={{ transform: "translate(-50%, -50%)" }}
          src="/images/staff-1.png"
          alt="Staff"
          ref={targetRef}
        />
        <motion.img
          className="absolute left-1/2 top-1/2"
          style={{ transform: "translate(-50%, 0)" }}
          src="/images/staff-2.png"
          alt="Staff"
          style={{ y }}
        />
      </div>
      <div className="w-full bg-green-400">
        <h2 className="font-display text-2xl text-slate-800 md:text-6xl lg:w-3/4 2xl:text-7xl">
          Wykwalifikowana kadra
        </h2>
        <p className="max-w-prose text-pretty text-slate-800 2xl:text-2xl">
          Nasi nauczyciele posiadają nie tylko odpowiednie wykształcenie, ale
          także ogromne zaangażowanie w pracę z dziećmi. Regularnie uczestniczą
          w szkoleniach, aby wprowadzać najnowsze metody edukacyjne i wspierać
          indywidualny rozwój każdego przedszkolaka.
        </p>
      </div>
    </section>
  );
}
