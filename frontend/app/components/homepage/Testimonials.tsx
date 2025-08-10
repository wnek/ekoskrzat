import { H2, P } from "../global/ui/Typography";
import ResponsiveImage from "~/components/global/ui/ResponsiveImage";


export default function Testimonials({ data }: { data: TestimonialsData }) {
  return (
    <section className="m-4 flex min-h-screen flex-col items-center py-16 text-center lg:py-52">
      <h3 className="w-fit rounded-full border border-slate-300 px-4 py-2 text-blue-600 my-4">
        Mówią o nas
      </h3>
      <H2 html={data.title} />

      <div className="flex w-full flex-col gap-4 text-left lg:flex-row xl:px-32 py-12">
        <div className="flex flex-col justify-between gap-24 rounded-3xl bg-stone-100 p-8 text-slate-800">
          <P html={data.firstTestimonial} align="left" />
          <div className="flex gap-4 items-center">
            <ResponsiveImage className="h-12 w-12 rounded-full" image={{ url: "images/parent-1.jpg" }} alt="Rodzice 4-letniej Zosi" />
            <div>
              <p>{data.firstParents}</p>

            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-24 rounded-3xl bg-slate-100 p-6 text-slate-800">
          <P html={data.secondTestimonial} align="left" />
          <div className="flex gap-4 items-center">
            <ResponsiveImage className="h-12 w-12 rounded-full" image={{ url: "images/parent-2.jpg" }} alt="Rodzice 5-letniego Jasia" />
            <div>
              <p>{data.secondParents}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-24 rounded-3xl bg-green-100 p-6 text-slate-800">
          <P html={data.thirdTestimonial} align="left" />
          <div className="flex gap-4 items-center">
            <ResponsiveImage className="h-12 w-12 rounded-full" image={{ url: "images/parent-3.jpg" }} alt="Rodzice 5-letniego Jasia" />
            <div>
              <p>{data.thirdParents}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
