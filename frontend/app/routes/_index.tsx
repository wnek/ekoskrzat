import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { json, LoaderFunction } from "@remix-run/node";
import qs from "qs";

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


interface HomepageData {
  data: {
    hero: object
    aboutUs: object
    mission: object
    firstFeature: object
  }
}


const query = qs.stringify({
  populate: {
    hero: {
      populate: "*",
    },
    aboutUs: {
      populate: "*",
    },
    mission: {
      populate: "*",
    },
    firstFeature: {
      populate: "*",
    },
  },
});

export const loader: LoaderFunction = async () => {

  const response = await fetch("http://localhost:1337/api/homepage?" + query);
  const homepageData = await response.json();
  return json(homepageData);

}

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

export function ErrorBoundary() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Oops!</h1>
        <p>Niestety wystąpił błąd podczas ładowania strony.</p>
      </div>
    </div>
  );
}




export default function Index() {
  const homepageData: HomepageData = useLoaderData();


  return (
    <>
      <Hero data={homepageData.data.hero} />
      <AboutUs data={homepageData.data.aboutUs} />
      <Mission data={homepageData.data.mission} />
      <FirstFeature data={homepageData.data.firstFeature} />
      <Staff />
      <SecondFeature />
      <Numbers />
      <ThirdFeature />
      <Testimonials />
      <Join />
    </>
  );
}
