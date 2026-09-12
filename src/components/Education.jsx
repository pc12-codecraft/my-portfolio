function Education() {
  return (
    <section id="education" className="px-6 py-24">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-purple-400 mb-3">MY JOURNEY</p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Education & <span className="text-purple-500">Experience</span>
          </h2>

          <p className="text-gray-400 mt-4">
            My learning journey so far.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-purple-500/30 ml-4 md:ml-10">

          {/* Education */}
          <div className="relative pl-8 pb-12">
            <div className="absolute -left-2.5 top-1 w-5 h-5 rounded-full bg-purple-500 border-4 border-[#080814]"></div>

            <span className="text-purple-400 text-sm">
              2024 – 2028
            </span>

            <h3 className="text-2xl font-bold text-white mt-2">
              B.Tech
            </h3>

            <p className="text-gray-300 mt-1">
              GLA University
            </p>

            <p className="text-gray-400 mt-3 leading-7">
              Pursuing B.Tech and developing my skills in programming,
              web development, and problem solving.
            </p>
          </div>

          {/* Mini Project */}
          <div className="relative pl-8 pb-12">
            <div className="absolute -left-2.5 top-1 w-5 h-5 rounded-full bg-purple-500 border-4 border-[#080814]"></div>

            <span className="text-purple-400 text-sm">
              2nd Year • 4th Semester
            </span>

            <h3 className="text-2xl font-bold text-white mt-2">
              UniTrade
            </h3>

            <p className="text-gray-400 mt-3 leading-7">
              Developed a mini project focused on creating a platform
              for students to buy and sell products within their campus.
            </p>
          </div>

          {/* JOVAC */}
          <div className="relative">
            <div className="absolute -left-2.5 top-1 w-5 h-5 rounded-full bg-purple-500 border-4 border-[#080814]"></div>

            <span className="text-purple-400 text-sm">
              2nd Year • Summer
            </span>

            <h3 className="text-2xl font-bold text-white mt-2">
              JOVAC Projects
            </h3>

            <p className="text-gray-400 mt-3 leading-7">
              Completed projects including LearnHub and PawCare while
              gaining practical experience in web development.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Education