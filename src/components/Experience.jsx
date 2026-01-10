import React from 'react'
import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      title: "Your Role/Position",
      company: "Company Name",
      period: "YYYY - Present",
      description: "Describe your responsibilities and achievements here. Highlight key projects and impact."
    },
    {
      title: "Previous Position",
      company: "Previous Company",
      period: "YYYY - YYYY",
      description: "Describe previous role and accomplishments. Focus on skills gained and contributions made."
    }
  ]

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-header">
                <div>
                  <h3 className="experience-title">{exp.title}</h3>
                  <p className="experience-company">{exp.company}</p>
                </div>
                <span className="experience-period">{exp.period}</span>
              </div>
              <p className="experience-description">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
