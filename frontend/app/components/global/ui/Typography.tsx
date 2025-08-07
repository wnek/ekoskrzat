import { cn } from "../../../lib/utils/utils";

export function H1({ html, color = 'dark', className }: { html: string, color?: 'dark' | 'white', className?: string }) {
    return (
        <h1 className={cn("font-display ~text-[1.8rem]/[3.8rem] ~leading-[2rem]/[4.7rem] text-slate-800",
            { 'text-white': color === 'white' },
            className)}
            dangerouslySetInnerHTML={{ __html: html }}

        ></h1>
    )
}


export function H2({ html, color = 'dark', className }: { html: string, color?: 'dark' | 'white', className?: string }) {
    return (
        <h2 className={cn("font-display ~text-[1.8rem]/[3.8rem] ~leading-[2rem]/[4.7rem] text-slate-800",
            { 'text-white': color === 'white' },
            className)}
            dangerouslySetInnerHTML={{ __html: html }}
        ></h2>
    )
}

export function H3({ html, color = 'dark', className }: { html: string, color?: 'dark' | 'white', className?: string }) {
    return (
        <h3 className={cn("font-display ~text-[2rem]/[3rem] ~leading-[2rem]/[3rem] text-slate-800",
            { 'text-white': color === 'white' },
            className)}
            dangerouslySetInnerHTML={{ __html: html }}
        ></h3>
    )
}


export function P({ html, align = 'center', className }: { html: string, align?: 'center' | 'left' | 'right', className?: string }) {
    return (
        <p className={cn("text-pretty text-center text-slate-600 2xl:text-2xl",
            {
                'text-center': align === 'center',
                'text-left': align === 'left',
                'text-right': align === 'right',
            },
            className)}
            dangerouslySetInnerHTML={{ __html: html }}
        ></p>
    )
}


