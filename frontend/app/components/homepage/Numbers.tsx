export default function Numbers() {
  return (
    <section className="m-4 flex h-screen flex-col items-center p-4 py-16 text-center lg:py-52">
      <h3 className="py-12 font-display text-4xl text-slate-800 2xl:text-4xl">
        Ekoskrzat w <strong>liczbach</strong>
      </h3>
      <div className="grid w-full gap-4 text-left xl:w-1/2 xl:grid-cols-2 2xl:w-1/3">
        <div className="flex flex-col gap-8 rounded-3xl bg-slate-100 p-6 text-slate-600 xl:col-span-2">
          <h4 className="font-display text-6xl text-slate-800">451</h4>
          <p className="2xl:text-2xl">Absolwentów</p>
        </div>{" "}
        <div className="flex flex-col gap-8 rounded-3xl bg-stone-100 p-6 text-slate-600">
          <h4 className="font-display text-6xl text-slate-800">15</h4>
          <p className="2xl:text-2xl">Lat na rynku</p>
        </div>
        <div className="flex flex-col gap-8 rounded-3xl bg-slate-100 p-6 text-slate-600">
          <h4 className="font-display text-6xl text-slate-800">
            400m<sup>2</sup>
          </h4>
          <p className="2xl:text-2xl">Powierzchnia ogrodu</p>
        </div>
        <div className="flex flex-col gap-8 rounded-3xl bg-green-100 p-6 text-slate-600 xl:col-span-2">
          <h4 className="font-display text-6xl text-slate-800">7</h4>
          <p className="2xl:text-2xl">Nowoczesnych sal</p>
        </div>
      </div>
    </section>
  );
}
