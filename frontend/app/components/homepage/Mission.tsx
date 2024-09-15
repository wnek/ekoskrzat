import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";

import { useRef } from "react";

export default function Mission() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start center", "end center"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const rectRotation = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const rectY = useTransform(scrollYProgress, [0, 1], [0, -400]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Page scroll Y progress: ", latest);
  });
  return (
    <div ref={targetRef} className="relative">
      <section className="flex min-h-screen bg-white px-8 py-16 xl:px-40 2xl:py-52">
        <div className="z-10 flex flex-col items-start justify-center gap-8">
          <h3 className="w-fit rounded-full border border-slate-300 px-4 py-2 text-blue-600">
            Nasza misja
          </h3>

          <h2 className="font-display text-2xl text-slate-800 md:text-6xl lg:w-3/4 xl:w-full 2xl:text-8xl">
            Drogi Rodzicu, naszą misją jest, by Twoje dziecko mogło rozwijać się
            pod opieką <strong>najlepszych specjalistów</strong>, wśród natury w
            pięknym ogrodzie.
          </h2>
          <div className="flex items-center gap-4">
            <img src="/images/logo.svg" alt="Logo" />
            <p className="italic text-slate-500">
              Zespół Przedszkola Ekoskrzat
            </p>
          </div>
        </div>
        <motion.img
          src="images/scribble-2.svg"
          alt="Linia"
          className="absolute left-0 top-1/4 w-full"
          style={{ y: y }}
        />
        <motion.img
          src="images/yellow-rect.png"
          alt="Żółty prostokąt"
          className="absolute right-[20%] top-1/4 w-12 lg:w-48"
          style={{ y: rectY, rotate: rectRotation }}
        />
      </section>
    </div>
  );
}
