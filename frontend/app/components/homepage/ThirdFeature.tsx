export default function ThirdFeature() {
  return (
    <section className="my-4 h-[100vh] rounded-3xl lg:h-screen">
      <div
        className="mx-4 h-1/2 rounded-3xl lg:absolute lg:h-full lg:w-[calc(100vw-3rem)]"
        style={{
          backgroundImage: "url(/images/feature-3.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      ></div>
      <div className="mx-4 py-4 lg:sticky lg:top-[5rem] lg:mx-8 lg:w-1/3">
        <div className="flex flex-col gap-8 rounded-3xl bg-slate-900 px-12 py-16 lg:rounded-2xl">
          <h3 className="font-display text-2xl text-white 2xl:text-4xl">
            <strong>Masz pytania?</strong>
            <br />
            Chętnie na każde odpowiemy
          </h3>
        </div>
      </div>
    </section>
  );
}
