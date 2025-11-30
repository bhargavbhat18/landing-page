import { Brain, Calendar, TrendingUp, Smartphone, Zap, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Plans",
    description:
      "Get workout and nutrition plans that adapt to your progress, preferences, and lifestyle using advanced AI algorithms.",
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description:
      "Automatically adjust your workout schedule based on your calendar, energy levels, and recovery needs.",
  },
  {
    icon: TrendingUp,
    title: "Real-Time Analytics",
    description:
      "Track your progress with detailed insights and analytics that help you understand what works best for you.",
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description:
      "Access your personalized coaching anywhere with our intuitive mobile app designed for on-the-go training.",
  },
  {
    icon: Zap,
    title: "Instant Adaptation",
    description: "Your AI coach instantly adjusts to injuries, travel, equipment availability, and changing goals.",
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Join a vibrant community of fitness enthusiasts and get motivation from people on similar journeys.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Everything You Need to <span className="text-accent">Succeed</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Powered by cutting-edge AI technology to deliver personalized fitness experiences that actually work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card border-border hover:border-accent/50 transition-colors">
              <CardContent className="p-6 flex flex-col gap-4">
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
