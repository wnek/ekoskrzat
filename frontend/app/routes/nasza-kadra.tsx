import { H1, H3, P } from "~/components/global/ui/Typography";
import { useLoaderData, Link, Outlet, useLocation } from "@remix-run/react";
import qs from "qs";
import { json, type LoaderFunctionArgs } from "@remix-run/node";


const query = qs.stringify({
    populate: "*",
    sort: "id:asc"
});

export async function loader({ request }: LoaderFunctionArgs) {
    const response = await fetch("http://localhost:1337/api/staffs?" + query);
    const staffData = await response.json();
    return json(staffData);
}


export default function NaszaKadra() {

    const staffData = useLoaderData();
    const location = useLocation();

    if (!staffData || !staffData.data) {
        return <div>Nie znaleziono kadry</div>;
    }

    console.log(staffData.data);

    return (
        <section className="flex flex-col gap-16">

            <section className="p-4 xl:px-32 flex flex-col gap-16">

                <div className="flex flex-col gap-4 items-center">

                    <H1 html="Nasza Kadra" />
                    <P
                        className="max-w-[65ch]"
                        html="W naszym przedszkolu pracuje zespół wykwalifikowanych specjalistów, których pasja i zaangażowanie w edukację sprawiają, że dzieci mogą rozwijać się w bezpiecznej, pełnej radości i wsparcia atmosferze." />
                </div>

                <section className="grid gap-4 xl:grid-cols-2">

                    {staffData.data.map((staff: any) => (
                        <div key={staff.id} className="bg-slate-100 rounded-3xl p-8 gap-4 grid md:grid-cols-5 grid-cols-1 xl:grid-cols-1 2xl:grid-cols-6 ">
                            {staff.image?.url && (
                                <img
                                    src={`https://api.ekoskrzat.edu.pl${staff.image.url}`}
                                    alt={staff.name}
                                    className="w-full h-auto rounded-lg col-span-2 2xl:col-span-2"
                                />
                            )}
                            <div className={`flex flex-col gap-4 col-span-2 md:col-span-3 2xl:col-span-4 xl:${staff.image?.url ? 'col-span-1' : 'col-span-2'} xl:p-8`}>
                                <h4 className="text-2xl xl:text-4xl font-display text-slate-900">
                                    {staff.name}
                                </h4>
                                <P
                                    className="text-left"
                                    html={staff.description}
                                />
                            </div>
                        </div>
                    ))}
                </section>
            </section>
        </section>
    )
}