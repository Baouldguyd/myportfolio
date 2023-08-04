import React from 'react'

const Skills = () => {
  return (
    <div className='skillDiv'>
      <h1 className='skillsName'>Skills</h1>
      
      <div className='skilltext'>
        <p className='skill-p'>I believe in solving problems not just writing Codes </p>
        
        
      </div>
      <div className='skills-list'>
          <div className='experience-box'>
            <h3>Technical Skills</h3>
          <p>Proficient in HTML, CSS, JavaScript, and React, with hands-on experience in web development and software engineering.</p>
          </div>
          
          <div className='experience-box'>
            <h3>Continuous Improvement</h3>
            <p>Championed continuous process improvement by documenting and refining internal processes, optimizing workflows for efficiency and effectiveness</p>
          </div>

          <div className='experience-box'>
            <h3>Work Ethic and Adaptability</h3>
            <p>A fast learner with a track record of adapting quickly to new work environments and embracing rapid course corrections in dynamic settings.</p>
          </div>
        </div>
    </div>
  )
}

export default Skills