import { H3 } from "../global/ui/Typography";

export default function SecondFeature() {

  return (
    <section

      className="relative my-4 min-h-screen justify-end rounded-3xl lg:flex lg:h-screen"
    >

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
          <H3 html="<strong>Unikalne</strong> podejście do dzieci" />
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
