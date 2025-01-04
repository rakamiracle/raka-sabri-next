export default function Hero() {
    return (
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="container px-4 mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 mb-6">
            Raka Sabri
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
          I specialize in Full Stack Development and have a strong understanding of UI/UX Design and Data Analysis
          </p>
          <button className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
            View My Work
          </button>
        </div>
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50 dark:to-gray-900" />
        </div>
      </section>
    )
  }