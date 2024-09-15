export default function Footer() {
  return (
    <section className="mx-4 flex min-h-screen flex-col items-center gap-12 pt-16 text-center lg:pt-52">
      <div className="flex w-full flex-col items-center gap-12 lg:flex-row lg:items-start xl:px-32">
        <div className="w-full xl:w-1/3 2xl:w-1/2">
          <img src="images/logo.svg" alt="Logo" className="w-8" />
        </div>

        <div className="flex w-full grid-cols-2 flex-col gap-4 text-left xl:grid">
          <div className="flex flex-col justify-between gap-4 rounded-3xl bg-green-100 p-8 text-slate-800">
            <div className="flex w-fit items-center rounded-full bg-white p-2">
              <img src="images/home.svg" alt="Dom" className="w-6" />
            </div>
            <div>
              <p className="font-bold 2xl:text-2xl">Adres</p>
              <p className="2xl:text-2xl">Rakuś 72, 30-864 Kraków</p>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-24 rounded-3xl bg-slate-100 p-8 text-slate-800">
            <div className="flex w-fit items-center rounded-full bg-white p-2">
              <img src="images/phone.svg" alt="Telefon" className="w-6" />
            </div>
            <div className="flex flex-col gap-6">
              <div>
                <p className="mb-6 font-bold 2xl:text-2xl">
                  Kontakt telefoniczny
                </p>
                <p className="2xl:text-2xl">Gabinet dyrektora</p>
                <p className="2xl:text-2xl">tel. 535 553 599</p>
              </div>
              <hr />
              <div>
                <p className="2xl:text-2xl">
                  Grupa „Krasnale”, Grupa „Skrzaty”
                </p>
                <p className="2xl:text-2xl">tel. 577 010 202</p>
              </div>
              <hr />
              <div>
                <p className="2xl:text-2xl">
                  Grupa “Chochliki”, Grupa “Elfiki”
                </p>
                <p className="2xl:text-2xl">tel. 577 299 599</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-24 rounded-3xl bg-slate-100 p-8 text-slate-800">
            <div className="flex w-fit items-center rounded-full bg-white p-2">
              <img src="images/clock.svg" alt="Zegar" className="w-6" />
            </div>
            <div>
              <p className="font-bold 2xl:text-2xl">Godziny otwarcia</p>
              <p className="2xl:text-2xl">
                Przedszkole czynne od poniedziałku do piątku, w godzinach 7.00 –
                17.30
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-24 rounded-3xl bg-stone-100 p-8 text-slate-800">
            <div className="flex w-fit items-center rounded-full bg-white p-2">
              <img src="images/mail.svg" alt="Zegar" className="w-6" />
            </div>
            <div>
              <p className="font-bold 2xl:text-2xl">E-mail</p>
              <p className="2xl:text-2xl">ekoskrzat.przedszkole@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full xl:px-32">
        <div className="flex items-center justify-end gap-4 border-t border-dashed border-slate-300 py-6 text-slate-800">
          <p>Polub nas na</p>
          <img src="images/facebook.svg" alt="Facebook" className="w-8" />
        </div>
      </div>
      <div className="flex min-h-[60vh] w-full items-end xl:px-32">
        <img src="images/footer.jpg" alt="Footer" className="w-full" />
      </div>
    </section>
  );
}
