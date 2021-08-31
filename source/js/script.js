/* eslint-disable no-shadow */
/* eslint-disable id-length */
const program = document.querySelector('.program');
const programButtons = program.querySelectorAll('.program__item-button');
const programItems = program.querySelectorAll('.program__item');

const life = document.querySelector('.life');
const lifeElements = life.querySelectorAll('.life__item');
const lifeButtons = life.querySelectorAll('.life__item-button');

const switchSlides = (switchers, slides) => {
  for (let i = 0; i < switchers.length; i++) {
    switchers[i].addEventListener('click', (evt) => {
      evt.preventDefault();

      for (let i = 0; i < switchers.length; i++) {
        switchers[i].classList.remove('active');
        slides[i].classList.remove('active');
      }

      switchers[i].classList.add('active');
      slides[i].classList.add('active');
    });
  }
};

switchSlides(programButtons, programItems);
switchSlides(lifeButtons, lifeElements);
