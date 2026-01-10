import React from 'react'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: "Project Name",
      description: "A brief description of your project. Explain what it does, technologies used, and key features.",
      tags: ["React", "Node.js", "TypeScript"],
      link: "#"
    },
    {
      title: "Another Project",
      description: "Description of another project. Highlight unique aspects and what you learned or achieved.",
      tags: ["Python", "API", "Database"],
      link: "#"
    },
    {
      title: "Third Project",
      description: "One more project example. Showcase your range of skills and interests.",
      tags: ["Cloud", "DevOps", "Docker"],
      link: "#"
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="project-tag">{tag}</span>
                ))}
              </div>
              <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
