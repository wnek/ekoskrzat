export default function ThankYou() {
  return (
    <>
      <nav className="top-0 z-50 flex h-20 items-center justify-between bg-white p-4 2xl:text-xl">
        <h1>
          <a href="/">
            <img src="/images/logo.svg" alt="Logo" />
          </a>
        </h1>
      </nav>
      <section className="flex h-[calc(100vh-5rem)] flex-col items-center justify-center gap-8">
        <img src="/images/thank-you.jpg" alt="Dziękujemy" className="h-32" />
        <h1 className="font-display text-4xl text-slate-800 md:text-6xl 2xl:text-7xl">
          Dziękujemy za zgłoszenie!
        </h1>
        <p className="text-pretty text-slate-600 2xl:max-w-prose 2xl:text-2xl">
          Odpowiemy na nie w najbliższym możliwym terminie
        </p>
        <a
          href="/"
          className="flex items-center justify-between gap-6 rounded-full bg-green-500 py-2 pl-6 pr-2 text-white 2xl:text-xl"
        >
          Wróć na stronę główną
          <div className="flex h-8 w-8 rounded-full bg-white p-2">
            <img src="images/arrow.svg" alt="Strzałka" />
          </div>
        </a>
      </section>
    </>
  );
}
