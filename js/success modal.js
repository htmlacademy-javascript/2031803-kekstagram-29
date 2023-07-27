import {isEscapeKey} from './util.js';

const successTemplate = document.querySelector('#success')
  .content
  .querySelector('.success');

const errorTemplate = document.querySelector('#error')
  .content
  .querySelector('.error');


let statusModal;
let statusButton;

const hideModal = () => {
  statusModal.classList.add('hidden');
};

const showStatusModal = (status) => {
  const statusTemplate = document.querySelector(`#${status}`)
    .content
    .querySelector(`.${status}`);
  return () => {
    statusModal = document.body.appendChild(statusTemplate.cloneNode(true));
    statusButton = document.querySelector(`.${status}__button`);
    document.addEventListener('keydown', onEscKeydown);
    statusButton.addEventListener('click', hideModal);
  };
};

function onEscKeydown (evt) {
  if (isEscapeKey(evt.key)) {
    evt.preventDefault();
    hideModal();
  }
}

export {showStatusModal};
