import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>FrontEnd Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced </small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate </small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermediate </small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>Bootstarp</h4>
                <small className="text-light">Experienced </small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>React</h4>
                <small className="text-light">Experienced </small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>BackEnd Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>MongoDb</h4>
                <small className="text-light">Experienced </small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>NodeJs</h4>
                <small className="text-light">Intermediate </small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Intermediate </small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
