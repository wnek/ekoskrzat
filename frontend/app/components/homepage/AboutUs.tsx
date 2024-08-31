export default function AboutUs() {
  return (
    <section className="flex flex-col bg-slate-100 py-52 text-center">
      <h2>O nas</h2>
      <h2 className="sm:text-5xl md:text-6xl 2xl:text-8xl">
        Ekoskrzat to przedszkole w domu z wielkim ogrodem w cichym zakątku
        dzielnicy Bieżanów - Prokocim.
      </h2>
      <p>
        Tutaj dzieci mogą czuć się szczęśliwe, spokojne i bezpieczne, a poprzez
        kontakt z przyrodą i przebywanie z dala od miejskiego smogu mają
        możliwość poznania wartości, które niesie życie w zdrowym otoczeniu.{" "}
      </p>
      <img src="/images/about-img.png" alt="Obrazek skrzata" />
    </section>
  );
}
