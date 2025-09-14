"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cloud, Container, GitBranch, Code, Settings, Monitor, Play, CheckCircle, Clock } from "lucide-react"

const skillCategories = [
  {
    name: "Cloud Platforms",
    icon: Cloud,
    skills: [
      { name: "AWS", level: 88, description: "EC2, S3, VPC, ELB, NLB, SG, NACL, Lambda, CloudFormation, Route 53" },
      //{ name: "Azure", level: 75, description: "VMs, Storage, AKS, DevOps" },
      { name: "GCP", level: 70, description: "Compute Engine, GKE, Cloud Storage" },
    ],
  },
  {
    name: "Container Orchestration",
    icon: Container,
    skills: [
      { name: "Kubernetes", level: 85, description: "Cluster management, RBAC, Networking" },
      { name: "Docker", level: 92, description: "Multi-stage builds, Compose, Swarm" },
      { name: "Helm", level: 78, description: "Chart development, Templating" },
    ],
  },
  {
    name: "CI/CD & DevOps",
    icon: GitBranch,
    skills: [
      { name: "Jenkins", level: 80, description: "Pipeline as Code, Blue Ocean" },
      { name: "GitLab CI", level: 82, description: "Auto DevOps, Container Registry" },
      { name: "Argo CD", level: 82, description: "GitOps, Progressive Delivery" },
    ],
  },
  {
    name: "Infrastructure as Code",
    icon: Settings,
    skills: [
      { name: "Terraform", level: 85, description: "Multi-cloud provisioning, Modules" },
      { name: "Cloud Formation", level: 78, description: "AWS Cloud Provisioning Module" },
     // { name: "Pulumi", level: 65, description: "Modern IaC with TypeScript" },
    ],
  },
  {
    name: "Monitoring & Observability",
    icon: Monitor,
    skills: [
      { name: "Prometheus", level: 88, description: "Metrics collection, PromQL" },
      { name: "Grafana", level: 85, description: "Dashboards, Alerting" },
      { name: "ELK Stack", level: 80, description: "Log aggregation, Analysis" },
    ],
  },
  {
    name: "Programming & Scripting",
    icon: Code,
    skills: [
      { name: "Python", level: 75, description: "Automation, APIs, Data processing" },
      { name: "Bash/Shell", level: 85, description: "System administration, Automation" },
      //{ name: "Go", level: 68, description: "Microservices, CLI tools" },
    ],
  },
]

const pipelineStages = [
  { name: "Source", icon: GitBranch, status: "completed", duration: 2000 },
  { name: "Build", icon: Settings, status: "running", duration: 3000 },
  { name: "Test", icon: CheckCircle, status: "pending", duration: 2500 },
  { name: "Deploy", icon: Play, status: "pending", duration: 3500 },
  { name: "Monitor", icon: Monitor, status: "pending", duration: 1500 },
]

