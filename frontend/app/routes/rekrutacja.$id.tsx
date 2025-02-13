import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData, Link, useParams } from "@remix-run/react";
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import qs from "qs";

import { H1, H2 } from "~/components/global/ui/Typography";


export const loader: LoaderFunction = async ({ params }) => {
    const query = qs.stringify({
        populate: "*",
        sort: "id:asc"
    });

    const { id } = params;

    const response = await fetch(`http://localhost:1337/api/recruitments/${id}?${query}`);
    const oneOfferData = await response.json();
    return json(oneOfferData);

}

export default function RekrutacjaPage() {
    const oneOfferData = useLoaderData();

    if (!oneOfferData) {
        return <div>Rekrutacja nie znaleziona</div>;
    }

    return (
        <section className="flex flex-col gap-16 p-4 py-8 xl:py-16 xl:px-32 bg-slate-100 rounded-3xl col-span-3">

            <H2 html={oneOfferData.data.title} className="mb-8" />

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