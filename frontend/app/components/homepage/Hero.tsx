import { motion, useScroll, useTransform } from "framer-motion";

import { useRef } from "react";

export default function Hero() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start center", "end center"],
  });
  const ySquare = useTransform(scrollYProgress, [0, 1], [-700, 700]);
  const yCircle = useTransform(scrollYProgress, [0, 1], [0, 2000]);
  const rotation = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <div className="top-[5rem]">
      <motion.img
        src="/images/rect-1.png"
        alt="Niebieski kwadrat"
        className="absolute bottom-[-20%] left-[1%] z-[31] h-8 w-8 lg:left-[45%] lg:top-[70%] lg:h-32 lg:w-32"
        style={{ y: ySquare, rotate: rotation }}
      />

      <motion.img
        src="images/scribble.svg"
        alt="Linia"
        className="absolute left-[-50%] top-3/4 w-full"
        style={{ y: ySquare }}
      />
      <motion.img
        src="/images/green-circle.png"
        alt="Zielone koło"
        className="lg:w8 absolute right-[10%] top-[50%] h-8 w-8 lg:bottom-0 lg:left-20 lg:h-8"
        style={{ y: yCircle, rotate: rotation }}
      />
      <section
        ref={targetRef}
        className="grid min-h-full flex-col bg-stone-100 text-center text-lg lg:grid-cols-2 lg:flex-row lg:text-left"
      >
        <div className="top-[5rem] z-40 flex h-[80vh] flex-col items-center justify-center gap-8 px-4 lg:sticky lg:h-[calc(100vh-5rem)] lg:items-start lg:px-16 2xl:px-48">
          <h2 className="font-display ~text-[2rem]/[4.5rem] ~leading-[2rem]/[4rem]  text-slate-800">
            <strong>Przestrzeń</strong> dla rozwoju Twojego dziecka
          </h2>
          <p className="text-pretty text-slate-600 2xl:max-w-prose 2xl:text-2xl">
            Ekoskrzat to przedszkole w domu z wielkim ogrodem w cichym zakątku
            dzielnicy Bieżanów - Prokocim.
          </p>
          <div className="flex flex-col items-center gap-4 lg:flex-row">
            <a
              href="/form"
              className="flex items-center justify-between gap-6 rounded-full bg-green-500 py-2 pl-6 pr-2 text-white 2xl:text-xl"
            >
              Zapisz dziecko
              <div className="flex h-8 w-8 rounded-full bg-white p-2">
                <img src="images/arrow.svg" alt="Strzałka" />
              </div>
            </a>
            {/* <a href="/o-nas">Dowiedz się więcej</a> */}
          </div>
        </div>
        <div className="z-30">
          <div className="h-[calc(100vh-5rem)]">
            <img
              className="h-full w-full object-cover"
              src="/images/hero-1.jpg"
              alt="Hero 1"
            />
          </div>
          <div className="h-[calc(100vh-5rem)]">
            <img
              className="h-full w-full object-cover"
              src="/images/hero-2.jpg"
              alt="Hero 2"
            />
          </div>
          <div className="h-[calc(100vh-5rem)]">
            <img
              className="h-full w-full object-cover"
              src="/images/hero-3.jpg"
              alt="Hero 3"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
