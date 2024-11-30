import { CheckCircle } from 'lucide-react'

const skills = [
  { name: 'Lua', details: ['Game Development', 'Scripting', 'Performance Optimization'] },
  { name: 'Python', details: ['Web Development', 'Data Analysis', 'Machine Learning'] },
]

export default function Skills() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">My Skills</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {skills.map((skill) => (
          <div key={skill.name} className="border p-4 rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">{skill.name}</h2>
            <ul>
              {skill.details.map((detail) => (
                <li key={detail} className="flex items-center mb-2">
                  <CheckCircle className="text-green-500 mr-2" />
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

