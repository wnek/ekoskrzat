import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white p-4">
      <div className="flex h-12 items-center justify-between lg:h-20 2xl:text-xl">
        <a href="/">
          <img src="/images/logo.svg" alt="Logo" className="h-8 lg:h-12" />
        </a>

        {/* Mobile menu button */}
        <button
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop menu */}
        <div className="hidden lg:flex lg:items-center lg:gap-8 lg:w-full">
          <ul className="flex space-x-6 text-slate-900 mx-auto">
            <li>
              <a href="/o-nas" className="hover:text-slate-600">O nas</a>
            </li>
            <li>
              <a href="/oferta" className="hover:text-slate-600">Oferta</a>
            </li>
            <li>
              <a href="/nasza-kadra" className="hover:text-slate-600">Nasza kadra</a>
            </li>
            <li>
              <a href="/galeria" className="hover:text-slate-600">Galeria</a>
            </li>
          </ul>

          <ul className="flex space-x-6 lg:absolute lg:right-4">
            <li>
              <a href="/rekrutacja" className="hover:text-slate-600">Rekrutacja</a>
            </li>
            <li>
              <a className="rounded-full border px-6 py-3 hover:bg-slate-50" href="#footer">
                Napisz do nas
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:hidden`}>
        <ul className="space-y-4 pt-4 pb-3">
          <li>
            <a href="/o-nas" className="block hover:text-slate-600">O nas</a>
          </li>
          <li>
            <a href="/oferta" className="block hover:text-slate-600">Oferta</a>
          </li>
          <li>
            <a href="/nasza-kadra" className="block hover:text-slate-600">Nasza kadra</a>
          </li>
          <li>
            <a href="/galeria" className="block hover:text-slate-600">Galeria</a>
          </li>
          <li>
            <a href="/rekrutacja" className="block hover:text-slate-600">Rekrutacja</a>
          </li>
          <li>
            <a className="block rounded-full border px-6 py-3 text-center hover:bg-slate-50" href="#footer">
              Napisz do nas
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
