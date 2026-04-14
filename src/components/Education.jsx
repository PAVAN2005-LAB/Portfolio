import React from 'react';

function Education() {
  return (
    <>
    <section id="education">
        <h1 className="display-4 mt-5">Education</h1>

            <h1 className="bold-text bg-text">Academics</h1>
            <div className="py-4">
                <div className="desc">
                    <h4>BS in Data Science & Application</h4>
                    <p>Indian instituiton of Technology, Madras</p>

                </div>
                <div>
                    <p>2024 - 2026</p>
                    <p>CGPA: 7.04 (Current)</p>
                </div>
            </div>
            <div className="py-4">
                <div className="desc">
                    <h4>Bachelor's Degree in Computer Science & Engineering</h4>
                    <p>Government Engineering College, Dahod</p>

                </div>
                <div>
                    <p>2023 - 2027</p>
                    <p>CGPA: 8.48 (Current)</p>
                </div>
            </div>


            <h1 id="experience" className="display-4 mt-5">Experience</h1>
            <h1 className="bold-text bg-text">Profile</h1>
            <div className="row d-flex">
                <div className="col-md-10">
                    <div className="mt-3">

                        <div className="py-4">
                            <div className="desc">
                                <h4>IBM SKILLS BUILD</h4>

                            </div>
                            <div>
                                <p>June 2024 - August 2024</p>
                                <p><b>Frontend Intern</b></p>
                            </div>
                            <div>
                                <li>Selected as a Contributor nation wide for a 3 month coding period.</li>
                                <li>Developed mini projects in JavaScript.</li>
                            </div>
                        </div>

                        <div className="py-4">
                            <div className="desc">
                                <h4>IBM SKILLS BUILD</h4>

                            </div>
                            <div>
                                <p>Febuary 2024-March 2024</p>
                                <p><b>Data Science Intern</b></p>
                            </div>
                            <div>
                                <li>Made ML pipline for image classification.</li>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
    </section>

    </>
  );
}

export default Education;
