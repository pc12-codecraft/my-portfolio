const skills = [
  'Java',
  'JavaScript',
  'HTML',
  'CSS',
  'React',
  'Node.js',
  'Express',
  'MongoDB',
  'Git',
  'GitHub',
  'VS Code',
]

function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-purple-400 mb-3">MY TOOLKIT</p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Skills & <span className="text-purple-500">Technologies</span>
          </h2>

          <p className="text-gray-400 mt-4">
            Technologies I use to build and develop projects.
          </p>
        </div>

        {/* Skills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {skills.map((skill) => (
            <div
              key={skill}
              className="p-6 rounded-2xl bg-white/5 border border-purple-500/20 text-center hover:border-purple-500/60 hover:bg-purple-500/10 transition duration-300"
            >
              <h3 className="text-lg font-semibold text-white">
                {skill}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills