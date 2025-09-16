import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData, Link, Outlet, useLocation } from "@remix-run/react";
import qs from "qs";

import { API_BASE_URL } from "../lib/config";

const query = qs.stringify({
    populate: "*",
    sort: "id:asc"
});

export const loader: LoaderFunction = async () => {
    const response = await fetch(`${API_BASE_URL}/api/offers?` + query);
    const offersData = await response.json();
    return json(offersData);
}

type OfferListItem = { id: number; documentId?: string; offerSlug?: string; title: string };

export default function Oferta() {
    const offersData = useLoaderData<typeof loader>();
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
                    <p className="text-white font-display ~text-[1.8rem]/[3.8rem] ~leading-[2rem]/[4.7rem]" >Oferta</p>
                </div>

                <div className="grid xl:grid-cols-4 gap-8">
                    {/* Navigation */}
                    <nav className="flex md:flex-col gap-4 overflow-x-auto scrollbar-hide 
                        md:mx-0 md:px-0 col-span-3 xl:col-span-1
                        snap-x snap-mandatory md:snap-none">
                        {offersData.data.map((offer: OfferListItem, index: number) => {
                            const slugOrId = offer.offerSlug || offer.documentId || offer.id;
                            const offerPath = `/oferta/${slugOrId}`;
                            const isActive = location.pathname === offerPath ||
                                (location.pathname === '/oferta' && index === 0);

                            return (
                                <Link
                                    key={offer.id}
                                    to={slugOrId ? offerPath : '/oferta'}
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