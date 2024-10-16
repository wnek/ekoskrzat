export function H1({ children, html }: { children: React.ReactNode }) {
    return (
        <h1 className="font-display ~text-[2.4rem]/[6rem] ~leading-[2rem]/[6rem] text-slate-800"
            dangerouslySetInnerHTML={{ __html: html }}

        >{children}</h1>
    )
}


export function H2({ html }: { html: string }) {
    return (
        <h2 className="font-display ~text-[2rem]/[4.5rem] ~leading-[2rem]/[4rem] text-slate-800"
            dangerouslySetInnerHTML={{ __html: html }}
        ></h2>
    )
}

export function H3({ children }: { children: React.ReactNode }) {
    return (
        <h3 className="font-display ~text-[2rem]/[3rem] ~leading-[2rem]/[3rem] text-slate-800">{children}</h3>
    )
}
