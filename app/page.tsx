"use client"

import { Button } from "./components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card"
import { Badge } from "./components/ui/badge"
import {
  CheckCircle,
  MessageCircle,
  Shield,
  Star,
  Menu,
  Brain,
  Clock,
  Sparkles,
  Zap,
  Users,
  Bot,
  Heart,
  Lock,
  Cpu,
} from "lucide-react"
import { ThemeToggle } from "./components/theme-toggle"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function AITherapistLanding() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient-advanced animate-gradient">
        {/* Advanced floating elements */}
        <div className="floating-element-advanced"></div>
        <div className="floating-element-advanced"></div>
        <div className="floating-element-advanced"></div>
        <div className="floating-element-advanced"></div>

        {/* Particle system */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
            }}
          />
        ))}

        {/* Advanced mouse follower */}
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full opacity-20 pointer-events-none"
          style={{
            background: `radial-gradient(circle, rgba(31, 182, 193, 0.4) 0%, rgba(22, 78, 99, 0.2) 40%, transparent 70%)`,
            left: mousePosition.x - 300,
            top: mousePosition.y - 300,
          }}
          animate={{
            x: mousePosition.x * 0.03,
            y: mousePosition.y * 0.03,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
        />

        <div className="container mt-40 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <Badge
                variant="secondary"
                className="mb-8 bg-card/80 backdrop-blur-sm text-card-foreground animate-bounce-in-advanced border border-border/20 px-6 py-2"
              >
                <Sparkles className="w-5 h-5 mr-2 animate-pulse" />
                Next-Gen AI Companion - Completely Private & Secure
              </Badge>
            </motion.div>

            <motion.h1
              className="text-5xl sm:text-6xl lg:text-8xl font-bold text-balance mb-8 leading-tight"
              initial={{ opacity: 0, y: 80, rotateX: 90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            >
              Your AI Companion for{" "}
              <motion.span
                className="text-gradient-advanced text-glow"
                animate={{
                  textShadow: [
                    "0 0 30px rgba(31, 182, 193, 0.6)",
                    "0 0 60px rgba(22, 78, 99, 0.8)",
                    "0 0 30px rgba(31, 182, 193, 0.6)",
                  ],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              >
                Meaningful Conversations
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-2xl text-muted-foreground text-pretty mb-12 max-w-4xl mx-auto leading-relaxed font-medium"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Experience revolutionary emotional support with our advanced AI companion. Built with cutting-edge Next.js
              and OpenAI technology to provide dynamic, personalized conversations that adapt to your unique emotional
              needs.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <motion.div
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0 25px 50px rgba(22, 78, 99, 0.4)",
                  y: -5,
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="text-xl px-12 py-8 animate-pulse-glow bg-gradient-to-r from-primary to-accent rounded-2xl font-bold"
                >
                  <Zap className="mr-3 h-6 w-6" />
                  Start Your Journey
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-xl px-12 py-8 glassmorphism-card rounded-2xl font-semibold border-2 bg-transparent"
                >
                  <Bot className="mr-3 h-6 w-6" />
                  See Demo
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-accent" />
                <span className="font-medium">Free to use</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-accent" />
                <span className="font-medium">No registration required</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-accent" />
                <span className="font-medium">Completely private</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="features" className="py-32 bg-muted/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-background"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-6 bg-primary text-primary-foreground border-primary/20 px-4 py-2">
              <Cpu className="w-4 h-4 mr-2" />
              Advanced AI Technology
            </Badge>
            <h2 className="text-4xl sm:text-6xl font-bold text-balance mb-6 text-gradient-advanced">
              Revolutionary AI Support
            </h2>
            <p className="text-2xl text-muted-foreground text-pretty max-w-4xl mx-auto leading-relaxed">
              Experience next-generation emotional support with cutting-edge AI technology that understands and adapts
              to your unique needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: MessageCircle,
                title: "Dynamic Conversations",
                desc: "AI that adapts to your communication style and emotional needs in real-time with advanced natural language processing",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                icon: Shield,
                title: "Quantum Security",
                desc: "Military-grade encryption ensures your conversations remain completely private and secure with zero data retention",
                gradient: "from-emerald-500 to-teal-500",
              },
              {
                icon: Clock,
                title: "24/7 Availability",
                desc: "Your AI companion never sleeps - get instant, intelligent support whenever you need it most, day or night",
                gradient: "from-purple-500 to-indigo-500",
              },
              {
                icon: Users,
                title: "Personalized Experience",
                desc: "Advanced machine learning creates a unique therapeutic experience tailored specifically to your personality and needs",
                gradient: "from-pink-500 to-rose-500",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 80, rotateY: 45 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                whileHover={{ y: -20, rotateY: 5, rotateX: 5 }}
                className="group"
              >
                <Card className="glassmorphism-card card-hover-advanced h-full border-2 border-border/20 relative overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}
                  ></div>

                  <CardHeader className="relative z-10">
                    <motion.div
                      className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.8 }}
                    >
                      <feature.icon className="h-8 w-8 text-primary" />
                    </motion.div>
                    <CardTitle className="text-2xl mb-4 group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">{feature.desc}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-muted/20 to-background"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-6 bg-accent text-accent-foreground border-accent/20 px-4 py-2">
              <Star className="w-4 h-4 mr-2" />
              Life-Changing Results
            </Badge>
            <h2 className="text-4xl sm:text-6xl font-bold text-balance mb-6 text-gradient-advanced">
              Transformative Experiences
            </h2>
            <p className="text-2xl text-muted-foreground text-pretty max-w-4xl mx-auto leading-relaxed">
              Real stories from people who&apos;ve revolutionized their emotional wellness journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                name: "Alex M.",
                role: "College Student",
                rating: 5,
                text: "This AI completely transformed how I handle stress and anxiety. The conversations feel incredibly natural and supportive - it's like having a wise, understanding friend available 24/7 who truly gets me.",
                avatar: "AM",
              },
              {
                name: "Jordan L.",
                role: "Marketing Professional",
                text: "I was initially skeptical about AI therapy, but this platform exceeded every expectation. The personalized responses and emotional intelligence are absolutely incredible - it's genuinely life-changing.",
                avatar: "JL",
              },
              {
                name: "Sam T.",
                role: "Software Developer",
                text: "The privacy aspect gives me complete peace of mind to be vulnerable. I can explore my deepest feelings without judgment and practice emotional conversations in a completely safe space.",
                avatar: "ST",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80, rotateY: 30 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ duration: 1, delay: index * 0.3 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className="glassmorphism-card card-hover-advanced h-full border-2 border-border/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>

                  <CardContent className="pt-8 relative z-10">
                    <motion.div
                      className="flex mb-6"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                    >
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0, rotate: -180 }}
                          whileInView={{ scale: 1, rotate: 0 }}
                          transition={{ delay: 0.7 + i * 0.1, duration: 0.3 }}
                        >
                          <Star className="h-6 w-6 fill-accent text-accent mr-1" />
                        </motion.div>
                      ))}
                    </motion.div>

                    <p className="text-muted-foreground mb-8 italic text-lg leading-relaxed">&quot;{testimonial.text}&quot;</p>

                    <div className="flex items-center">
                      <motion.div
                        className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mr-4 text-primary-foreground font-bold text-lg"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        {testimonial.avatar}
                      </motion.div>
                      <div>
                        <p className="font-bold text-lg">{testimonial.name}</p>
                        <p className="text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/50 to-background"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-6 bg-primary text-primary-foreground border-primary/20 px-4 py-2">
              <Sparkles className="w-4 h-4 mr-2" />
              Flexible Pricing
            </Badge>
            <h2 className="text-4xl sm:text-6xl font-bold text-balance mb-6 text-gradient-advanced">
              Choose Your Journey
            </h2>
            <p className="text-2xl text-muted-foreground text-pretty max-w-4xl mx-auto leading-relaxed">
              Flexible pricing for every stage of your emotional wellness transformation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {[
              {
                name: "Explorer",
                price: "$0",
                period: "/month",
                popular: false,
                features: [
                  "5 conversations per day",
                  "Basic emotional support",
                  "Complete privacy guarantee",
                  "Community access",
                  "Mobile app access",
                ],
                gradient: "from-blue-500/10 to-cyan-500/10",
              },
              {
                name: "Companion",
                price: "$9",
                period: "/month",
                popular: true,
                features: [
                  "Unlimited conversations",
                  "Advanced AI personality",
                  "Mood tracking insights",
                  "Personalized responses",
                  "Priority support",
                  "Advanced analytics",
                ],
                gradient: "from-primary/10 to-accent/10",
              },
              {
                name: "Wellness Pro",
                price: "$19",
                period: "/month",
                popular: false,
                features: [
                  "Everything in Companion",
                  "Crisis support resources",
                  "Professional referrals",
                  "Wellness exercises & tools",
                  "Advanced analytics dashboard",
                  "Custom AI training",
                ],
                gradient: "from-purple-500/10 to-pink-500/10",
              },
            ].map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 80, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -15, scale: 1.03 }}
                className="relative"
              >
                <Card
                  className={`glassmorphism-card card-hover-advanced relative border-2 ${
                    plan.popular
                      ? "border-primary shadow-2xl bg-gradient-to-br from-primary/5 to-accent/5"
                      : "border-border/20"
                  } overflow-hidden h-full`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient}`}></div>

                  {plan.popular && (
                    <motion.div
                      className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20"
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                    >
                      <Badge className="bg-gradient-to-r from-primary to-accent text-primary-foreground animate-pulse-glow px-6 py-2 text-sm font-bold">
                        <Sparkles className="w-4 h-4 mr-2" />
                        Most Popular
                      </Badge>
                    </motion.div>
                  )}

                  <CardHeader className="relative z-10 pb-4">
                    <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                    <CardDescription className="text-base">
                      Perfect for {plan.name.toLowerCase()} level support
                    </CardDescription>
                    <div className="mt-6">
                      <motion.span
                        className="text-5xl font-bold text-gradient-advanced"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                      >
                        {plan.price}
                      </motion.span>
                      <span className="text-muted-foreground text-xl">{plan.period}</span>
                    </div>
                  </CardHeader>

                  <CardContent className="relative z-10">
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <motion.li
                          key={feature}
                          className="flex items-center text-base"
                          initial={{ opacity: 0, x: -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + featureIndex * 0.1 }}
                        >
                          <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        className={`w-full py-4 text-lg font-semibold rounded-xl ${
                          plan.popular ? "animate-pulse-glow bg-gradient-to-r from-primary to-accent" : "border-2"
                        }`}
                        variant={plan.popular ? "default" : "outline"}
                      >
                        {plan.price === "$0" ? "Start Free" : "Get Started"}
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 bg-gradient-to-br from-primary via-accent to-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-accent/90 to-primary/90"></div>

        {/* Advanced background effects */}
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.2) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(255, 255, 255, 0.2) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.2) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h2
            className="text-4xl sm:text-7xl font-bold text-balance mb-8 leading-tight"
            initial={{ opacity: 0, y: 80, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Ready to Transform Your Life?
          </motion.h2>

          <motion.p
            className="text-2xl text-primary-foreground/90 text-pretty mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Join thousands who&apos;ve discovered the transformative power of AI-powered emotional support. Your journey to
            revolutionary mental wellness starts right now.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{
                scale: 1.08,
                boxShadow: "0 30px 60px rgba(0,0,0,0.4)",
                y: -8,
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                variant="secondary"
                className="text-xl px-12 py-8 animate-shimmer-advanced bg-white text-primary hover:bg-white/90 rounded-2xl font-bold"
              >
                <MessageCircle className="mr-3 h-6 w-6" />
                Start Your Journey
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="text-xl px-12 py-8 border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent rounded-2xl font-semibold"
              >
                <Bot className="mr-3 h-6 w-6" />
                Watch Demo
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
    
    </div>
  )
}
