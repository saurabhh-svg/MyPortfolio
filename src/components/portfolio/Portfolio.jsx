import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Budget Calcy",
    github: "https://github.com/saurabhh-svg/budget-calcy",
    demo: "https://bugetcalcy.netlify.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "College Memories",
    github: "https://github.com/saurabhh-svg/CollegeDiary-Backend",
    demo: "https://college-diiary.herokuapp.com/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Contests",
    github: "https://github.com/saurabhh-svg/contests",
    demo: "https://github.com/saurabhh-svg/contests",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>My Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title}></img>
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a href={demo} target="_blank" className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
