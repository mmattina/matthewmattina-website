import React from 'react'
import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Welcome to my personal website! 
            </p>
            <p>
              This website serves as a portfolio of my work, experiences, and projects. 
              Feel free to explore and reach out if you'd like to connect or collaborate.
            </p>
            <div className="skills">
              <h3>Areas of Interest</h3>
              <div className="skills-list">
                <span className="skill-tag">Software Engineering</span>
                <span className="skill-tag">Web Development</span>
                <span className="skill-tag">System Design</span>
                <span className="skill-tag">Cloud Computing</span>
                <span className="skill-tag">AI/ML</span>
                <span className="skill-tag">Performance Optimization</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
