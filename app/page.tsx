'use client';

import { useEffect, useRef, useState } from 'react'
import { motion, useAnimation, useInView, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { CheckCircle, Github, ChevronDown } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"


const skills = [
  { name: 'Lua', details: ['Roblox', 'Scripting'] },
  { name: 'Python', details: ['Discord bot', 'Calculator'] },
];

const projects = [
  {
    title: 'Lumin hub',
    description: 'A Roblox script made for 50+ games.',
    tags: ['LuaU', 'Roblox'],
  },
  {
    title: 'Synergy',
    description: 'A better version of Lumin hub just especially for PC.',
    tags: ['LuaU', 'Roblox'],
  },
  {
    title: 'Discord Selfbot',
    description: 'A bot that was made for people to use on their acc',
    tags: ['Python', 'Discord'],
  },
];

function AnimatedSection({ children }: { children: React.ReactNode }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.5, delay: 0.25 }}
    >
      {children}
    </motion.div>
  )
}

function ParallaxText({ children }: { children: React.ReactNode }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <motion.h2
      ref={ref}
      style={{ y }}
      className="text-6xl lg:text-8xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
    >
      {children}
    </motion.h2>
  )
}

export default function Home() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, { threshold: 0.5 })

    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <nav className="fixed top-0 left-0 right-0 bg-black bg-opacity-70 backdrop-blur-md z-50">
        <ul className="flex justify-center space-x-6 p-4">
          {['home', 'skills', 'projects'].map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={`text-lg transition-colors ${
                  activeSection === section ? 'text-purple-400' : 'text-gray-400 hover:text-white'
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <section id="home" className="min-h-screen flex flex-col items-center justify-center px-4 relative">
        <AnimatedSection>
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Profile Picture"
                width={200}
                height={200}
                className="rounded-full mx-auto mb-8 border-4 border-purple-500 shadow-lg shadow-purple-500/50"
              />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
            >
              Welcome to My Portfolio
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-300 max-w-2xl mx-auto"
            >
              Hi, I'm a passionate developer with expertise in Lua and Python. 
              I love creating efficient and elegant solutions to complex problems.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex justify-center space-x-4"
            >
              {[
                { href: "https://github.com/No6No6No7yt", icon: Github, name: "GitHub" },
              ].map(({ href, icon: Icon, name }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <Icon size={28} />
                  <span className="sr-only">{name}</span>
                </a>
              ))}
            </motion.div>
          </div>
        </AnimatedSection>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-8"
        >
          <ChevronDown size={40} className="text-purple-400" />
        </motion.div>
      </section>

      <section id="skills" className="min-h-screen flex flex-col items-center justify-center px-4 py-16">
        <ParallaxText>My Skills</ParallaxText>
        <AnimatedSection>
          <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="bg-gray-900 border-purple-500 border-2 transform transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50">
                  <CardHeader>
                    <CardTitle className="text-2xl text-purple-400">{skill.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {skill.details.map((detail) => (
                        <li key={detail} className="flex items-center text-gray-300">
                          <CheckCircle className="text-green-500 mr-2" size={16} />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      <section id="projects" className="min-h-screen flex flex-col items-center justify-center px-4 py-16">
        <ParallaxText>My Projects</ParallaxText>
        <AnimatedSection>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-gray-900 border-purple-500 border-2 transform transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 h-full flex flex-col">
                  <CardHeader>
                    <CardTitle className="text-2xl text-purple-400">{project.title}</CardTitle>
                    <CardDescription className="text-gray-400">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="bg-purple-900 text-purple-200 text-xs font-semibold px-2.5 py-0.5 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </section>


    </div>
  )
}
