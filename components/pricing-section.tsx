"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "9",
    description: "Perfect for beginners starting their fitness journey",
    features: [
      "AI-generated workout plans",
      "Basic nutrition guidance",
      "Progress tracking",
      "Mobile app access",
      "Community support",
    ],
    cta: "Start Free Trial",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "19",
    description: "For serious athletes looking to level up",
    features: [
      "Everything in Starter",
      "Advanced AI personalization",
      "Custom meal plans",
      "Video form analysis",
      "Priority support",
      "Unlimited plan adjustments",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Elite",
    price: "39",
    description: "Maximum results with premium features",
    features: [
      "Everything in Pro",
      "One-on-one virtual coaching",
      "Supplement recommendations",
      "Injury prevention AI",
      "Advanced analytics dashboard",
      "Early access to new features",
    ],
    cta: "Start Free Trial",
    highlighted: false,
  },
]

export function PricingSection() {
  const handlePlanSelect = (planName: string) => {
    console.log(`[v0] ${planName} plan selected`)
    alert(`Starting 14-day free trial for ${planName} plan! Redirecting to sign up...`)
  }

  return (
    <section id="pricing" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Choose Your <span className="text-accent">Plan</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Start with a 14-day free trial. No credit card required. Cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`bg-card border-border flex flex-col ${
                plan.highlighted ? "ring-2 ring-accent border-accent" : ""
              }`}
            >
              <CardHeader className="p-6 pb-8">
                {plan.highlighted && (
                  <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium w-fit mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-card-foreground">{plan.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-5xl font-bold text-card-foreground">${plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <p className="mt-4 text-muted-foreground">{plan.description}</p>
              </CardHeader>

              <CardContent className="p-6 pt-0 flex-1">
                <ul className="flex flex-col gap-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-card-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="p-6 pt-0">
                <Button
                  className={`w-full ${
                    plan.highlighted
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                  size="lg"
                  onClick={() => handlePlanSelect(plan.name)}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-8">
          All plans include a 14-day free trial. No credit card required.
        </p>
      </div>
    </section>
  )
}
