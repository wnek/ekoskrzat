export default function SecondtFeature() {
  return (
    <section
      className="m-4 flex h-[200vh] justify-end rounded-3xl bg-slate-100 p-4 lg:h-screen"
      style={{
        backgroundImage: "url(/images/feature-2.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="sticky top-[6rem] flex h-fit grid-cols-2 flex-col gap-8 rounded-2xl bg-white px-12 py-16 font-display lg:w-1/3">
        <h3 className="text-2xl text-slate-900 2xl:text-4xl">
          Unikalne podejście do dzieci
        </h3>
        <p className="text-slate-600 2xl:text-2xl">
          Wierzymy, że każde dziecko jest wyjątkowe i zasługuje na indywidualne
          podejście, które uwzględnia jego potrzeby, zainteresowania i tempo
          rozwoju.
        </p>
      </div>
    </section>
  );
}
