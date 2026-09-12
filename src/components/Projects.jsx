const projects = [
  {
    title: 'UniTrade',
    type: 'Mini Project',
    status: 'Completed',
    description:
      'A campus-based platform for students to buy and sell products within their college community.',
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'LearnHub',
    type: 'JOVAC',
    status: 'Completed',
    description:
      'An educational platform project developed as part of the JOVAC program.',
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'PawCare',
    type: 'JOVAC',
    status: 'Completed',
    description:
      'A web project focused on pet care and providing useful resources for pet owners.',
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Fake News Detector',
    type: 'Current Project',
    status: 'In Progress',
    description:
      'A project focused on detecting and identifying potentially fake or misleading news.',
    tech: ['React', 'Node.js'],
  },
  {
    title: 'Station Crowd Management',
    type: 'Current Project',
    status: 'In Progress',
    description:
      'A project designed to help monitor and manage crowd levels at railway stations.',
    tech: ['React', 'Node.js'],
  },
]

function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-purple-400 mb-3">MY WORK</p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            My <span className="text-purple-500">Projects</span>
          </h2>

          <p className="text-gray-400 mt-4">
            Projects I've built, explored, and am currently working on.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 gap-6">

          {projects.map((project) => (
            <div
              key={project.title}
              className="group p-7 rounded-2xl bg-white/5 border border-purple-500/20 hover:border-purple-500/60 hover:bg-purple-500/5 transition duration-300"
            >

              {/* Top */}
              <div className="flex items-center justify-between mb-5">
                <span className="text-sm text-purple-400">
                  {project.type}
                </span>

                <span
                  className={
                    project.status === 'Completed'
                      ? 'text-sm text-green-400'
                      : 'text-sm text-yellow-400'
                  }
                >
                  {project.status}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-7 mb-6">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((technology) => (
                  <span
                    key={technology}
                    className="px-3 py-1 rounded-full text-sm bg-purple-500/10 text-purple-300 border border-purple-500/20"
                  >
                    {technology}
                  </span>
                ))}
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Projects