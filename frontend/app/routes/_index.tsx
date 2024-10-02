import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { json, LoaderFunction } from "@remix-run/node";

import Hero from "~/components/homepage/Hero";
import AboutUs from "~/components/homepage/AboutUs";
import Mission from "~/components/homepage/Mission";
import FirstFeature from "~/components/homepage/FirstFeature";
import Staff from "~/components/homepage/Staff";
import SecondFeature from "~/components/homepage/SecondFeature";
import Numbers from "~/components/homepage/Numbers";
import ThirdFeature from "~/components/homepage/ThirdFeature";
import Testimonials from "~/components/homepage/Testimonials";
import Join from "~/components/homepage/Join";


export const meta: MetaFunction = () => {
  return [
    {
      title:
        "Przedszkole Bieżanów - Prokocim - Ekologiczne Przedszkole Ekoskrzat",
    },
    {
      name: "description",
      content:
        "Prywatne przedszkole na terenie dzielnicy Bieżanów - Prokocim. Miejsce w którym dzieci mogą czuć się w pełni szczęśliwe, spokojne i bezpieczne. Poprzez kontakt z przyrodą, poznają najważniejsze wartości.",
    },
  ];
};

export default function Index() {


  return (
    <>
      <Hero />
      <AboutUs />
      <Mission />
      <FirstFeature />
      <Staff />
      <SecondFeature />
      <Numbers />
      <ThirdFeature />
      <Testimonials />
      <Join />
    </>
  );
}

export function getStaticPaths() {
  return ["/"];
}
