import profile from '../assets/profile-photo.png'

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden flex items-center"
    >

      {/* ================= BACKGROUND IMAGE ================= */}
      <img
        src={profile}
        alt="Priya"
        className="absolute inset-0 w-full h-full object-cover object-[center_20%]"
      />


      {/* ================= DARK LEFT OVERLAY ================= */}
      {/* Keeps the left side dark so text is easy to read */}
      <div
        className="absolute inset-0 bg-gradient-to-r
        from-[#050510]/95
        via-[#050510]/60
        to-transparent"
      ></div>


      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-6xl w-full mx-auto px-6">

        <div className="max-w-2xl">

          {/* Greeting */}
          <p className="text-purple-400 text-lg md:text-xl mb-5">
            👋 Hello, I'm
          </p>


          {/* Name */}
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
            Priya
          </h1>


          {/* Role */}
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
            Full Stack Developer
            <span className="text-purple-500"> & </span>
            Problem Solver
          </h2>


          {/* Description */}
          <p className="text-gray-300 text-lg leading-8 max-w-xl mb-8">
            I build modern web applications and enjoy solving challenging
            problems with code. Currently, I'm focusing on Data Structures
            and Algorithms while continuing to explore full-stack development.
          </p>


          {/* ================= BUTTONS ================= */}
          <div className="flex flex-wrap gap-4">

            <a
              href="#projects"
              className="px-7 py-3 rounded-lg bg-purple-600
              text-white font-medium
              hover:bg-purple-500
              hover:scale-105
              transition duration-300"
            >
              View My Projects →
            </a>


            <a
              href="#contact"
              className="px-7 py-3 rounded-lg
              border border-purple-500/60
              text-purple-300
              hover:bg-purple-500/10
              transition duration-300"
            >
              Contact Me
            </a>

          </div>


          {/* ================= SOCIAL LINKS ================= */}
          <div className="flex gap-7 mt-8">

            <a
              href="#"
              className="text-gray-300 hover:text-purple-400 transition"
            >
              LinkedIn
            </a>

            <a
              href="#"
              className="text-gray-300 hover:text-purple-400 transition"
            >
              GitHub
            </a>

            <a
              href="#contact"
              className="text-gray-300 hover:text-purple-400 transition"
            >
              Email
            </a>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Hero
