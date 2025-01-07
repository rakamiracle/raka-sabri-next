export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="container px-4 mx-auto text-center">
        {/* Header */}

        {/* New Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-16">
          {/* Text & Buttons */}
          <div className="text-center md:text-left max-w-md">
            <h2 className="text-5xl md:text-5xl font-extrabold text-blue-500 mb-4">
              Hello, I'm Raka Sabri
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Software Engineer
            </h3>
            <p className="text-lg text-gray-400 mb-6">
              I specialize in Full Stack Development and have a strong
              understanding of UI/UX Design and Data Analysis
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <button className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors mr-4">
                View My Work
              </button>
              <button className="px-8 py-3 border-2 border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition-colors">
                Download CV
              </button>
            </div>
          </div>
          {/* Illustration */}
          <div className="mt-10 md:mt-0">
            <img
              src="/images/raka-sabri.JPG"
              alt="Illustration"
              className="w-64 md:w-80 mx-auto rounded-full"
            />
          </div>
        </div>

        {/* Stats */}
        <div className=" flex overflow-hiddenflex justify-around items-center bg-gray-800 p-6 rounded-lg mt-16 text-gray-300 overflow-hidden">
          <div className="text-center">
            <h4 className="text-2xl font-bold text-white">100+</h4>
            <p className="text-sm">Projects</p>
          </div>
          <div className="text-center">
            <h4 className="text-2xl font-bold text-white">~100</h4>
            <p className="text-sm">Users</p>
          </div>
          <div className="text-center">
            <h4 className="text-2xl font-bold text-white">7</h4>
            <p className="text-sm">Awards</p>
          </div>
          <div className="text-center">
            <h4 className="text-2xl font-bold text-white">5</h4>
            <p className="text-sm">Years</p>
          </div>
        </div>
      </div>
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900" />
      </div>
    </section>
  );
}
