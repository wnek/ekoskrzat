import { motion, useScroll, useTransform } from "framer-motion";

export default function Staff() {
  return (
    <section className="overflow-hiddenflex flex-col items-start justify-center gap-8 bg-white px-8 py-16 lg:flex-row lg:py-52">
      <div>
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
      <div>
        <motion.img src="/images/staff-1.png" alt="Staff" />
        <motion.img
          animate={{ x: "600px" }}
          src="/images/staff-2.png"
          alt="Staff"
        />
      </div>
    </section>
  );
}
