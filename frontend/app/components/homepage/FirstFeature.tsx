import { H3 } from "../global/ui/Typography";
import ResponsiveImage from "~/components/global/ui/ResponsiveImage";

export default function FirstFeature({ data }: { data: any }) {
  return (
    <section className="my-4 min-h-screen rounded-3xl lg:h-screen">
      <div className="mx-4 h-screen rounded-3xl lg:absolute lg:h-full lg:w-[calc(100vw-3rem)] overflow-hidden">
        <ResponsiveImage
          baseUrl="https://api.ekoskrzat.edu.pl"
          image={data.image}
          className="h-full w-full object-cover"
          sizes="(min-width: 1024px) calc(100vw - 3rem), 100vw"
          alt=""
          loading="eager"
          decoding="async"
        />
      </div>
      <div className="mx-4 py-4 lg:sticky lg:top-[5rem] lg:mx-8 lg:w-1/3">
        <div className="flex flex-col gap-8 rounded-3xl bg-slate-900 px-12 py-16 lg:rounded-2xl">
          <H3 html={data.title} color="white" />
          <p className="text-slate-400 2xl:text-2xl">
            {data.description}
          </p>
        </div>
      </div>
    </section>
  );
}
