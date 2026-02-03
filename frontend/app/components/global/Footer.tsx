export default function Footer() {
  return (
    <section
      id="footer"
      className="mx-4 flex min-h-screen flex-col items-center gap-12 pt-16 text-center lg:pt-52"
    >
      <div className="flex w-full flex-col items-center gap-12 sm:flex-row lg:items-stretch xl:px-32">

        <div className="flex w-full grid-cols-2 flex-col gap-4 text-left xl:grid">

          <div className="flex flex-col justify-between gap-4 rounded-3xl bg-green-100 p-8 text-slate-800 col-span-2 lg:h-full ">
            <p className="font-bold 2xl:text-2xl">Mapa dojazdu</p>
            <iframe
              title="Mapa dojazdu do Przedszkole Niepubliczne EkoSkrzat Kraków"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4513.91929308413!2d20.032213877784287!3d50.009107671511266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716438e63f52e63%3A0x9002fadc9bd0891f!2sPrzedszkole%20Niepubliczne%20EkoSkrzat%20Krak%C3%B3w!5e1!3m2!1sen!2spl!4v1762804184736!5m2!1sen!2spl"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[450px] rounded-lg"
            />
          </div>


          <div className="flex flex-col justify-between gap-4 rounded-3xl bg-green-100 p-8 text-slate-800">
            <div className="flex w-fit items-center rounded-full bg-white p-2">
              <img src="/images/home.svg" alt="Dom" className="w-6" />
            </div>
            <div>
              <p className="font-bold 2xl:text-2xl">Adres</p>
              <p className="2xl:text-2xl">Rakuś 72, 30-864 Kraków</p>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-24 rounded-3xl bg-slate-100 p-8 text-slate-800">
            <div className="flex w-fit items-center rounded-full bg-white p-2">
              <img src="/images/phone.svg" alt="Telefon" className="w-6" />
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
              <img src="/images/clock.svg" alt="Zegar" className="w-6" />
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
              <img src="/images/mail.svg" alt="Zegar" className="w-6" />
            </div>
            <div>
              <p className="font-bold 2xl:text-2xl">E-mail</p>
              <p className="2xl:text-2xl">ekoskrzat.przedszkole@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full xl:px-32">
        <div className="flex items-center justify-between gap-4 border-t border-dashed border-slate-300 py-6 text-slate-800">
          <a href="/parentsGallery" className="hover:underline">
            Galeria dla rodziców
          </a>

          <div className="flex items-center gap-4">
            <p>Polub nas na</p>
            <a
              href="https://www.facebook.com/przedszkoleekoskrzat"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/images/facebook.svg" alt="Facebook" className="w-8" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex min-h-[40vh] w-full items-end xl:px-32">
        <img src="/images/footer.jpg" alt="Footer" className="w-full" />
      </div>
    </section>
  );
}
