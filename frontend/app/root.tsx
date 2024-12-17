import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import "./tailwind.css";

import { useLocation } from "@remix-run/react";

import { ReactLenis, useLenis } from "lenis/react";

import Navbar from "~/components/global/Navbar";
import Footer from "~/components/global/Footer";

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  const noNavigationRoutes = ["/form", "/thank-you"];
  const showNavigation = !noNavigationRoutes.includes(location.pathname);

  const lenis = useLenis(({ scroll }) => {

  });

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />

        <meta
          property="og:title"
          content="Przedszkole Bieżanów - Prokocim - Ekologiczne Przedszkole Ekoskrzat"
        />
        <meta
          property="og:description"
          content="Prywatne przedszkole na terenie dzielnicy Bieżanów - Prokocim. Miejsce w którym dzieci mogą czuć się w pełni szczęśliwe, spokojne i bezpieczne."
        />
        <meta
          property="og:image"
          content="https://ekoskrzat.edu.pl/images/ogimage.jpg"
        />
        <meta
          property="og:image:secure_url"
          content="https://ekoskrzat.edu.pl/images/ogimage.jpg"
        />
        <meta property="og:image:type" content="website" />

        <meta property="og:url" content="https://ekoskrzat.edu.pl/" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Przedszkole Bieżanów - Prokocim - Ekologiczne Przedszkole Ekoskrzat"
        />
        <meta
          name="twitter:description"
          content="Prywatne przedszkole na terenie dzielnicy Bieżanów - Prokocim. Miejsce w którym dzieci mogą czuć się w pełni szczęśliwe, spokojne i bezpieczne. Poprzez kontakt z przyrodą, poznają najważniejsze wartości."
        />
        <meta name="twitter:image" content="/og-image.jpg" />

        <Meta />
        <Links />
      </head>
      <body>
        {showNavigation && <Navbar />}
        <ReactLenis root>
          {children}
          {showNavigation && <Footer />}
        </ReactLenis>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
