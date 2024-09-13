export default function Mission() {
  return (
    <section className="flex flex-col items-start justify-center gap-8 bg-white px-8 py-16 xl:h-[90vh] xl:px-40 2xl:py-52">
      <h3 className="w-fit rounded-full border border-slate-300 px-4 py-2 text-blue-600">
        Nasza misja
      </h3>
      <h2 className="font-display text-2xl text-slate-800 md:text-6xl lg:w-3/4 2xl:text-8xl">
        Drogi Rodzicu, naszą misją jest, by Twoje dziecko mogło rozwijać się pod
        opieką <strong>najlepszych specjalistów</strong>, wśród natury w pięknym
        ogrodzie.
      </h2>
      <div className="flex items-center gap-4">
        <img src="/images/logo.svg" alt="Logo" />
        <p className="italic text-slate-500">Zespół Przedszkola Ekoskrzat</p>
      </div>
    </section>
  );
}
