export default function Testimonials() {
  return (
    <section className="m-4 flex min-h-screen flex-col items-center py-16 text-center lg:py-52">
      <h3 className="w-fit rounded-full border border-slate-300 px-4 py-2 text-blue-600">
        O nas
      </h3>
      <h2 className="py-12 font-display text-4xl text-slate-800 2xl:text-4xl">
        <strong>Co mówią rodzice</strong> o naszym przedszkolu
      </h2>
      <div className="flex w-full flex-col gap-4 text-left lg:flex-row xl:px-32">
        <div className="flex flex-col justify-between gap-24 rounded-3xl bg-stone-100 p-8 text-slate-800">
          <p className="2xl:text-2xl">
            Ekoskrzat to przedszkole, które przerosło nasze oczekiwania. Zosia
            uwielbia tam chodzić, a my jesteśmy spokojni, wiedząc, że jest w
            dobrych rękach. <strong>Czyste powietrze, zdrowe jedzenie</strong> i
            mnóstwo czasu na świeżym powietrzu – to wszystko sprawia, że Zosia
            wraca do domu z uśmiechem na twarzy.
          </p>
          <div className="flex gap-4">
            <img
              className="h-12 w-12 rounded-full"
              src="images/parent-1.jpg"
              alt="Rodzice 4-letniej Zosi"
            />
            <div>
              <p>Marta i Tomek</p>
              <p className="text-sm text-slate-400">rodzice 4-letniej Zosi</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-24 rounded-3xl bg-slate-100 p-6 text-slate-800">
          <p className="2xl:text-2xl">
            Jesteśmy bardzo zadowoleni z wyboru Ekoskrzata. Jaś codziennie
            opowiada nam o nowych przygodach i zabawach. Przedszkole kładzie
            duży nacisk na <strong>ekologię</strong>, co bardzo nam się podoba.
            Jaś nauczył się tam, jak dbać o środowisko i teraz sam przypomina
            nam o segregacji śmieci.
          </p>
          <div className="flex gap-4">
            <img
              className="h-12 w-12 rounded-full"
              src="images/parent-2.jpg"
              alt="Rodzice 5-letniego Jasia"
            />
            <div>
              <p>Kasia i Marek</p>
              <p className="text-sm text-slate-400">rodzice 5-letniego Jasia</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-24 rounded-3xl bg-green-100 p-6 text-slate-800">
          <p className="2xl:text-2xl">
            Ola jest zachwycona przedszkolem Ekoskrzat. Pracownicy są serdeczni
            i zaangażowani, a program edukacyjny jest bogaty i zróżnicowany. Ola
            nauczyła się tam wiele nowych rzeczy, a my widzimy, jak szybko się
            rozwija. Polecamy Ekoskrzat wszystkim rodzicom, którzy chcą, aby ich
            dziecko rozwijało się w zdrowym i{" "}
            <strong>bezpiecznym środowisku</strong>.
          </p>
          <div className="flex gap-4">
            <img
              className="h-12 w-12 rounded-full"
              src="images/parent-2.jpg"
              alt="Rodzice 5-letniego Jasia"
            />
            <div>
              <p>Anna i Piotr</p>
              <p className="text-sm text-slate-400">rodzice 5-letniej Oli</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
