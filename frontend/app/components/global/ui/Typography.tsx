export function H1({ html }: { html: string }) {
    return (
        <h1 className="font-display ~text-[1.8rem]/[3.8rem] ~leading-[2rem]/[4.7rem] text-slate-800"
            dangerouslySetInnerHTML={{ __html: html }}

        ></h1>
    )
}


export function H2({ html }: { html: string }) {
    return (
        <h2 className="font-display ~text-[1.8rem]/[3rem] ~leading-[2rem]/[3.5rem] text-slate-800"
            dangerouslySetInnerHTML={{ __html: html }}
        ></h2>
    )
}

export function H3({ html }: { html: string }) {
    return (
        <h3 className="font-display ~text-[2rem]/[3rem] ~leading-[2rem]/[3rem] text-slate-800"
            dangerouslySetInnerHTML={{ __html: html }}
        ></h3>
    )
}
