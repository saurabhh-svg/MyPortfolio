import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Data Structure and Algorithms</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Solved 250+ Leetcode questions</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Pupil at Codeforces with max rating of 1256</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>3 Star at Codechef at with max rating of 1787</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Highly Skilled in Puzzle solving</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem lorem erkenfkenfkenkfnekfneknfkenkf</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem lorem erkenfkenfkenkfnekfneknfkenkf</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Communication</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Fluent in English</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p></p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem lorem erkenfkenfkenkfnekfneknfkenkf</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem lorem erkenfkenfkenkfnekfneknfkenkf</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem lorem erkenfkenfkenkfnekfneknfkenkf</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem lorem erkenfkenfkenkfnekfneknfkenkf</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>BackEnd Development is my speciallity </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem lorem erkenfkenfkenkfnekfneknfkenkf</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem lorem erkenfkenfkenkfnekfneknfkenkf</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem lorem erkenfkenfkenkfnekfneknfkenkf</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem lorem erkenfkenfkenkfnekfneknfkenkf</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem lorem erkenfkenfkenkfnekfneknfkenkf</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
