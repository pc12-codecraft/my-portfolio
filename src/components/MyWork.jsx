import { useState } from 'react'
import Projects from './Projects'
import Certifications from './Certifications'
import Hackathons from './Hackathons'

function MyWork() {
  const [activeTab, setActiveTab] = useState('projects')

  return (
    <section
      id="work"
      className="bg-[#080814] px-6 py-24 text-white"
    >
      <div className="max-w-6xl mx-auto">

        {/* Main My Work Heading */}
        <div className="text-center mb-12">

          {/* Small Heading */}
          <p className="text-purple-400 mb-3">
            BEYOND CODE
          </p>

          {/* Large Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            MY WORKSPACE
          </h2>

          {/* Description */}
          <p className="text-gray-400 mt-4">
            A collection of things I've built and achievements I've earned
            while learning and growing.
          </p>

        </div>

        {/* Tabs */}
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-16">

          {/* Projects */}
          <button
            onClick={() => setActiveTab('projects')}
            className={`w-72 py-4 rounded-xl text-base font-medium transition-all duration-300 ${
              activeTab === 'projects'
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/20'
                : 'border border-white/10 bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
            }`}
          >
            Projects
          </button>

          {/* Certifications */}
          <button
            onClick={() => setActiveTab('certifications')}
            className={`w-72 py-4 rounded-xl text-base font-medium transition-all duration-300 ${
              activeTab === 'certifications'
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/20'
                : 'border border-white/10 bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
            }`}
          >
            Certifications
          </button>

          {/* Hackathons */}
          <button
            onClick={() => setActiveTab('hackathons')}
            className={`w-72 py-4 rounded-xl text-base font-medium transition-all duration-300 ${
              activeTab === 'hackathons'
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/20'
                : 'border border-white/10 bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
            }`}
          >
            Hackathons
          </button>

        </div>

        {/* Tab Content */}
        {activeTab === 'projects' ? (
          <Projects />
        ) : activeTab === 'certifications' ? (
          <Certifications />
        ) : (
          <Hackathons />
        )}

      </div>
    </section>
  )
}

export default MyWork