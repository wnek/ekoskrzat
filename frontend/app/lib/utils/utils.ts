import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassName[]) {
    return twMerge(clsx(inputs))
}