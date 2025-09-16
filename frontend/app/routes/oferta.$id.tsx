import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

import { H1 } from "../components/global/ui/Typography";
import type { MetaFunction } from "@remix-run/node";
import { buildMetaFromSeo, type StrapiSeo } from "../lib/seo";
import { fetchEntryBySlugOrId } from "../lib/utils/strapiEntry";

export const meta: MetaFunction<typeof loader> = ({ data }) => {
    const seo: StrapiSeo | undefined = data?.data?.offerSeo;
    return buildMetaFromSeo(seo, {
        fallbackTitle: "Oferta",
        fallbackDescription:
            "Prywatne przedszkole na terenie dzielnicy Bieżanów - Prokocim. Miejsce w którym dzieci mogą czuć się w pełni szczęśliwe, spokojne i bezpieczne. Poprzez kontakt z przyrodą, poznają najważniejsze wartości.",
        fallbackRobots: "index, follow",
    });
};

export const loader: LoaderFunction = async ({ params }) => {
    const { id } = params;
    if (!id) {
        throw new Response("Missing id", { status: 400 });
    }
    const oneOfferData = await fetchEntryBySlugOrId({
        idOrSlug: id,
        apiPath: "/api/offers",
        slugField: "offerSlug",
    });
    return json(oneOfferData);

}

export default function OfferPage() {
    const oneOfferData = useLoaderData<typeof loader>();

    if (!oneOfferData) {
        return <div>Oferta nie znaleziona</div>;
    }

    return (
        <section className="flex flex-col gap-16 p-4 py-8 xl:py-16 xl:px-32 bg-slate-100 rounded-3xl col-span-3">

            <H1 html={oneOfferData.data.title} className="mb-8" />

            {/* Content */}
            <div className="prose max-w-none">
                {oneOfferData.data.content && (
                    <BlocksRenderer
                        content={oneOfferData.data.content}
                        blocks={{
                            paragraph: ({ children }) => <p className="mb-4">{children}</p>,
                            heading: ({ children, level }) => {
                                switch (level) {
                                    case 1:
                                        return <h1 className="text-4xl mb-4 py-8">{children}</h1>
                                    case 2:
                                        return <h2 className="text-3xl mb-3 py-8">{children}</h2>
                                    case 3:
                                        return <h3 className="text-2xl mb-2 py-8">{children}</h3>
                                    default:
                                        return <h4 className="text-xl mb-2 py-8">{children}</h4>
                                }
                            },
                            list: ({ children, format }) => {
                                if (format === 'ordered') {
                                    return <ol className="list-decimal ml-4 mb-4">{children}</ol>
                                }
                                return <ul className="list-disc ml-4 mb-4">{children}</ul>
                            },
                            link: ({ children, url }) => (
                                <a href={url} className="text-blue-600 hover:underline">
                                    {children}
                                </a>
                            ),
                        }}
                    />
                )}

            </div>
        </section>
    );
} 