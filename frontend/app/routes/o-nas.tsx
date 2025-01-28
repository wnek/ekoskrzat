import type { LoaderFunctionArgs } from "@remix-run/node";
import { json, useLoaderData } from "@remix-run/react";
import qs from "qs";
import { H1, H3, P } from "~/components/global/ui/Typography";


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
    const response = await fetch("http://localhost:1337/api/about-us?" + query);
    const aboutUsData = await response.json();
    return json(aboutUsData);
}



export default function AboutUs() {
    const { data } = useLoaderData<typeof loader>();

    console.log(data);
    console.log(data.firstSectionTitle);
    return (
        <section className="flex flex-col gap-16">

            <section className="p-4 xl:px-32 flex flex-col gap-8">

                <div className="flex flex-col gap-4 items-center">
                    <h3 className="w-fit rounded-full border border-slate-300 px-4 py-2 text-blue-600 ">
                        O nas
                    </h3>
                    <H1 html={data.firstSectionTitle} />
                </div>

                <section className="grid xl:grid-cols-2 gap-4">
                    {data.firstSectionItems.map((item, index) => (
                        <div key={item.id} className="bg-slate-100 rounded-3xl p-8 flex-col gap-4 xl:col-span-2 grid grid-cols-2">
                            <img
                                src={'https://api.ekoskrzat.edu.pl' + item.image.url}
                                alt={item.title}
                                className={`w-full h-auto rounded-lg col-span-2 xl:col-span-1 ${index % 2 !== 0 ? 'order-1 xl:order-2' : ''}`}
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
                    <h3 className="w-fit rounded-full border border-slate-300 px-4 py-2 text-blue-600 ">
                        O nas
                    </h3>
                    <H1 html={data.secondSectionTitle} />
                </div>

                <section className="grid xl:grid-cols-2 gap-4">
                    {data.secondSectionItems.map((item, index) => (
                        <div key={item.id} className="bg-green-50 rounded-3xl p-8 flex-col gap-4 xl:col-span-2 grid grid-cols-2">
                            <img
                                src={'https://api.ekoskrzat.edu.pl' + item.image.url}
                                alt={item.title}
                                className={`w-full h-auto rounded-lg col-span-2 xl:col-span-1 ${index % 2 !== 0 ? 'order-1 xl:order-2' : ''}`}
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