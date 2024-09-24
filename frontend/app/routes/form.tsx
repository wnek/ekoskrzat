import { Form } from "@remix-run/react";

export default function SubmitForm() {
  return (
    <section className="m-auto grid grid-cols-1 gap-12 px-6 py-16 lg:flex-row lg:justify-center xl:w-3/5 xl:grid-cols-2 xl:gap-32 xl:py-32">
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
        <Form method="POST" className="flex flex-col gap-20">
          <div className="flex flex-col gap-6">
            <p className="text-pretty text-slate-600 2xl:max-w-prose 2xl:text-2xl">
              Dane Dziecka
            </p>

            <label className="flex flex-col gap-1 text-sm text-slate-600">
              Imię i nazwisko dziecka*
              <input
                className="rounded-xl border p-3"
                type="text"
                name="childName"
              />
            </label>

            <label className="flex flex-col gap-1 text-sm text-slate-600">
              Data urodzenia*
              <input
                className="rounded-xl border p-3"
                type="text"
                name="childBirthDate"
              />
            </label>

            <label className="flex flex-col gap-1 text-sm text-slate-600">
              PESEL*
              <input
                className="rounded-xl border p-3"
                type="text"
                name="childPesel"
              />
            </label>
          </div>

          <div className="flex flex-col gap-6">
            <p className="text-pretty text-slate-600 2xl:max-w-prose 2xl:text-2xl">
              Adres zamieszkania
            </p>

            <label className="flex flex-col gap-1 text-sm text-slate-600">
              Ulica
              <input
                className="rounded-xl border p-3"
                type="text"
                name="street"
              />
            </label>

            <label className="flex flex-col gap-1 text-sm text-slate-600">
              Miasto
              <input
                className="rounded-xl border p-3"
                type="text"
                name="city"
              />
            </label>

            <label className="flex flex-col gap-1 text-sm text-slate-600">
              Województwo
              <input
                className="rounded-xl border p-3"
                type="text"
                name="state"
              />
            </label>
          </div>

          <div className="flex flex-col gap-6">
            <p className="text-pretty text-slate-600 2xl:max-w-prose 2xl:text-2xl">
              Informacje o rodzicach lub opiekunach
            </p>

            <label className="flex flex-col gap-1 text-sm text-slate-600">
              Imię i nazwisko*
              <input
                className="rounded-xl border p-3"
                type="text"
                name="parentName"
              />
            </label>

            <label className="flex flex-col gap-1 text-sm text-slate-600">
              Telefon*
              <input
                className="rounded-xl border p-3"
                type="text"
                name="parentPhone"
              />
            </label>

            <label className="flex flex-col gap-1 text-sm text-slate-600">
              E-mail*
              <input
                className="rounded-xl border p-3"
                type="text"
                name="parentEmail"
              />
            </label>

            <label className="flex flex-col gap-1 text-sm text-slate-600">
              Data rozpoczęcia
              <input
                className="rounded-xl border p-3"
                type="date"
                name="startDate"
              />
            </label>

            <label className="flex flex-col gap-1 text-sm text-slate-600">
              Uwagi
              <input
                className="rounded-xl border p-3"
                type="text"
                name="parentComments"
              />
            </label>
          </div>

          <div className="flex flex-col gap-6">
            <label className="flex flex-row-reverse justify-end gap-2 text-sm text-slate-600">
              Akceptuję regulamin przedszkola i wyrażam zgodę na przetwarzanie
              <input type="checkbox" name="terms" required />
            </label>
            <input
              className="flex cursor-pointer items-center justify-between gap-6 rounded-full bg-green-500 py-2 pl-6 pr-2 text-white 2xl:text-xl"
              type="submit"
              value="Wyślij"
            />
          </div>
        </Form>
      </div>
    </section>
  );
}
