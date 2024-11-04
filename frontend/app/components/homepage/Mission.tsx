import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";

import { useRef } from "react";

import { H1 } from "../global/ui/Typography";


export default function Mission({ data }: { data: MissionData }) {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start center", "end center"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const rectRotation = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const rectY = useTransform(scrollYProgress, [0, 1], [0, -400]);


  return (
    <div ref={targetRef} className="relative">
      <section className="flex min-h-screen bg-white px-8 py-16 xl:px-16 2xl:py-52 justify-center">
        <div className="z-10 flex flex-col items-start justify-center gap-8 2xl:w-3/4">
          <h3 className="w-fit rounded-full border border-slate-300 px-4 py-2 text-blue-600">
            Nasza misja
          </h3>

          <H1 html={data.text} />


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
