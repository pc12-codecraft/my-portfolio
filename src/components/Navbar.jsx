function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#080814]/80 backdrop-blur-md border-b border-purple-500/20">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <h2 className="text-2xl font-bold text-white">
          Priya<span className="text-purple-500">.</span>
        </h2>

        {/* Navigation */}
        <div className="hidden md:flex gap-8">
          <a href="#home" className="text-gray-300 hover:text-purple-400 transition">
            Home
          </a>

          <a href="#about" className="text-gray-300 hover:text-purple-400 transition">
            About
          </a>

          <a href="#skills" className="text-gray-300 hover:text-purple-400 transition">
            Skills
          </a>

          <a href="#projects" className="text-gray-300 hover:text-purple-400 transition">
            Projects
          </a>

          <a href="#education" className="text-gray-300 hover:text-purple-400 transition">
            Education
          </a>

          <a href="#contact" className="text-gray-300 hover:text-purple-400 transition">
            Contact
          </a>
        </div>

      </div>
    </nav>
  )
}

export default Navbar