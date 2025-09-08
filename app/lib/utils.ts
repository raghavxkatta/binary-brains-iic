import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// cn = "className"
export function cn(...inputs: any[]) {
  return twMerge(clsx(...inputs))
}

