import {isEscapeKey} from './util.js';
const fullPhoto = document.querySelector('.big-picture');
// const resetButton = document.querySelector('.big-picture__cancel');
const picturesContainer = document.querySelector('.pictures');


picturesContainer.addEventListener('click', (clickEvt) => {
  if (clickEvt.target.closest('.picture')) {
    fullPhoto.classList.remove('hidden');
    document.addEventListener('keydown', (keyEvt) => {
      if (isEscapeKey(keyEvt)) {
        fullPhoto.classList.add('hidden');
      }
    });
  }
});
