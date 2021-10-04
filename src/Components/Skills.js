import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const programName = ["logos:c","logos:c-plusplus","logos:html-5","logos:css-3","logos:bootstrap","logos:javascript","logos:nodejs","logos:react","vscode-icons:folder-type-mongodb","logos:mysql","logos:firebase","mdi:microsoft-office","logos:linux-tux"];

class Skills extends Component {
  constructor(props) {
    super(props);

    this.skills = props.skills;
  }

  render() {
    return (
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>
          <div class="subheading mb-3">Programming Languages &amp; Tools</div>
          <ul className="list-inline dev-icons">
            {
              programName.map((program) =>
                <li className="list-inline-item">
                  <span class="iconify" data-icon={program} style= {{padding: "7%"}} data-width="70"></span>
                </li>
              )
            }
          </ul>
          <div style= {{paddingTop: "10%"}} className="subheading mb-3">Workflow</div>
          <ul className="fa-ul mb-0">
            {
              this.skills.map((data, index) => (
                <div key={index} className="col-6">
                  <li className="list-item">
                    <FontAwesomeIcon icon={faCheckCircle} color="green" />
                    <span className="ml-3">{data.name}</span>
                  </li>
                </div>
              ))
            }
          </ul>
        </div>
      </section>
    );
  }
}

export default Skills;
