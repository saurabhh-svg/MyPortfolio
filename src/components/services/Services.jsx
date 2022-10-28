import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I do</h5>
      <h2>Knowledge</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>DSA</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Solved 500+ Leetcode questions</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Pupil at Codeforces with max rating of 1380</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>4 Star at Codechef at with max rating of 1848</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Solved 1000+ Problems combined on different platforms</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Highly Skilled in Puzzle solving</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Fundamentals</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Data Structures and Algorithms</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Object Oriented Programming</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p> DataBase Management</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Operating Systems</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Computer Networks</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>English(Fluent)</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>CRUD Applications </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>ReactJs</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Testing of APIs</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>FrontEnd Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Javascript </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
