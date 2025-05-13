

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-8">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold mb-6">Projects</h3>
        <ul className="space-y-4">
          <li className="bg-gray-100 p-4 rounded shadow"><a href="https://JohnTala.github.io/wdd131">Project 1 - Portfolio Website</a></li>
          <li className="bg-gray-100 p-4 rounded shadow"><a href="http://JohnTala.github.io/myfoodiewebsite">Project 2 - zeus website</a></li>
          <li className="bg-gray-100 p-4 rounded shadow">Project 2 - React Todo App</li>
          <li className="bg-gray-100 p-4 rounded shadow">Project 3 - Weather App</li>
        </ul>
      </div>
    </section>
  );
}