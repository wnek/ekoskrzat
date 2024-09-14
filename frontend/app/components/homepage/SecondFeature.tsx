export default function SecondFeature() {
  return (
    <section className="my-4 h-[100vh] rounded-3xl lg:h-screen">
      <div
        className="mx-4 h-1/2 rounded-3xl lg:absolute lg:h-full lg:w-[calc(100vw-3rem)]"
        style={{
          backgroundImage: "url(/images/feature-1.png)",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      ></div>
      <div className="mx-4 py-4 lg:sticky lg:top-[5rem] lg:mx-8 lg:w-1/3">
        <div className="flex flex-col gap-8 rounded-3xl bg-stone-200 px-12 py-16 lg:rounded-2xl">
          <h3 className="text-sla font-display text-2xl 2xl:text-4xl">
            Unikalne podejście do dzieci
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
