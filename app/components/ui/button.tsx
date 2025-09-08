"use client"

import * as React from "react"
import { cn } from "../../lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "secondary" | "accent" | "outline" | "ghost"
    size?: "default" | "sm" | "lg"
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "default", size = "default", ...props }, ref) => (
        <button
            ref={ref}
            className={cn(
                "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50 disabled:pointer-events-none",
                {
                    "bg-primary text-white hover:bg-primary/90": variant === "default",
                    "bg-muted text-foreground hover:bg-muted/80": variant === "secondary",
                    "bg-accent text-accent-foreground hover:bg-accent/80": variant === "accent",
                    "border border-input bg-transparent hover:bg-muted/50": variant === "outline",
                    "bg-transparent hover:bg-muted/50": variant === "ghost",
                },
                {
                    "px-4 py-2": size === "default",
                    "px-3 py-1.5 text-xs": size === "sm",
                    "px-6 py-3 text-base": size === "lg",
                },
                className
            )}
            {...props}
        />
    )
)

Button.displayName = "Button"