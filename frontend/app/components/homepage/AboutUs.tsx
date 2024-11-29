import { H2, P } from "../global/ui/Typography";

export default function AboutUs({ data }: { data: any }) {
  return (
    <section className="bg-stone-100 px-4 py-16 text-center lg:px-8 lg:py-52 xl:px-24">
      <div className="2xl:w-3/4 flex flex-col items-center gap-8 justify-center mx-auto">
        <h3 className="w-fit rounded-full border border-slate-300 px-4 py-2 text-blue-600">
          O nas
        </h3>
        <H2 html={data.title}>

        </H2>
        <P html={data.description} />
        <img
          className="lg:w-1/2"
          src="/images/about-img.png"
          alt="Obrazek skrzata"
        />
      </div>
    </section>
  );
}
