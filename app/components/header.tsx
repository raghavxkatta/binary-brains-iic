import { motion } from "framer-motion"
import { Brain, Menu } from "lucide-react"
import React from "react"
import { Button } from "./ui/button"
import {ThemeToggle} from "../components/theme-toggle"

const Header = () => {
    return (

        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 w-full z-50 glassmorphism-card border-b border-border/20"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <motion.div
                        className="flex items-center space-x-3"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                        <motion.div
                            className="h-12 w-12 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center animate-pulse-glow"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                        >
                            <Brain className="h-7 w-7 text-primary-foreground" />
                        </motion.div>
                        <span className="text-2xl font-bold text-gradient-advanced">AI Therapist</span>
                    </motion.div>

                    <nav className="hidden md:flex items-center space-x-10">
                        {["Features", "Testimonials", "Pricing", "About"].map((item, index) => (
                            <motion.a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-muted-foreground hover:text-primary transition-all duration-300 relative font-medium"
                                whileHover={{ scale: 1.1, y: -2 }}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 + 0.4 }}
                            >
                                {item}
                                <motion.div
                                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary"
                                    whileHover={{ width: "100%" }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.a>
                        ))}
                    </nav>

                    <div className="flex items-center space-x-4">
                        <ThemeToggle />
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button variant="ghost" className="hidden sm:inline-flex font-medium">
                                Sign In
                            </Button>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button className="animate-shimmer-advanced bg-gradient-to-r from-primary to-accent font-semibold">
                                Try Now
                            </Button>
                        </motion.div>
                        <Button variant="ghost" size="icon" className="md:hidden">
                            <Menu className="h-6 w-6" />
                        </Button>
                    </div>
                </div>
            </div>
        </motion.header>
    )
}

export default Header