export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)
  const [pipelineState, setPipelineState] = useState(pipelineStages)
  const [currentStage, setCurrentStage] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          startPipelineAnimation()
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const startPipelineAnimation = () => {
    let stageIndex = 0
    const animateStage = () => {
      if (stageIndex < pipelineStages.length) {
        setPipelineState((prev) =>
          prev.map((stage, index) => ({
            ...stage,
            status: index < stageIndex ? "completed" : index === stageIndex ? "running" : "pending",
          })),
        )
        setCurrentStage(stageIndex)

        setTimeout(() => {
          setPipelineState((prev) =>
            prev.map((stage, index) => ({
              ...stage,
              status: index <= stageIndex ? "completed" : "pending",
            })),
          )
          stageIndex++
          if (stageIndex < pipelineStages.length) {
            setTimeout(animateStage, 500)
          } else {
            // Reset and restart animation
            setTimeout(() => {
              stageIndex = 0
              animateStage()
            }, 2000)
          }
        }, pipelineStages[stageIndex].duration)
      }
    }
    animateStage()
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "text-primary"
      case "running":
        return "text-primary"
      case "pending":
        return "text-muted-foreground"
      default:
        return "text-muted-foreground"
    }
  }

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-12 sm:py-16 lg:py-20 container-responsive bg-gradient-to-br from-background via-card/20 to-background"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-responsive-xl font-bold mb-4 text-foreground">Technical Expertise</h2>
          <p className="text-responsive-base text-foreground/70 max-w-3xl mx-auto">
            Comprehensive skill set spanning cloud infrastructure, DevOps practices, and modern development technologies
          </p>
        </div>

        <div className="mb-12 sm:mb-16">
          <h3 className="text-responsive-lg font-bold text-center mb-6 sm:mb-8 text-foreground">
            CI/CD Pipeline in Action
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Pipeline Flow */}
              <div className="flex flex-col sm:flex-row justify-between items-center mb-6 sm:mb-8 gap-4 sm:gap-0">
                {pipelineState.map((stage, index) => {
                  const IconComponent = stage.icon
                  return (
                    <div key={stage.name} className="flex flex-col items-center relative w-full sm:w-auto">
                      {/* Connection Line - Hidden on mobile, shown on desktop */}
                      {index < pipelineState.length - 1 && (
                        <div
                          className="hidden sm:block absolute top-6 left-full w-full h-0.5 bg-primary/30 z-0"
                          style={{ width: "calc(100vw / 5 - 2rem)" }}
                        >
                          <div
                            className={`h-full bg-primary transition-all duration-1000 ${
                              stage.status === "completed" ? "w-full" : "w-0"
                            }`}
                          />
                        </div>
                      )}

                      {/* Stage Icon */}
                      <div
                        className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 flex items-center justify-center z-10 transition-all duration-500 ${
                          stage.status === "completed"
                            ? "bg-primary/20 border-primary shadow-lg shadow-primary/30"
                            : stage.status === "running"
                              ? "bg-primary/20 border-primary shadow-lg shadow-primary/30 animate-pulse"
                              : "bg-muted/20 border-muted-foreground"
                        }`}
                      >
                        <IconComponent className={`w-4 h-4 sm:w-5 sm:h-5 ${getStatusColor(stage.status)}`} />
                      </div>

                      {/* Stage Name */}
                      <span
                        className={`mt-2 text-xs sm:text-sm font-medium transition-colors ${getStatusColor(stage.status)}`}
                      >
                        {stage.name}
                      </span>

                      {/* Status Indicator */}
                      {stage.status === "running" && (
                        <div className="mt-1 flex items-center gap-1">
                          <Clock className="w-2 h-2 sm:w-3 sm:h-3 text-primary animate-spin" />
                          <span className="text-xs text-primary">Running</span>
                        </div>
                      )}
                      {stage.status === "completed" && (
                        <div className="mt-1 flex items-center gap-1">
                          <CheckCircle className="w-2 h-2 sm:w-3 sm:h-3 text-primary" />
                          <span className="text-xs text-primary">Done</span>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>

              {/* Pipeline Logs */}
              <div className="bg-black/80 rounded-lg p-3 sm:p-4 font-mono text-xs sm:text-sm max-h-24 sm:max-h-32 overflow-hidden">
                <div className="text-primary mb-2">$ pipeline-execution.log</div>
                {pipelineState.map((stage, index) => (
                  <div
                    key={stage.name}
                    className={`transition-opacity duration-500 ${
                      stage.status === "completed"
                        ? "text-primary"
                        : stage.status === "running"
                          ? "text-primary"
                          : "text-muted-foreground"
                    }`}
                  >
                    {stage.status === "completed" && `✓ ${stage.name} completed successfully`}
                    {stage.status === "running" && `⟳ ${stage.name} in progress...`}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid-responsive-3">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon
            return (
              <Card
                key={category.name}
                className="group glass-effect border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2"
                onMouseEnter={() => setHoveredCategory(category.name)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/20">
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <CardTitle className="text-base sm:text-lg font-semibold text-foreground">
                      {category.name}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 sm:space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2 sm:space-y-3">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-foreground text-sm sm:text-base">{skill.name}</span>
                          <Badge variant="secondary" className="text-xs">
                            {skill.level}%
                          </Badge>
                        </div>
                      </div>

                      

                      <p
                        className={`text-xs sm:text-sm text-foreground/60 transition-all duration-300 ${
                          hoveredCategory === category.name
                            ? "opacity-100 max-h-20"
                            : "opacity-70 max-h-0 overflow-hidden sm:max-h-20 sm:opacity-100"
                        }`}
                      >
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <h3 className="text-responsive-lg font-bold mb-6 sm:mb-8 text-foreground">Certifications & Achievements</h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {[
              "Kubernetes Administrator (CKA)",
              "Docker Certified Associate",
              "Terraform Associate",
              "Linux Professional Institute",
            ].map((cert) => (
              <Badge
                key={cert}
                variant="outline"
                className="px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm border-primary/30 hover:bg-primary/10 transition-colors"
              >
                {cert}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
