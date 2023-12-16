import React from "react";
import "./about.css";
import ME from "../../assets/me.jpg";
import award from "../../assets/award.png";
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
            <img src={award} alt="About Image"></img>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5> Experience</h5>
              <small>11+ Months as a Software Engineer</small>
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
            As a dedicated and innovative Software Development Engineer (SDE),
            Saurabh brings over 1 year of experience to the dynamic realm of
            technology. With a strong foundation gained during an impactful
            tenure as a Backend Intern at MPL and previous roles at Signzy and
            Juntrax, he has honed his expertise in crafting robust and scalable
            backend solutions.
          </p>
          <p>
            Saurabh's proficiency extends across the spectrum of modern
            technologies, including the MERN stack, microservices architecture,
            and automation tools like Playwright. Their contributions to the
            development of an unassisted VKYC product and streamlining testing
            processes showcase not only technical prowess but also a commitment
            to driving efficiency and quality.
          </p>
          <p>
            Open to new opportunities, Saurabh is actively seeking SDE roles
            where they can leverage their skills to contribute meaningfully to
            innovative projects. With a passion for staying at the forefront of
            technological advancements, he is eager to bring their unique blend
            of skills and experiences to a dynamic team.
          </p>
          <p>
            Let's connect and explore how Saurabh's technical acumen and
            collaborative spirit can contribute to the success of your next
            project.
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
