import {isEscapeKey} from './util.js';

const successTemplate = document.querySelector('#success')
  .content
  .querySelector('.success');

const showSuccessModal = () => {
  document.body.append(successTemplate.cloneNode(true));
  document.addEventListener('keydown', onEscKeydown);
};
showSuccessModal();
const successModal = document.querySelector('.success');
const successButton = document.querySelector('.success__button');

const errorTemplate = document.querySelector('#error')
  .content
  .querySelector('.error');

const showErrorModal = () => {
  document.body.append(errorTemplate.cloneNode(true));
  document.addEventListener('keydown', onEscKeydown);
};
//showErrorModal();
const errorModal = document.querySelector('.error');
const errorButton = document.querySelector('.error__button');

const hideModal = () => {
  if (successModal === null) {
    errorModal.classList.add('hidden');
  } else {
    successModal.classList.add('hidden');
  }
};

function onEscKeydown (evt) {
  if (isEscapeKey(evt.key)) {
    evt.preventDefault();
    hideModal();
  }
}
