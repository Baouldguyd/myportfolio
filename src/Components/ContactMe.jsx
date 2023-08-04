import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


const ContactMe = (props) => {
    const {id} = props
  return (
    <div className='contactDiv' id={id}>
        <h1 className='contactName'>Contact Me</h1>
        <div className='connects'>
        <a href="https://www.linkedin.com/in/damilola-miracle-kolawole-777502132">
        <button className='email-btn'> Linkedin
         </button>
      </a>
            
            <a href="mailto:damilolamiraclek@gmail.com">
                <button className='email-btn'>
                <FontAwesomeIcon icon={faEnvelope} /> Email
                </button>
            </a>
            <div></div>
            
        </div>
        <div className='connect-div'>
            <p className='connect-word'>I'm eager to explore new opportunities, collaborate on impactful projects, and contribute my expertise to your team. Feel free to reach out to me for further discussions or to view more details about my projects and accomplishments.</p>
            <h3 >Let's create something extraordinary together!</h3>
        </div>
        
    </div>
  )
}

export default ContactMe;