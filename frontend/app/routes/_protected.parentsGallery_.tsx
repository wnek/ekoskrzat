import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";

import qs from "qs";

import { H1, H2, H3 } from "~/components/global/ui/Typography";


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

    console.log(galleriesData);
    return (
        <section
            className="bg-stone-100 text-center p-4 py-8 xl:py-16 xl:px-16">
            <H1 html="Galeria dla rodziców" className="mb-8" />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
                {galleriesData.data.map((gallery: any) => (
                    <Link
                        to={`/parentsGallery/${gallery.documentId}`}
                        key={gallery.id}
                        className="border border-stone-200 rounded-xl p-2 bg-white hover:shadow-lg transition-shadow"
                    >
                        {gallery.images[0] && gallery.images[0].formats.large && (
                            <img
                                className="rounded-md aspect-square object-cover"
                                src={"http://159.69.114.206:1337" + gallery.images[0].formats.large.url} />
                        )}
                        <div className="flex flex-col gap-1 px-2 py-3">
                            <h4 className="text-left text-xl">{gallery.title}</h4>
                            <p className="text-sm text-gray-500 text-left">
                                {gallery.images.length} {gallery.images.length === 1 ? 'zdjęcie' : gallery.images.length < 5 ? 'zdjęcia' : 'zdjęć'}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )
}