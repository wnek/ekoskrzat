import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, Link, Outlet, useLocation } from "@remix-run/react";
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import qs from "qs";

import { H1 } from "~/components/global/ui/Typography";

const query = qs.stringify({
    populate: "*",
    sort: "id:asc"
});

export async function loader({ request }: LoaderFunctionArgs) {
    const response = await fetch("http://localhost:1337/api/offers?" + query);
    const offersData = await response.json();
    return json(offersData);
}

export default function Oferta() {
    const offersData = useLoaderData();
    const location = useLocation();

    if (!offersData || !offersData.data) {
        return <div>Brak ofert</div>;
    }

    return (
        <section className="flex flex-col gap-16 p-4 xl:px-32">
            <div className="flex flex-col gap-8">
                <div
                    className="bg-cover bg-center xl:h-[500px] h-[200px] flex items-center justify-center rounded-3xl"
                    style={{ backgroundImage: "url('/images/oferta-hero.jpg')" }}
                >
                    <H1 html="Oferta" className="text-white" />
                </div>

                <div className="grid xl:grid-cols-4 gap-8">
                    {/* Navigation */}
                    <nav className="flex md:flex-col gap-4 overflow-x-auto scrollbar-hide 
                        md:mx-0 md:px-0 col-span-3 xl:col-span-1
                        snap-x snap-mandatory md:snap-none">
                        {offersData.data.map((offer: any, index: number) => {
                            const offerPath = `/oferta/${offer.documentId}`;
                            const isActive = location.pathname === offerPath ||
                                (location.pathname === '/oferta' && index === 0);

                            return (
                                <Link
                                    key={offer.id}
                                    to={offer.documentId ? offerPath : '/oferta'}
                                    className={`p-6 rounded-3xl transition-colors 
                                        min-w-[80%] md:max-w-full md:min-w-0
                                        snap-center md:snap-align-none
                                        ${isActive
                                            ? 'bg-green-100 border border-green-500'
                                            : 'border border-slate-300 hover:bg-slate-100'
                                        }`}
                                >
                                    <h2 className="md:text-2xl text-md font-display text-slate-900 md:whitespace-normal">{offer.title}</h2>
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Nested Route Content */}
                    <Outlet />
                </div>
            </div>
        </section>
    );
}