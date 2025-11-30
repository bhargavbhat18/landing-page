"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const handleStartTrial = () => {
    console.log("[v0] Start Free Trial clicked")
    window.location.href = "#pricing"
  }

  const handleWatchDemo = () => {
    console.log("[v0] Watch Demo clicked")
    alert("Demo video coming soon!")
  }

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/10 via-background to-background" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="flex flex-col gap-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              AI-Powered Training
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance leading-tight">
              Your Personal <span className="text-accent">AI Fitness</span> Coach
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Transform your fitness journey with personalized AI coaching that adapts to your goals, lifestyle, and
              progress in real-time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-base"
                onClick={handleStartTrial}
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base border-border bg-secondary text-secondary-foreground hover:bg-secondary/80"
                onClick={handleWatchDemo}
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-foreground">50K+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <div className="text-3xl font-bold text-foreground">4.9/5</div>
                <div className="text-sm text-muted-foreground">User Rating</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <div className="text-3xl font-bold text-foreground">10M+</div>
                <div className="text-sm text-muted-foreground">Workouts</div>
              </div>
            </div>
          </div>

          {/* Right content - Hero image */}
          <div className="relative lg:h-[600px] h-[400px]">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-3xl" />
            <Image
              src="/athletic-person-using-fitness-app-on-smartphone-in.jpg"
              alt="FitAI App Interface"
              fill
              className="object-cover rounded-3xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
