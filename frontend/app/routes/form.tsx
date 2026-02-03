import { Form, redirect, json } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    {
      title: "Karta zgłoszeniowa - Prywatne Przedszkole Ekoskrzat - Kraków ",
      name: "description",
      content: "Serdecznie zapraszamy do dokonywania zapisów dziecka do przedszkola za pośrednictwem formularza.",
    },
    {
      name: "robots",
      content: "index, follow",
    },
  ];
};

export async function action({ request }: { request: Request }) {
  const formData = await request.formData();

  const formFields = [
    "childName", "childBirthDate", "childPesel", "street", "city", "state",
    "parentName", "parentPhone", "parentEmail", "startDate", "parentComments"
  ] as const;

  const formValues = Object.fromEntries(
    formFields.map(field => [field, formData.get(field)])
  ) as Record<typeof formFields[number], string>;

  try {
    const response = await fetch(`http://127.0.0.1:1337/api/form`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formValues),
    });
    if (!response.ok) {
      return json({ error: "Failed to send email." }, { status: 500 });
    }
    return redirect("/thank-you");
  } catch (error) {
    console.error(error);
  }
}

export default function SubmitForm() {
  return (
    <>
      <nav className="top-0 z-50 flex h-20 items-center justify-between bg-white p-4 2xl:text-xl">
        <h1>
          <a href="/">
            <img src="/images/logo.svg" alt="Logo" />
          </a>
        </h1>
      </nav>

      <section className="m-auto grid grid-cols-1 gap-12 px-6 py-16 lg:flex-row lg:justify-center xl:w-3/5 xl:grid-cols-2 xl:gap-32 xl:py-32">
        <div className="flex flex-col gap-8">
          <div className="flex w-fit rounded-full bg-stone-100 p-2">
            <img src="/images/form.svg" alt="Ikonka ołówka" />
          </div>
          <h1 className="font-display text-4xl text-slate-800 md:text-6xl 2xl:text-7xl">
            Karta zgłoszenia
          </h1>
          <p className="text-pretty text-slate-600 2xl:max-w-prose 2xl:text-2xl">
            Serdecznie zapraszamy do dokonywania zapisów za pośrednictwem
            formularza. Po otrzymaniu zgłoszenia skontaktujemy się z Państwem z
            informacją o możliwości przyjęcia dziecka do przedszkola.
          </p>

          <p className="text-pretty text-sm text-slate-400">
            W razie braku informacji zwrotnej prosimy o kontakt telefoniczny pod
            numerem: 535 553 599.
          </p>
        </div>
        <div className="w-full">
          <Form method="POST" className="flex flex-col gap-8">
            <div className="flex flex-col gap-6 rounded-3xl bg-green-100 px-8 py-12">
              <p className="text-pretty text-slate-600 2xl:max-w-prose 2xl:text-2xl">
                Dane Dziecka
              </p>

              <label className="flex flex-col gap-1 text-sm text-slate-600">
                Imię i nazwisko dziecka*
                <input
                  className="rounded-xl border p-3"
                  type="text"
                  name="childName"
                  required
                />
              </label>

              <label className="flex flex-col gap-1 text-sm text-slate-600">
                Data urodzenia*
                <input
                  className="rounded-xl border p-3"
                  type="date"
                  name="childBirthDate"
                  required
                />
              </label>

              <label className="flex flex-col gap-1 text-sm text-slate-600">
                PESEL*
                <input
                  className="rounded-xl border p-3"
                  type="number"
                  name="childPesel"
                  required
                />
              </label>
            </div>

            <div className="flex flex-col gap-6 rounded-3xl bg-stone-100 px-8 py-12">
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

            <div className="flex flex-col gap-6 rounded-3xl bg-slate-100 px-8 py-12">
              <p className="text-pretty text-slate-600 2xl:max-w-prose 2xl:text-2xl">
                Informacje o rodzicach lub opiekunach
              </p>

              <label className="flex flex-col gap-1 text-sm text-slate-600">
                Imię i nazwisko*
                <input
                  className="rounded-xl border p-3"
                  type="text"
                  name="parentName"
                  required
                />
              </label>

              <label className="flex flex-col gap-1 text-sm text-slate-600">
                Telefon*
                <input
                  className="rounded-xl border p-3"
                  type="number"
                  name="parentPhone"
                  required
                />
              </label>

              <label className="flex flex-col gap-1 text-sm text-slate-600">
                E-mail*
                <input
                  className="rounded-xl border p-3"
                  type="email"
                  name="parentEmail"
                  required
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
                <textarea
                  className="rounded-xl border p-3"
                  name="parentComments"
                />
              </label>
            </div>

            <div className="flex flex-col gap-6">
              <label className="flex flex-row-reverse justify-end gap-2 text-sm text-slate-600">
                <div className="text-xs">
                  Oświadczam, że zapoznałam/zapoznałem się z&nbsp;
                  <a
                    href="/rodo"
                    target="_blank"
                    className="blue-500 underline"
                  >
                    klauzulą informacyjną o przetwarzaniu danych osobowych przez
                    Przedszkole Niepubliczne EKOSKRZAT w związku z rekrutacją do
                    przedszkola.
                  </a>
                </div>
                <input
                  type="checkbox"
                  name="terms"
                  required
                  className="h-8 w-8"
                />
              </label>
              <button
                className="flex cursor-pointer items-center justify-between gap-6 rounded-full bg-green-600 py-2 pl-6 pr-2 text-white 2xl:text-xl hover:bg-green-800"
                type="submit"
              >

                Wyślij
                <div className="flex h-8 w-8 rounded-full bg-white p-2">
                  <img src="/images/arrow.svg" alt="Strzałka" />
                </div>
              </button>
            </div>
          </Form>
        </div>
      </section>
    </>
  );
}
