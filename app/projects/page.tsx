import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const projects = [
  {
    title: 'Lua Game Engine',
    description: 'A lightweight 2D game engine built with Lua and LÖVE framework.',
    tags: ['Lua', 'Game Development']
  },
  {
    title: 'Python Web Scraper',
    description: 'A robust web scraping tool built with Python and Beautiful Soup.',
    tags: ['Python', 'Web Scraping']
  },
  {
    title: 'Data Visualization Dashboard',
    description: 'An interactive dashboard for visualizing complex datasets using Python and Dash.',
    tags: ['Python', 'Data Visualization']
  }
]

export default function Projects() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">My Projects</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project.title}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

