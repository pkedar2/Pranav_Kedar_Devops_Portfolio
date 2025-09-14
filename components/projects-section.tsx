import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Plus } from "lucide-react"

const projects = [
  {
    title: "Secure 2-Tier Application Deployment on AWS",
    description:
      "Implemented a robust 2-tier AWS architecture featuring a Bastion Host for secure access, complete infrastructure automation using Terraform, and comprehensive monitoring with CloudWatch.",
    technologies: ["AWS", "Terraform", "CloudWatch", "Bastion Host", "VPC", "Security Groups"],
    image: "/aws-architecture-diagram-with-servers-and-cloud-in.jpg",
    github: "https://github.com/pkedar2",
    demo: "https://github.com/pkedar2",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 bg-card/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105"
            >
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg text-primary">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-card-foreground text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="border-secondary/30 text-secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button size="sm" variant="outline" className="w-full bg-transparent">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button size="sm" className="w-full">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* More Projects Coming Soon Card */}
          <Card className="bg-card/30 backdrop-blur-sm border-dashed border-primary/40 hover:border-primary/60 transition-colors flex items-center justify-center min-h-[400px]">
            <CardContent className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
                <Plus className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-primary">More Projects Coming Soon</h3>
              <p className="text-muted text-sm">
                Currently working on exciting new projects involving microservices, monitoring solutions, and
                cloud-native applications.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
