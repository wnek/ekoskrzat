import { motion, useScroll, useTransform } from "framer-motion";

import { useRef } from "react";

export default function SecondFeature() {
  // const targetRef = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: targetRef,
  //   offset: ["start end", "end center"],
  // });

  // const yCircle = useTransform(scrollYProgress, [0, 1], [200, -200]);
  // const rotation = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section
      ref={targetRef}
      className="relative my-4 min-h-screen justify-end rounded-3xl lg:flex lg:h-screen"
    >
      {/* <motion.img
        src="images/rect-2.png"
        alt="Zielony prostokąt"
        className="absolute left-16 top-0 z-30 w-24 lg:w-64"
        style={{ y: yCircle, rotate: rotation }}
      /> */}
      <div
        className="mx-4 h-screen rounded-3xl lg:absolute lg:h-full lg:w-[calc(100vw-3rem)]"
        style={{
          backgroundImage: "url(/images/feature-2.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      ></div>

      <div className="mx-4 h-fit py-4 lg:sticky lg:top-[5rem] lg:mx-8 lg:w-1/3">
        <div className="flex flex-col gap-8 rounded-3xl bg-stone-100 px-12 py-16 lg:rounded-2xl">
          <h3 className="text-sla font-display text-2xl text-slate-800 2xl:text-4xl">
            <strong>Unikalne</strong> podejście do dzieci
          </h3>
          <p className="text-slate-600 2xl:text-2xl">
            Wierzymy, że każde dziecko jest wyjątkowe i zasługuje na
            indywidualne podejście, które uwzględnia jego potrzeby,
            zainteresowania i tempo rozwoju.
          </p>
        </div>
      </div>
    </section>
  );
}
