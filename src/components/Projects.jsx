import { useState } from 'react'

const projects = [
  {
    title: 'UniTrade',
    type: 'Group Project',
    status: 'Completed',

    description:
      'A campus marketplace where university students can buy, sell, and exchange pre-owned items within their campus.',

    built: '2nd Year • Final Project',

    problem:
      'Students often have unused items they want to sell, while other students may need affordable second-hand products. There was a need for a simple platform focused on buying and selling within the campus community.',

    solution:
      'UniTrade provides a campus-based marketplace where students can list products, browse available items, search and filter products, and connect with other students.',

    flow: [
      'Student visits UniTrade',
      'Register / Login',
      'Browse available products',
      'Search or filter products',
      'Select a product',
      'Connect with the seller',
      'Buy or sell the item',
    ],

    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'Node.js',
      'Express.js',
      'MongoDB',
    ],

    features: [
      'User authentication',
      'Buy and sell products',
      'Product listings',
      'Search products',
      'Filter products',
      'Responsive interface',
    ],

    github: '',
    live: '',
  },

  {
    title: 'LearnHub',
    type: 'JOVAC Final Project',
    status: 'Completed',

    description:
      'A front-end online learning platform developed during the JOVAC summer program in my 2nd year.',

    built: '2nd Year • Summer • JOVAC Final Project',

    problem:
      'Students need a simple and organized platform where they can explore courses, view course information, and access learning-related resources in one place.',

    solution:
      'LearnHub provides a responsive online learning interface with course listings, pricing plans, testimonials, FAQs, and a contact section, making the learning platform easy to explore and navigate.',

    flow: [
      'User visits LearnHub',
      'Explore the home page',
      'Browse available courses',
      'View course and pricing information',
      'Explore learning resources',
      'Contact through the contact page',
    ],

    technologies: [
      'React',
      'React Router DOM',
      'JavaScript',
      'CSS Modules',
      'Vite',
      'useState',
      'useEffect',
    ],

    features: [
      'Home, Courses, About and Contact pages',
      'Course listings',
      'Pricing plans',
      'Student testimonials',
      'FAQ accordion',
      'Contact form validation',
      'Success message after form submission',
      'Reusable React components',
      'Responsive design',
    ],

    github: '',
    live: '',
  },

  {
    title: 'PawCare',
    type: 'JOVAC Final Project',
    status: 'Completed',

    description:
      'A full-stack pet adoption and pet-care services platform developed as the final project of the JOVAC summer course in my 2nd year.',

    built: '2nd Year • Summer • JOVAC Final Project',

    problem:
      'Animal shelters and rescuers often rely on word-of-mouth, social media, phone calls, or physical visits to connect adoptable pets with suitable homes. Pet owners also need a convenient way to discover and book services such as grooming, vaccination, boarding, and training.',

    solution:
      'PawCare brings pet adoption and pet-care services together on one platform. Users can browse adoptable pets, submit adoption requests, explore services, and book appointments, while administrators can manage pets, adoption requests, services, and bookings.',

    flow: [
      'User visits PawCare',
      'Browse pets or pet-care services',
      'View pet/service details',
      'Submit adoption request or book a service',
      'Request/booking is stored in the system',
      'Admin reviews and manages requests',
      'User tracks request or booking status',
    ],

    technologies: [
      'React.js',
      'React Router',
      'Axios',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Mongoose',
      'JWT',
      'REST APIs',
      'CSS / Tailwind CSS',
      'Git',
      'GitHub',
      'Postman',
    ],

    features: [
      'User registration and login',
      'JWT-based authentication',
      'Pet adoption listings',
      'Pet search and filtering',
      'Adoption request submission',
      'Adoption request tracking',
      'Pet-care services',
      'Service booking',
      'Booking status tracking',
      'Admin dashboard',
      'Pet listing management',
      'Adoption request management',
      'Service management',
      'Booking management',
      'Responsive web interface',
    ],

    github: '',
    live: '',
  },

  {
    title: 'Currently Working',
    type: 'Ongoing',
    status: 'In Progress',

    description:
      'Currently working on new projects. Details will be added soon.',

    built: 'Currently Working',

    problem: '',
    solution: '',
    flow: [],
    technologies: [],
    features: [],

    github: '',
    live: '',
  },
]

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  // --------------------------------
  // PROJECT DETAIL VIEW
  // --------------------------------
  if (selectedProject) {
    return (
      <div className="min-h-screen">

        <div className="max-w-5xl mx-auto">

          {/* Back Button */}
          <button
            onClick={() => setSelectedProject(null)}
            className="mb-10 px-5 py-2 rounded-lg border border-purple-500/30 text-purple-300 hover:bg-purple-500/10 transition"
          >
            ← Back to Projects
          </button>

          {/* Project Header */}
          <div className="mb-12">

            <div className="flex flex-wrap items-center gap-4 mb-4">

              <span className="text-purple-400">
                {selectedProject.type}
              </span>

              <span
                className={
                  selectedProject.status === 'Completed'
                    ? 'text-sm text-green-400'
                    : 'text-sm text-yellow-400'
                }
              >
                ● {selectedProject.status}
              </span>

            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-white">
              {selectedProject.title}
            </h2>

            <p className="text-gray-400 text-lg leading-8 mt-5 max-w-3xl">
              {selectedProject.description}
            </p>

          </div>

          {/* 1. Project Overview */}
          <div className="p-7 rounded-2xl bg-white/5 border border-purple-500/20 mb-6">

            <h3 className="text-2xl font-bold text-white mb-4">
              Project Overview
            </h3>

            <p className="text-gray-400 leading-7">
              {selectedProject.description}
            </p>

          </div>

          {/* 2. When I Built It */}
          <div className="p-7 rounded-2xl bg-white/5 border border-purple-500/20 mb-6">

            <h3 className="text-2xl font-bold text-white mb-4">
              When I Built It
            </h3>

            <p className="text-purple-400 text-lg">
              {selectedProject.built}
            </p>

          </div>

          {/* 3. Project Type */}
          <div className="p-7 rounded-2xl bg-white/5 border border-purple-500/20 mb-6">

            <h3 className="text-2xl font-bold text-white mb-4">
              Project Type
            </h3>

            <p className="text-gray-300">
              {selectedProject.type}
            </p>

          </div>

          {/* 4. Problem */}
          {selectedProject.problem && (
            <div className="p-7 rounded-2xl bg-white/5 border border-purple-500/20 mb-6">

              <h3 className="text-2xl font-bold text-white mb-4">
                Problem
              </h3>

              <p className="text-gray-400 leading-7">
                {selectedProject.problem}
              </p>

            </div>
          )}

          {/* 5. Solution */}
          {selectedProject.solution && (
            <div className="p-7 rounded-2xl bg-white/5 border border-purple-500/20 mb-6">

              <h3 className="text-2xl font-bold text-white mb-4">
                Solution
              </h3>

              <p className="text-gray-400 leading-7">
                {selectedProject.solution}
              </p>

            </div>
          )}

          {/* 6. How It Works */}
          {selectedProject.flow.length > 0 && (
            <div className="p-7 rounded-2xl bg-white/5 border border-purple-500/20 mb-6">

              <h3 className="text-2xl font-bold text-white mb-7">
                How It Works
              </h3>

              <div className="flex flex-col md:flex-row md:flex-wrap items-center gap-3">

                {selectedProject.flow.map((step, index) => (
                  <div
                    key={step}
                    className="flex items-center gap-3"
                  >

                    <div className="px-5 py-4 rounded-xl bg-purple-500/10 border border-purple-500/30 text-gray-200 text-center">

                      <span className="block text-purple-400 text-sm mb-1">
                        Step {index + 1}
                      </span>

                      {step}

                    </div>

                    {index !== selectedProject.flow.length - 1 && (
                      <span className="text-purple-500 text-xl hidden md:block">
                        →
                      </span>
                    )}

                  </div>
                ))}

              </div>

            </div>
          )}

          {/* 7. Technologies */}
          {selectedProject.technologies.length > 0 && (
            <div className="p-7 rounded-2xl bg-white/5 border border-purple-500/20 mb-6">

              <h3 className="text-2xl font-bold text-white mb-5">
                Technologies
              </h3>

              <div className="flex flex-wrap gap-3">

                {selectedProject.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300"
                  >
                    {technology}
                  </span>
                ))}

              </div>

            </div>
          )}

          {/* 8. Key Features */}
          {selectedProject.features.length > 0 && (
            <div className="p-7 rounded-2xl bg-white/5 border border-purple-500/20 mb-6">

              <h3 className="text-2xl font-bold text-white mb-5">
                Key Features
              </h3>

              <div className="grid sm:grid-cols-2 gap-4">

                {selectedProject.features.map((feature) => (
                  <div
                    key={feature}
                    className="p-4 rounded-xl bg-purple-500/5 border border-purple-500/20 text-gray-300"
                  >
                    ✓ {feature}
                  </div>
                ))}

              </div>

            </div>
          )}

          {/* 9. Links */}
          <div className="p-7 rounded-2xl bg-white/5 border border-purple-500/20">

            <h3 className="text-2xl font-bold text-white mb-5">
              Links
            </h3>

            <div className="flex flex-wrap gap-4">

              {/* GitHub */}
              {selectedProject.github ? (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 rounded-lg bg-purple-600 text-white hover:bg-purple-500 transition"
                >
                  GitHub ↗
                </a>
              ) : (
                <span className="px-6 py-3 rounded-lg border border-purple-500/20 text-gray-500">
                  GitHub — Coming Soon
                </span>
              )}

              {/* Live Demo */}
              {selectedProject.live ? (
                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 rounded-lg border border-purple-500/40 text-purple-300 hover:bg-purple-500/10 transition"
                >
                  Live Demo ↗
                </a>
              ) : (
                <span className="px-6 py-3 rounded-lg border border-purple-500/20 text-gray-500">
                  Live Demo — Coming Soon
                </span>
              )}

            </div>

          </div>

        </div>

      </div>
    )
  }

  // --------------------------------
  // PROJECT CARDS
  // --------------------------------
  return (
    <div>

      {/* Project Heading */}
      <div className="text-center mb-14">

        {/* Small Heading */}
        <p className="text-purple-400 mb-3">
          FEATURED PROJECTS
        </p>

        {/* Large Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          My <span className="text-purple-500">Projects</span>
        </h2>

        {/* Description */}
        <p className="text-gray-400 mt-4">
          Real-world problems I've explored and solutions I've built.
        </p>

      </div>

      {/* Project Cards */}
      <div className="grid md:grid-cols-2 gap-6">

        {projects.map((project) => (
          <button
            key={project.title}
            onClick={() => setSelectedProject(project)}
            className="group text-left p-7 rounded-2xl bg-white/5 border border-purple-500/20 hover:border-purple-500/60 hover:bg-purple-500/5 transition duration-300 cursor-pointer"
          >

            {/* Type + Status */}
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
                ● {project.status}
              </span>

            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 leading-7 mb-5">
              {project.description}
            </p>

            {/* View Details */}
            <span className="text-purple-400 text-sm">
              View Project Details →
            </span>

          </button>
        ))}

      </div>

    </div>
  )
}

export default Projects