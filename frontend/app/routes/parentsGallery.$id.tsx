import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";

import qs from "qs";
import { H1, H2, H3 } from "~/components/global/ui/Typography";

export const loader: LoaderFunction = async ({ params }) => {
    const query = qs.stringify({
        populate: "*"
    });

    const { id } = params;

    const response = await fetch(`http://localhost:1337/api/parents-galleries/${id}?${query}`);
    const galleryData = await response.json();
    return json(galleryData);

}

export default function Gallery() {
    const gallery = useLoaderData();

    console.log(gallery);
    return (
        <div className="p-8 text-center">
            <Link to="/parentsGallery" className="rounded-full border px-6 py-3 hover:bg-slate-50">
                ← Wróć do galerii
            </Link>

            <H1 html={gallery.data.title} className="my-8" />
            <div className="columns-1 md:columns-4 gap-4 space-y-4">
                {gallery.data.images.map((image: any) => (
                    <img
                        key={image.id}
                        src={`http://localhost:1337${image.formats?.large?.url}`}
                        alt=""
                        className="w-full h-auto object-cover rounded-lg"
                    />
                ))}
            </div>
        </div>
    );
}