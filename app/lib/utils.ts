import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// cn = "className"
export function cn(...inputs: (string | undefined | null | false)[]) {
    return twMerge(clsx(inputs))
}
