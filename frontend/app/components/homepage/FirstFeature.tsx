export default function FirstFeature() {
  return (
    <section
      className="m-4 h-[200vh] rounded-3xl bg-slate-100 p-4 lg:h-screen"
      style={{
        backgroundImage: "url(/images/feature-1.png)",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="sticky top-[6rem] flex flex-col gap-8 rounded-2xl bg-slate-900 px-12 py-16 lg:w-1/3">
        <h3 className="text-2xl text-white 2xl:text-4xl">
          Przedszkole w domu z ogrodem
        </h3>
        <p className="text-slate-400 2xl:text-2xl">
          Ogród w przedszkolu Ekoskrzat odgrywa kluczową rolę w rozwoju dzieci.
          Pozwala im codziennie odkrywać przyrodę, rozwijać zmysły i uczyć się
          przez zabawę na świeżym powietrzu.
        </p>
      </div>
    </section>
  );
}
