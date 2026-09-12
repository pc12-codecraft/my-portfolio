function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-purple-400 mb-3">GET IN TOUCH</p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Let's <span className="text-purple-500">Connect</span>
          </h2>

          <p className="text-gray-400 mt-4">
            Have an idea, opportunity, or just want to connect?
          </p>
        </div>

        {/* Contact Card */}
        <div className="p-8 md:p-12 rounded-3xl bg-white/5 border border-purple-500/20 text-center">

          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-8 mb-10">
            I'm always interested in learning, building projects,
            and connecting with other developers.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4">

            <a
              href="mailto:your-email@example.com"
              className="px-6 py-3 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-500 transition"
            >
              📧 Email Me
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-lg border border-purple-500/40 text-purple-300 hover:bg-purple-500/10 transition"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-lg border border-purple-500/40 text-purple-300 hover:bg-purple-500/10 transition"
            >
              GitHub
            </a>

            <button
              className="px-6 py-3 rounded-lg border border-purple-500/40 text-purple-300 hover:bg-purple-500/10 transition"
            >
              📄 Resume
            </button>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact