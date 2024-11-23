import { CheckCircle } from 'lucide-react'

const skills = [
  { name: 'Lua', details: ['Game Development', 'Scripting', 'Performance Optimization'] },
  { name: 'Python', details: ['Web Development', 'Data Analysis', 'Machine Learning'] },
]

export default function Skills() {
  return (
    <div className="bg-gray-900 text-white py-12 px-6">
      <h1 className="text-4xl font-bold mb-8 text-center">My Skills</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow transform hover:scale-105"
          >
            <h2 className="text-2xl font-semibold mb-4 text-center">{skill.name}</h2>
            <ul className="space-y-2">
              {skill.details.map((detail) => (
                <li key={detail} className="flex items-center text-gray-300">
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
