"use client"

import { motion } from "framer-motion"
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si"
import { Button } from "@/components/ui/button"

const contactLinks = [
  { name: "GitHub", icon: SiGithub, url: "https://github.com/lccorpmx" },
  { name: "Gmail", icon: SiGmail, url: "mailto:azillirios@gmail.com" },
  { name: "LinkedIn", icon: SiLinkedin, url: "https://www.linkedin.com/in/arturo-zilli-rios-910441348/" },
]

export function Contact() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">Contact</h2>
        <div className="flex flex-col items-center space-y-4 text-center">

          <div className="flex space-x-4 mt-8">
            {contactLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Button variant="outline" size="lg" className="w-16 h-16 rounded-full">
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Contactar por ${link.name}`}
                  >
                    {/* Esto lo arregla */}
                    <link.icon className="h-8 w-8 text-primary" />
                  </a>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
