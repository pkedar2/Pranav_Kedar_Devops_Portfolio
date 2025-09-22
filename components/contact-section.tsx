"use client"

import { Phone, Mail, MapPin, Linkedin } from "lucide-react"

export function ContactSection() {
  return (
    <section className="py-20 px-4 bg-card/20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Get In Touch
        </h2>

        <div className="max-w-2xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="flex items-center gap-4 p-6 glass-effect rounded-lg hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-foreground font-medium">Phone</p>
                <p className="text-foreground/70"> </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 glass-effect rounded-lg hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                <Mail className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <p className="text-foreground font-medium">Email</p>
                <p className="text-foreground/70">pranavkedarjp@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 glass-effect rounded-lg hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                <MapPin className="h-6 w-6 text-accent" />
              </div>
              <div>
                <p className="text-foreground font-medium">Location</p>
                <p className="text-foreground/70">Pune, Maharashtra, India</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 glass-effect rounded-lg hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                <Linkedin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-foreground font-medium">LinkedIn</p>
                <a href="https://www.linkedin.com/in/pranav-kedar-devops-engineer/?originalSubdomain=in" className="text-primary hover:text-primary/80 transition-colors">
                  Connect with me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
