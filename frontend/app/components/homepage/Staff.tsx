import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";

import { useRef } from "react";

export default function Staff() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start center", "end center"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      ref={targetRef}
      className="grid min-h-screen items-center justify-center gap-8 bg-white px-4 py-16 lg:grid-flow-col lg:grid-cols-2 lg:px-8"
    >
      <div className="relative flex w-full items-center justify-center">
        <motion.img
          className="w-3/4 origin-center lg:w-1/2"
          src="/images/staff-1.png"
          alt="Staff"
        />
        <motion.img
          className="absolute right-[10%] top-7 w-1/4"
          src="/images/staff-2.png"
          alt="Staff"
          style={{ y: y }}
        />
      </div>
      <div className="flex w-full flex-col items-center gap-8 px-12 py-16 lg:items-start 2xl:px-40">
        <h2 className="text-center font-display text-2xl text-slate-800 md:text-4xl lg:text-left 2xl:text-6xl">
          <strong>Wykwalifikowana</strong> kadra
        </h2>
        <p className="text-pretty text-center text-slate-600 lg:text-left 2xl:text-2xl">
          Nasi nauczyciele posiadają nie tylko odpowiednie wykształcenie, ale
          także ogromne zaangażowanie w pracę z dziećmi. Regularnie uczestniczą
          w szkoleniach, aby wprowadzać najnowsze metody edukacyjne i wspierać
          indywidualny rozwój każdego przedszkolaka.
        </p>
      </div>
    </section>
  );
}
