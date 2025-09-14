import type { LoaderFunctionArgs } from "@remix-run/node";
import { json, MetaFunction, useLoaderData } from "@remix-run/react";
import qs from "qs";
import { H1, H2, H3, P } from "~/components/global/ui/Typography";
import ResponsiveImage from "~/components/global/ui/ResponsiveImage";
import { API_BASE_URL } from "~/lib/config";

export const meta: MetaFunction = () => {
    return [
        {
            name: "title",
            content: "O nas",
        },
        {
            name: "description",
            content: "Prywatne przedszkole na terenie dzielnicy Bieżanów - Prokocim. Miejsce w którym dzieci mogą czuć się w pełni szczęśliwe, spokojne i bezpieczne. Poprzez kontakt z przyrodą, poznają najważniejsze wartości.",
        },
        {
            name: "robots",
            content: "index, follow",
        },
    ];
};
const query = qs.stringify({
    populate: {
        firstSectionItems: {
            populate: "*"
        },
        secondSectionItems: {
            populate: "*"
        }
    }

});

export async function loader({ request }: LoaderFunctionArgs) {
    const response = await fetch(`${API_BASE_URL}/api/about-us?` + query);
    const aboutUsData = await response.json();
    return json(aboutUsData);
}



export default function AboutUs() {
    const { data } = useLoaderData<any>();

    console.log(data);
    console.log(data.firstSectionTitle);
    return (
        <section className="flex flex-col gap-16">

            <section className="p-4 xl:px-32 flex flex-col gap-8">

                <div className="flex flex-col gap-4 items-center">
                    <p className="w-fit rounded-full border border-slate-300 px-4 py-2 text-blue-600 " aria-hidden="true">
                        O nas
                    </p>
                    <H1 html={data.firstSectionTitle} />
                </div>

                <section className="grid xl:grid-cols-2 gap-4">
                    {data.firstSectionItems.map((item: any, index: number) => (
                        <div key={item.id} className="bg-slate-100 rounded-3xl p-8 flex-col gap-4 xl:col-span-2 grid grid-cols-2">
                            <ResponsiveImage
                                image={item.image}
                                alt={item.title}
                                className={`w-full h-auto rounded-lg col-span-2 xl:col-span-1 object-cover ${index % 2 !== 0 ? 'order-1 xl:order-2' : ''}`}
                                sizes="(min-width: 1280px) 50vw, 100vw"
                                fallbackSrc={item.image?.url ? `${API_BASE_URL}${item.image.url}` : undefined}
                            />
                            <div className={`flex flex-col gap-4 col-span-2 xl:col-span-1 xl:p-16 xl:justify-center ${index % 2 !== 0 ? 'order-2 xl:order-1' : ''}`}>
                                <h4 className="text-2xl xl:text-4xl font-display text-slate-900 xl:text-center">
                                    {item.title}
                                </h4>
                                <P
                                    className="text-left xl:text-center"
                                    html={item.description}
                                />
                            </div>
                        </div>
                    ))}
                </section>
            </section>

            <section className="p-4 xl:px-32 flex flex-col gap-8">

                <div className="flex flex-col gap-4 items-center">
                    <p className="w-fit rounded-full border border-slate-300 px-4 py-2 text-blue-600 " aria-hidden="true">
                        O nas
                    </p>
                    <H2 html={data.secondSectionTitle} />
                </div>

                <section className="grid xl:grid-cols-2 gap-4">
                    {data.secondSectionItems.map((item: any, index: number) => (
                        <div key={item.id} className="bg-green-50 rounded-3xl p-8 flex-col gap-4 xl:col-span-2 grid grid-cols-2">
                            <ResponsiveImage
                                image={item.image}
                                alt={item.title}
                                className={`w-full h-auto rounded-lg col-span-2 xl:col-span-1 object-cover ${index % 2 !== 0 ? 'order-1 xl:order-2' : ''}`}
                                sizes="(min-width: 1280px) 50vw, 100vw"
                                fallbackSrc={item.image?.url ? `${API_BASE_URL}${item.image.url}` : undefined}
                            />
                            <div className={`flex flex-col gap-4 col-span-2 xl:col-span-1 xl:p-8 xl:justify-center ${index % 2 !== 0 ? 'order-2 xl:order-1' : ''}`}>
                                <h4 className="text-2xl xl:text-4xl font-display text-slate-900 xl:text-center">
                                    {item.title}
                                </h4>
                                <P
                                    className="text-left xl:text-center"
                                    html={item.description}
                                />
                            </div>
                        </div>
                    ))}
                </section>
            </section>
        </section>
    )
}