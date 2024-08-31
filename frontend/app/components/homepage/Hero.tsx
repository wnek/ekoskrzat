export default function Hero() {
  return (
    <div className="top-[5rem]">
      <section className="flex w-full flex-col bg-slate-100 text-center lg:flex-row lg:text-left">
        <div className="top-[5rem] flex h-[calc(100vh-5rem)] w-full flex-col items-start justify-center gap-8 px-20 lg:sticky">
          <h2 className="max-w-prose sm:text-5xl md:text-6xl 2xl:text-8xl">
            Przestrzeń dla rozwoju Twojego dziecka
          </h2>
          <p>
            Ekoskrzat to przedszkole w domu z wielkim ogrodem w cichym zakątku
            dzielnicy Bieżanów - Prokocim.
          </p>
          <div className="flex gap-4">
            <button className="">Zapisz dziecko</button>
            <a href="/o-nas">Dowiedz się więcej</a>
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
          <div className="h-[calc(100vh-5rem)]-[100vh]">
            <img
              className="h-full w-full object-cover"
              src="/images/hero-2.jpg"
              alt="Hero 2"
            />
          </div>
          <div className="h-[calc(100vh-5rem)]-[100vh]">
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
