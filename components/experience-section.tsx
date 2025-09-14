import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar } from "lucide-react"

const experiences = [
  {
    company: "VOIS",
    position: "Site Reliability Engineer",
    period: "Nov 2023 – Present",
    highlights: [
      "WebLogic deployments and SSL/TLS configuration",
      "Kubernetes orchestration with Helm charts",
      "AWS infrastructure management (VPC, IAM, Route 53, Load Balancers)",
      "Infrastructure automation with Terraform",
      "CI/CD pipeline optimization with Jenkins & Argo CD",
    ],
    technologies: ["WebLogic", "Kubernetes", "Helm", "AWS", "Terraform", "Jenkins", "Argo CD"],
  },
  {
    company: "VOIS",
    position: "Graduate Engineer Trainee",
    period: "Nov 2022 – Nov 2023",
    highlights: [
      "Pega application deployments and maintenance",
      "Apache Tomcat server management and optimization",
      "Database performance tuning and monitoring",
      "Development of automation scripts and practices",
    ],
    technologies: ["Pega", "Apache Tomcat", "Database Tuning", "Automation"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Work Experience
        </h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block" />

                <Card className="md:ml-16 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-colors">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <CardTitle className="text-xl text-primary">{exp.position}</CardTitle>
                     <div className="flex items-center gap-2 text-white">
  <Calendar className="h-4 w-4" />
  <span className="text-sm text-white">{exp.period}</span>
</div>

                    </div>
                    <div className="flex items-center gap-2 text-secondary">
                      <Building className="h-4 w-4" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-card-foreground">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-secondary/20 text-secondary border-secondary/30"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
