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
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start center", "end center"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Page scroll Y progress: ", latest);
  });

  return (
    <section
      ref={targetRef}
      className="flex min-h-screen flex-col items-center justify-center gap-8 overflow-hidden bg-white px-8 py-16 lg:flex-row lg:py-52"
    >
      <div className="relative flex min-h-full w-full items-center justify-center">
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
      <div className="flex w-full flex-col gap-6">
        <h2 className="text-center font-display text-2xl text-slate-800 md:text-6xl lg:w-3/4 lg:text-left 2xl:text-7xl">
          Wykwalifikowana kadra
        </h2>
        <p className="max-w-prose text-pretty text-center text-slate-600 lg:text-left 2xl:text-2xl">
          Nasi nauczyciele posiadają nie tylko odpowiednie wykształcenie, ale
          także ogromne zaangażowanie w pracę z dziećmi. Regularnie uczestniczą
          w szkoleniach, aby wprowadzać najnowsze metody edukacyjne i wspierać
          indywidualny rozwój każdego przedszkolaka.
        </p>
      </div>
    </section>
  );
}
