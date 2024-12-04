import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";


import qs from "qs";

const query = qs.stringify({
    populate: "*"
});



export const loader: LoaderFunction = async () => {

    const response = await fetch("http://localhost:1337/api/parents-galleries?" + query);
    const homepageData = await response.json();
    return json(homepageData);

}


export default function ParentsGallery() {

    const galleriesData = useLoaderData();

    return (
        <div>
            {galleriesData.data.map((gallery: any) => (
                <div key={gallery.id}>
                    <h1>{gallery.title}</h1>
                    {gallery.images.map((image: any) => (
                        <div key={image.id}>
                            {image.formats.large && <img src={"http://localhost:1337/" + image.formats.large.url} />}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}