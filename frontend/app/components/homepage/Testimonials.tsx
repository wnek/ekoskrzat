import { H2 } from "../global/ui/Typography";


export default function Testimonials({ data }: { data: TestimonialsData }) {
  return (
    <section className="m-4 flex min-h-screen flex-col items-center py-16 text-center lg:py-52">
      <h3 className="w-fit rounded-full border border-slate-300 px-4 py-2 text-blue-600 my-4">
        Mówią o nas
      </h3>
      <H2 html={data.title} />

      <div className="flex w-full flex-col gap-4 text-left lg:flex-row xl:px-32 py-12">
        <div className="flex flex-col justify-between gap-24 rounded-3xl bg-stone-100 p-8 text-slate-800">
          <p className="2xl:text-2xl">
            {data.firstTestimonial}
          </p>
          <div className="flex gap-4 items-center">
            <img
              className="h-12 w-12 rounded-full"
              src="images/parent-1.jpg"
              alt="Rodzice 4-letniej Zosi"
            />
            <div>
              <p>{data.firstParents}</p>

            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-24 rounded-3xl bg-slate-100 p-6 text-slate-800">
          <p className="2xl:text-2xl">
            {data.secondTestimonial}
          </p>
          <div className="flex gap-4 items-center">
            <img
              className="h-12 w-12 rounded-full"
              src="images/parent-2.jpg"
              alt="Rodzice 5-letniego Jasia"
            />
            <div>
              <p>{data.secondParents}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-24 rounded-3xl bg-green-100 p-6 text-slate-800">
          <p className="2xl:text-2xl">
            {data.thirdTestimonial}
          </p>
          <div className="flex gap-4 items-center">
            <img
              className="h-12 w-12 rounded-full"
              src="images/parent-3.jpg"
              alt="Rodzice 5-letniego Jasia"
            />
            <div>
              <p>{data.thirdParents}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
