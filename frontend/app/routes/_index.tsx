import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { json, LoaderFunction } from "@remix-run/node";

import Hero from "~/components/homepage/Hero";
import AboutUs from "~/components/homepage/AboutUs";

// export const loader: LoaderFunction = async () => {
//   const response = await fetch("http://localhost:1337/api/homepage?populate=*");
//   const articles = await response.json();
//   return json(articles);
// }

// export const meta: MetaFunction = () => {
//   return [
//     { title: "New Remix App" },
//     { name: "description", content: "Welcome to Remix!" },
//   ];
// };

export default function Index() {
  // const articles = useLoaderData();
  // console.log(articles);

  return (
    <>
      <Hero />
      <AboutUs />
    </>
  );
}
