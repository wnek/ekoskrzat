import { Form } from "@remix-run/react";

export default function SubmitForm() {
  return (
    <section className="grid grid-cols-1 gap-12 px-6 py-16 lg:flex-row xl:grid-cols-2 xl:px-32 xl:py-32">
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
        <Form className="flex flex-col gap-4">
          <p className="text-pretty text-slate-600 2xl:max-w-prose 2xl:text-2xl">
            Dane Dziecka
          </p>

          <label htmlFor="childName" className="text-sm text-slate-600">
            Imię i nazwisko dziecka*
          </label>
          <input
            className="rounded-xl border p-3"
            type="text"
            name="childName"
          />

          <label htmlFor="childName" className="text-sm text-slate-600">
            Data urodzenia*
          </label>
          <input
            className="rounded-xl border p-3"
            type="text"
            name="childBirthDate"
          />

          <label htmlFor="childPesel" className="text-sm text-slate-600">
            PESEL*
          </label>
          <input
            className="rounded-xl border p-3"
            type="text"
            name="childPesel"
          />

          <p className="text-pretty text-slate-600 2xl:max-w-prose 2xl:text-2xl">
            Adres zamieszkania
          </p>

          <label htmlFor="street" className="text-sm text-slate-600">
            Ulica
          </label>
          <input className="rounded-xl border p-3" type="text" name="street" />

          <label htmlFor="city" className="text-sm text-slate-600">
            Miast
          </label>
          <input className="rounded-xl border p-3" type="text" name="city" />

          <label htmlFor="state" className="text-sm text-slate-600">
            Województwo
          </label>
          <input className="rounded-xl border p-3" type="text" name="state" />

          <p className="text-pretty text-slate-600 2xl:max-w-prose 2xl:text-2xl">
            Informacje o rodzicach lub opiekunach
          </p>

          <label htmlFor="parentName" className="text-sm text-slate-600">
            Imię i nazwisko*
          </label>
          <input
            className="rounded-xl border p-3"
            type="text"
            name="parentName"
          />

          <label htmlFor="parentPhone" className="text-sm text-slate-600">
            Telefon*
          </label>
          <input
            className="rounded-xl border p-3"
            type="text"
            name="parentPhone"
          />

          <label htmlFor="parentEmail" className="text-sm text-slate-600">
            E-mail*
          </label>
          <input
            className="rounded-xl border p-3"
            type="text"
            name="parentEmail"
          />

          <label htmlFor="startDate" className="text-sm text-slate-600">
            Data rozpoczęcia
          </label>
          <input
            className="rounded-xl border p-3"
            type="date"
            name="startDate"
          />

          <label htmlFor="parentComments" className="text-sm text-slate-600">
            Uwagi
          </label>
          <input
            className="rounded-xl border p-3"
            type="text"
            name="parentComments"
          />

          <label htmlFor="terms" className="text-sm text-slate-600">
            Akceptuję regulamin przedszkola i wyrażam zgodę na przetwarzanie
          </label>
          <input type="checkbox" name="terms" required />

          <input type="submit" value="Wyślij" />
        </Form>
      </div>
    </section>
  );
}
