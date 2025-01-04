export default function Projects() {
    const projects = [
      {
        title: 'E-Commerce Platform',
        description: 'A full-featured online shopping platform built with Next.js and TypeScript',
        image: '/projects/ecommerce.jpg',
        tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      },
      // Add more projects here
    ]
  
    return (
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.title} className="group relative rounded-xl overflow-hidden shadow-lg">
                <div className="aspect-video bg-gray-100 dark:bg-gray-700" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  