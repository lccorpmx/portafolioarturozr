"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { Moon, Sun, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from 'next/image'


const NavItem = ({ href, text }: { href: string; text: string }) => (
  <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
    <a href={href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
      {text}
    </a>
  </motion.li>
)

export function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  return (
    <nav className="w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0 font-bold text-2xl"
          >
            <Image
              src="/lccorp.svg" // Ruta de tu imagen (puede ser local o remota)
              alt="Descripción de la imagen"
              width={35} // Ancho de la imagen
              height={35} // Alto de la imagen
              priority={true} // Opcional, carga prioritaria
            />
          </motion.div>
          <div className="hidden md:block">
            <ul className="ml-10 flex items-baseline space-x-4">
              <NavItem href="#home" text="Home" />
              <NavItem href="#projects" text="Projects" />
              <NavItem href="#skills" text="Skills" />
              <NavItem href="#contact" text="Contact" />
            </ul>
          </div>
          <div className="hidden md:block">
            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#home"
              className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-primary"
            >
              Home
            </a>
            <a
              href="#projects"
              className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-primary"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-primary"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-primary"
            >
              Contact
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  )
}

