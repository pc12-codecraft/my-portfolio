function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="max-w-6xl mx-auto">

        {/* Section heading */}
        <div className="text-center mb-14">
          <p className="text-purple-400 mb-3">GET TO KNOW ME</p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            About <span className="text-purple-500">Me</span>
          </h2>

          <p className="text-gray-400 mt-4">
            A little about my journey and what I love to build.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Left */}
          <div className="p-8 rounded-2xl bg-white/5 border border-purple-500/20">
            <h3 className="text-2xl font-semibold text-white mb-5">
              Hello! I'm Priya 👋
            </h3>

            <p className="text-gray-400 leading-7 mb-4">
              I'm a B.Tech student at GLA University with a strong interest
              in software development and problem solving.
            </p>

            <p className="text-gray-400 leading-7 mb-4">
              I enjoy building full-stack applications, learning new
              technologies, and improving my programming skills through
              practical projects.
            </p>

            <p className="text-gray-400 leading-7">
              Currently, I'm focusing on Data Structures and Algorithms
              while continuing to explore full-stack development.
            </p>
          </div>

          {/* Right */}
          <div className="grid grid-cols-2 gap-5">

            <div className="p-6 rounded-2xl bg-purple-500/10 border border-purple-500/20">
              <p className="text-gray-400 text-sm">Degree</p>
              <h3 className="text-white font-semibold mt-2">
                B.Tech
              </h3>
            </div>

            <div className="p-6 rounded-2xl bg-purple-500/10 border border-purple-500/20">
              <p className="text-gray-400 text-sm">University</p>
              <h3 className="text-white font-semibold mt-2">
                GLA University
              </h3>
            </div>

            <div className="p-6 rounded-2xl bg-purple-500/10 border border-purple-500/20">
              <p className="text-gray-400 text-sm">Batch</p>
              <h3 className="text-white font-semibold mt-2">
                2024 – 2028
              </h3>
            </div>

            <div className="p-6 rounded-2xl bg-purple-500/10 border border-purple-500/20">
              <p className="text-gray-400 text-sm">Focus</p>
              <h3 className="text-white font-semibold mt-2">
                Full Stack + DSA
              </h3>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default About