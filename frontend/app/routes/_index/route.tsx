import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { json, LoaderFunction } from "@remix-run/node";

import Hero from "~/routes/_index/Hero";
import AboutUs from "~/routes/_index/AboutUs";
import Mission from "~/routes/_index/Mission";
import FirstFeature from "~/routes/_index/FirstFeature";
import Staff from "~/routes/_index/Staff";
import SecondFeature from "~/routes/_index/SecondFeature";
import Numbers from "~/routes/_index/Numbers";
import ThirdFeature from "~/routes/_index/ThirdFeature";
import Testimonials from "~/routes/_index/Testimonials";
import Join from "~/routes/_index/Join";

// export const loader: LoaderFunction = async () => {
//   const response = await fetch("http://localhost:1337/api/homepage?populate=*");
//   const articles = await response.json();
//   return json(articles);
// }

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
  // const articles = useLoaderData();
  // console.log(articles);

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
