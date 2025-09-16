import { json, LoaderFunction } from "@remix-run/node";
import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import React from "react";
import { MasonryPhotoAlbum } from "react-photo-album";

import "react-photo-album/masonry.css";


import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import qs from "qs";
import { H1 } from "../components/global/ui/Typography";
import { API_BASE_URL } from "../lib/config";
import { buildMetaFromSeo, type StrapiSeo } from "../lib/seo";


export const meta: MetaFunction<typeof loader> = ({ data }) => {
    const seo: StrapiSeo | undefined = data?.data?.gallerySeo;
    return buildMetaFromSeo(seo, {
        fallbackTitle: "Galeria - Ekologiczne Przedszkole Ekoskrzat Kraków",
        fallbackDescription:
            "Prywatne przedszkole na terenie dzielnicy Bieżanów - Prokocim. Miejsce w którym dzieci mogą czuć się w pełni szczęśliwe, spokojne i bezpieczne. Poprzez kontakt z przyrodą, poznają najważniejsze wartości.",
        fallbackRobots: "index, follow",
    });
};

export const loader: LoaderFunction = async () => {
    const query = qs.stringify({
        populate: "*",
    });

    const response = await fetch(`${API_BASE_URL}/api/gallery?${query}`);
    const galleryData = await response.json();
    return json(galleryData);

}

export default function Gallery() {
    const [index, setIndex] = React.useState(-1);
    const gallery = useLoaderData<typeof loader>();

    console.log(gallery.data.images[0].formats.large.url);

    const photos = gallery.data.images.map((image: { formats?: { large?: { url?: string; width?: number; height?: number } } }) => ({
        src: `${API_BASE_URL}${image.formats?.large?.url}`,
        width: image.formats?.large?.width,
        height: image.formats?.large?.height
    }));

    return (
        <div className="p-8 text-center">

            <H1 html={gallery.data.title} className="my-8" />

            <MasonryPhotoAlbum
                photos={photos}
                render={{
                    image: (props) => <img {...props} className="rounded-lg" alt="Zdjęcie z galerii" />,
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