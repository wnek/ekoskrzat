import { H1, H3, P } from "~/components/global/ui/Typography";



export default function NaszaKadra() {
    return (
        <section className="flex flex-col gap-16">

            <section className="p-4 xl:px-32 flex flex-col gap-16">

                <div className="flex flex-col gap-4 items-center">

                    <H1 html="Nasza Kadra" />
                    <P
                        className="w-[40rem]"
                        html="W naszym przedszkolu pracuje zespół wykwalifikowanych specjalistów, których pasja i zaangażowanie w edukację sprawiają, że dzieci mogą rozwijać się w bezpiecznej, pełnej radości i wsparcia atmosferze." />
                </div>

                <section className="grid xl:grid-cols-2 gap-4">

                    <div className="bg-slate-100 rounded-3xl p-8 flex-col gap-4 xl:col-span-2 grid grid-cols-2">
                        <img src="/images/o-nas/o-nas-przedszkole-z-ogrodem.jpg" alt="Przedszkole z dużym ogrodem i placem zabaw" className="w-full h-auto rounded-lg col-span-2 xl:col-span-1" />
                        <div className="flex flex-col gap-4 col-span-2 xl:col-span-1 xl:p-8">
                            <h4 className="text-2xl xl:text-4xl font-display text-slate-900">Przedszkole z dużym ogrodem i placem zabaw</h4>
                            <P
                                className="text-left"
                                html="Codziennie dbamy o to, by dzieci mogły czerpać radość z przebywania na świeżym powietrzu, w otoczeniu przyrody. Dysponujemy 10-arowym ogrodem sensoryczno-edukacyjnym, pełnym brzóz i roślin ozdobnych, wyposażonym w altanę i sprzęt rekreacyjny. Posiadamy także dwa nowoczesne place zabaw, które zachęcają do aktywności fizycznej." />
                        </div>
                    </div>

                    <div className="bg-slate-100 rounded-3xl p-8 flex flex-col gap-4 xl:p-16">
                        <h4 className="text-2xl font-display text-slate-900 xl:text-4xl ">Wyjątkowa kadra</h4>
                        <P
                            className="text-left"
                            html="Tworzymy zgrany, profesjonalny zespół, który stawia na wzajemny szacunek i budowanie silnych relacji z dziećmi. Stosujemy nowoczesne metody pracy pedagogicznej, dostosowane do wieku i potrzeb dzieci, co pozwala na indywidualne podejście do każdego przedszkolaka." />
                    </div>

                    <div className="bg-slate-100 rounded-3xl p-8 flex flex-col gap-4 xl:p-16">
                        <h4 className="text-2xl font-display text-slate-900 xl:text-4xl">Unikalne podejście do dzieci</h4>
                        <P
                            className="text-left"
                            html="Naszym priorytetem jest, by dzieci czuły się u nas szczęśliwe, bezpieczne i kochane. Każde dziecko traktujemy indywidualnie, dbając o komunikację opartą na szacunku, zrozumieniu i życzliwości. Wspieramy rozwój samodzielności i niezależności, zachęcając dzieci do podejmowania codziennych aktywności." />
                    </div>

                    <div className="bg-slate-100 rounded-3xl p-8 flex-col gap-4 xl:col-span-2 grid grid-cols-2">
                        <img src="/images/o-nas/o-nas-bogata-oferta.jpg" alt="Bogata oferta zajęć" className="w-full h-auto rounded-lg col-span-2 xl:col-span-1 order-1 xl:order-2" />

                        <div className="flex flex-col gap-4 col-span-2 xl:col-span-1  order-2 xl:order-1 xl:p-8">
                            <h4 className="text-2xl xl:text-4xl font-display text-slate-900">Bogata oferta zajęć</h4>
                            <P
                                className="text-left"
                                html="Oferujemy szeroki wachlarz zajęć, które wspierają wszechstronny rozwój dziecka. Angażujemy przedszkolaki w różnorodne działania edukacyjne, takie jak zajęcia z języka angielskiego, rytmiki, gimnastyki oraz dogoterapii. Dodatkowo, rozwijamy pasje i uzdolnienia dzieci, organizując zajęcia dodatkowe, m.in. taekwon-do, judo, robotykę, tańce, szachy, zajęcia bębniarskie czy zabawy z piłkami." />
                        </div>
                    </div>
                </section>
            </section>

            <section className="p-4 xl:px-32 flex flex-col gap-8">

                <div className="flex flex-col gap-4 items-center">
                    <h3 className="w-fit rounded-full border border-slate-300 px-4 py-2 text-blue-600 ">
                        O nas
                    </h3>
                    <H1 html="Dlaczego nasze przedszkolaki są Eko?" />
                </div>

                <section className="grid xl:grid-cols-2 gap-4">

                    <div className="bg-green-50 rounded-3xl p-8 flex-col gap-4 xl:col-span-2 grid grid-cols-2">
                        <img src="/images/o-nas/o-nas-codzienny-pobyt.jpg" alt="Codzienny pobyt na świeżym powietrzu" className="w-full h-auto rounded-lg col-span-2 xl:col-span-1" />
                        <div className="flex flex-col gap-4 col-span-2 xl:col-span-1 xl:p-8">
                            <h4 className="text-2xl xl:text-4xl font-display text-slate-900">Codzienny pobyt na świeżym powietrzu</h4>
                            <P
                                className="text-left"
                                html="Dbamy o to, by nasze przedszkolaki każdego dnia spędzały czas na świeżym powietrzu. Korzystamy z urokliwego ogrodu przedszkolnego pełnego zieleni i aktywnie bawimy się na placu zabaw. Regularnie wychodzimy na spacery po okolicy, z dala od zgiełku miasta, gdzie dzieci mają okazję do obserwacji przyrody i poznawania jej w naturalnym środowisku." />
                        </div>
                    </div>

                    <div className="bg-green-50 rounded-3xl p-8 flex-col gap-4 xl:col-span-2 grid grid-cols-2">
                        <img src="/images/o-nas/o-nas-ekozabawy.jpg" alt="Ekozabawy" className="w-full h-auto rounded-lg col-span-2 xl:col-span-1 order-1 xl:order-2" />
                        <div className="flex flex-col gap-4 col-span-2 xl:col-span-1 xl:p-8 order-2 xl:order-1">
                            <h4 className="text-2xl xl:text-4xl font-display text-slate-900 ">Ekozabawy</h4>
                            <P
                                className="text-left"
                                html="W naszym przedszkolu ekologia to nie tylko temat zajęć, ale także inspiracja do twórczych działań. Świętujemy ważne wydarzenia ekologiczne, tworzymy ekozabawki i stroje z materiałów recyklingowych, a także bierzemy udział w projektach przyrodniczych. W ten sposób, przez zabawę, kształtujemy postawy proekologiczne i poczucie odpowiedzialności za środowisko." />
                        </div>
                    </div>

                    <div className="bg-green-50 rounded-3xl p-8 flex flex-col gap-4 xl:p-16">
                        <h4 className="text-2xl font-display text-slate-900 xl:text-4xl ">Ekologiczne rozwiązania technologiczne</h4>
                        <P
                            className="text-left"
                            html="Dbamy o jakość powietrza w pomieszczeniach przedszkolnych, stosując oczyszczacze powietrza. Stosujemy również odnawialne źródła energii, by zmniejszyć nasz wpływ na środowisko naturalne i przekazać dzieciom wartości związane z odpowiedzialnym korzystaniem z zasobów naszej planety." />
                    </div>

                    <div className="bg-green-50 rounded-3xl p-8 flex flex-col gap-4 xl:p-16">
                        <h4 className="text-2xl font-display text-slate-900 xl:text-4xl">Ogród sensoryczny</h4>
                        <P
                            className="text-left"
                            html="Nasza przestrzeń ogrodu sensoryczno-edukacyjnego to miejsce, w którym dzieci mogą bawić się, relaksować i odkrywać świat przyrody wszystkimi zmysłami. Ogród ten został zaprojektowany w taki sposób, by umożliwić dzieciom interakcję z naturą przez cały rok, stymulując ich rozwój poprzez różnorodne doświadczenia sensoryczne." />
                    </div>

                    <div className="bg-green-50 rounded-3xl p-8 flex-col gap-4 xl:col-span-2 grid grid-cols-2">
                        <img src="/images/o-nas/o-nas-bogata-oferta.jpg" alt="Bogata oferta zajęć" className="w-full h-auto rounded-lg col-span-2 xl:col-span-1 order-1 xl:order-2" />

                        <div className="flex flex-col gap-4 col-span-2 xl:col-span-1  order-2 xl:order-1 xl:p-8">
                            <h4 className="text-2xl xl:text-4xl font-display text-slate-900">Uprawa własnego ogródka</h4>
                            <P
                                className="text-left"
                                html="Od najmłodszych lat uczymy dzieci, jak dbać o rośliny. Samodzielnie tworzymy i pielęgnujemy własne grządki, a radość zebranych plonów to dla nas wspólna nagroda. Obserwujemy, jak rośliny rosną, rozwijają się i zmieniają, a przy tym uczymy się odpowiedzialności za ich pielęgnację." />
                        </div>
                    </div>
                </section>
            </section>
        </section>
    )
}