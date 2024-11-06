import { H2 } from "../global/ui/Typography";


export default function Testimonials() {
  return (
    <section className="m-4 flex min-h-screen flex-col items-center py-16 text-center lg:py-52">
      <h3 className="w-fit rounded-full border border-slate-300 px-4 py-2 text-blue-600 my-4">
        O nas
      </h3>
      <H2 html="Co mówią rodzice o naszym przedszkolu" />

      <div className="flex w-full flex-col gap-4 text-left lg:flex-row xl:px-32 py-12">
        <div className="flex flex-col justify-between gap-24 rounded-3xl bg-stone-100 p-8 text-slate-800">
          <p className="2xl:text-2xl">
            Przedszkole to miejsce, które łączy doskonałą opiekę z silnym naciskiem na rozwój edukacyjny dzieci. Zwróciliśmy uwagę na <strong>różnorodne zajęcia dodatkowe, takie jak nauka gry na bębnach czy robotyka</strong>. To wyjątkowe, że przedszkole oferuje tak szeroką gamę aktywności, co pozwala dzieciom rozwijać się w wielu dziedzinach, oszczędzając rodzicom czas i wysiłek w organizacji dodatkowych zajęć.
          </p>
          <div className="flex gap-4 items-center">
            <img
              className="h-12 w-12 rounded-full"
              src="images/parent-1.jpg"
              alt="Rodzice 4-letniej Zosi"
            />
            <div>
              <p>Rodzice Leosia i Neli</p>

            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-24 rounded-3xl bg-slate-100 p-6 text-slate-800">
          <p className="2xl:text-2xl">
            Trzy lata w przedszkolu wspominamy cudownie, córka każdego dnia wychodziła z przedszkola zadowolona, a my rodzice mieliśmy poczucie, że dziecko trafiło do odpowiedniego, bezpiecznego i bardzo atrakcyjnego dla dziecka miejsca! <strong>Cudowne panie, świetne zaplecze</strong>, a program to po prostu rewelacja! Polecamy gorąco!
          </p>
          <div className="flex gap-4 items-center">
            <img
              className="h-12 w-12 rounded-full"
              src="images/parent-2.jpg"
              alt="Rodzice 5-letniego Jasia"
            />
            <div>
              <p>Rodzice Ali</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-24 rounded-3xl bg-green-100 p-6 text-slate-800">
          <p className="2xl:text-2xl">
            <strong>Bardzo dobre przedszkole świetna opieka</strong> i edukacja mnóstwo zajęć dodatkowych Zuzia zachwycona 2 lata po których możemy ocenić i gorąco polecić wszystkim którzy chcą oddać swoje pociechy do przedszkola a nie mogą się zdecydować gdzie. 5 gwiazdek naprawdę nie ma do czego się przyczepić. Pozdrawiamy!
          </p>
          <div className="flex gap-4 items-center">
            <img
              className="h-12 w-12 rounded-full"
              src="images/parent-3.jpg"
              alt="Rodzice 5-letniego Jasia"
            />
            <div>
              <p>Rodzice Zuzi</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
