import React from "react";
import "./about.css";
import ME from "../../assets/me.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image"></img>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5> Experience</h5>
              <small>2+ Months </small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>4+ Completed</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5> Competitive Coding</h5>
              <small>Pupil at Codeforces</small>
            </article>
          </div>
          <p>
            A self taught coder and a proficient Web Developer. Love problem
            Solving and analysis. My greatest strength is my communication and
            presentation skills, also my ability to mix-up and catchup with new
            peoples around me.Working in a team where everybody is trying to do
            their best makes me highly motivated and brings out best within me.
          </p>

          <a href="contact" className="btn btn-primary">
            {" "}
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
