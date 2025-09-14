"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Server, Cloud, Code, Award, Target, Zap, Shield, Database } from "lucide-react"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState({ experience: 0, projects: 0, uptime: 0 })
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          const animateCounters = () => {
            const duration = 2000
            const steps = 60
            const stepDuration = duration / steps

            let step = 0
            const timer = setInterval(() => {
              step++
              const progress = step / steps
              const easeOut = 1 - Math.pow(1 - progress, 3)

              setCounters({
                experience: Math.floor(easeOut * 3),
                projects: Math.floor(easeOut * 5),
                uptime: Math.floor(easeOut * 99.9 * 10) / 10,
              })

              if (step >= steps) {
                clearInterval(timer)
                setCounters({ experience: 3, projects: 5, uptime: 99.9 })
              }
            }, stepDuration)
          }

          setTimeout(animateCounters, 500)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="about" className="py-20 px-4 bg-gradient-to-br from-background to-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Passionate about building resilient systems that scale and deliver exceptional reliability
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-foreground leading-relaxed">
                Site Reliability Engineer with <strong className="text-primary">hands-on expertise</strong> in building
                and maintaining mission-critical infrastructure. Specialized in{" "}
                <strong className="text-secondary">Linux systems</strong>,
                <strong className="text-accent"> cloud architecture</strong>, and{" "}
                <strong className="text-primary">automation</strong>
                with a proven track record of delivering 99.9% uptime.
              </p>

              <p className="text-lg text-foreground/80 leading-relaxed">
                My approach combines deep technical knowledge with strategic thinking, focusing on
                <strong className="text-secondary"> proactive monitoring</strong>,
                <strong className="text-primary"> infrastructure as code</strong>, and
                <strong className="text-accent"> continuous improvement</strong> to ensure systems remain resilient
                under any load.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground mb-4">Core Competencies</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Server, label: "System Reliability", color: "text-primary" },
                  { icon: Cloud, label: "Cloud Architecture", color: "text-secondary" },
                  { icon: Code, label: "Infrastructure Automation", color: "text-accent" },
                  { icon: Shield, label: "Security & Compliance", color: "text-orange-500" },
                  { icon: Database, label: "Data Management", color: "text-purple-500" },
                  { icon: Zap, label: "Performance Optimization", color: "text-yellow-500" },
                ].map((item, index) => {
                  const IconComponent = item.icon
                  return (
                    <div
                      key={item.label}
                      className={`flex items-center gap-3 p-3 rounded-lg bg-card/30 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300 hover-lift ${
                        isVisible ? "animate-slide-up" : "opacity-0"
                      }`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <IconComponent className={`h-6 w-6 ${item.color}`} />
                      <span className="text-sm font-medium text-foreground">{item.label}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground mb-4">Key Achievements</h3>
              <div className="space-y-3">
                {[
                  "Reduced system downtime by 85% through proactive monitoring",
                  "Automated deployment processes, cutting release time by 60%",
                  "Led migration of legacy systems to cloud-native architecture",
                  "Implemented comprehensive disaster recovery procedures",
                ].map((achievement, index) => (
                  <div
                    key={index}
                    className={`flex items-start gap-3 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
                    style={{ animationDelay: `${(index + 6) * 150}ms` }}
                  >
                    <Award className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/80">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="glass-effect border-primary/20 hover:border-primary/40 transition-all duration-300 hover-lift">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Professional Metrics</h3>
                  <p className="text-foreground/70">Delivering excellence through measurable results</p>
                </div>

                <div className="grid grid-cols-1 gap-8">
                  <div className="text-center group">
                    <div className="text-4xl font-bold text-primary mb-2 transition-all duration-300 group-hover:scale-110">
                      {counters.experience}+
                    </div>
                    <div className="text-sm text-foreground/80 font-medium">Years Experience</div>
                    <div className="text-xs text-foreground/60 mt-1">In Production Systems</div>
                  </div>

                  <div className="text-center group">
                    <div className="text-4xl font-bold text-secondary mb-2 transition-all duration-300 group-hover:scale-110">
                      {counters.projects}+
                    </div>
                    <div className="text-sm text-foreground/80 font-medium">Projects Deployed</div>
                    <div className="text-xs text-foreground/60 mt-1">Successfully Delivered</div>
                  </div>

                  <div className="text-center group">
                    <div className="text-4xl font-bold text-accent mb-2 transition-all duration-300 group-hover:scale-110">
                      {counters.uptime}%
                    </div>
                    <div className="text-sm text-foreground/80 font-medium">System Uptime</div>
                    <div className="text-xs text-foreground/60 mt-1">Average Reliability</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover-lift">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Target className="h-5 w-5 text-secondary" />
                  Professional Values
                </h3>
                <div className="space-y-3">
                  {[
                    { label: "Reliability First", desc: "Systems that work when they matter most" },
                    { label: "Continuous Learning", desc: "Staying ahead of technology trends" },
                    { label: "Team Collaboration", desc: "Building bridges between dev and ops" },
                  ].map((value, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-foreground text-sm">{value.label}</div>
                        <div className="text-xs text-foreground/70">{value.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
