'use client';

import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Image from 'next/image';
import { CheckCircle, Github, Linkedin, Mail } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5, delay: 0.25 }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-black bg-opacity-70 backdrop-blur-md z-50">
        <ul className="flex justify-center space-x-6 p-4">
          <li>
            <a href="#home" className="text-gray-300 hover:text-white transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="#skills" className="text-gray-300 hover:text-white transition-colors">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="text-gray-300 hover:text-white transition-colors">
              Projects
            </a>
          </li>
        </ul>
      </nav>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4">
        <AnimatedSection>
          <div className="text-center">
            <Image
              src="/profile.png"
              alt="Profile Picture"
              width={200}
              height={200}
              className="rounded-full mx-auto mb-8 border-2 border-gray-700"
            />
            <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Hi im No6No6No7, I am the Owner Of Lumin hub and many more projects
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center px-4 py-16">
        <AnimatedSection>
          <div>
            <h2 className="text-4xl font-bold mb-12 text-center">My Skills</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill) => (
                <Card
                  key={skill.name}
                  className="bg-gray-900 border-gray-800 overflow-hidden transform transition-all hover:scale-105"
                >
                  <CardHeader>
                    <CardTitle>{skill.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul>
                      {skill.details.map((detail) => (
                        <li key={detail} className="flex items-center mb-2 text-gray-300">
                          <CheckCircle className="text-green-500 mr-2" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-16">
        <AnimatedSection>
          <div>
            <h2 className="text-4xl font-bold mb-12 text-center">My Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <Card
                  key={project.title}
                  className="bg-gray-900 border-gray-800 overflow-hidden transform transition-all hover:scale-105"
                >
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="bg-gray-800 text-gray-300 text-xs font-semibold px-2.5 py-0.5 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 p-4 text-center">
        © {new Date().getFullYear()} My Portfolio. All rights reserved.
      </footer>
    </div>
  );
}
