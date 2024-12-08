import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";

import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";


import qs from "qs";
import { H1 } from "~/components/global/ui/Typography";


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

    const photos = [
        { src: `http://localhost:1337${gallery.data.images[0].formats?.large?.url}`, width: 800, height: 1200 },
        { src: `http://localhost:1337${gallery.data.images[1].formats?.large?.url}`, width: 800, height: 1200 },
    ];

    return (
        <div className="p-8 text-center">
            <div className="flex justify-center">
                <Link to="/parentsGallery" className="rounded-full border px-6 py-3 hover:bg-slate-50">
                    ← Wróć do galerii
                </Link>
            </div>
            <H1 html={gallery.data.title} className="my-8" />

            <MasonryPhotoAlbum photos={photos} />
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