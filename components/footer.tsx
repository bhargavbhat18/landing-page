import Link from "next/link"
import { Dumbbell, Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Dumbbell className="h-6 w-6 text-accent" />
              <span className="text-xl font-bold text-foreground">FitAI</span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm leading-relaxed">
              Transform your fitness journey with AI-powered coaching that adapts to your unique goals and lifestyle.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="h-10 w-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-accent transition-colors"
              >
                <Facebook className="h-5 w-5 text-muted-foreground" />
              </Link>
              <Link
                href="#"
                className="h-10 w-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-accent transition-colors"
              >
                <Twitter className="h-5 w-5 text-muted-foreground" />
              </Link>
              <Link
                href="#"
                className="h-10 w-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-accent transition-colors"
              >
                <Instagram className="h-5 w-5 text-muted-foreground" />
              </Link>
              <Link
                href="#"
                className="h-10 w-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-accent transition-colors"
              >
                <Youtube className="h-5 w-5 text-muted-foreground" />
              </Link>
            </div>
          </div>

          {/* Product column */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Product</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  Mobile App
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  AI Technology
                </Link>
              </li>
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  Press Kit
                </Link>
              </li>
            </ul>
          </div>

          {/* Support column */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Support</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} FitAI. All rights reserved.</p>
          <p className="text-muted-foreground text-sm">Built with ❤️ using Next.js, Tailwind CSS, and Vercel v0</p>
        </div>
      </div>
    </footer>
  )
}
