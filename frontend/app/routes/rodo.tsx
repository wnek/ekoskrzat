export default function Rodo() {
  return (
    <section className="m-auto grid grid-cols-1 gap-12 px-6 py-16 lg:flex-row lg:justify-center xl:w-3/5 xl:grid-cols-2 xl:gap-32 xl:py-32">
      <div className="flex flex-col gap-8">
        <h1 className="font-display text-4xl text-slate-800 md:text-6xl 2xl:text-7xl">
          Klauzula RODO
        </h1>
        <p className="text-pretty text-slate-600 2xl:max-w-prose 2xl:text-2xl">
          <strong>
            Klauzula informacyjna o przetwarzaniu danych osobowych{" "}
          </strong>{" "}
          przez Przedszkole Niepubliczne EKOSKRZAT w związku z rekrutacją do
          przedszkola
        </p>
      </div>
      <div className="flex w-full flex-col gap-4 text-slate-600">
        <ol className="list-decimal">
          <li>
            <strong>Administrator danych osobowych</strong>
          </li>
        </ol>
        <p>
          Administratorem Państwa danych osobowych oraz danych osobowych Państwa
          dzieci jest Przedszkole Niepubliczne EkoSkrzat, ul. Rakuś 72, 30-864
          Kraków (dalej: my).
        </p>
        <p>Mogą się Państwo z nami skontaktować w następujący sposób:</p>
        <p>&#8211; przez e-mail: przedszkole@ekoskrzat.edu.pl</p>
        <p>&#8211; telefonicznie: 535-553-599.</p>

        <ol start="2" className="list-decimal">
          <li>
            <strong>
              Cele przetwarzania oraz podstawa prawna przetwarzania
            </strong>
          </li>
        </ol>
        <p>
          Będziemy przetwarzać Państwa dane osobowe i dane osobowe Państwa
          dzieci w celu przeprowadzenia rekrutacji dziecka do przedszkola.
        </p>
        <p>
          Podstawą prawną przetwarzania Państwa danych osobowych i danych
          osobowych Państwa dzieci jest art. 6 ust 1 lit a RODO.
        </p>

        <ol start="3" className="list-decimal">
          <li>
            <strong>Okres przechowywania danych osobowych</strong>
          </li>
        </ol>
        <p>
          Dane osobowe będą przechowywane przez okres prowadzenia rekrutacji do
          przedszkola do końca roku szkolnego wskazanego przez Państwo w
          formularzu zgłoszenia.
        </p>

        <ol start="4" className="list-decimal">
          <li>
            <strong>Kategorie danych</strong>
          </li>
        </ol>
        <p>
          Będziemy przetwarzać następujące kategorie Państwa danych osobowych:
          imię i nazwisko, adres e-mail, numer telefonu.
        </p>
        <p>
          Będziemy przetwarzać następujące kategorie danych osobowych Państwa
          dziecka: imię i nazwisko, data urodzenia.
        </p>

        <ol start="5" className="list-decimal">
          <li><strong>Odbiorcy danych</strong></li>
        </ol>
        <p>
          Nie powierzamy Państwa danych osobowych i danych osobowych Państwa
          dzieci innym podmiotom.
        </p>

        <ol start="6" className="list-decimal">
          <li>
            <strong>
              Państwa prawa związane z przetwarzaniem danych osobowych{" "}
            </strong>
          </li>
        </ol>
        <p>
          Przysługują Państwu następujące prawa związane z przetwarzaniem danych
          osobowych:
        </p>
        <ol>
          <li>
            prawo dostępu do Państwa danych osobowych i danych osobowych Państwa
            dzieci,
          </li>
          <li>
            prawo żądania sprostowania Państwa danych osobowych i danych
            osobowych Państwa dzieci,
          </li>
          <li>
            prawo żądania usunięcia Państwa danych osobowych i danych osobowych
            Państwa dzieci,
          </li>
          <li>
            prawo żądania ograniczenia przetwarzania Państwa danych osobowych i
            danych osobowych Państwa dzieci,
          </li>
          <li>
            prawo do przenoszenia Państwa danych osobowych i danych osobowych
            Państwa dzieci, tj. mają Państwo prawo do otrzymania od nas w
            ustrukturyzowanym, powszechnie używanym formacie informatycznym
            nadającym się do odczytu maszynowego dane osobowe dotyczące Państwa
            i dzieci, które nam Państwo dostarczyli na podstawie zgody. Mogą też
            Państwo zlecić nam przesłanie tych danych bezpośrednio innemu
            podmiotowi, jednakże zrobimy to tylko jeśli takie przesłanie jest
            technicznie możliwe;
          </li>
          <li>
            prawo do cofnięcia zgody na przetwarzanie Państwa danych osobowych i
            danych osobowych Państwa dzieci.
          </li>
        </ol>

        <p>
          W celu wykonania Państwa praw prosimy o kontakt z administratorem
          danych osobowych.
        </p>
        <p>
          Przysługuje Państwu także prawo wniesienia skargi do organu
          nadzorczego zajmującego się ochroną danych osobowych, tj. Prezesa
          Urzędu Ochrony Danych Osobowych.
        </p>

        <ol start="7" className="list-decimal">
          <li>
            <strong>
              Przekazywanie danych do państw trzecich lub organizacji
              międzynarodowych.
            </strong>
          </li>
        </ol>
        <p>
          Nie przekazujemy Państwa danych osobowych i danych osobowych Państwa
          dzieci poza teren Europejskiego Obszaru Gospodarczego, ani
          organizacjom międzynarodowym.
        </p>

        <ol start="8" className="list-decimal">
          <li>
            <strong>Informacja o wymogu podania danych.</strong>
          </li>
        </ol>
        <p>
          Podanie przez Państwa danych jest dobrowolne, ale niezbędne do udziału
          Państwa dziecka w rekrutacji do przedszkola.
        </p>
      </div>
    </section>
  );
}
