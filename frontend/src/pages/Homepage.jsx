import './Homepage.css';

const Homepage = () => {
    return (
        <div className="homepage">
            {/* Hero Banner Section */}
            <section className="hero-banner" id="home">
                <div className="hero-image">
                    <img src="/placeholder-image.jpg" alt="Your Name" />
                </div>
                <div className="hero-content">
                    <h1 className="hero-title">Your Name</h1>
                    <div className="social-links">
                        <a href="https://linkedin.com/in/yourname" target="_blank" rel="noopener noreferrer" className="social-link">
                            LinkedIn
                        </a>
                        <a href="https://instagram.com/yourname" target="_blank" rel="noopener noreferrer" className="social-link">
                            Instagram
                        </a>
                        <a href="https://github.com/yourname" target="_blank" rel="noopener noreferrer" className="social-link">
                            Github
                        </a>
                        <a href="https://devpost.com/yourname" target="_blank" rel="noopener noreferrer" className="social-link">
                            Devpost
                        </a>
                        <a href="mailto:yourname@email.com" className="social-link">
                            Email
                        </a>
                    </div>
                </div>
            </section>

            {/* Education Section */}
            <section className="education-section" id="education">
                <div className="container">
                    <h2 className="section-title">Education</h2>
                    <div className="education-content">
                        <div className="education-item">
                            <h3>Your University</h3>
                            <h4>Candidate for Bachelor's in Computer Science</h4>
                            <div className="education-details">
                                <p><strong>Scholarship:</strong> Academic Excellence Scholarship</p>
                                <p><strong>Duration:</strong> Aug 2020 - May 2024</p>
                                <p><strong>GPA:</strong> 3.8/4.0</p>
                            </div>
                        </div>
                        
                        <div className="education-item">
                            <h3>Summer Program</h3>
                            <h4>Computer Science Course</h4>
                            <div className="education-details">
                                <p><strong>Duration:</strong> Summer 2019</p>
                                <p><strong>Description:</strong> Intensive programming course focusing on algorithms and data structures.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Work Experience Section */}
            <section className="work-section" id="work-experience">
                <div className="container">
                    <h2 className="section-title">Work Experience</h2>
                    <div className="work-content">
                        <div className="work-item">
                            <div className="work-header">
                                <h3>Software Engineering Intern</h3>
                                <span className="company">Tech Company</span>
                                <span className="duration">Summer 2023</span>
                            </div>
                            <div className="work-description">
                                <p>
                                    Developed full-stack web applications using React, Node.js, and MongoDB. 
                                    Implemented RESTful APIs and worked with cloud services to deploy scalable applications.
                                </p>
                                <ul>
                                    <li>Improved application performance by 40% through optimization</li>
                                    <li>Collaborated with cross-functional teams in agile environment</li>
                                    <li>Implemented automated testing procedures</li>
                                </ul>
                            </div>
                        </div>

                        <div className="work-item">
                            <div className="work-header">
                                <h3>Software Development Intern</h3>
                                <span className="company">Startup Company</span>
                                <span className="duration">Summer 2022</span>
                            </div>
                            <div className="work-description">
                                <p>
                                    Created mobile applications using React Native and managed backend services. 
                                    Worked on user authentication and database management systems.
                                </p>
                                <ul>
                                    <li>Built responsive mobile app with 10,000+ downloads</li>
                                    <li>Implemented secure user authentication system</li>
                                    <li>Optimized database queries for improved performance</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Resume Link Section */}
            <section className="resume-section" id="resume">
                <div className="container">
                    <div className="resume-content">
                        <h2>Ready to learn more?</h2>
                        <p>Download my complete resume to see my full experience and qualifications.</p>
                        <a href="/resume.pdf" download className="resume-download-btn">
                            Download Resume
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Homepage;