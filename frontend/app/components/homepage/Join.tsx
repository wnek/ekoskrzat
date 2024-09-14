export default function Join() {
  return (
    <section className="my-4 min-h-screen rounded-3xl lg:h-screen">
      <div
        className="mx-4 h-screen rounded-3xl lg:absolute lg:h-full lg:w-[calc(100vw-3rem)]"
        style={{
          backgroundImage: "url(/images/join.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      ></div>
      <div className="mx-4 py-4 lg:sticky lg:top-[5rem] lg:mx-8 lg:w-1/3">
        <div className="flex flex-col gap-8 rounded-3xl bg-slate-900 px-12 py-16 lg:rounded-2xl">
          <h3 className="font-display text-2xl text-white 2xl:text-4xl">
            Dołącz do nas!
          </h3>
        </div>
      </div>
    </section>
  );
}
