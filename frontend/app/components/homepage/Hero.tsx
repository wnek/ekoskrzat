export default function Hero() {
  return (
    <div className="top-[5rem]">
      <section className="flex w-full flex-col bg-stone-100 text-center text-lg lg:flex-row lg:text-left">
        <div className="top-[5rem] flex h-[80vh] flex-col items-center justify-center gap-8 px-16 lg:sticky lg:h-[calc(100vh-5rem)] lg:items-start xl:px-48">
          <h2 className="max-w-prose font-display text-4xl text-slate-800 md:text-6xl 2xl:text-8xl">
            <strong>Przestrzeń</strong> dla rozwoju Twojego dziecka
          </h2>
          <p className="text-pretty text-slate-600 2xl:w-[60ch] 2xl:text-2xl">
            Ekoskrzat to przedszkole w domu z wielkim ogrodem w cichym zakątku
            dzielnicy Bieżanów - Prokocim.
          </p>
          <div className="flex flex-col items-center gap-4 lg:flex-row">
            <button className="rounded-full bg-green-500 px-6 py-3 text-white">
              Zapisz dziecko
            </button>
            {/* <a href="/o-nas">Dowiedz się więcej</a> */}
          </div>
        </div>
        <div className="w-full">
          <div className="h-[calc(100vh-5rem)]">
            <img
              className="h-full w-full object-cover"
              src="/images/hero-1.jpg"
              alt="Hero 1"
            />
          </div>
          <div className="h-[calc(100vh-5rem)]">
            <img
              className="h-full w-full object-cover"
              src="/images/hero-2.jpg"
              alt="Hero 2"
            />
          </div>
          <div className="h-[calc(100vh-5rem)]">
            <img
              className="h-full w-full object-cover"
              src="/images/hero-3.jpg"
              alt="Hero 3"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
