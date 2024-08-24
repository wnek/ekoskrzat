import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { json, LoaderFunction, } from "@remix-run/node";

export const loader: LoaderFunction = async () => {
  const response = await fetch("http://localhost:1337/api/homepage?populate=*");
  const articles = await response.json();
  return json(articles);
}

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {

  const articles = useLoaderData();
  console.log(articles);

  return (
    <div>
      <h1>Articles</h1>
      <ul>
        <p className="text-3xl">{articles.data.attributes.Text}</p>
        <img src={"http://localhost:1337" + articles.data.attributes.Image.data.attributes.url} />
      </ul>

    </div>
  );
}
