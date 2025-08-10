import { H2 } from "../global/ui/Typography";
import ResponsiveImage from "~/components/global/ui/ResponsiveImage";

export default function Join() {
  return (
    <section className="my-4 min-h-screen rounded-3xl lg:grid lg:h-screen lg:grid-cols-2 lg:rounded-none lg:bg-slate-900 lg:py-4">
      <div className="mx-4 h-screen rounded-3xl lg:h-full overflow-hidden">
        <ResponsiveImage
          image={{ url: "/images/join.jpg" }}
          className="h-full w-full object-cover"
          sizes="(min-width: 1280px) 50vw, (min-width: 1024px) 50vw, 100vw"
          alt=""
        />
      </div>
      <div className="2xl:px-30 mx-4 py-4 lg:mx-8 lg:flex lg:items-center lg:justify-center">
        <div className="flex flex-col gap-8 rounded-3xl bg-slate-900 px-12 py-16 lg:flex lg:items-center lg:rounded-2xl lg:text-center">
          <H2 html="<strong>Dołącz</strong> do nas!" color="white" />


          <p className="text-slate-400 2xl:px-32 2xl:text-2xl">
            Daj swojemu dziecku szansę na radosne i inspirujące przedszkolne
            doświadczenia. Sprawdź, jak możemy wspólnie odkrywać świat!
          </p>
          <a
            href="#footer"
            className="flex items-center justify-between gap-6 rounded-full bg-green-600 py-2 pl-6 pr-2 text-white 2xl:text-xl hover:bg-green-800"
          >
            Porozmawiajmy
            <div className="flex h-8 w-8 rounded-full bg-white p-2">
              <img src="images/arrow.svg" alt="Strzałka" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
