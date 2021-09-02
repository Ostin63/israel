/* eslint-disable no-undef */
/* eslint-disable prefer-const */
/* eslint-disable no-shadow */
/* eslint-disable id-length */
const program = document.querySelector('.program');
const programButtons = program.querySelectorAll('.program__item-button');
const programItems = program.querySelectorAll('.program__item');

const life = document.querySelector('.life');
const lifeElements = life.querySelectorAll('.life__item');
const lifeButtons = life.querySelectorAll('.life__item-button');
const faqItems = document.querySelectorAll('.faq__item');

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


for (let faqItem of faqItems) {
  faqItem.addEventListener('click', (evt) => {
    evt.preventDefault();
    document.querySelector('.faq__item--active')
      .classList.remove('faq__item--active');
    faqItem.classList.toggle('faq__item--active');
  });
}


switchSlides(programButtons, programItems);
switchSlides(lifeButtons, lifeElements);

new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: '.reviews__control-button--next',
    prevEl: '.reviews__control-button--prev',
  },
  pagination: {
    el: '.reviews__pagination',
    type: 'fraction',
  },
});
