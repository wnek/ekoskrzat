import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import { H3 } from "../global/ui/Typography";
import ResponsiveImage from "~/components/global/ui/ResponsiveImage";

import { useRef } from "react";

export default function Staff({ data }: { data: any }) {
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
        <motion.div className="w-3/4 origin-center lg:w-1/2">
          <ResponsiveImage className="w-full h-auto rounded-2xl" image={data.staffImage} alt="Staff" />
        </motion.div>

      </div>
      <div className="flex w-full flex-col items-center gap-8 px-12 py-16 lg:items-start 2xl:px-40 text-center">
        <H3
          html={data.title}
          className="lg:text-left"
        />
        <p className="lg:text-left" >
          {data.description}
        </p >
      </div >
    </section >
  );
}
