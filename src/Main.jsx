import React from 'react'
import AboutMe from './Components/AboutMe'
import BriefIntro from './Components/BriefIntro'
import Experience from './Components/Experience'
import Projects from './Components/Projects'
import Skills from './Components/Skills'

const Main = () => {
  return (
    <div className='main'>
        <BriefIntro />
        <AboutMe/>
        <Experience />
        <Skills />
        <Projects />

    </div>
  )
}

export default Main