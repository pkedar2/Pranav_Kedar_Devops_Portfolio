import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Award } from "lucide-react"

const education = [
  {
    degree: "Bachelor's Degree in Electrical Engineering",
    institution: "AISSMS COE, Pune University",
    period: "2018 – 2022",
    grade: "9.1/10",
    icon: GraduationCap,
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Maharashtra State Board",
    period: "2018",
    grade: "73%",
    icon: Award,
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Maharashtra State Board",
    period: "2016",
    grade: "91%",
    icon: Award,
  },
]

export function EducationSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Education
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-colors"
            >
              <CardHeader className="text-center">
                <div className="w-12 h-12 mx-auto bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <edu.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg text-primary">{edu.degree}</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-2">
                <p className="text-card-foreground font-medium">{edu.institution}</p>
                <p className="text-muted text-sm">{edu.period}</p>
                <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary px-3 py-1 rounded-full text-sm font-medium">
                  <Award className="h-4 w-4" />
                  {edu.grade}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
