"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, X, User, Bot } from "lucide-react"

const botResponses = [
  "Hi! I'm Pranav's AI Assistant. I can help you learn more about his experience in DevOps and Site Reliability Engineering.",
  "Pranav specializes in AWS, Kubernetes, Docker, and automation. Would you like to know more about any specific area?",
  "He has experience with WebLogic deployments, CI/CD pipelines, and infrastructure automation. Feel free to explore his portfolio!",
  "Pranav is currently working as an SRE at VOIS, focusing on system reliability and cloud infrastructure. Any questions about his work?",
  "You can find his contact information in the Contact section below. He'd love to discuss DevOps opportunities!",
]

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { type: "bot", text: "Hello! I'm Pranav's AI Assistant. How can I help you learn more about his portfolio?" },
  ])

  const handleQuickResponse = (response: string) => {
    setMessages((prev) => [
      ...prev,
      { type: "user", text: response },
      { type: "bot", text: botResponses[Math.floor(Math.random() * botResponses.length)] },
    ])
  }

  const quickResponses = [
    "Tell me about his experience",
    "What are his key skills?",
    "Show me his projects",
    "How can I contact him?",
  ]

  return (
    <>
      {/* Chat Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg glow-effect z-50"
        size="icon"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-80 h-96 bg-card/95 backdrop-blur-sm border-primary/20 shadow-xl z-50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg text-primary flex items-center gap-2">
              <Bot className="h-5 w-5" />
              Pranav's AI Assistant
            </CardTitle>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="h-6 w-6">
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="flex flex-col h-full">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto space-y-3 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-2 ${message.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  {message.type === "bot" && (
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot className="h-3 w-3 text-primary" />
                    </div>
                  )}
                  <div
                    className={`max-w-[70%] p-2 rounded-lg text-sm ${
                      message.type === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted/20 text-card-foreground"
                    }`}
                  >
                    {message.text}
                  </div>
                  {message.type === "user" && (
                    <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="h-3 w-3 text-secondary" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Quick Responses */}
            <div className="space-y-2">
              <p className="text-xs text-muted">Quick questions:</p>
              <div className="grid grid-cols-1 gap-1">
                {quickResponses.map((response, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => handleQuickResponse(response)}
                    className="text-xs h-8 justify-start"
                  >
                    {response}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  )
}
