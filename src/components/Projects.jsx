import React, { useState } from 'react';

function Projects() {
  const [activeTab, setActiveTab] = useState('webprogramming');

  return (
    <>
    <section id="projects" className="projects-section">

        <h1 className="display-4 mt-5">Projects</h1>
        <h1 className="bold-text bg-text">Portfolio</h1>

        {/* Sub-section Tabs */}
        <div className="project-tabs mt-4">
            <button className="project-tab active" onClick={() => setActiveTab("webprogramming")}>🌐 Web
                Programming</button>
            <button className="project-tab" onClick={() => setActiveTab("datascience")}>📊 Data
                Science</button>
            <button className="project-tab" onClick={() => setActiveTab("llmai")}>🤖 LLM & AI Engineering</button>
        </div>

        {/* Web Programming Sub-section */}
        <div className={`project-panel ${activeTab === "webprogramming" ? "active" : ""}`}>
            <div className="row d-flex">
                <div className="col-md-10">
                    <div className="mt-3">

                        <div className="py-4">
                            <div className="desc">
                                <h4>Techfest2k26</h4>
                                <p><a target="_blank" href="https://github.com/PAVAN2005-LAB/Techfest2k26">Github
                                        Link</a></p>
                            </div>
                            <div>
                                <li>Developed a full-stack event registration system for TechFest 2k26 with real-time
                                    event and registration management.</li>
                                <li>Integrated secure payments using Razorpay and automated email confirmations with
                                    dynamic templates.</li>
                                <li>Built scalable backend with Node.js, Express, and PostgreSQL, featuring admin
                                    dashboard and live APIs (Live: https://techfest2k26.onrender.com).</li>
                                <li>Tech Stack: Node.js, Express.js, PostgreSQL, Razorpay API, Nodemailer, HTML, CSS,
                                    JavaScript</li>
                            </div>
                        </div>

                        <div className="py-4">
                            <div className="desc">
                                <h4>GED_Dahod_library</h4>
                                <p><a target="_blank" href="https://github.com/PAVAN2005-LAB/GED_Dahod_library">Github
                                        Link</a></p>
                            </div>
                            <div>
                                <li>Built and deployed a production-grade library management system actively used on a
                                    college local network.</li>
                                <li>Designed robust backend with Django, REST APIs, JWT authentication, and bulk CSV
                                    data import.</li>
                                <li>Optimized deployment using Waitress, WhiteNoise, and Docker for scalable and
                                    reliable performance.</li>
                                <li>Tech Stack: Python, Django, REST API, Pandas, Docker, HTML, CSS</li>
                            </div>
                        </div>

                        <div className="py-4">
                            <div className="desc">
                                <h4>Web Programming Practicals</h4>
                                <p><a target="_blank" href="https://github.com/PAVAN2005-LAB/web_practical_2026">Github
                                        Link</a></p>
                            </div>
                            <div>
                                <li>Developed a comprehensive web programming project with 16 practical experiments
                                    covering frontend and backend concepts.</li>
                                <li>Implemented features like authentication, form validation, REST APIs, and dynamic UI
                                    components.</li>
                                <li>Built and deployed full-stack applications (Live: http://pavan-yadav-sde.free.nf/).
                                </li>
                                <li>Tech Stack: HTML, CSS, JavaScript, PHP, MySQL, AJAX, jQuery, GitHub Pages</li>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        {/* Data Science Sub-section */}
        <div className={`project-panel ${activeTab === "datascience" ? "active" : ""}`}>
            <div className="row d-flex">
                <div className="col-md-10">
                    <div className="mt-3">

                        <div className="py-4">
                            <div className="desc">
                                <h4>Energy_Consumption_Analysis</h4>
                                <p><a target="_blank"
                                        href="https://github.com/PAVAN2005-LAB/Energy_Consumption_Analysis">Github
                                        Link</a></p>
                            </div>
                            <div>
                                <li>Analyzed building-level electricity consumption using real-world IEA datasets for
                                    demand prediction and classification.</li>
                                <li>Implemented end-to-end ML pipeline including preprocessing, feature engineering, and
                                    modeling.</li>
                                <li>Achieved ~98.9% accuracy using XGBoost for energy consumption classification.</li>
                                <li>Tech Stack: Python, Pandas, NumPy, Matplotlib, Seaborn, Scikit-Learn, XGBoost</li>
                            </div>
                        </div>

                        <div className="py-4">
                            <div className="desc">
                                <h4>Data Analysis & Pipeline building assignments</h4>
                                <p><a target="_blank" href="https://github.com/PAVAN2005-LAB/MLP_JAN_26">Github Link</a>
                                </p>
                            </div>
                            <div>
                                <li>Completed a comprehensive Machine Learning project with weekly graded assignments
                                    and Kaggle competitions.</li>
                                <li>Built and evaluated multiple ML models using real-world datasets and competition
                                    pipelines.</li>
                                <li>Performed data preprocessing, feature engineering, and visualization for insights.
                                </li>
                                <li>Tech Stack: Python, Pandas, NumPy, Matplotlib, Scikit-Learn, Jupyter Notebook</li>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        {/* LLM & AI Engineering Sub-section */}
        <div className={`project-panel ${activeTab === "llmai" ? "active" : ""}`}>
            <div className="row d-flex">
                <div className="col-md-10">
                    <div className="mt-3">

                        <div className="py-4">
                            <div className="desc">
                                <h4>
                                    LLM Analysis - Autonomous Quiz Solver Agent</h4>
                                <p><a target="_blank" href="https://github.com/PAVAN2005-LAB/TDS_P2_SEP_2025">Github
                                        Link</a></p>
                            </div>
                            <div>
                                <li>Developed an autonomous LLM-based quiz solver using LangGraph and LangChain for
                                    multi-step problem solving.</li>
                                <li>Implemented web scraping, data processing, and code execution using Playwright and
                                    Python tools.</li>
                                <li>Built a FastAPI service to handle quiz tasks, validation, and automated answer
                                    submission.</li>
                                <li>Tech Stack: Python, FastAPI, LangChain, LangGraph, Gemini API, Playwright, Docker
                                </li>
                            </div>
                        </div>

                        <div className="py-4">
                            <div className="desc">
                                <h4>LLM App Builder & Deployer</h4>
                                <p><a target="_blank" href="https://github.com/PAVAN2005-LAB/TDS_P1_SEP_2025">Github
                                        Link</a></p>
                            </div>
                            <div>
                                <li>Built an automated LLM-powered app generator using FastAPI for creating and
                                    deploying web apps.</li>
                                <li>Integrated Gemini/GPT APIs to generate application code from project briefs.</li>
                                <li>Automated GitHub repo creation, deployment on GitHub Pages, and evaluation
                                    callbacks.</li>
                                <li>Tech Stack: Python, FastAPI, Gemini/GPT API, GitHub API, Docker</li>
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

export default Projects;
