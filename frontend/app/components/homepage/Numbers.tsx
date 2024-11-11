import { H3 } from "../global/ui/Typography";

export default function Numbers({ data }: { data: any }) {
  return (
    <section className="m-4 flex min-h-screen flex-col items-center py-16 text-center lg:py-52 gap-8">
      <H3 html={"<strong>" + data.title + "</strong>"} />
      <div className="grid w-full gap-4 text-left xl:w-1/2 xl:grid-cols-2 2xl:w-1/3">
        <div className="flex flex-col gap-8 rounded-3xl bg-slate-100 p-6 text-slate-600 xl:col-span-2">
          <h4 className="font-display text-6xl text-slate-800">{data.firstNumber}</h4>
          <p className="2xl:text-2xl">{data.firstLabel}</p>
        </div>{" "}
        <div className="flex flex-col gap-8 rounded-3xl bg-stone-100 p-6 text-slate-600">
          <h4 className="font-display text-6xl text-slate-800">{data.secondNumber}</h4>
          <p className="2xl:text-2xl">{data.secondLabel}</p>
        </div>
        <div className="flex flex-col gap-8 rounded-3xl bg-slate-100 p-6 text-slate-600">
          <h4 className="font-display text-6xl text-slate-800">{data.thirdNumber}m<sup>2</sup></h4>
          <p className="2xl:text-2xl">{data.thirdLabel}</p>
        </div>
        <div className="flex flex-col gap-8 rounded-3xl bg-green-100 p-6 text-slate-600 xl:col-span-2">
          <h4 className="font-display text-6xl text-slate-800">{data.fourthNumber}</h4>
          <p className="2xl:text-2xl">{data.fourthLabel}</p>
        </div>
      </div>
    </section>
  );
}
