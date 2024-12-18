export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex h-20 items-center justify-between bg-white p-4 2xl:text-xl">

      <a href="/">
        <img src="/images/logo.svg" alt="Logo" />
      </a>


      {/* <ul className="flex space-x-6 text-slate-900">
        <li>
          <a href="/o-nas">O nas</a>
        </li>
        <li>
          <a href="/oferta">Oferta</a>
        </li>

        <li>
          <a href="/galeria">Galeria</a>
        </li>
        <li>
          <a href="/kontakt">Kontakt</a>
        </li>
      </ul> */}

      <ul className="flex space-x-6">
        {/* <li>
          <a href="/dla-rodzicow">Dla rodziców</a>
        </li> */}
        <li>
          <a className="rounded-full border px-6 py-3 hover:bg-slate-50" href="#footer">
            Napisz do nas
          </a>
        </li>
      </ul>
    </nav>
  );
}
