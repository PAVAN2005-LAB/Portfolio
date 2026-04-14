import React from 'react';

function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow-sm mb-4">
        <div className="container">
            <a className="navbar-brand font-weight-bold" href="#">PAVAN</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                    <li className="nav-item"><a className="nav-link font-weight-bold" href="#vision" style={{ color: '#00D8FF' }}>Vision</a></li>
                    <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
                    <li className="nav-item"><a className="nav-link" href="#education">Education</a></li>
                    <li className="nav-item"><a className="nav-link" href="#experience">Experience</a></li>
                    <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
                    <li className="nav-item"><a className="nav-link" href="#achievements">Achievements</a></li>
                    <li className="nav-item"><a className="nav-link" href="#volunteering">Volunteering</a></li>
                    <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
                    <li className="nav-item"><a target="_blank" className="nav-link text-primary font-weight-bold" href="#">Resume</a></li>
                </ul>
            </div>
        </div>
    </nav>

    </>
  );
}

export default Navbar;
