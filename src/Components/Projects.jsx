import React from 'react';
import quizImg from "../Assets/quizapp.png";
import tipimg from "../Assets/tipcalculator.png"
import weatherImg from "../Assets/weatherapp.png"
import efuelImg from "../Assets/efuel.png"
import eventImg from "../Assets/event.png"
import mlfImg from "../Assets/mlf.png"
import mutiuImg from "../Assets/ecommerce.png"
import richImage from "../Assets/richimg.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
  return (
    <div className='projects'>
      <h1 className='projectName'>Projects</h1>

      <div className='projectsDiv'>
      <div className='experience-box'>
            <img src={quizImg} alt="Quiz-App" className='proj-img'/>
            <h3>Quiz App</h3>
            <a href="https://baouldguyd.github.io/quizGenius-App" target="_blank" rel="noopener noreferrer">
            <button className='learn-more'> Check Out <FontAwesomeIcon icon={faExternalLinkAlt} /></button>
            </a>
            
            <p>Built a Quiz App for students of secondary schools willing to practice ahead for WAEC JAMB GCE</p>
        </div>

        <div className='experience-box'>
            <img src={tipimg} alt="Tip calculator" className='proj-img'/>
            <h3>Tip Calculator</h3>
            <a href="https://baouldguyd.github.io/tip-calculator-new" target="_blank" rel="noopener noreferrer">
            <button className='learn-more'>Check Out <FontAwesomeIcon icon={faExternalLinkAlt} /></button>
            </a>
            <p>Built A Tip Calculator used to calculate Tips for online sellers</p>
        </div>

        <div className='experience-box'>
            <img src={weatherImg} alt="WeatherApp" className='proj-img' />
            <h3>Weather App</h3>
            <a href="https://baouldguyd.github.io/nigeria-weather-app" target="_blank" rel="noopener noreferrer">
            <button className='learn-more'>Check Out <FontAwesomeIcon icon={faExternalLinkAlt} /></button>
            </a>
            <p>Built A weather App for giving real-time weather updates for all states in Nigeria</p>
        </div>

        <div className='experience-box'>
            <img src={efuelImg} alt="fuel-locator" className='proj-img' />
            <h3>e-Fuel</h3>
            <a href="https://forms.gle/cF4S1V4qjqpCVQ3BA" target="_blank" rel="noopener noreferrer">
            <button className='learn-more'>Check Out <FontAwesomeIcon icon={faExternalLinkAlt} /></button>
            </a>
            <p>A market survey to determine if users is willing to try out on the fuel locator app and the features they will love to see in the app.</p>
        </div>

        <div className='experience-box'>
            <img src={mutiuImg} alt="mutiu-hub" className='proj-img' />
            <h3>Mutiu Hub</h3>
            <a href="https://forms.gle/PYPXahmCELm2RLyY9" target="_blank" rel="noopener noreferrer">
            <button className='learn-more'>Check Out <FontAwesomeIcon icon={faExternalLinkAlt} /></button>
            </a>
            <p>Market Research: A case study to determine the pain points of sellers and buyers to develop an e-commerce platform tha meets the needs of both parties.</p>
        </div>

        <div className='experience-box'>
            <img src={mlfImg} alt="mlf" className='proj-img' />
            <h3>MLF</h3>
            <a href="https://mlf.com.ng" target="_blank" rel="noopener noreferrer">
            <button className='learn-more'>Check Out <FontAwesomeIcon icon={faExternalLinkAlt} /></button>
            </a>
            <p>I oversee the development of this charity foundation platform working closely with the Website Developers to ensure the client website is standard, checking for security breaches and fixing the SSL's.</p>
        </div>

        <div className='experience-box'>
            <img src={eventImg} alt="events" className='proj-img' />
            <h3>Events Isabi Tech</h3>
            <a href="https://event.isabitech.com.ng" target="_blank" rel="noopener noreferrer">
            <button className='learn-more'>Check Out <FontAwesomeIcon icon={faExternalLinkAlt} /></button>
            </a>
            <p>Worked with the developers to build a Paystack payment gateway on the events booking platform to enable users pay for tickets online.</p>
        </div>

        <div className='experience-box'>
            <img src={richImage} alt="richarge" className='proj-img' />
            <h3>Richarge</h3>
            <a href="https://sabuss.com/richarge6/?login" target="_blank" rel="noopener noreferrer">
            <button className='learn-more'>Check Out <FontAwesomeIcon icon={faExternalLinkAlt} /></button>
            </a>
            <p>Users use card payments to fund their Richarge wallets initially, we incorporated A Dedicated Bank Account for Richarge Users by integrating with Monnify for semless wallet funding process for customers.</p>
        </div>


    </div>
    </div>
  )
}

export default Projects