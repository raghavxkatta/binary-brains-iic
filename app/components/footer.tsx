
import { motion } from "framer-motion"
import { Brain } from "lucide-react"

const Footer = () => {
    return (
        <footer id="about" className="bg-muted/80 border-t border-border/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/50 to-background"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
                <div className="grid md:grid-cols-4 gap-12">
                    <motion.div
                        className="col-span-1"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                                <Brain className="h-7 w-7 text-primary-foreground" />
                            </div>
                            <span className="text-2xl font-bold text-gradient-advanced">AI Therapist</span>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                            Revolutionary AI companion for emotional support, built with cutting-edge technology and genuine care
                            for your wellbeing and mental health journey.
                        </p>
                    </motion.div>

                    {[
                        {
                            title: "Features",
                            links: [
                                "AI Chat Support",
                                "Privacy & Security",
                                "Mood Analytics",
                                "Wellness Tools",
                                "24/7 Availability",
                            ],
                        },
                        {
                            title: "Support",
                            links: ["Help Center", "Crisis Resources", "Professional Help", "Community Forum", "Contact Us"],
                        },
                        {
                            title: "Legal",
                            links: ["Privacy Policy", "Terms of Service", "Disclaimer", "Cookie Policy", "GDPR Compliance"],
                        },
                    ].map((section, index) => (
                        <motion.div
                            key={section.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="font-bold mb-6 text-lg">{section.title}</h3>
                            <ul className="space-y-3 text-muted-foreground">
                                {section.links.map((link) => (
                                    <li key={link}>
                                        <motion.a
                                            href="#"
                                            className="hover:text-primary transition-colors duration-300"
                                            whileHover={{ x: 8 }}
                                        >
                                            {link}
                                        </motion.a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="border-t border-border/20 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                >
                    <p className="text-muted-foreground font-medium">
                        © 2024 AI Therapist. Transforming lives through revolutionary technology.
                    </p>
                    <div className="flex space-x-6 mt-6 sm:mt-0">
                        {["Twitter", "LinkedIn", "GitHub", "Discord"].map((social, index) => (
                            <motion.a
                                key={social}
                                href="#"
                                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                                whileHover={{ scale: 1.3, rotate: 10, y: -3 }}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 + index * 0.1 }}
                            >
                                <span className="sr-only">{social}</span>
                                <div className="h-6 w-6 bg-current rounded-lg" />
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </footer>
    )
}

export default Footer