import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {

    // px-2 py-2 -> p-2
    return twMerge(clsx(inputs))
}