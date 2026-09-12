function Stats() {
  return (
    <section className="px-6 py-16">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-5">

        <div className="p-6 rounded-2xl bg-white/5 border border-purple-500/20 text-center">
          <h3 className="text-3xl font-bold text-purple-400">2+</h3>
          <p className="text-gray-400 mt-2">Projects</p>
        </div>

        <div className="p-6 rounded-2xl bg-white/5 border border-purple-500/20 text-center">
          <h3 className="text-3xl font-bold text-purple-400">10+</h3>
          <p className="text-gray-400 mt-2">Technologies</p>
        </div>

        <div className="p-6 rounded-2xl bg-white/5 border border-purple-500/20 text-center">
          <h3 className="text-3xl font-bold text-purple-400">DSA</h3>
          <p className="text-gray-400 mt-2">Currently Learning</p>
        </div>

        <div className="p-6 rounded-2xl bg-white/5 border border-purple-500/20 text-center">
          <h3 className="text-3xl font-bold text-purple-400">2028</h3>
          <p className="text-gray-400 mt-2">Graduation</p>
        </div>

      </div>
    </section>
  )
}

export default Stats