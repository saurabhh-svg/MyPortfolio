import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { SiCodeforces } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import { SiCodechef } from "react-icons/si";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/saurabh-singh-82287a201/"
        target="_blank"
      >
        {" "}
        <BsLinkedin />{" "}
      </a>

      <a href="https://github.com/saurabhh-svg" target="_blank">
        <BsGithub />
      </a>

      <a href="https://leetcode.com/Saurabhh__/" target="_blank">
        <SiLeetcode />
      </a>
      <a href="https://codeforces.com/profile/Saurabhh02" target="_blank">
        <SiCodeforces />
      </a>
      <a href="https://www.codechef.com/users/zoro_xd" target="_blank">
        <SiCodechef />
      </a>
    </div>
  );
};

export default HeaderSocials;
