
export default function Navbar() {
    return (
        <nav className="flex">
            <h1>Logo</h1>
            <ul className="flex">
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
            </ul>

            <ul className="flex">
                <li>
                    <a href="/dla-rodzicow">Dla rodziców</a>
                </li>
                <li>
                    <a href="/zapisz-dziecko">Zapisz dziecko</a>
                </li>
            </ul>
        </nav>
    );
}
