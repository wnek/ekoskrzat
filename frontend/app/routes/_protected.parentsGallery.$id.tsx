import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import React from "react";
import { MasonryPhotoAlbum } from "react-photo-album";

import "react-photo-album/masonry.css";


import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

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
    const [index, setIndex] = React.useState(-1);
    const gallery = useLoaderData();

    // const photos = [
    //     { src: `http://localhost:1337${gallery.data.images[0].formats?.large?.url}`, width: gallery.data.images[0].formats?.large?.width, height: gallery.data.images[0].formats?.large?.height },
    //     { src: `http://localhost:1337${gallery.data.images[1].formats?.large?.url}`, width: gallery.data.images[1].formats?.large?.width, height: gallery.data.images[1].formats?.large?.height },
    //     { src: `http://localhost:1337${gallery.data.images[2].formats?.large?.url}`, width: gallery.data.images[2].formats?.large?.width, height: gallery.data.images[2].formats?.large?.height }
    // ];


    const photos = gallery.data.images.map((image: any) => ({
        src: `http://localhost:1337${image.formats?.large?.url}`,
        width: image.formats?.large?.width,
        height: image.formats?.large?.height
    }));

    return (
        <div className="p-8 text-center">
            <div className="flex justify-center">
                <Link to="/parentsGallery" className="rounded-full border px-6 py-3 hover:bg-slate-50">
                    ← Wróć do galerii
                </Link>
            </div>
            <H1 html={gallery.data.title} className="my-8" />

            <MasonryPhotoAlbum
                photos={photos}
                render={{
                    image: (props) => <img {...props} className="rounded-lg" />,
                }}

                columns={(containerWidth) => {
                    if (containerWidth < 400) return 1;
                    if (containerWidth < 800) return 3;
                    return 4;
                }}
                onClick={({ index }) => setIndex(index)}
            />

            <Lightbox
                index={index}
                slides={photos}
                open={index >= 0}
                close={() => setIndex(-1)}
            />

        </div>

    );
}