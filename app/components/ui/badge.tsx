"use client"

import * as React from "react"
import { cn } from "../../lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "secondary" | "accent"
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
    return (
        <div
            className={cn(
                "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-colors",
                {
                    "bg-primary text-white": variant === "default",
                    "bg-muted text-foreground": variant === "secondary",
                    "bg-accent text-accent-foreground": variant === "accent",
                },
                className
            )}
            {...props}
        />
    )
}

Badge.displayName = "Badge"

