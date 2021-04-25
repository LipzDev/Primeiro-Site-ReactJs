import React from 'react';
import './About.css';
import reactIcon from './Assets/Images/iconReact.png';

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <h3>O que é React ?</h3>
        <div className="about__item">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut
            necessitatibus consequatur asperiores vel rem. Aliquid commodi
            possimus est consectetur, illo dolor qui. Inventore libero
            perferendis recusandae nihil, illo officiis porro.
          </p>

          <img src={reactIcon} alt="Icon do React" />
        </div>
      </div>
    </section>
  );
};

export default About;
