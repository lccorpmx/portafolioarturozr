"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface Course {
  id: number
  title: string
  image: string
  completed: boolean
}

const courses: Course[] = [
  { id: 1, title: "Fundamentos de Python", image: "/1.jpg", completed: true },
  { id: 2, title: "Empezar una carrera en IA Y DS", image: "/2.jpg", completed: true },
  { id: 3, title: "Analisis de Negocio/Ciencia de Datos", image: "/3.jpg", completed: true },
  {
    id: 4,
    title: "Certificación en Analisis de Datos",
    image: "/4.jpg",
    completed: false,
  },
]

export function Courses() {
  const [revealedCourses, setRevealedCourses] = useState<number[]>([])

  const toggleReveal = (courseId: number) => {
    setRevealedCourses((prev) => (prev.includes(courseId) ? prev.filter((id) => id !== courseId) : [...prev, courseId]))
  }

  const certificationProgress = 10

  return (
    <section id="courses" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center text-primary">
          Mis Cursos
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {courses.map((course) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card
                className="overflow-hidden cursor-pointer transition-all duration-300 transform hover:scale-105"
                onClick={() => toggleReveal(course.id)}
              >
                <div className="relative h-48">
                  <Image
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    layout="fill"
                    objectFit="cover"
                    className={`transition-all duration-500 ${
                      revealedCourses.includes(course.id) ? "filter-none" : "filter blur-sm"
                    }`}
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-sm">{course.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  {course.completed ? (
                    <span className="text-green-500 font-semibold">Completado</span>
                  ) : (
                    <div>
                    <span className="text-red-500 font-semibold">En Progreso</span>

                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

