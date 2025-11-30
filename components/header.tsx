"use client"

import { useState } from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Dumbbell } from "lucide-react"
import { LoginDialog } from "./login-dialog"

export function Header() {
  const [loginOpen, setLoginOpen] = useState(false)

  const handleLogin = () => {
    console.log("[v0] Login button clicked")
    setLoginOpen(true)
  }

  const handleGetStarted = () => {
    console.log("[v0] Get Started button clicked")
    window.location.href = "#pricing"
  }

  return (
    <>
      <header className="fixed top-0 w-full z-50 border-b border-border/40 bg-background/80 backdrop-blur-lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Dumbbell className="h-6 w-6 text-accent" />
              <span className="text-xl font-bold text-foreground">FitAI</span>
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="#features"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Features
              </Link>
              <Link
                href="#testimonials"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Testimonials
              </Link>
              <Link
                href="#pricing"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Pricing
              </Link>
            </nav>

            <div className="flex items-center gap-4">
              <Button variant="ghost" className="hidden sm:inline-flex" onClick={handleLogin}>
                Log in
              </Button>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90" onClick={handleGetStarted}>
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </header>

      <LoginDialog open={loginOpen} onOpenChange={setLoginOpen} />
    </>
  )
}
