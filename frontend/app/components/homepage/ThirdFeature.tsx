import { motion, useScroll, useTransform } from "framer-motion";

import { useRef } from "react";

export default function ThirdFeature() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end center"],
  });

  const yCircle = useTransform(scrollYProgress, [0, 1], [200, -200]);
  const rotation = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <section
      ref={targetRef}
      className="relative my-4 min-h-screen rounded-3xl lg:h-screen"
    >
      <motion.img
        src="images/green-circle.png"
        alt="Zielone kółko"
        className="absolute right-16 top-0 z-30 w-24 lg:w-32"
        style={{ y: yCircle, rotate: rotation }}
      />
      <div
        className="mx-4 h-screen rounded-3xl lg:absolute lg:h-full lg:w-[calc(100vw-3rem)]"
        style={{
          backgroundImage: "url(/images/feature-3.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      ></div>
      <div className="mx-4 py-4 lg:sticky lg:top-[5rem] lg:mx-8 lg:w-1/3">
        <div className="flex flex-col gap-24 rounded-3xl bg-slate-900 px-12 py-16 lg:rounded-2xl">
          <h3 className="font-display text-2xl text-white 2xl:text-4xl">
            <strong>Masz pytania?</strong>
            <br />
            Chętnie na każde odpowiemy
          </h3>
          <a
            href="tel:+48535553599"
            className="flex w-fit items-center gap-6 rounded-full bg-green-500 py-2 pl-6 pr-2 text-white 2xl:text-xl"
          >
            Zadzwoń
            <div className="flex h-8 w-8 rounded-full bg-white p-2">
              <img src="images/arrow.svg" alt="Strzałka" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
