"use client"

type CardProps = {
    title: string,
    description: string,
    children: React.ReactNode
}

export default function Card({ title, description, children }: CardProps) {
    return (
        <div className="w-full border-1 border-red">
            <h1>{title}</h1>
            <p>{description}</p>    
            {children}
        </div>
    )
}