"use client"

import { motion } from "framer-motion"
import {
  SiNextdotjs,
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiPython,
  SiPandas,
  SiScikitlearn,
  SiTensorflow,
  SiFigma,
  SiAdobecreativecloud,
  SiCanva,
  SiLinux,
  SiNginx,
  SiDocker,
  SiGit,
} from "react-icons/si"
import { DiMongodb, DiPostgresql } from "react-icons/di"
import { FaDatabase, FaServer } from "react-icons/fa"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Fullscreen } from "lucide-react"

const skillCategories = [
  {
    title: "Web",
    icon: SiJavascript,
    skills: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React", icon: SiReact },
      { name: "JavaScript", icon: SiJavascript },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss3 },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    title: "Data Base",
    icon: FaDatabase,
    skills: [
      { name: "SQL", icon: FaDatabase },
      { name: "Supabase", icon: () => <span className="text-xl font-bold">SB</span> },
      { name: "PostgreSQL", icon: DiPostgresql },
      { name: "MongoDB", icon: DiMongodb },
    ],
  },
  {
    title: "Data Science",
    icon: SiPython,
    skills: [
      { name: "Python", icon: SiPython },
      { name: "Pandas", icon: SiPandas },
      { name: "Scikit-learn", icon: SiScikitlearn },
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "Análisis de datos", icon: () => <span className="text-xl font-bold">DA</span> },
    ],
  },
  {
    title: "UI/UX",
    icon: SiFigma,
    skills: [
      { name: "Figma", icon: SiFigma },
      { name: "Adobe Creative Suite", icon: SiAdobecreativecloud },
      { name: "Canva", icon: SiCanva },
      { name: "UI/UX Design", icon: () => <span className="text-xl font-bold">UX</span> },
    ],
  },
  {
    title: "DevOps",
    icon: FaServer,
    skills: [
      { name: "VPS", icon: FaServer },
      { name: "Linux", icon: SiLinux },
      { name: "Nginx", icon: SiNginx },
      { name: "Docker", icon: SiDocker },
      { name: "CI/CD", icon: SiGit },
    ],
  },
]


export function Skills() {
  return (
    <TooltipProvider>
      <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
           Skills
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card text-card-foreground rounded-lg shadow-md p-6"
              >
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <category.icon className="mr-2 h-6 w-6" />
                  {category.title}
                </h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <Tooltip key={skillIndex}>
                      <TooltipTrigger>
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.1 + skillIndex * 0.05 }}
                          className="flex items-center justify-center bg-muted rounded-full p-2 hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          {typeof skill.icon === "function" ? (
                            <skill.icon className="h-6 w-6" />
                          ) : (
                            <span className="text-xl">{skill.icon}</span>
                          )}
                        </motion.div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{skill.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </TooltipProvider>
  )
}

