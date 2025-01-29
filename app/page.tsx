import { Nav } from "@/components/nav"
import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"
import  {Courses}  from "@/components/courses"

import Image from "next/image"


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-1">
        <Hero />
        <Projects />
        <Skills />
        <Courses />

        <Contact />
      </main>
      <footer className="w-full py-6 bg-background">
        <div className="container px-4 md:px-6 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Tu Arturo Zilli Rios. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}

