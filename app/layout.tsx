import type React from "react"
import type { Metadata } from "next"
import Header from "./components/header"
import Footer from "./components/footer"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "AI Therapist - Your Friendly Companion for Casual Conversations",
  description:
    "A supportive AI chat companion built with Next.js and OpenAI. Practice emotional conversations in a safe, private environment designed for everyday support.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans`}>
        <Header />
        <Suspense fallback={null}>{children}</Suspense>
        <Footer />
      </body>
    </html>
  )
}
