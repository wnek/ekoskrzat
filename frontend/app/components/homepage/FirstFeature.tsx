export default function FirstFeature() {
  return (
    <section
      className="m-4 h-screen rounded-3xl bg-slate-100 p-4"
      style={{
        backgroundImage: "url(/images/feature-1.png)",
        backgroundSize: "cover",
      }}
    >
      <div className="sticky top-[6rem] gap-6 rounded-2xl bg-slate-900 p-6 lg:grid lg:w-1/3 lg:grid-flow-col">
        <h3 className="text-2xl text-white">Przedszkole w domu z ogrodem</h3>
        <p className="text-slate-400">
          Ogród w przedszkolu Ekoskrzat odgrywa kluczową rolę w rozwoju dzieci.
          Pozwala im codziennie odkrywać przyrodę, rozwijać zmysły i uczyć się
          przez zabawę na świeżym powietrzu.
        </p>
      </div>
    </section>
  );
}
