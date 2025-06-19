import React from 'react'
import logo from "../assets/raviKumarLogo.webp";
function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label='Home'>
          <img src={logo} className='mx-2' width={50} height={33} />
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="#hero">Home</a>
        <a href="#technologies">Technologies</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#certifications">Certifications</a>
        <a href="#education">Education</a>
        <a href="#hobbies">Hobbies</a>
        <a href="#quotes">Quotes</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  )
}

export default Navbar