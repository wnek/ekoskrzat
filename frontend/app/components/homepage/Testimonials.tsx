export default function Testimonials() {
  return (
    <section className="m-4 flex min-h-screen flex-col items-center py-16 text-center lg:py-52">
      <h3 className="py-12 font-display text-4xl text-slate-800 2xl:text-4xl">
        <strong>Co mówią rodzice</strong> o naszym przedszkolu
      </h3>
      <div className="flex w-full flex-col gap-4 text-left lg:flex-row xl:px-32">
        <div className="flex flex-col gap-8 rounded-3xl bg-stone-100 p-6 text-slate-600">
          <p className="2xl:text-2xl">
            Ekoskrzat to przedszkole, które przerosło nasze oczekiwania. Zosia
            uwielbia tam chodzić, a my jesteśmy spokojni, wiedząc, że jest w
            dobrych rękach. <strong>Czyste powietrze, zdrowe jedzenie</strong> i
            mnóstwo czasu na świeżym powietrzu – to wszystko sprawia, że Zosia
            wraca do domu z uśmiechem na twarzy.
          </p>
          <div>
            <p>Marta i Tomek</p>
            <p className="text-sm text-slate-400">rodzice 4-letniej Zosi</p>
          </div>
        </div>
        <div className="flex flex-col gap-8 rounded-3xl bg-slate-100 p-6 text-slate-600">
          <p className="2xl:text-2xl">
            Jesteśmy bardzo zadowoleni z wyboru Ekoskrzata. Jaś codziennie
            opowiada nam o nowych przygodach i zabawach. Przedszkole kładzie
            duży nacisk na <strong>ekologię</strong>, co bardzo nam się podoba.
            Jaś nauczył się tam, jak dbać o środowisko i teraz sam przypomina
            nam o segregacji śmieci.
          </p>
        </div>
        <div className="flex flex-col gap-8 rounded-3xl bg-green-100 p-6 text-slate-600">
          <p className="2xl:text-2xl">
            Ola jest zachwycona przedszkolem Ekoskrzat. Pracownicy są serdeczni
            i zaangażowani, a program edukacyjny jest bogaty i zróżnicowany. Ola
            nauczyła się tam wiele nowych rzeczy, a my widzimy, jak szybko się
            rozwija. Polecamy Ekoskrzat wszystkim rodzicom, którzy chcą, aby ich
            dziecko rozwijało się w zdrowym i{" "}
            <strong>bezpiecznym środowisku</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}
