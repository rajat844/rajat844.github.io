import React, { Component } from 'react';

class Projects extends Component {
    constructor(props) {
        super(props);

        this.projects = props.projects;
    }

    render() {
        return (
            <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="projects">
                <div className="w-100">
                    <h2 className="mb-5">Projects</h2>
                    {
                        this.projects.map((exp, index) => (
                            <div key={index} className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                                <div className="resume-content">
                                    <h3 className="mb-0">{exp.title}</h3>
                                    <div className="subheading mb-3">{exp.techused}</div>
                                    <p>{exp.description}</p>
                                </div>
                                <div className="resume-date text-md-right">
                                    <a href={exp.code} className="text-primary"> Code</a>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        );
    }
}

export default Projects;
