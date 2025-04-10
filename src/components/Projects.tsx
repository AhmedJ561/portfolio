const Projects = () => {
  const projects = [
    {
      title: "Project 1: Mobile Application",
      description: "A brief description of the mobile application project.",
      technologies: "React Native, JavaScript, Firebase",
      imageUrl: "path/to/project1-image.png", // Replace with the actual image path
    },
    {
      title: "Project 2: Web Application",
      description: "A brief description of the web application project.",
      technologies: "React.js, Node.js, MongoDB",
      imageUrl: "path/to/project2-image.png", // Replace with the actual image path
    },
  ];

  return (
    <div className="section flex flex-col items-center text-center">
      <h1 className="section-heading text-5xl font-extrabold tracking-wide mb-8">
        Projects Showcase
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card bg-[var(--color-secondary)] p-6 rounded-lg shadow-md text-[var(--color-primary)] transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
            <p className="mb-4">{project.description}</p>
            <p className="text-[var(--color-accent)]">
              Technologies: {project.technologies}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
