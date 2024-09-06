export default function AboutUs() {
  return (
    <section className="flex flex-col items-center gap-8 bg-stone-100 px-8 py-16 text-center lg:py-52">
      <h3 className="w-fit rounded-full border border-slate-300 px-4 py-2 text-blue-600">
        O nas
      </h3>
      <h2 className="font-display text-2xl text-slate-800 md:text-6xl 2xl:w-1/2 2xl:text-7xl">
        Ekoskrzat to przedszkole w domu z <strong>wielkim ogrodem</strong> w
        cichym zakątku dzielnicy Bieżanów - Prokocim.
      </h2>
      <p className="max-w-prose text-slate-600 2xl:text-2xl">
        Tutaj dzieci mogą czuć się szczęśliwe, spokojne i bezpieczne, a poprzez
        kontakt z przyrodą i przebywanie z dala od miejskiego smogu mają
        możliwość poznania wartości, które niesie życie w zdrowym otoczeniu.{" "}
      </p>
      <img
        className="lg:w-1/2"
        src="/images/about-img.png"
        alt="Obrazek skrzata"
      />
    </section>
  );
}
