import React from "react";
import "./footer.css";
import { BsInstagram } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Saurabh
      </a>

      <ul className="permalinks">
        <li href="#">Home </li>
        <li href="#about">About </li>
        <li href="#experience">Experience </li>
        <li href="#services">Services </li>
        <li href="#portfolio">Portfolio </li>
        <li href="#contact">Contact</li>
      </ul>

      <div className="footer__socials">
        <a href="https://twitter.com/kyayrrsaurabh">
          <BsTwitter />
        </a>
        <a href="https://www.linkedin.com/in/saurabh-singh-82287a201/">
          <AiFillLinkedin />
        </a>
        <a href="https://www.instagram.com/saurabhh.__/">
          <BsInstagram />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Saurabh Singh All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
