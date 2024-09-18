export default function Form() {
  return (
    <section className="flex flex-col gap-12 px-6 py-16 lg:flex-row xl:px-32 xl:py-32">
      <div className="flex flex-col gap-8">
        <h1 className="font-display text-4xl text-slate-800 md:text-6xl 2xl:text-7xl">
          Karta zgłoszenia
        </h1>
        <p className="text-pretty text-slate-600 2xl:max-w-prose 2xl:text-2xl">
          Serdecznie zapraszamy do dokonywania zapisów za pośrednictwem
          formularza. Po otrzymaniu zgłoszenia skontaktujemy się z Państwem z
          informacją o możliwości przyjęcia dziecka do przedszkola. W razie
          braku informacji zwrotnej prosimy o kontakt telefoniczny.
        </p>
      </div>
      <div className="w-full">
        <form className="flex flex-col gap-6">
          <p className="text-pretty text-slate-600 2xl:max-w-prose 2xl:text-2xl">
            Dane Dziecka
          </p>
          <input
            className="rounded-xl border p-3"
            type="text"
            placeholder="Imię i nazwisko dziecka*"
          />
          <input
            className="rounded-xl border p-3"
            type="text"
            placeholder="Data urodzenia*"
          />
          <input
            className="rounded-xl border p-3"
            type="text"
            placeholder="PESEL*"
          />
          <p className="text-pretty text-slate-600 2xl:max-w-prose 2xl:text-2xl">
            Adres zamieszkania
          </p>
          <input
            className="rounded-xl border p-3"
            type="text"
            placeholder="Ulica"
          />
          <input
            className="rounded-xl border p-3"
            type="text"
            placeholder="Miasto"
          />
          <input
            className="rounded-xl border p-3"
            type="text"
            placeholder="Województwo"
          />
        </form>
      </div>
    </section>
  );
}