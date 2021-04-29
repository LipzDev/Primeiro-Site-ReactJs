import React from 'react';
import './About.css';
import reactIcon from './Assets/Images/iconReact.png';

const About = () => {
  React.useEffect(() => {
    function showAbout() {
      const section = document.querySelector('.about').getBoundingClientRect();

      if (section.top < 650) {
        document
          .querySelector('.about__text')
          .classList.add('about__text-active');
        document.querySelector('.about__img').classList.add('img-rotate');
      } else {
        document
          .querySelector('.about__text')
          .classList.remove('about__text-active');
      }
    }
    window.addEventListener('scroll', showAbout);
    return () => {
      window.removeEventListener('scroll', showAbout);
    };
  }, []);

  return (
    <section className="about" id="section2">
      <div className="container-two">
        <div className="about__item">
          <div className="about__text">
            <h3>O que é React ?</h3>
            <p>
              O React é uma biblioteca JavaScript de código aberto com foco em
              criar interfaces de usuário em páginas web. É mantido pelo
              Facebook, Instagram, outras empresas e uma comunidade de
              desenvolvedores individuais.
            </p>
          </div>

          <div className="about__img">
            <img src={reactIcon} alt="Icon do React" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
