import {isEscapeKey} from './util.js';
import {closeImageUpload, onFormEscKeydown} from './image-upload.js';

let statusModal;
let statusButton;

const hideStatusModal = () => {
  statusModal.remove();
  document.removeEventListener('keydown', onEscKeydown);
};

const showStatusModal = (status) => {
  if (status === 'success') {
    closeImageUpload();
  } else {
    document.removeEventListener('keydown', onFormEscKeydown);
  }
  const statusTemplate = document.querySelector(`#${status}`)
    .content
    .querySelector(`.${status}`);
  statusModal = document.body.appendChild(statusTemplate.cloneNode(true));
  statusButton = document.querySelector(`.${status}__button`);
  document.addEventListener('keydown', onEscKeydown);
  statusButton.addEventListener('click', hideStatusModal);
  if (status === 'error') {
    document.addEventListener('keydown', onFormEscKeydown);
  }
};

function onEscKeydown (evt) {
  if (isEscapeKey(evt.key)) {
    evt.preventDefault();
    hideStatusModal();
  }
}

export {showStatusModal};
