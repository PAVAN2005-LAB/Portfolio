import React from 'react';

function About() {
  return (
    <>
        <section id="about" className="mt-4 mb-4">
            <h4 className="display-4">A little about me,</h4>
            <div className="row">
                <div className="col-lg-6 wrap text-left">
                    <div className="about-desc">
                        <h1 className="bold-text">About</h1>
                        <div className="pt-5">
                            <h2 className="mb-5">Hello!</h2>
                            <p>My name is Pavan. I am a pre-final year undergraduate at Government Engineering College,
                                Dahod, and IIT Madras (BS program in Data Science and Applications). I am an avid learner with
                                a keen interest in Computer Programming Languages, Data Science (AI/ML), and Software
                                Development.
                            </p>


                            <ul className="social-links list-unstyled mt-4">
                                <li><a target="_blank" href="mailto:pavan.yadav.sde@gmail.com">
                                        <ion-icon name="mail-outline"></ion-icon>
                                    </a></li>
                                <li><a target="_blank" href="https://github.com/PAVAN2005-LAB">
                                        <ion-icon name="logo-github"></ion-icon>
                                    </a></li>
                                <li><a target="_blank"
                                        href="https://www.linkedin.com/in/gecdhd-comp-pavan-kumar-yadav/">
                                        <ion-icon name="logo-linkedin"></ion-icon>
                                    </a></li>

                            </ul>

                        </div>
                    </div>
                </div>
                <div className="col-lg-6 wrap align-content-center">
                    <div className="row mt-5 flex-column">
                        <div className="col-md-8">
                            <h2 className="mb-4">My Skills</h2>
                        </div>
                        <div className="col-md-6 mt-3">
                            <div className="progress-wrap">
                                <h5>Full Stack Development (MERN)</h5>
                                <div className="progress progress-style">
                                    <div className="progress-bar color-1" role="progressbar" aria-valuenow="75"
                                        aria-valuemin="0" aria-valuemax="100" style={{'width': '75%'}}>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mt-3">
                            <div className="progress-wrap">
                                <h5>Data Science</h5>
                                <div className="progress progress-style">
                                    <div className="progress-bar color-1" role="progressbar" aria-valuenow="30"
                                        aria-valuemin="0" aria-valuemax="100" style={{'width': '30%'}}>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </>
  );
}

export default About;
