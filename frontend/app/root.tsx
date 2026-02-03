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

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "ChildCare", "Preschool"],
      "@id": "https://www.ekoskrzat.edu.pl/#organization",
      name: "Przedszkole Niepubliczne EkoSkrzat",
      alternateName: "EkoSkrzat",
      description:
        "Ekologiczne przedszkole niepubliczne w Krakowie. Oferujemy unikalne podejście do dzieci, ogród sensoryczny, ekologiczne rozwiązania i profesjonalną kadrę pedagogiczną.",
      url: "https://www.ekoskrzat.edu.pl",
      logo: {
        "@type": "ImageObject",
        url: "https://www.ekoskrzat.edu.pl/images/logo.svg",
      },
      image: "https://www.ekoskrzat.edu.pl/images/ogimage.jpg",
      telephone: ["+48535553599", "+48577010202", "+48577299599"],
      email: "ekoskrzat.przedszkole@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Rakuś 72",
        addressLocality: "Kraków",
        postalCode: "30-864",
        addressCountry: "PL",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 50.009107,
        longitude: 20.032213,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "07:00",
          closes: "17:30",
        },
      ],
      priceRange: "$$",
      sameAs: ["https://www.facebook.com/przedszkoleekoskrzat"],
      areaServed: {
        "@type": "City",
        name: "Kraków",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Oferta przedszkola",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Edukacja przedszkolna",
              description: "Codzienny pobyt w przedszkolu z programem edukacyjnym",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Zajęcia dodatkowe",
              description: "Język angielski, rytmika, zajęcia plastyczne i więcej",
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.ekoskrzat.edu.pl/#website",
      url: "https://www.ekoskrzat.edu.pl",
      name: "Przedszkole EkoSkrzat",
      publisher: {
        "@id": "https://www.ekoskrzat.edu.pl/#organization",
      },
      inLanguage: "pl-PL",
    },
  ],
};

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  const noNavigationRoutes = ["/form", "/thank-you"];
  const showNavigation = !noNavigationRoutes.includes(location.pathname);

  const lenis = useLenis(({ scroll }) => {

  });

  return (
    <html lang="pl">
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

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

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
