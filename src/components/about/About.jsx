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
              <small>9+ Months Software Developer</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>8+ Real time problem solved</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5> Competitive Coding</h5>
              <small>Pupil at Codeforces</small>
              <hr />
              <small>4* at Codechef</small>
            </article>
          </div>
          <p>
            Saurabh is a software engineer intern at Signzy, a leading
            AI-powered digital trust platform. Earlier he worked with the core
            team to develop and optimize web applications and APIs using
            ReactJs, NodeJs, Express, and other technologies. He has contributed
            to multiple projects the user interface and the performance of the
            platform.
          </p>
          <p>
            He is also pursuing his Bachelor of Technology degree in Computer
            Science from the Indian Institute of Information Technology Una,
            where he is the placement coordinator at the Career Development
            Cell. He has a strong interest in competitive coding and has
            participated in several coding contests and hackathons, such as
            Flipkart Grid 4.0, where he received a certification. He is
            proficient in C/C++, Java, JavaScript, SQL, HTML, CSS, and various
            frameworks and tools. He is a team player with strong communication
            skills, quick learning abilities, and a desire to work in a
            competitive environment.
          </p>
          <p>
            He seeks challenging assignments that offer job satisfaction, steady
            professional growth, and continuous learning for self-development.
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
