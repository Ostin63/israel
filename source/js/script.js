/* eslint-disable no-undef */
/* eslint-disable prefer-const */
/* eslint-disable no-shadow */
/* eslint-disable id-length */
const body = document.querySelector('.body');

const program = body.querySelector('.program');
const programButtons = program.querySelectorAll('.program__item-button');
const programItems = program.querySelectorAll('.program__item');

const life = body.querySelector('.life');
const lifeElements = life.querySelectorAll('.life__item');
const lifeButtons = life.querySelectorAll('.life__item-button');

const faqItems = body.querySelectorAll('.faq__item');

const headerCall = body.querySelector('.header__link--call');
const modal = body.querySelector('.modal');
const modalOk = body.querySelector('.modal-ok');
const modalClose = modal.querySelector('.modal__close');
const modalOkClose = modalOk.querySelector('.modal-ok__close');
const modalOkButton = modalOk.querySelector('.modal-ok__button');

const feedbackForm = body.querySelector('.details__feedback-form');
const wantGoForm = body.querySelector('.want-go__form');
const modalForm = body.querySelector('.modal__form');
const dataSabmitUrl = 'https://echo.htmlacademy.ru/';

const getTemplateContent = (block, item) =>
  block.querySelector(`#${item}`)
    .content
    .querySelector(`.${item}`);

const success = getTemplateContent(body, 'alert__success');
const errorLoading = getTemplateContent(body, 'alert__error-loading');

const successElement = success.cloneNode(true);
const successErrorLoading = errorLoading.cloneNode(true);

const onAddModal = () => {
  modal.classList.add('active');
};

const onRemoveModal = () => {
  modal.classList.remove('active');
};

const onRemoveModalOk = () => {
  modalOk.classList.remove('active');
};

const onAddModalOk = () => {
  onRemoveModal();
  modalOk.classList.add('active');
};

const onErrorRemove = () => {
  successErrorLoading.remove();
  document.removeEventListener('click', onErrorRemove);
};

const alertError = () => {

  onRemoveModal();
  body.append(successErrorLoading);
  document.addEventListener('click', onErrorRemove);
};

const onSuccessRemove = () => {
  successElement.remove();
  document.removeEventListener('click', onSuccessRemove);
};

const alertSuccess = () => {
  body.append(successElement);
  document.addEventListener('click', onSuccessRemove);
};


const sendData = (url, bodyForm, alertSucces, error) => {
  fetch(url, {
    method: 'POST',
    body: bodyForm,
  })
    .then((response) => {
      if (response.ok) {
        alertSucces();
      } else {
        error();
      }
    })
    .catch(() => {
      error();
    });
};

const onFormSend = (evt) => {
  evt.preventDefault();

  const formData = new FormData(evt.target);

  sendData(dataSabmitUrl, formData, onAddModalOk, alertError);
};

const onfeedbackFormSend = (evt) => {
  evt.preventDefault();

  const formData = new FormData(evt.target);

  sendData(dataSabmitUrl, formData, alertSuccess, alertError);
};

headerCall.addEventListener('click', onAddModal);
modalClose.addEventListener('click', onRemoveModal);
modalOkClose.addEventListener('click', onRemoveModalOk);
modalOkButton.addEventListener('click', onRemoveModalOk);
modalForm.addEventListener('submit', onFormSend);
feedbackForm.addEventListener('submit', onfeedbackFormSend);
wantGoForm.addEventListener('submit', onfeedbackFormSend);

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

const map = L.map('map')
  .setView({
    lat: 55.0285,
    lng: 82.9281,
  }, 18);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: 'img/marker-map.png',
  iconSize: [26, 40],
  iconAnchor: [13, 60],
});

const mainPinMarker = L.marker(
  {
    lat: 55.0285,
    lng: 82.9281,
  },
  {
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);
