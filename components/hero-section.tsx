"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Download, ChevronDown, Terminal, Server, Database, Cloud, GitBranch } from "lucide-react"

export function HeroSection() {
  const [displayText, setDisplayText] = useState("")
  const fullText = "Building Resilient, Scalable, and Automated Systems"
  const [terminalLines, setTerminalLines] = useState<string[]>([])
  const [currentTypingLine, setCurrentTypingLine] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [matrixChars, setMatrixChars] = useState<
    Array<{ id: number; char: string; x: number; y: number; speed: number }>
  >([])
  const [metrics, setMetrics] = useState({
    cpu: 0,
    memory: 0,
    network: 0,
    uptime: 0,
  })

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const commands = [
      "$ kubectl get pods --all-namespace",
      "$ docker ps | grep production",
      "$ terraform plan -out=deployment.tfplan",
      "$ helm upgrade --install app ./charts/app",
      "$ prometheus query up{job='kubernetes-nodes'}",
    ]

    let currentIndex = 0
    let typingIndex = 0

    const typeCommand = () => {
      const currentCommand = commands[currentIndex]
      setIsTyping(true)
      setCurrentTypingLine("")

      const typingTimer = setInterval(() => {
        if (typingIndex < currentCommand.length) {
          setCurrentTypingLine(currentCommand.slice(0, typingIndex + 1))
          typingIndex++
        } else {
          clearInterval(typingTimer)
          setIsTyping(false)

          // Add completed command to terminal lines
          setTimeout(() => {
            setTerminalLines((prev) => [...prev, currentCommand])
            setCurrentTypingLine("")
            currentIndex = (currentIndex + 1) % commands.length
            typingIndex = 0

            // Clear terminal after showing all commands
            if (currentIndex === 0) {
              setTimeout(() => {
                setTerminalLines([])
              }, 1000)
            }
          }, 500)
        }
      }, 50) // Typing speed
    }

    // Start first command immediately
    typeCommand()

    const terminalTimer = setInterval(() => {
      typeCommand()
    }, 3000) // Time between commands

    return () => {
      clearInterval(terminalTimer)
    }
  }, [])

  useEffect(() => {
    const chars = "01"
    const createChar = (id: number) => ({
      id,
      char: chars[Math.floor(Math.random() * chars.length)],
      x: Math.random() * 100,
      y: -10,
      speed: Math.random() * 2 + 1,
    })

    const initialChars = Array.from({ length: 20 }, (_, i) => createChar(i))
    setMatrixChars(initialChars)

    const animateMatrix = () => {
      setMatrixChars((prev) =>
        prev
          .map((char) => ({
            ...char,
            y: char.y + char.speed,
            char: Math.random() > 0.95 ? chars[Math.floor(Math.random() * chars.length)] : char.char,
          }))
          .filter((char) => char.y < 110)
          .concat(prev.length < 30 && Math.random() > 0.8 ? [createChar(Date.now())] : []),
      )
    }

    const matrixInterval = setInterval(animateMatrix, 100)
    return () => clearInterval(matrixInterval)
  }, [])

  useEffect(() => {
    const updateMetrics = () => {
      setMetrics({
        cpu: Math.floor(Math.random() * 30) + 70,
        memory: Math.floor(Math.random() * 20) + 60,
        network: Math.floor(Math.random() * 40) + 30,
        uptime: Math.floor(Math.random() * 10) + 99.5,
      })
    }

    updateMetrics()
    const metricsInterval = setInterval(updateMetrics, 3000)
    return () => clearInterval(metricsInterval)
  }, [])

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  const downloadResume = () => {
    const link = document.createElement("a")
    link.href = "/Pranav_kedar_Resume.pdf"
    link.download = "Pranav_Kedar_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative container-responsive overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(88,166,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(88,166,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] sm:bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black_50%,transparent_100%)]" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 hidden md:block">
        {matrixChars.map((char) => (
          <div
            key={char.id}
            className="absolute text-primary font-mono text-sm animate-fade-in"
            style={{
              left: `${char.x}%`,
              top: `${char.y}%`,
              transform: "translateY(-50%)",
            }}
          >
            {char.char}
          </div>
        ))}
      </div>

      <div className="absolute top-16 sm:top-20 left-4 sm:left-10 animate-float">
        <div className="w-8 h-8 sm:w-12 sm:h-12 bg-primary/10 backdrop-blur-sm rounded-xl border border-primary/20 flex items-center justify-center hover:bg-primary/20 transition-all duration-300 hover:scale-110">
          <Terminal className="w-4 h-4 sm:w-6 sm:h-6 text-primary" />
        </div>
      </div>
      <div className="absolute top-24 sm:top-32 right-8 sm:right-16 animate-float" style={{ animationDelay: "1s" }}>
        <div className="w-8 h-8 sm:w-12 sm:h-12 bg-primary/10 backdrop-blur-sm rounded-xl border border-primary/20 flex items-center justify-center hover:bg-primary/20 transition-all duration-300 hover:scale-110">
          <Server className="w-4 h-4 sm:w-6 sm:h-6 text-primary" />
        </div>
      </div>
      <div className="absolute bottom-24 sm:bottom-32 left-8 sm:left-20 animate-float" style={{ animationDelay: "2s" }}>
        <div className="w-8 h-8 sm:w-12 sm:h-12 bg-primary/10 backdrop-blur-sm rounded-xl border border-primary/20 flex items-center justify-center hover:bg-primary/20 transition-all duration-300 hover:scale-110">
          <Cloud className="w-4 h-4 sm:w-6 sm:h-6 text-primary" />
        </div>
      </div>
      <div className="absolute top-1/2 left-4 sm:left-8 animate-float" style={{ animationDelay: "0.5s" }}>
        <div className="w-6 h-6 sm:w-10 sm:h-10 bg-primary/10 backdrop-blur-sm rounded-xl border border-primary/20 flex items-center justify-center hover:bg-primary/20 transition-all duration-300 hover:scale-110">
          <Database className="w-3 h-3 sm:w-5 sm:h-5 text-primary" />
        </div>
      </div>
      <div className="absolute top-1/3 right-4 sm:right-8 animate-float" style={{ animationDelay: "1.5s" }}>
        <div className="w-6 h-6 sm:w-10 sm:h-10 bg-primary/10 backdrop-blur-sm rounded-xl border border-primary/20 flex items-center justify-center hover:bg-primary/20 transition-all duration-300 hover:scale-110">
          <GitBranch className="w-3 h-3 sm:w-5 sm:h-5 text-primary" />
        </div>
      </div>

      <div className="absolute top-4 sm:top-16 right-2 sm:right-4 w-72 sm:w-80 h-40 sm:h-48 bg-black/90 backdrop-blur-sm rounded-lg border border-primary/30 p-3 sm:p-4 font-mono text-xs sm:text-sm hidden lg:block shadow-2xl">
        <div className="flex items-center gap-2 mb-2 sm:mb-3 pb-2 border-b border-primary/20">
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500 animate-pulse"></div>
          <div
            className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500 animate-pulse"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div
            className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500 animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <span className="text-primary/70 ml-2 text-xs">terminal</span>
        </div>
        <div className="h-24 sm:h-28 overflow-hidden">
          <div className="space-y-1">
            {terminalLines.map((line, index) => (
              <div key={index} className="text-primary animate-fade-in break-all">
                {line}
              </div>
            ))}
            {(currentTypingLine || isTyping) && (
              <div className="text-primary break-all">
                {currentTypingLine}
                <span className="animate-pulse">█</span>
              </div>
            )}
            {!isTyping && !currentTypingLine && <div className="text-primary animate-pulse">█</div>}
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 sm:bottom-16 left-2 sm:left-4 w-56 sm:w-64 bg-black/90 backdrop-blur-sm rounded-lg border border-primary/30 p-3 sm:p-4 font-mono text-xs hidden lg:block shadow-2xl">
        <div className="text-primary/70 mb-2 sm:mb-3 border-b border-primary/20 pb-2">System Metrics</div>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-foreground/70">CPU:</span>
            <span className="text-primary">{metrics.cpu}%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-foreground/70">Memory:</span>
            <span className="text-primary">{metrics.memory}%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-foreground/70">Network:</span>
            <span className="text-primary">{metrics.network} MB/s</span>
          </div>
          <div className="flex justify-between">
            <span className="text-foreground/70">Uptime:</span>
            <span className="text-primary">{metrics.uptime}%</span>
          </div>
        </div>
      </div>

      <div className="text-center z-10 max-w-4xl mx-auto px-4">
        <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-36 lg:h-36 mx-auto mb-6 sm:mb-8 rounded-full bg-gradient-to-br from-primary to-primary/60 p-1 shadow-2xl animate-pulse-glow">
          <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden">
            <img
              src="/pranav_profile.jpg"
              alt="Pranav Kedar"
              className="w-full h-full rounded-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

        </div>

        <h1 className="text-responsive-xl font-bold mb-4 leading-tight text-foreground">Pranav Kedar</h1>

        <h2 className="text-responsive-lg text-primary mb-2 font-medium">Site Reliability Engineer</h2>
        <p className="text-responsive-base text-foreground/80 mb-6 sm:mb-8">
          DevOps • Cloud Architecture • Infrastructure Automation
        </p>

        <div className="text-base sm:text-lg lg:text-xl text-foreground mb-6 sm:mb-8 h-6 sm:h-8 font-mono">
          <span className="terminal-cursor">{displayText}</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12">
          <Button
            size="lg"
            onClick={downloadResume}
            className="w-full sm:w-auto glow-effect bg-primary hover:bg-primary/90 text-white font-semibold px-6 sm:px-8 hover:scale-105 transition-transform"
          >
            <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            Download Resume
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={scrollToAbout}
            className="w-full sm:w-auto border-primary/30 hover:bg-primary/10 px-6 sm:px-8 bg-transparent hover:scale-105 transition-transform"
          >
            Abount Me
          </Button>
        </div>
      </div>

      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6 text-foreground/60" />
      </div>
    </section>
  )
}
