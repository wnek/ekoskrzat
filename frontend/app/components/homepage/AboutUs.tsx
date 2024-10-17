import { H2 } from "../global/ui/Typography";

export default function AboutUs() {
  return (
    <section className="bg-stone-100 px-4 py-16 text-center lg:px-8 lg:py-52 xl:px-24">
      <div className="2xl:w-3/4 flex flex-col items-center gap-8 justify-center mx-auto">
        <h3 className="w-fit rounded-full border border-slate-300 px-4 py-2 text-blue-600">
          O nas
        </h3>
        <H2 html={"Ekoskrzat to przedszkole w domu z <strong>dużym ogrodem sensoryczno-edukacyjnym i dwoma placami zabaw</strong>, mieszczące się w dzielnicy Bieżanów – Prokocim"}>

        </H2>
        <p className="max-w-prose text-slate-600 2xl:text-2xl">
          Tutaj dzieci mogą czuć się szczęśliwe, spokojne i bezpieczne, a poprzez kontakt z przyrodą i przebywanie z dala od miejskiego zgiełku mają możliwość poznania wartości, które niesie życie w zdrowym otoczeniu.
        </p>
        <img
          className="lg:w-1/2"
          src="/images/about-img.png"
          alt="Obrazek skrzata"
        />
      </div>
    </section>
  );
}
