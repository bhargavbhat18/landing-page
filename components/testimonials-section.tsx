import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Software Engineer",
    image: "/professional-woman-smiling-headshot.png",
    rating: 5,
    content:
      "FitAI completely changed my approach to fitness. The AI adapts to my busy schedule and I've never felt stronger. Lost 25 lbs in 4 months!",
  },
  {
    name: "Michael Chen",
    role: "Entrepreneur",
    image: "/professional-man-smiling-headshot.png",
    rating: 5,
    content:
      "As someone who travels constantly, having an AI coach that adjusts to my location and available equipment is a game-changer. Highly recommend!",
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director",
    image: "/professional-woman-athletic-headshot.jpg",
    rating: 5,
    content:
      "The personalized nutrition plans are incredible. The AI learns what I like and don't like, making it so easy to stick to my goals.",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Loved by Thousands of <span className="text-accent">Fitness Enthusiasts</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            See how FitAI has transformed the lives of our amazing community members.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border">
              <CardContent className="p-6 flex flex-col gap-4">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>

                <p className="text-card-foreground leading-relaxed">{testimonial.content}</p>

                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-card-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
