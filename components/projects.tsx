"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const projects = [
  {
    title: "Graduation Project: Data Science",
    description: "Analysis, classification and predictions with algorithms",
    content:
      "Complete data science project: data analysis, classification and predictions.",
    tags: ["Python", "Pandas", "Scikit-learn", "Análisis de Datos", "VPS", "Docker"],
  },
  {
    title: "Chats AI",
    description: "Web applications with OpenAI integration",
    content:
      "Development of a web app with integration to the openai API",
    tags: ["Next.js", "React", "OpenAI", "PWA"],
  },
  {
    title: "App Web Coach",
    description: "Web applications with Coach",
    content:
      "Develop a web app that solves the business processes of a fitness coach",
    tags: ["Next.js", "React", "SQL", "ORM", "UI/UX"],
  },
]

export function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length)
  }

  useEffect(() => {
    const timer = setInterval(nextProject, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
        Projects
        </h2>
        <div className="relative">
          <div className="flex justify-between items-center w-full">
            <Button
              variant="outline"
              size="icon"
              onClick={prevProject}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 md:left-4"
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Proyecto anterior</span>
            </Button>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-2xl mx-auto"
              >
                <Card className="bg-background">
                  <CardHeader>
                    <CardTitle className="text-xl md:text-2xl">{projects[currentIndex].title}</CardTitle>
                    <CardDescription>{projects[currentIndex].description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">{projects[currentIndex].content}</p>
                    <div className="flex flex-wrap gap-2">
                      {projects[currentIndex].tags.map((tag, index) => (
                        <Badge key={index} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
            <Button
              variant="outline"
              size="icon"
              onClick={nextProject}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 md:right-4"
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Siguiente proyecto</span>
            </Button>
          </div>
        </div>
        <div className="flex justify-center mt-4 flex-wrap">
          {projects.map((_, index) => (
            <Button
              key={index}
              variant="ghost"
              size="sm"
              className={`m-1 w-8 h-8 ${
                index === currentIndex ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              {index + 1}
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}

