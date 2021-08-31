/* eslint-disable no-shadow */
/* eslint-disable id-length */
const life = document.querySelector('.life');
const lifeElement = life.querySelectorAll('.life__item');
const lifeButtons = life.querySelectorAll('.life__item-button');

const switchSlides = (switchers, slides) => {
  for (let i = 0; i < switchers.length; i++) {
    switchers[i].addEventListener('click', () => {

      for (let i = 0; i < switchers.length; i++) {
        switchers[i].classList.remove('life__item-button--active');
        slides[i].classList.remove('life__item--active');
      }

      switchers[i].classList.add('life__item-button--active');
      slides[i].classList.add('life__item--active');
    });
  }
};

switchSlides(lifeButtons, lifeElement);
