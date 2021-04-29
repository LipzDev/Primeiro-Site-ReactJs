import React from 'react';
import './More.css';
import iconJs from './Assets/Images/iconJs.png';

const More = () => {
  React.useEffect(() => {
    function showMore() {
      const section = document.querySelector('.more').getBoundingClientRect();

      if (section.top < 650) {
        document
          .querySelector('.more__text')
          .classList.add('more__text-active');
        document.querySelector('.more__img').classList.add('img-animation');
      } else {
        document
          .querySelector('.more__text')
          .classList.remove('more__text-active');
      }
    }
    window.addEventListener('scroll', showMore);
    return () => {
      window.removeEventListener('scroll', showMore);
    };
  }, []);

  return (
    <section className="more" id="section3">
      <div className="container-two">
        <div className="more__item">
          <div className="more__img">
            <img src={iconJs} alt="Icon do JS" />
          </div>
          <div className="more__text">
            <h3>O que é JavaScript ?</h3>
            <p>
              JavaScript é uma linguagem de programação interpretada
              estruturada, de script em alto nível com tipagem dinâmica fraca e
              multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das
              três principais tecnologias da World Wide Web.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default More;
