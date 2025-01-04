export default function About() {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          About Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-600 dark:text-gray-300">
              👋 Hello! I am Raka, an undergraduate student at Sultan Syarif
              Kasim Riau State Islamic University majoring in Informatics
              Engineering.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              ✨My Experience... I have experience in IT Support, especially in
              planning network installation and repairing computer hardware and
              software. I also managed to win a startup competition with 3rd
              place as the ui/ux role in the team.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              ‣ I am currently interested in: 🧑‍💻 Machine Learning 🧑‍💻 Mobile /
              and Web application development using React and express 👥 Product
              Manager
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              💡 Open to new opportunities and collaborations that aim to use
              innovative technologies to bring social good and help achieve SDGs
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              ☕️I I believe that in the ever-evolving world of technology, we
              should always be ready to learn new things and push our limits. I
              am committed to continuously improving my skills, contributing to
              meaningful projects, and bringing positive impact through
              technology.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-tr from-blue-500 to-teal-400" />
          </div>
        </div>
      </div>
    </section>
  );
}
