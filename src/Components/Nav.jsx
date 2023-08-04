import React from 'react';
import { Link } from 'react-scroll';

const Nav = () => {
  return (
    <div className="navbar">
        <h1 className='welcome'>Welcome</h1>
        <ul className="navlinks">
            <li className="li">About Me</li>
            <li className="li">Projects</li>
            <li className="li">Skills</li>
            <li className="li">Recommendations</li>
        </ul>
        <Link
          to='contactMe'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
        <button className="contactMeButton">Contact Me</button>

        </Link>
    </div>
  )
}

export default Nav